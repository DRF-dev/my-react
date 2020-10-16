import React from 'react';
import { connect } from 'react-redux';

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
  {
    img: 'https://fr.web.img2.acsta.net/pictures/20/08/03/12/15/2118693.jpg',
    title: 'Tenet',
    resume: "Muni d'un seul mot – Tenet – et décidé à se battre pour sauver le monde, notre protagoniste sillonne l'univers crépusculaire de l'espionnage international. Sa mission le projettera dans une dimension qui dépasse le temps. Pourtant, il ne s'agit pas d'un voyage dans le temps, mais d'un renversement temporel…",
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/819gSxIonjL._SL1500_.jpg',
    title: 'Kingsman',
    resume: 'l’élite du renseignement britannique en costumes trois pièces, est à la recherche de sang neuf. Pour recruter leur nouvel agent secret, elle doit faire subir un entrainement de haut vol à de jeunes privilégiés aspirant au job rêvé. L’un d’eux semble être le candidat « imparfaitement idéal » : un jeune homme impertinent de la banlieue londonienne nommé Eggsy. Ces super-espions parviendront-ils à contrer la terrible menace que fait peser sur le monde l’esprit torturé du criminel Richmond Valentine, génie de la technologie?',
  },
];

const Body = ({ movies }) => (
  <div id="bandeAnnonces">
    <div className="carroussel">
      <h2>Bandes Annonces</h2>
      <ItemCarroussel images={[cow, goats, treeGoat]} />
    </div>
    <div className="cards">
      <h2>Movies available</h2>
      <CardList movies={movies} />
    </div>
  </div>
);

const Content = (props) => {
  const { search } = props;
  if (search === '') {
    return (
      <Body movies={listOfMovies} />
    );
  }
  return (
    <div id="bandeAnnonces">
      <div className="cards">
        <h2>Movies available</h2>
        <CardList movies={listOfMovies.filter((movie) => (
          new RegExp(String(search).toLowerCase()).test(String(movie.title).toLowerCase())
        ))}
        />
        {console.log(listOfMovies.filter((movie) => /a/g.test(movie.title) === true))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => (
  {
    search: state.search,
  }
);

export default connect(mapStateToProps)(Content);
