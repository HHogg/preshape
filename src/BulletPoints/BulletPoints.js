import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import './BulletPoints.css';

export default class BulletPoints extends Component {
  static propTypes = {
    numbered: PropTypes.bool,
  };

  render() {
    const { numbered, ...rest } = this.props;
    const classes = classnames('BulletPoints', {
      'BulletPoints--numbered': numbered,
    });

    return (
      <Base Component="ul" { ...rest } className={ classes } />
    );
  }
}
