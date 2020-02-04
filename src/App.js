import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

const websiteHeader = `Amazing Web Developerer`

const websiteCopy = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam soluta impedit a magnam consequuntur eius id deleniti ut sequi reprehenderit ea minima dolorem consequatur, tempore eaque nemo. Maxime, fuga.`;



function App() {
  return (
    <React.Fragment>
      <Header 
      title={websiteHeader}
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
    </React.Fragment>
  );
}

export default App;
