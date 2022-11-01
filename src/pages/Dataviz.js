import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Project/Cell';
import data from '../data/dataviz';

const Dataviz = () => (
  <Main
    title="Dataviz"
    description="Interactive Dashboard"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Data Visualization</Link></h2>
          <p>Interactive Dashboard</p>
          <p className="published">
            Designed a interactive dashboard to show information about ​​​​​​Agriculture in the
            United States and Nutritional contents of Starbucks beverages
            <br />
            <br />
            Team: Namrata Kulkarni
            <br />
            Role: UX designer & Researcher
            <br />
            Client: Class Project
            <br />
            Time: 4 Weeks
            <br />
            Tools: Tableau
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

export default Dataviz;
