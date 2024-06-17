import React from 'react';

const App = () => {
  function handleClick(event) {
    console.log(event.target);
  }

  function handleScroll(event) {
    console.log(event);
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <>
      <button onClick={handleClick} onMouseLeave={handleClick}>
        Clique
      </button>
      <div style={{ height: '200vh' }}></div>
    </>
  );
};

export default App;
