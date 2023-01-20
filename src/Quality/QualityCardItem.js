import React from 'react';

function QualityCardItem(props) {
  return (
    <>
      <li className='quality__cards__item'>
        <a className='quality__cards__item__link' target="_blank" href={props.path}>
        <figure className='quality__cards__item__pic-wrap'>
            <img
              className='quality__cards__item__img'
              alt='Member'
              src={props.src}
            />
          </figure>
          <div className='quality__cards__item__info'>
            <h5 className='quality__cards__item__text'>{props.text}</h5>
            <p className='one'>{props.subtext}</p>
          </div>    
        </a>      
      </li>
    </>
  );
}

export default QualityCardItem;
