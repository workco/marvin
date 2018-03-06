---
inject: true
to: source/js/reducers/index.js
after: 'import { combineReducers } from "redux";'
skip_if: "import <%= name %> from 'reducers/<%= name %>';"
---
import <%= name %> from 'reducers/<%= name %>';