import React, { Component } from 'react';
import { skills } from 'components/Global/data.js';

export default class Skills extends Component {
  constructor() {
    super();
    this.renderTechnicalSkills = this.renderTechnicalSkills.bind(this);
    this.renderTechs = this.renderTechs.bind(this);
  }

  renderTechnicalSkills() {
    return skills.map(({ heading, techs }, i) => {
      return (
        <div key={ i }>
          <h3>{ heading }</h3>
          {this.renderTechs(techs)}
        </div>
      );
    });
  }

  renderTechs(techs) {
    return techs.map((tech, i) => (
      <div key={ i }>
        <li>{ tech }</li>
      </div>
    ));
  }

  render() {
    return (
      <div className='About'>
        <h1>Skills</h1>
        <h2>Techincal Skills</h2>
        {this.renderTechnicalSkills()}
      </div>
    );
  }
}
