import React from 'react';

const DisplaySimpson = ({ simpson }) => {
  return (
    <div className="DisplaySimpson">
      <img src={simpson.image} alt="simpsonImage" />
      <ul>
        <li>Name: {simpson.character} </li>
        <li>Quote : {simpson.quote}  </li>
      </ul>
    </div>
  );
};

export default DisplaySimpson;