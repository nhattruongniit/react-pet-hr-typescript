# REX PROJECT

## STACK TECHNICAL

### FE

- axios
- react typescript
- redux
- redux-saga

### UI Component

- material UI

### Pattern design

- atomic design

### Tools

- tslint
- prettier
- husky

## Config VSCode

### Install extensions

- eslint
- tslint
- prettier

### Edit settings.json file

Windows: Go to File -> Preferences -> Settings or `Ctrl + ,`

Adding in the settings.json file

```
{
  "files.associations": {
    "*.jsx": "javascriptreact"
  },
  "files.eol": "\n",
  "editor.wordWrap": "on",
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.detectIndentation": false,
  "editor.formatOnSave": true,
}
```

## Installation

```bash
# install node version
Please install at least v12.16.1 version node

# install npm version
Please install at least v6.13.4 version node
```

```bash
# install app's depndencie
$ yarn install
or
$ npm install
```

## Scripts

```bash
# dev server with PORT 3002 at http://localhost:3002/
$ yarn start

# build for production with minify
$ yarn run build

# run `lint` to tell you what is wrong code.
$ yarn run lint

# run `format` to format all code based on your prettier and linting configuration.
$ yarn run format
```

## Direction

````
├── public/          #static files
│   ├── assets/      #assets
|   |    |── images  #images
|   |    |── fonts   #fonts
│   └── index.html   #html template
│
├── src/             #project root
│   ├── configs/     #configs project
│   ├── components/  #common components source
│   ├── containers/  #containers source
│   ├── hooks/       #hooks source
│   ├── models/      #define interface
│   ├── modules/     #modules source
│   ├── scss/        #user scss/css source
│   ├── services/    #services source
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   └── routes.js    #routes config
│
└── package.json```
````
