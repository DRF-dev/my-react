import React from 'react';

import cow from './assets/cow.jpg';
import goats from './assets/goats.jpg';
import treeGoat from './assets/goatsOnTree.jpg';
import goat1 from './assets/bianca-ackermann-aZMIMl9oh4E-unsplash.jpg';
import goat2 from './assets/dave-ruck-c1oDyH4m-9E-unsplash.jpg';
import goat3 from './assets/edgar-chaparro-BkvRxV4tXEY-unsplash.jpg';
import goat4 from './assets/jc-gellidon-H8z4Zo4YjmM-unsplash.jpg';

import ItemCarroussel from './itemCarroussel';
import CardList from './cardList';

const listOfMovies = [
  {
    img: goat1,
    title: 'Fast and goat',
    resume: 'A big goat versus the world !!!',
  },
  {
    img: goat2,
    title: 'Fast and goat 2',
    resume: 'The saga fast and goat end !!!',
  },
  {
    img: goat3,
    title: 'Fast and goat, the return',
    resume: 'The big goat is back !!!',
  },
  {
    img: goat4,
    title: 'Fast and goat, dad and son',
    resume: 'The son of the goat continue the legacy of his dad !!!',
  },
];

const Content = () => (
  <div id="bandeAnnonces">
    <div className="carroussel">
      <h2>Bandes Annonces</h2>
      <ItemCarroussel images={[cow, goats, treeGoat]} />
    </div>
    <div className="cards">
      <h2>Movies available</h2>
      <CardList movies={listOfMovies} />
    </div>
  </div>
);

export default Content;
