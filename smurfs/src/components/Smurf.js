import React from 'react';

const Smurf = ({smf}) => {
  console.log(`Smurf props`, smf)
  return (
  <div className="smurfcard">
  <p>Name: {smf.name}</p>
  <p>Age: {smf.age}</p>
  <p>Height: {smf.height}</p>
  </div>
  )
};

export default Smurf;
