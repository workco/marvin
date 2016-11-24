# React and Redux, Webpack 2 boilerplate

## Table of contents
* [What is this?](#user-content-what-is-this)
* [Features](#user-content-features)
* [Setup](#user-content-setup)
* [Running in dev mode](#user-content-running-in-dev-mode)
* [Build (production)](#user-content-build-production)
* [Linting](#user-content-linting)


## What is this?

Boilerplate I extracted from a small real world project.

Webpack 2 is still in beta, but at this point is the only version
that I managed to run everything I wanted, including hot module replacement.

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

<sup>1</sup> Using source maps breaks urls in the CSS loader - https://github.com/webpack/css-loader/issues/296

## Features

- [x] React
- [x] React router
- [x] Redux
- [x] Redux Thunk
- [ ] Redux Dev Tools
- [x] Immutable reducer data
- [x] Webpack 2 (development and production config)
- [x] Hot Module Replacement
- [x] Babel - static props, decorators
- [x] SASS with autoprefixing
- [x] Webpack dashboard
- [ ] Generating icon font from SVGs
- [x] Linting
- [x] Included `es6-promise` and `isomorphic-fetch`
- [ ] Preview production build
- [x] File imports relative to the app root
- [ ] Git hooks - lint before commit

Universal may be added at some point.

- [ ] Universal rendering
- [ ] Server async data

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

## Linting

For linting I'm using [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb),
but some options are overridden to my personal preferences.

```
$ npm run lint
```
