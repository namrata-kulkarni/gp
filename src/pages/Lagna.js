import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Project/Cell';
import data from '../data/lagna';

const Lagna = () => (
  <Main
    title="Lagna"
    description="Informational Website Design"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Lagna</Link></h2>
          <p>Informational Website Design</p>
          <p className="published">
            Lagna is an informational website to highlight the semiotics and symbolism
            of the rituals followed and commodities used in Marathi weddings.
            <br />
            <br />
            Team: Namrata Kulkarni and 1 Others
            <br />
            Role: UX designer
            <br />
            Client: Class Project
            <br />
            Time: 3 Months
            <br />
            Tools: Photoshop, Adobe Illustrator
            <br />
          </p>
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
