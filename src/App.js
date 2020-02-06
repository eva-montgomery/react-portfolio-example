// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import MainContent from './MainContent';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const websiteHeader = `Amazing Web Developer!`

const websiteCopy = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam soluta impedit a magnam consequuntur eius id deleniti ut sequi reprehenderit ea minima dolorem consequatur, tempore eaque nemo. Maxime, fuga.`;

const linkNames = [ 
  {
    text: 'Home',
    path: '/'
  },
  {
    text: 'Blog',
    path: '/blog'
  }

];

function App() {
  return (

    <Router>

        <Nav 
          links={linkNames}
        />
        {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/blog/list">Blog List</Link></li>
        </ul> */}
        <Switch> 
        <Route path="/blog/list"> 
            <BlogList /> 
          </Route>

          <Route exact path="/"> 
            <Home /> 
          </Route>
        
          <Route path="/blog"> 
            <Blog /> 
          </Route>



        </Switch>
    </Router>
  );
}

function Home() {
  return <h1>You are home!</h1>
}


function Blog() {
  return <h1>Welcome to the blog!</h1>
}

function BlogList() {
  return <p>This is the blog list!</p>
}

export default App;
