import React from 'react';
import Search from '../../UI/search';
import Link from '../../UI/link/link';

const Menu = () => {
    return (
      <div class="classy-menu">
        <div class="classynav">
          <ul>
            <li>
              <Link  href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Info</Link>
            </li>
            <li>
              <Link href="/">Recipes</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Shopping List</Link>
            </li>
            <li>
              <Link href="/">Add Recipe</Link>
            </li>
          </ul>
          <Search />
        </div>
      </div>
    );
};

export default Menu;