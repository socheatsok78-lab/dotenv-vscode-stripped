<div align="center">
  <a href="https://dotenv.org/docs?r=8"><img src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png" alt="dotenv-vscode" width="80" height="80"></a>
  <h1>dotenv-vscode</h1>
  <h4 align="center">Syntax highlighting, auto-cloaking, auto-completion, and in-code secret peeking.</h4>

  <p align="center">
    <a href="#install">Install</a>
    <img src="https://img.spacergif.org/v1/spacer.gif" width="5" height="1">
    <a href="#usage">Usage</a>
    <img src="https://img.spacergif.org/v1/spacer.gif" width="5" height="1">
    <a href="#commands" target="_blank">Commands</a>
    <img src="https://img.spacergif.org/v1/spacer.gif" width="5" height="1">
    <a href="#changelog" target="_blank">Changelog</a>
  </p>

  <a href="https://marketplace.visualstudio.com/items?itemName=dotenv.dotenv-vscode">
    <img src="https://res.cloudinary.com/dotenv-org/image/upload/v1679517963/dotenv-official_eiww2o.png"/>
  </a>

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

  <a href="https://github.com/dotenv-org/dotenv-vscode"><img src="https://img.shields.io/visual-studio-marketplace/v/dotenv.dotenv-vscode?label=VS%20Marketplace&logo=visual-studio-code" alt="Version"></a>

  <p>Bonus: <a href="https://dotenv.org" target="_blank">dotenv-vault</a> included as an optional feature</p>
  <br/>
  <br/>
</div>

## Install

Install using VSCode Command Palette

1. Go to `View -> Command Palette` or press `Ctrl+Shift+P`
2. Then enter `Install Extension`
3. Search for `Dotenv`
4. Select `Official Dotenv` and click `Install`

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

### dotenv-vault (included but optional)

Manage your secrets using <strong>dotenv-vault</strong>'s all-in-one toolkit. Say goodbye to scattered secrets across multiple platforms and tools.

<a href="https://dotenv.org/" target="_blank">Read more about dotenv-vault here</a>. 

Usage is similar to git. Run `CMD+Shift+P` (or `Ctrl+Shift+P`) and start typing `dotenv`.

```bash
dotenv new
```

Follow those instructions and then run:

```bash
dotenv login
```

Then run push and pull

```bash
dotenv push
dotenv pull
```

See <a href="https://dotenv.org" target="_blank">dotenv-vault</a> in action:

<img src="https://raw.githubusercontent.com/dotenv-org/dotenv-vscode/master/overview.gif">

Visit [dotenv.org/docs](https://www.dotenv.org/docs/security/overview?r=8) to learn more.

## Commands

```
dotenv new       Create your project
dotenv login     Log in to dotenv-vault
dotenv logout    Log out
dotenv open      Open project page
dotenv push      Push .env securely
dotenv pull      Pull .env securely
dotenv versions  List version history
dotenv whoami    Display the current logged in user
dotenv status    Check dotenv-vault operational status
```

Visit [dotenv.org/docs](https://www.dotenv.org/docs/dotenv-vault?r=8) for details per command.

## CHANGELOG

See [CHANGELOG](CHANGELOG.md)

<br/>
<br/>
Thank you for using dotenv-vscode.
