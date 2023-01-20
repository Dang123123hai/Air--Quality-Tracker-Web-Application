import React from 'react';
import './About.css'
import airhanoi from '../images/airhanoi.jpeg'




function About() {
  return (
    <div>
      <div className='ti__container'>
        <div className = 'ti__wrapper'>
          <div>
            <h2>About the Project</h2>
            <p className='ti_text'>This project is an effort to increase the awareness of people about the air around us. Therefore, beside a report of air quality in different cities around the globe, we also include a quiz app to test the knowledge of people about the air conditions. </p>
            <h2>Inspiration for the Project</h2>
            <p className='ti_text'>Since our capital city, Hanoi, is now in red alarm about air quality. It came to our mind that it would be a great idea to make an app about the air quality levels of cities, which we thought would be a good way to urge people to protect the environment. </p>
            <h2>Data</h2>
            <p className='ti_text'>Our data was taken from multiple APIs (Openweather, AirVisual, Waqi) to enhance the experience while using our app</p>
            </div>
            <img className='ti__item__pic-wrap' src={airhanoi}/>
        </div>
    </div>
    </div>
  );
}

export default About;
