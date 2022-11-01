import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Project/Cell';
import data from '../data/switch';

const Switch = () => (
  <Main
    title="Switch"
    description="Application Design"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Switch</Link></h2>
          <p>Application Design</p>
          <p className="published">
            Switch app helps users take care of their environment and make the world sustainable.
            This curation platform encourages users to search and explore sustainable alternatives.
            <br />
            <br />
            Team: Namrata Kulkarni and 1 Others
            <br />
            Role: UX designer & Researcher
            <br />
            Client: Google Certification Course
            <br />
            Time: 5 Weeks
            <br />
            Tools: Photoshop, Illustrator, Adobe XD
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

export default Switch;
