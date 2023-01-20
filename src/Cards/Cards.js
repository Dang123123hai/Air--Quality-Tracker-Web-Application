import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import chó from '../images/chó.jpg'
import photo2 from '../images/photo2.jpg'
import photo3 from '../images/photo3.jpg'
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
            <CardItem
              src={photo2}
              text='Pham Ngoc Quang Vinh'
              path='https://www.linkedin.com/in/vinh-pham-136b681b1/'
            />
            <CardItem
              src={photo3}
              text='Le Cong Tuan Minh'
              path='https://www.linkedin.com/in/tuan-minh-le-cong-243856208/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
