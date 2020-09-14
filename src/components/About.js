import React from 'react';
import {Link} from 'react-router-dom';

const About = props => (
  <div>
    <ul>
      <li><Link to='/'>Click here to go to Home</Link></li>
      <li><Link to='/contact'>Click here to go to Contact</Link></li>
    </ul>
    <h1>Waiting to be done</h1>
    <h1>{props.title}</h1>
    <p>{props.text}</p>
  </div>
)

export default About;