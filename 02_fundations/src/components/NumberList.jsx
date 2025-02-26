import React from 'react'

const NumberList = ({ numbers }) => {
    // estrutura de loop - for, while
    // Metodos array = Filter, map, reduce.

    // chaves - keys
    // um identificador unico para cada elemento

  return (
    <ul>
      {numbers.map((number,index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
};

export default NumberList;
