import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Type from './components/Types'
import Footer from './components/Footer'

const App=()=>{
    return(
      <>
          <Header/>
          <Type/>
          <Footer/>
      </>
    ) 
}

export default App;
