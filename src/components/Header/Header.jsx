import { useState } from 'react';

import SearchButton from '../icons/SearchButton';
import NotificationButton from '../icons/NotificationButton';
import logomovies from '../../img/logomovies.png'
import avatar from '../../img/avatar.png'
import Account from './Account';

const ListButton = ({ children }) => {
return (
    <li>
    <button className='text-white mx-2 text-sm'>
     {children}
    </button>
    </li>
    )
}

const ListButtonRight = ({ children }) => {
return (
  <li className='mx-2'>
  <button className='block p-1'>{children}</button>
  </li>
)
}

export function Header () {

  const [menu, setMenu] = useState(false)

  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setMenu(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setMenu(false);
    }, 200);
  };

    return (
        <header className='fixed w-full pt-1 h-16 flex items-center justify-between bg-gradient-to-b from-black to-transparent px-12 z-50'>
        <img src={logomovies} alt="Logo API" className="w-32"/>
        <nav className='flex-grow ml-9'>
          <ul className='flex'>
          <ListButton>Inicio</ListButton>
          <ListButton>Peliculas Populares</ListButton>
          <ListButton>Generos</ListButton>
          <ListButton>Series</ListButton>
          </ul>
        </nav>
        <nav>
          <ul className='flex text-white items-center'>
            <ListButtonRight>
              <SearchButton />
            </ListButtonRight>
            <ListButtonRight>
              <NotificationButton />
            </ListButtonRight>
            <ListButtonRight>
              <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img className='rounded-sm' src={avatar} alt="Avatar"  />
              {menu &&
                <Account />
              }
              </div>
            </ListButtonRight>
          </ul>
        </nav>
      </header>
    )
}