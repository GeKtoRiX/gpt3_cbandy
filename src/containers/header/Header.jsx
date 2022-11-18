import React from 'react';
// Стили блока Header.
import './header.css';
// Изображения блока Header.
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    // Блок header.
    <div className='gpt3__header section__padding' id='home'>
      {/*Содержимое блока header. */}
      <div className='gpt3__header-content'>
        {/* Главный текст блока header.  */}
        <h1 className='gradient__text'>
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        {/* Параграф описания */}
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        {/* Поле воода и отправки email. */}
        <div className='gp3__header-content__input'>
          <input type={'email'} placeholder={'Your Email Address'}></input>
          <button type={'button'}>Get Started</button>
        </div>
        {/* Зарегестрированные люди и их кол-во. */}
        <div className='gp3__header-content__people'>
          <img src={people} alt={'people'} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        {/* Главное изображение блока header. */}
      </div>
      {/* Изображение блока header. */}
      <div className='gpt3__header-image'>
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
