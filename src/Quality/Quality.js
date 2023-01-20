import React from "react";
import './qc.css'
import QualityCardItem from "./QualityCardItem";
import child from '../images/child.jpg';
import lung from '../images/lung.jpeg';
import air91 from '../images/air91.jpeg'

function QualityCards() {
  return (
    <div>
      <div className='quality__cards__container'>
        <h1>What polluted air does to the society</h1>
        <div className='quality__cards__wrapper'>
          <ul className='quality__cards__items'>
            <QualityCardItem
              src={child}
              text='Associated with 23% of child bronchitis cases *'
              subtext='Babies and children are particularly vulnerable to air pollution as their lungs are still growing and developing.'
              path='https://documents.worldbank.org/en/publication/documents-reports/documentdetail/574171554178748054/air-quality-management-in-poland/'
            />
            <QualityCardItem
              src={lung}
              text='Damaging every organ in the body *'
              subtext='The systemic damage is the result of pollutants causing inflammation that then floods through the body and ultrafine particles being carried around the body by the bloodstream.'
              path='https://www.theguardian.com/environment/ng-interactive/2019/may/17/air-pollution-may-be-damaging-every-organ-and-cell-in-the-body-finds-global-review'
            />
            <QualityCardItem
              src={air91}
              text='91% of people breathe polluted air *'
              subtext='Exposure to polluted air increases the risk of stroke, heart disease, lung cancer, and chronic and acute respiratory diseases, including asthma.'
              path='https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default QualityCards;

