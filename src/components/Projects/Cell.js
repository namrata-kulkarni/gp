import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={`${process.env.PUBLIC_URL}${data.link}`}>{data.title} | {data.subtitle}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
        <p className="published">
          {data.team}<br />
          {data.client}<br />
          {data.time}<br />
          {data.role}<br />
          {data.tools}
        </p>
      </header>
      <a href={`${process.env.PUBLIC_URL}${data.link}`} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    role: PropTypes.string,
    client: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    tools: PropTypes.string,
  }).isRequired,
};

export default Cell;
