import React from 'react';

const Home = ({ data }) => {
  const { name, phone } = data;
  return (
    <ul>
      <li>{`name : ${name}`}</li>
      <li>{`phone : ${phone}`}</li>
    </ul>
  );
};

export default Home;
