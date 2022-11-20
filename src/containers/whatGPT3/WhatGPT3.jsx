import React from 'react';
// Элемент описания особенностей проекта.
import Feature from '../../components/feature/Feature';
import './whatGPT3.scss';

const WhatGPT3 = () => {
  const featureTexts = [
    {
      title: 'What is GPT-3',
      text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.',
    },
    {
      title: 'Chatbots',
      text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.',
    },
    {
      title: 'Knowledgebase',
      text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments by.',
    },
    {
      title: 'Education',
      text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments by.',
    },
  ];
  return (
    // Блок описания проекта.
    <div className='gpt3__whatgpt3' id='wgpt3'>
      {/* Одиночный элемент описания проекта. */}
      <div className='gpt3__whatgpt3-feature'>
        <Feature title={featureTexts[0].title} text={featureTexts[0].text} />
      </div>

      {/* Главное описание проекта. */}
      <div className='gpt3__whatgpt3-heading'>
        {/* Заглавие описания. */}
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        {/* Параграф описания. */}
        <p>Explore The Library</p>
      </div>
      {/* Группа элементов описания проекта. */}
      <div className='gpt3__whatgpt3-container'>
        <Feature title={featureTexts[1].title} text={featureTexts[1].text} />
        <Feature title={featureTexts[2].title} text={featureTexts[2].text} />
        <Feature title={featureTexts[3].title} text={featureTexts[3].text} />
      </div>
    </div>
  );
};

export default WhatGPT3;
