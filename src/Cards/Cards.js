import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import chó from '../images/chó.jpg'
import photo4 from '../images/photo4.png'


function Cards() {
  return (
    <div>
      <div className='cards__container'>
        <h1>Our team members</h1>
        <div className='cards__wrapper'>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/Iris.jpeg'
              text='Iris Machine Learning Project'
              path='https://github.com/lecongtuanminh/Iris_ML'
            />
          </ul> */}
          <ul className='cards__items'>
            <CardItem
              src={chó}
              text='Duong Thi Bao Ngoc'
              path='https://www.linkedin.com/in/ngoc-duong-5947491b7/'
            />
            <CardItem
              src={photo4}
              text='Luong Hai Dang'
              path='https://www.linkedin.com/in/dang-hai-luong-7a93a6134/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
