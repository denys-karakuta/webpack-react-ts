# Basic Webpack configuration for React / TS

# Initialization
`npm install`

# Opportunities
    "start": "webpack serve --config webpack/webpack.config.js --env env=dev",
    "build": "webpack --config webpack/webpack.config.js --env env=prod",
    "lint": "eslint --fix \"./src/**/*.{js,jsx,ts,tsx,json}\"",
    "format": "prettier --write \"./src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\"",

# Steps what i've done:
1. [x] npm i react react-dom
2. [x] npm i -D typescript @types/react @types/react-dom
3. [x] npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
4. [x] npm i -D babel-loader
5. [x] npm i -D webpack webpack-cli webpack-dev-server clean-webpack-plugin html-webpack-plugin
6. [x] npm i -D css-loader style-loader
7. [x] npm i -D webpack-merge
8. [x] npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh
9. [x] npm i -D eslint-plugin-react eslint-plugin-react-hooks
10. [x] npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
11. [x] npm i -D eslint-plugin-import eslint-plugin-jsx-a11y
12. [x] npm -D install eslint-plugin-eslint-comments@latest
13. [x] npm i -D prettier eslint-config-prettier eslint-plugin-prettier 

