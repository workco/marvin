---
inject: true
to: source/js/sagas/index.js
after: import { all } from "redux-saga/effects";
skip_if: import <%= name %>Sagas from "sagas/<%= name %>";
---
import <%= name %>Sagas from "sagas/<%= name %>";