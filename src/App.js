// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import MainContent from './MainContent';
import Blog from './Blog';

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
      <Header title={websiteHeader} />
        <Nav 
          links={linkNames}
        />
        <Switch> 

        <Route path="/blog/:blogId"> 
            <Blog /> 
          </Route>

          <Route exact path="/"> 
            <Home /> 
          </Route>
        
        



        </Switch>

        <Footer />
    </Router>
  );
}

function Home() {
  return <h1>You are home!</h1>
}




function BlogList() {
  return <p>This is the blog list!</p>
}

export default App;
