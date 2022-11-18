import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => {
  return (
    <>
      <p>
        <a href='#home'></a>Home
      </p>
      <p>
        <a href='#wgpt3'></a>What is GPT?
      </p>
      <p>
        <a href='#possibility'></a>Open AI
      </p>
      <p>
        <a href='#features'></a>Case Studies
      </p>
      <p>
        <a href='#blog'></a>Library
      </p>
    </>
  );
};

const Navbar = () => {
  // Состояние отображения блока мобильной навигации.
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    // Блок Десктопная панель навигации.
    <div className='gpt3__navbar'>
      {/* Блок Лого и ссылки. */}
      <div className='gpt3__navbar-links'>
        {/* Лого */}
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} />
        </div>
        {/* Ссылки */}
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      {/* Блок Вход/регитрация */}
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>

      {/* Блок Мобильная панель навигации. */}
      <div className='gpt3__navbar-menu'>
        {/* Иконки открытия/закрытия блока моибльной навигации. */}
        {toggleMenu ? (
          <RiCloseLine
            className='scale-up-center'
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className='scale-up-center'
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {/* Блок мобильной навигации. */}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            {/* Ссылки мобильного блока. */}
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
            </div>
            {/* Мобильный блок входа/регистрации. */}
            <div className='gpt3__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
