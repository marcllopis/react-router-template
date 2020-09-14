import React from 'react';
import {Link} from 'react-router-dom'

const Contact = props => (
  <div>
    <ul>
      <li><Link to='/'>Click here to go to Home</Link></li>
      <li><Link to='/about'>Click here to go to About</Link></li>
    </ul>
    <h1>Waiting to be done</h1>
    <h1>{props.title}</h1>
    <p>{props.text}</p>
  </div>
)

export default Contact;