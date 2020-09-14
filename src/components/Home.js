import React from 'react';
import {Link} from 'react-router-dom'

const Home = props => (
  <div>
    <ul>
      <li><Link to='/about'>Click here to go to About</Link></li>
      <li><Link to='/contact'>Click here to go to Contact</Link></li>
    </ul>
    <h1>{props.title}</h1>
    <p>{props.text}</p>
  </div>
)

export default Home;