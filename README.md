# Marvin ★★

Universal React and Redux, Webpack boilerplate.

Marvin is internal project by [Work & Co](https://work.co).
We love React and use it a lot. So Marvin is meant to be a starting point for our React projects.
But as we love open source too, it is publicly available for anyone interested in using it.

![Marvin](/marvin.jpg)

Name comes from a fictional character [Marvin](https://en.wikipedia.org/wiki/Marvin_(character)), android from the [The Hitchhiker's Guide to the Galaxy](https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy) book as a homage to it's author [Douglas Adams](https://en.wikipedia.org/wiki/Douglas_Adams).

**Please note** that v1.0.0 switched to [redux-saga](https://github.com/redux-saga/redux-saga) from `redux-thunk`
and [postcss](https://github.com/postcss/postcss) from `scss`.

## Table of contents

* [What is this?](#user-content-what-is-this)
* [Features](#user-content-features)
* [Setup](#user-content-setup)
* [npm tasks](#user-content-npm-tasks)
* [Running client in dev mode](#user-content-running-client-in-dev-mode)
* [Build client (production)](#user-content-build-client-production)
* [Running client in preview production mode](#user-content-running-client-in-preview-production-mode)
* [Universal dev mode](#user-content-universal-dev-mode)
* [Universal build (production)](#user-content-universal-build-production)
* [Removing server rendering related stuff](#user-content-removing-server-rendering-related-stuff)
* [Browser support](#user-content-browser-support)
* [Known issues](#user-content-known-issues)
* [Linting](#user-content-linting)
* [Misc](#user-content-misc)
* [Changelog](CHANGELOG.md)

## What is this?

Opinionated boilerplate for kicking off React/Redux applications.

It includes complete, minimal react app.
By complete we mean it has examples for:

- components (both container/views and regular ones)
- routes
- reducers (redux + redux-saga)
- actions (both sync and async),
- postcss (with autoprefixer)
- dummy API (using awesome [Star Wars API](https://swapi.co/))
- assets (images + inline SVGs)

## Features

- [x] React
- [x] React router v4
- [x] Redux
- [x] Redux-Saga
- [x] Redux DevTools (you need to have [browser extension](https://github.com/zalmoxisus/redux-devtools-extension) installed)
- [x] Universal rendering with async server data
- [x] Webpack 3 (development and production config)
- [x] Hot Module Replacement
- [x] Immutable reducer data
- [x] Babel - static props, decorators
- [x] PostCSS (with autoprefixing)
- [x] Linting
- [x] Git hooks - lint before push
- [x] Tree shaking build
- [x] Import SVGs as React components

## TODO

- [ ] Internationalization
- [ ] Tests


## Setup

Tested with node 8.

**PLEASE NOTE if you downloaded a zip, after unpacking, make sure you copy hidden (dot) files as well. A lot of people forget to do so, and project won't run without Babel configuration in `.babelrc`.**

Clone or download, navigate to folder, and install dependencies:

```
npm install
```

## npm tasks

Once dependencies are installed following npm tasks are availble:

* `start` - starts client app only in development mode, using webpack dev server
* `client:dev` - same as `start`
* `client:build` - builds client application
* `client:preview` - runs client application in *production* mode, using webpack dev server (use for local testing of the client production build)
* `server:dev` - starts server app only in development mode (use for testing server responses)
* `universal:dev` - runs both server and client in watch mode, automatically restarts server on changes
* `universal:build` - builds both server and client

There are other tasks as well which shouldn't be used on their own.

## Running client in dev mode

```sh
npm start
# or
npm run client:dev
```

Visit `http://localhost:8080/` from your browser of choice.
Server is visible from the local network as well.

## Build client (production)

Build will be placed in the `build` folder.

```
npm run client:build
```

If your app is not running on the server root you should change `publicPath` at two places.

In `webpack.config.js` (ATM line 76):

```js
output: {
  path: buildPath,
  publicPath: '/your-app/',
  filename: 'app-[hash].js',
},
```

and in `source/js/constants/routes` (line 1):

```js
const publicPath = '/your-app/'; // Don't forget the trailing slash (`/`).
```

Development server will be available at `http://localhost:8080/your-app/`.

## Running client in preview production mode

This command will start webpack dev server, but with `NODE_ENV` set to `production`.
Everything will be minified and served.
Hot reload will not work, so you need to refresh the page manually after changing the code.

```
npm run client:preview
```

## Universal dev mode

```
npm run universal:dev
```

Visit `http://localhost:8080/` from your browser of choice.
Both server and client will be rebuilt on change. Again no hot module reload.

## Universal build (production)

```
npm run universal:build
```

copy `package.json` and `build` folder to your production server

install only production dependencies and run server

```
npm install --production

node ./build/server.js
```

## Removing server rendering related stuff

If you are not using server rendering first run:

```sh
node remove-universal.js
```

then you have to manually remove unused code from
`source/js/config/store.js` which is marked with:

```
// Remove if you are not using server rendering.
```

#### Remove unused tasks

You should remove unused tasks from `package.json` and unused params from `source/js/config/store.js` too.
Client app is going to work without this but it is better to remove them as they just create noise.

If anyone is willing to automate this, help will be greatly appreciated.

## Browser support

Modern browsers and IE10+.

## Known issues

These are known bugs that affect **development mode only**.

* In some versions of Safari `cheap-eval-source-map` results in
  "Can't find variable: SockJS".
  To solve it change `webpack.config.js`:

  ```js
  // from
  devtool: IS_PRODUCTION ? false : 'cheap-eval-source-map',
  // to
  devtool: IS_PRODUCTION ? false : 'source-map',
  ```

* Hot module reload is not working in IE 10.
  To test the app in development mode you'll need to change
  `inline` to `false` in `webpack/dev-server.js`

  ```js
    inline: false, // Change to false for IE10 dev mode
  ```


## Linting

ESLint is set up by extending [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb),
with some options overridden to our preferences.

```
npm run lint
```

### Linting Git hooks

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

## Misc

### Async server data

Follow the example in `source/js/server.js`.

High level concept - define list of sagas per route to resolve and store the data before returning response to the client.

* When defining a saga, based on `isServer` param [return an action](https://github.com/workco/marvin/blob/master/source/js/sagas/people.js#L18-L20) instead of yielding it.
* In `server.js` import your sagas, and [define express routes with saga dependencies](https://github.com/workco/marvin/blob/master/source/js/server.js#L90-L96). Just pass array of sagas to `handleRequest` method.
  If you want to pass URL params add `req.params` as the fourth param.
* On store creation these sagas will be [run on server](https://github.com/workco/marvin/blob/master/source/js/config/store.js#L58-L69) when route is matched.
* Express server will wait [for saga tasks to finish](https://github.com/workco/marvin/blob/master/source/js/server.js#L71-L87) and preload data to client's redux store. If any of the tasks fail, store will be returned with initial data.

### Importing images in CSS

Please note that paths to images in CSS files are relative to `source/css/index.css` as it imports all of the other `.css` files.

```
.BackgroundImgExample {
  background-image: url(../assets/img/book1.jpg);
}
```

### Importing SVGs as components

Just import your `.svg` files from the `source/assets/svg/` folder, and you are good to go.

```
import CircleIcon from 'svg/circle.svg';

// then in your render

<CircleIcon />
```
