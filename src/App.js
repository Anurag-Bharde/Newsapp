import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import{ BrowserRouter as Router,Route,Routes,Link, BrowserRouter} from "react-router-dom";
export default class App extends Component {

  render() {
    return (
     
      <div>
  
       <NavBar />
        {/* Hello my first class based component {this.a} */}
        <Routes> 
          <Route exact path="/" element={<News key="general" pageSize={18} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News key="business" pageSize={18} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment"element={<News key="entertainment" pageSize={18} country="in" category="entertainment"/>}></Route>
          <Route exact path="/general"element={<News key="general" pageSize={18} country="in" category="general"/>}></Route>
          <Route exact path="/health"element={<News key="health" pageSize={18} country="in" category="health"/>}></Route>
          <Route exact path="/science"element={<News key="science" pageSize={18} country="in" category="science"/>}></Route>
          <Route exact path="/sports"element={<News key="sports" pageSize={18} country="in" category="sports"/>}></Route>
          <Route exact path="/technology"element={<News key="technology" pageSize={18} country="in" category="technology"/>}></Route>
          </Routes>
      </div>
    )
  }
}

