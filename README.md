<a href="https://marketplace.visualstudio.com/items?itemName=socheatsok78-lab.dotenv-vscode-stripped">
<img src="https://res.cloudinary.com/dotenv-org/image/upload/v1679527751/dotenv-vscode_ilezvb.png"/>
</a>

<div align="center">
  <table>
    <tr>
      <td>
        <a href="https://res.cloudinary.com/dotenv-org/image/upload/v1679528507/dotenv-vscode-autocloaking_kpr0ly.png"><img src="https://res.cloudinary.com/dotenv-org/image/upload/v1679528507/dotenv-vscode-autocloaking_kpr0ly.png"/></a>
      </td>
      <td>
        <a href="https://res.cloudinary.com/dotenv-org/image/upload/v1679528507/dotenv-vscode-autocompletion_rqlanf.png"><img src="https://res.cloudinary.com/dotenv-org/image/upload/v1679528507/dotenv-vscode-autocompletion_rqlanf.png"/></a>
      </td>
      <td>
        <a href="https://res.cloudinary.com/dotenv-org/image/upload/v1679528506/dotenv-vscode-secretpeeking_byznii.png"><img src="https://res.cloudinary.com/dotenv-org/image/upload/v1679528506/dotenv-vscode-secretpeeking_byznii.png"/></a>
      </td>
    </tr>
  </table>
</div>

# dotenv-vscode

#### Syntax highlighting, auto-cloaking, auto-completion, and in-code secret peeking.

<a href="https://marketplace.visualstudio.com/items?itemName=socheatsok78-lab.dotenv-vscode-stripped"><img src="https://img.shields.io/visual-studio-marketplace/v/socheatsok78-lab.dotenv-vscode-stripped?label=VS%20Marketplace&logo=visual-studio-code" alt="Version"></a>

## Install

Install using VSCode Command Palette

1. Go to `View -> Command Palette` or press `Ctrl+Shift+P`
2. Then enter `Install Extension`
3. Search for `Dotenv`
4. Select `Dotenv (Stripped)` and click `Install`

## Usage

### Syntax Highlighting

It just works. Open your `.env` files in VSCode, and they will now be syntax highlighted.

<hr/>

### Auto-cloaking

It just works. Open your `.env` files in VSCode, and they will be auto-cloaked. Click the 'Toggle auto-cloaking' link at the top of your `.env` file to toggle it off. Feel safer sharing your screen!

<img src="https://res.cloudinary.com/dotenv-org/image/upload/v1664140588/toggle_itemcq.gif">

Multiple .env file types supported.

* .env
* .env.example
* .env.development
* .env.staging
* .env.production
* .env.vault
* .env.me
* .env.*
* .flaskenv

<hr/>

### Auto-completion

Start typing `process.env.` (or language specific env statement) and your cursor will be populated with auto-completion options directly from your .env file. Cool!

<img src="https://res.cloudinary.com/dotenv-org/image/upload/v1664140944/autocomplete_snic6t.gif"/>

Multiple languages supported.

* JavaScript/TypeScript/NodeJS
* Ruby
* Python
* PHP
* Go
* Java
* C#
* Rust

<hr/>

### In-code secret peeking

Hover your mouse over a `process.env.SECRET_KEY` or a `ENV["SECRET_KEY"]`, and you will be able to peek at its value without having to open your .env file. Convenient!

<img src="https://res.cloudinary.com/dotenv-org/image/upload/v1664141169/secret-peeking_byzwex.gif"/>

Multiple languages supported.

* JavaScript/TypeScript/NodeJS
* Ruby
* Python
* PHP
* Go
* Java
* C#
* Rust

<hr/>

## CHANGELOG

See [CHANGELOG](CHANGELOG.md)

<br/>
<br/>
Thank you for using dotenv-vscode.
