# 90 Seconds - Chat Frontend

## Prerequisites

> Requires [Node.JS](https://nodejs.org/en/) v16.17.0

> Use [yarn](https://yarnpkg.com/) to install

---

## Installation

```bash
yarn install
```

---

## Required env variables

Default env variables are declared in `.env.defaults`. To override these defaults
set new values in a `.env` file.

## VS Code recommended settings

If you are using IDE, these settings can help improve your development experience

> Inside `.vscode/settings.json`

```json
{
  "editor.tabSize": 2,
  "files.trimTrailingWhitespace": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true
}
```

> Inside `.vscode/extensions.json`

```json
{
  "recommendations": ["dbaeumer.vscode-eslint", "EditorConfig.EditorConfig"]
}
```
