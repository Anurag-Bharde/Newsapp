import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

const img='https://picsum.photos/id/237/200/300'
export class navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div>
            <img className="ok" width="50" border-spacing="200cm"
    height="50" src={img} alt='tiger pic' border="2px" padding="2px"/>
    </div>
  <Link className="navbar-brand " to="/"><h2>The ABzthan</h2></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     <li className='nav-item'><Link className='nav-link' to="/">Home </Link></li>      
     <li className='nav-item'><Link className='nav-link' to="/business"> Business </Link></li>
     <li className='nav-item'><Link className='nav-link' to="/entertainment"> Entertainment</Link></li>
     <li className='nav-item'><Link className='nav-link' to="/general"> General</Link></li>
     <li className='nav-item'><Link className='nav-link' to="/health"> Health</Link></li>
     <li className='nav-item'><Link className='nav-link' to="/science"> Science</Link></li>
     <li className='nav-item'><Link className='nav-link' to="/sports"> Sports</Link></li>
     <li className='nav-item'><Link className='nav-link' to="/technology"> Technology</Link></li>
       
    </ul>
  </div>
</nav>
      </div>
    )
  }
}

export default navbar
