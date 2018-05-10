import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Prism from 'prismjs';
import Code from '../Code/Code';
import Text from '../Text/Text';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import './CodeBlock.css';

export default class CodeBlock extends Component {
  static propTypes = {
    children: PropTypes.string,
    language: PropTypes.oneOf([
      'css',
      'html',
      'javascript',
      'js',
      'jsx',
      'json',
    ]),
    wrap: PropTypes.bool,
  };

  render() {
    const { children, language, wrap, ...rest } = this.props;
    const classes = classnames('CodeBlock', {
      'CodeBlock--wrap': wrap,
      [`language-${language}`]: language,
    });

    let content = children;

    if (language) {
      content = Prism.highlight(children, Prism.languages[language]);
    }

    return (
      <Text { ...rest }
          Component="pre"
          className={ classes }>
        { language ? (
          <Code dangerouslySetInnerHTML={ { __html: content } } />
        ) : (
          <Code>{ content }</Code>
        ) }
      </Text>
    );
  }
}
