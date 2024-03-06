const vscode = require('vscode')
const dotenv = require('dotenv')

function envEntries () {
  const parsed = envParsed()

  if (parsed) {
    const entries = Object.entries(parsed) // converts key: value to [key, value]

    return entries
  } else {
    return [['KEY', 'VALUE']] // serves as example
  }
}

function envParsed () {
  const workspacePath = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.fsPath.replace(/\\/g, '/') : undefined // /path/to/project/folder

  let parsed = {}

  if (workspacePath) {
    parsed = dotenv.config({ path: `${workspacePath}/.env` }).parsed
  } else {
    parsed = dotenv.config().parsed
  }

  return parsed
}

function hover (language, document, position) {
  const regexDict = {
    javascript: /(?:process|import\.meta)\.env\.([A-Z]{1}[A-Z_0123456789]+)/,
    ruby: /ENV\[['"]([A-Z]{1}[A-Z_0123456789]+)['"]\]/,
    python: /os\.(?:(?:environ(?:(?:\.get\(["']([A-Z]{1}[A-Z_0123456789]+)["']\))|(?:\[["']([A-Z]{1}[A-Z_0123456789]+)["']\])))|(?:getenv\(["']([A-Z]{1}[A-Z_0123456789]+)["']\)))/,
    php: /(?:(?:\$_(?:SERVER|ENV)\[["']([A-Z]{1}[A-Z_0123456789]+)["']\])|(?:getenv\(["']([A-Z]{1}[A-Z_0123456789]+)["']\)))/,
    go: /os.Getenv\(["']([A-Z]{1}[A-Z_0123456789]+)["']\)/,
    java: /dotenv.get\(["']([A-Z]{1}[A-Z_0123456789]+)["']\)/,
    csharp: /Environment.GetEnvironmentVariable\(["']([A-Z]{1}[A-Z_0123456789]+)["']\)/,
    rust: /std::env::(?:var|var_os)\(["']([A-Z]{1}[A-Z_0123456789]+)["']\)/,
    dart: /String.fromEnvironment\(["']([A-Z]{1}[A-Z_0123456789]+)["']\)/,
    kotlin: /System.getenv\(["']([A-Z]{1}[A-Z_0123456789]+)["']\)/,
    elixir: /System.get_env\(["']([A-Z]{1}[A-Z_0123456789]+)["']\)/,
    yaml: /\$([a-zA-Z_0123456789]+)/
  }
  const reg = regexDict[language]
  const line = document.lineAt(position).text
  const matches = line.match(reg)

  if (!matches) {
    return undefined
  } else {
    const key = matches.filter(item => item !== undefined)[1]

    const start = line.indexOf(key)
    const end = start + key.length
    if (position.character >= start && position.character <= end) {
      const parsed = envParsed()
      const value = parsed[key]

      return new vscode.Hover(value)
    } else {
      return undefined
    }
  }
}

function autocomplete (triggerCharacter, document, position) {
  const entries = envEntries()
  const quote = triggerCharacter === '.' || triggerCharacter === "$" ? '' : '"' // for javascript or yaml, doesn't use quotation in env reference so make sure not to add to insert/filter text
  return entries.map(function (env) {
    const key = env[0].trim()
    const value = env[1].trim()

    // https://code.visualstudio.com/api/references/vscode-api#CompletionItemLabel
    const completionItemLabel = {
      label: key,
      detail: ` ${value}`
    }
    const item = new vscode.CompletionItem(completionItemLabel, vscode.CompletionItemKind.Variable)
    item.insertText = `${triggerCharacter}${quote}${key}${quote}`
    item.filterText = `${triggerCharacter}${quote}${key}${quote}`
    item.range = new vscode.Range(new vscode.Position(position.line, position.character - 1), position) // Picks up trigger character as prefix to fix the scoring it does when sorting
    item.sortText = '0' // Make this the sortText so that any ENV variables will go to the top of the list above anything else
    if (!value) {
      // do nothing
    } else {
      const s = `.env
<hr/>

**${key}**

<pre><code>${value}</code></pre>
`
      const doc = new vscode.MarkdownString(s)
      doc.value = s
      doc.supportHtml = true
      // item.documentation = value // update with more details
      item.documentation = doc // more details
    }

    return item
  })
}

module.exports.envEntries = envEntries
module.exports.envParsed = envParsed
module.exports.hover = hover
module.exports.autocomplete = autocomplete
