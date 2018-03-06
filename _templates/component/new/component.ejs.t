---
to: source/js/components/<%= name %>.js
---

import React, { Component } from 'react';

export default class <%= h.capitalize(name) %> extends Component {
  render() {
    return (
      <div className='<%= h.capitalize(name) %>'>
        
      </div>
    );
  }
}


