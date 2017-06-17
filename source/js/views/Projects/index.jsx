import React, { Component } from 'react';
import { projects } from 'components/Global/data.js';

export default class Projects extends Component {
  constructor() {
    super();
    this.renderProjects = this.renderProjects.bind(this);
    this.renderFeatures = this.renderFeatures.bind(this);
  }

  renderProjects() {
    return projects.map(({ title, position, github, link, description, features }, i) => {
      return (
        <div key={ i }>
          <h2>{ title }</h2>
          <h3>Position: { position }</h3>
          <h3>Github: { github || 'Private Project' }</h3>
          <h3>{ link }</h3>
          {this.renderFeatures(features)}
        </div>
      );
    });
  }

  renderFeatures(features) {
    return features.map((feature, i) => (
      <div key={ i }>
        <li>{ feature }</li>
      </div>
    ));
  }

  render() {
    return (
      <div className='About'>
        <h1>Projects</h1>
        {this.renderProjects()}
      </div>
    );
  }
}
