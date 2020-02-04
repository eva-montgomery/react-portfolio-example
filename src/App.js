import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import MainContent from './MainContent';

const websiteHeader = `Amazing Web Developer!`

const websiteCopy = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam soluta impedit a magnam consequuntur eius id deleniti ut sequi reprehenderit ea minima dolorem consequatur, tempore eaque nemo. Maxime, fuga.`;

const linkNames = [
  'Home',
  'Portfolio',
  'Cat Pictures',
  'Wine List',
  'Contact'
];

function App() {
  return (
    <div className="container-fluid">
      <Header 
      title={websiteHeader}
      />
      <Nav 
      links={linkNames}
      />
      <MainContent 
        content={websiteCopy}
      />
     {/* {React.createElement(
        MainContent, 
      {
      'content': websiteCopy
      }
      )
    }  */}
      <Footer />
    </div>
  );
}

export default App;
