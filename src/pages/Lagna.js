import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Project/Cell';
import data from '../data/lagna';

const Lagna = () => (
  <Main
    title="Lagna"
    description="Informational Website"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Lagna</Link></h2>
          <p>Informational Website</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Lagna;
