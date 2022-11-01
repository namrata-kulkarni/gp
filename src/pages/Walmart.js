import React from 'react';
import { Link } from 'react-router-dom';
import ReactGoogleSlides from 'react-google-slides';

import Main from '../layouts/Main';
// import Cell from '../components/Project/Cell';
import data from '../data/walmart';

const Walmart = () => (
  <Main
    title="Walmart"
    description="Case Study"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Walmart</Link></h2>
          <p>Case Study</p>
          <p className="published">
            We designed and evaluated 3 key tasks that customers would complete on walmart.com.
            By testing the website, we wanted to help improve the user experience and make the
            website more user-friendly.
            <br />
            <br />
            Team: Namrata Kulkarni and 2 Others
            <br />
            Role: UX Resercher
            <br />
            Client: Class Project
            <br />
            Time: 3 Weeks
            <br />
          </p>
        </div>
      </header>
      {data.map((project) => (
        <p>
          <p>
            {project.title}
          </p>
          <ReactGoogleSlides
            width={project.width}
            height={project.height}
            slidesLink={project.slidesLink}
            slideDuration={project.slideDuration}
            position={1}
            showControls
            loop
          />
        </p>
      ))}
    </article>
  </Main>
);

export default Walmart;
