---
inject: true
to: source/js/reducers/index.js
after: "export default combineReducers\\(\\{"
skip_if: "<%= name %>,"
---
  <%= name %>,