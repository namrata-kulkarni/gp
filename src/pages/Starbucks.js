import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Project/Cell';
import data from '../data/starbucks';

const Starbucks = () => (
  <Main
    title="Starbucks"
    description="Application Redesign"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Starbucks</Link></h2>
          <p>Application Redesign</p>
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

export default Starbucks;
