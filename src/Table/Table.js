import React, { Component } from 'react';
import Text from '../Text/Text';
import './Table.css';

export default class Table extends Component {
  render() {
    return (
      <Text { ...this.props } Component="table" className="Table" />
    );
  }
}
