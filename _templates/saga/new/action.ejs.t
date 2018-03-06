---
to: source/js/actions/<%= name %>.js
---

export const GET_<%= name.toUpperCase() %>_START = "GET_<%= name.toUpperCase() %>_START";
export const GET_<%= name.toUpperCase() %>_ERROR = "GET_<%= name.toUpperCase() %>_ERROR";
export const GET_<%= name.toUpperCase() %>_SUCCESS = "GET_<%= name.toUpperCase() %>_SUCCESS";


export function get<%= h.capitalize(name) %>() {
  return {
    type: GET_<%= name.toUpperCase() %>_START,
  };
}
