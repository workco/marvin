# Marvin ⭑⭑

v2.0.0 beta

Documentation and some features are still WIP, but Marvin is ready for production apps. Please provide us feedback to make Marvin even better.

If you are looking for the old version, check [v1.1 branch](https://github.com/workco/marvin/tree/v1.1).

![Marvin](/public/marvin-small.svg)

React app boilerplate based on [React Create App](https://facebook.github.io/create-react-app/).

Marvin is internal project by [Work & Co](https://work.co).
We love React and open source. Marvin was born to be a starting point for our React projects.

Since first released, Marvin changed a lot and now it is a (thin) opinionated wrapper around official Create React App. It adds things like typescript support, hot module reload, router and others.

Name comes from a fictional character [Marvin](https://en.wikipedia.org/wiki/Marvin_(character)), android from the [The Hitchhiker's Guide to the Galaxy](https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy) book as a homage to it's author [Douglas Adams](https://en.wikipedia.org/wiki/Douglas_Adams).


## Features

* React (obviously)
* Typescript
* Hot Module Reload
* React router
* Testing using [Jest](https://jestjs.io/)
* Redux
  * [redux-saga](https://github.com/redux-saga/redux-saga)
  * Redux DevTools (you need to have [browser extension](https://github.com/zalmoxisus/redux-devtools-extension) installed)
* CSS with autoprefixing ([CSS modules](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet) and SASS are optional)
* [Importing SVG files as React components](https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files#adding-svgs)
* Optional page snapshoting using [react-snap](https://github.com/stereobooster/react-snap)
* Optional git hooks

More features will be added in the future.

## Setup

Marvin was test on node version 12.x

Clone this repo and install dependencies:

```
npm install
```

Now run simple setup script:

```
node setup.js
```

It will take you through the short setup process. For now there are only a couple options to choose from:

* SCSS support
* Pre-Rendering Static HTML Files using [react-snap](https://github.com/stereobooster/react-snap)
* Git hooks (run linter on commit and run tests before push)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
