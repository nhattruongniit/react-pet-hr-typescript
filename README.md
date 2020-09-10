# PET HR PROJECT

## STACK TECHNICAL

### FE

- axios
- react typescript
- i18n
- contextApi
- redux
- redux-saga
- react error boundary
- Generate package components

### Testing

- Jest
- Enzyme

### UI Component

- material UI

### Pattern design

- atomic design

### Tools

- eslint
- prettier
- husky
- lint-staged

### CI/CD

- Jenkinsfile
- SonarQuebe

## How to generate package tgz

```bash
# install typescript
$ npm install -g typescript
```

```bash
# cd src/components
$ npm run deploy
```

## Git replacing LF with CRLF

```
$ git config --global core.autocrlf false
$ git rm --cached -r .
$ git reset --hard
```

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
$ npm install
```

## Scripts

```bash
# dev server with PORT 3002 at http://localhost:3002/
$ npm start

# build for production with minify
$ npm run build

# run `lint` to tell you what is wrong code.
$ npm run lint

# run `format` to format all code based on your prettier and linting configuration.
$ npm run format
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
│   ├── features/    #features source
│   ├── scss/        #user scss/css source
│   ├── services/    #services source
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   └── routes.js    #routes config
│
└── package.json```
````

# Directory structure

### Group by features

One common way to structure projects is locate CSS, JS and tests together inside folders grouped by features

### The project structure

```
components/
  atoms/
    Button.tsx
    TextFields.tsx
  molecules/
    Search.tsx
containers/
features/
  Dashboard
    Dashboard.tsx
    index.ts
  Product
    styles/
      index.ts
    redux/
      actions.ts
      reducers.ts
      saga.ts
      types.ts
    api.ts
    Product.tsx
    ProductCard.tsx
    index.ts
hooks/
  useTranslate.tsx
helpers/
  mapArrayToObject.ts
redux/
  actions.ts
  reducers.ts
  sasga.ts
  types.ts
```

### Component's file name should be in Pascal Case.

Component names should be like ProductCard and not like productCard, product-card, etc. This way when we see a filename in Pascal Case, it is immediately clear that the file is a react component.

### Component having own folders should have a component file with the same name.

This way when we search for files, we don't get a list of index.ts but will receive the actual component files.

#### Create an index.ts file in that component folder which export the named component.

```
import Product from './Product';
export default Product;
```

or

```
export { default } from './Product';
```

### Components which can be used in other project or reuse.

Components can be keep in `components/` folder (atom, molecules...). You can refer design system of Atomic Design.

https://bradfrost.com/blog/post/atomic-web-design/

### Redux

Create a `redux/` folder in each feature relate.

#### types.ts

Define interface state, action payload, action types.

#### actions.ts

Define action types.

#### reducers.ts

Update state

#### saga.ts

Perform side effects (e,g: call api ...)

### Hooks

When we want to share logic between two javascript functions, we will extract it to a third function. Both components and hooks are functions, so this work for them too.

A custom Hook is a javascript function whose name starts with `"use"` and that may call other hook. For example, `useTranslation` below is a custom hook:

```bash
# useTranslation.tsx
import { useTranslation } from 'react-i18next';
const useTranslate = () => {
  const { t: translate, i18n } = useTranslation();
  return { translate, i18n };
};
export default useTranslate;
```

### Helpers

Share an function logic for our app. It name should be in lowercase. For example, `sleep` below is a function.

```bash
# sleep.ts

export const sleep = time => new Promise(res => setTimeout(res, time));
```
