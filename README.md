# Marvin ★★

React and Redux, Webpack 2 boilerplate.

Marvin is internal project by [Work & Co](https://work.co).
We love React and use it a lot. So Marvin is meant to be a starting point for our React projects.
But as we love open source too, it is publicly available for anyone interested in using it.

![Marvin](/marvin.jpg)

Name comes from a fictional character [Marvin](https://en.wikipedia.org/wiki/Marvin_(character)), android from the [The Hitchhiker's Guide to the Galaxy](https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy) book as a homage to it's author [Douglas Adams](https://en.wikipedia.org/wiki/Douglas_Adams).

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

Boilerplate for kicking off React/Redux applications.

It includes complete, minimal react app.
By complete we mean it has examples for:

- components (both container/views and regular ones)
- routes
- reducers (redux)
- actions (both sync and async),
- SASS (with autoprefixer)<sup>1</sup>
- dummy API
- using assets (in CSS and components)
- imports relative to the app root

![Example dashboard](/marvin-screenshot.png)

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

- [x] Generating ~~icon font from SVG~~ SVG sprite
- [ ] Feature detection (Modernizr) (?)
- [ ] Google analytics (?)
- [ ] Error reporting (?)

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

### Running it with [webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard)

```
$ npm run dev
```

**Note for Windows users:** webpack dashboard still have issues with Windows, so use `npm start` until those are resolved.

![Running in the iTerm2](http://i.imgur.com/3oKTWrv.png)

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

## Components

### SVG icons - `Icon`

Add SVG icons to `source/assets/icons` folder, and they will automatically be added to SVG sprite.

**Usage:**

```
import Icon from 'components/Global/Icon';

<Icon glyph='triangle' />
```

**Available props**

```
glyph       // required, name of the SVG icon
className   // optional, additional CSS class, default ones are `Icon Icon--iconName`
width       // optional, default 24
height      // optional, default 24
style       // optional, CSS style object
```


-----

## Changelog

#### 0.1.7

* Migrated to React Router 4.x (thanks @shams-ali)
* Added .editorconfig file
* Fixed couple of typos

#### 0.1.6

* Added SVG icon loader (SVG sprite) [#18](https://github.com/workco/react-redux-webpack2-boilerplate/pull/18)

#### 0.1.5

* `npm start` is not using `webpack-dashboard` by default cause it still has issues with Windows
* Moved `prop-types` from `devDependencies` to `dependencies`

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
