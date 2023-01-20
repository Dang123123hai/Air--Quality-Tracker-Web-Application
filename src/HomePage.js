import { Card } from '@material-ui/core';
import React from 'react';
import Cards from './Cards/Cards';
import About from './About/About';
import QualityCards from './Quality/Quality';
function HomePage(){
    return(
        <div>
        <About/>
        <QualityCards/>
        <Cards/>
        <br></br>
      </div>
    )
}
export default HomePage