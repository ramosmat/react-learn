import React from 'react';

const Header = () => {
  return (
    <>
      <ul>
        <li key={0}>
          <a href="/">Home</a>
        </li>
        <li key={1}>
          <a href="/produtos">Produtos</a>
        </li>
      </ul>
    </>
  );
};

export default Header;
