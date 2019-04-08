import React from 'react';

const GenerateSimpson = ({ selectSimpson }) => {
  return (
    <div className="GenerateSimpsone">
      <button onClick={selectSimpson}>Get new Simpson quote</button>
    </div>
  );
};

export default GenerateSimpson;
