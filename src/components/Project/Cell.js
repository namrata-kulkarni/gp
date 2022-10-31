import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <div className="cell-container-project">
    <article className="mini-post-project">
      <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      <a href={`${data.link}`}>{data.linktitle}</a>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
    linktitle: PropTypes.string,
  }).isRequired,
};

export default Cell;
