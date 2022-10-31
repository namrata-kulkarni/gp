import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Project/Cell';
import data from '../data/netchex';

const Netchex = () => (
  <Main
    title="Netchex"
    description="Web Application"
  >
    <article className="post" id="project">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Netchex</Link></h2>
          <p>Web Application</p>
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

export default Netchex;
