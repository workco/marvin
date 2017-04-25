# React and Redux, Webpack 2 boilerplate

## Table of contents
* [What is this?](#user-content-what-is-this)
* [Features](#user-content-features)
* [Setup](#user-content-setup)
* [Running in dev mode](#user-content-running-in-dev-mode)
* [Build (production)](#user-content-build-production)
* [Running in preview production mode](#user-content-running-in-preview-production-mode)
* [Linting](#user-content-linting)
* [Git hooks](#user-content-git-hooks)
* [Changelog](#user-content-changelog)


## What is this?

Boilerplate I extracted from a small real world project.

~~Webpack 2 is still in beta, but at this point is the only version
that I managed to run everything I wanted, including hot module replacement.~~

This boilerplate includes complete, minimal react app.
By complete I mean it has examples for:

- components (both container/views and regular ones)
- routes
- reducers (redux)
- actions (both sync and async),
- SASS (with autoprefixer)<sup>1</sup>
- dummy API
- using assets (in CSS and components)
- imports relative to the app root

![Example dashboard](http://i.imgur.com/z4Cpmdb.png)

<sup>1</sup> Using source maps breaks urls in the CSS loader - https://github.com/webpack/css-loader/issues/232. Try [this](https://github.com/webpack/css-loader/issues/232#issuecomment-240449998) to fix it (but it breaks testing from local network).

## Features

- [x] React
- [x] React router
- [x] Redux
- [x] Redux Thunk
- [x] Redux DevTools (you need to have [browser extension](https://github.com/zalmoxisus/redux-devtools-extension) installed)
- [x] Immutable reducer data
- [x] Webpack 2 (development and production config)
- [x] Hot Module Replacement
- [x] Babel - static props, decorators
- [x] SASS with autoprefixing
- [x] Webpack dashboard
- [x] Linting
- [x] Included `es6-promise` and `isomorphic-fetch`
- [x] Preview production build
- [x] File imports relative to the app root
- [x] Git hooks - lint before push

## TODO

- [x] Tree shaking build
- [ ] Switch to [redux-saga](https://github.com/redux-saga/redux-saga)
- [ ] Universal rendering
- [ ] Server async data
- [ ] Internationalization

Other nice to have features

- [ ] Generating icon font from SVGs
- [ ] Modernizr
- [ ] Google analytics
- [ ] Error reporting (not sure if this should be the part of the boilerplate)

## Setup

Tested with node 6.x and 7.x

```
$ npm install
```

## Running in dev mode

```
$ npm start
```

Visit `http://localhost:3000/` from your browser of choice.
Server is visible from the local network as well.

![Running in the iTerm2](http://i.imgur.com/IxamMBh.png)

It is using [webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard), so please note the following:

**OS X Terminal.app users:** Make sure that **View → Allow Mouse Reporting** is enabled, otherwise scrolling through logs and modules won't work. If your version of Terminal.app doesn't have this feature, you may want to check out an alternative such as [iTerm2](https://www.iterm2.com/).

## Build (production)

Build will be placed in the `build` folder.

```
$ npm run build
```

If your app is not running on the server root you should change `publicPath` at two places.

In `webpack.config.js` (ATM line 147):

```
output: {
  path: buildPath,
  publicPath: '/your-app/',
  filename: 'app-[hash].js',
},
```

and in `source/js/routes` (ATM line 9):

```
const publicPath = '/your-app/';
```

Don't forget the trailing slash (`/`). In development visit `http://localhost:3000/your-app/`.

## Running in preview production mode

This command will start webpack dev server, but with `NODE_ENV` set to `production`.
Everything will be minified and served.
Hot reload will not work, so you need to refresh the page manually after changing the code.

```
npm run preview
```

## Linting

For linting I'm using [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb),
but some options are overridden to my personal preferences.

```
$ npm run lint
```

## Git hooks

Linting pre-push hook is not enabled by default.
It will prevent the push if lint task fails,
but you need to add it manually by running:

```
npm run hook-add
```

To remove it, run this task:

```
npm run hook-remove
```



-----

## Changelog

#### 0.1.4

* Resolved React 15.5 [deprecation warnings](https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html#new-deprecation-warnings)

#### 0.1.3

* Made sure tree shaking is working
* Removed DevTools from the code, but it still works if you have browser extension

#### 0.1.2

* Fixed duplicating vendor bundle code
* Reduced overall bundle size by disabling `devtool` in production

#### 0.1.1

* Fixed running it on Windows machines

#### 0.1.0

* Updated `webpack` to a stable version

#### 0.0.3

* Added pre-push git hook
* Added `preview` task

#### 0.0.2

* Added Redux Dev Tools.
* Renamed `client` to `source`
* Made sure `logger` and `DevTools` are loaded only in development

#### 0.0.1

Initial release
