import React from 'react';

const Header = ({ produto }) => {
  if (produto == null) {
    return <h1>Preferência: </h1>;
  }

  return <>{produto && <h1>Preferência: {produto}</h1>}</>;
};

export default Header;
