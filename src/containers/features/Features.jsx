import React from 'react';
import { Feature } from '../../components';
import { v4 as uuidv4 } from 'uuid';
import './features.scss';

const Features = () => {
  const featuresData = [
    {
      id: uuidv4(),
      title: 'Improving end distrusts instantly',
      text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
      id: uuidv4(),
      title: 'Become the tended active',
      text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
      id: uuidv4(),
      title: 'Message or am nothing',
      text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    },
    {
      id: uuidv4(),
      title: 'Really boy law county',
      text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.',
    },
  ];
  return (
    <div className='gpt3__features' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map(({ title, text, id }) => {
          return <Feature title={title} text={text} key={id} />;
        })}
      </div>
    </div>
  );
};

export default Features;
