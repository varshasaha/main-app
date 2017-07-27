import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';

const Father = props =>
  <div>
    <Header />
    <div>
      <Content />
      {props.children}
    </div>
  </div>;

Father.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Father;
