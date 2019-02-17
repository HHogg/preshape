import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Remarkable from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';
import BlockQuote from '../BlockQuote/BlockQuote';
import CodeBlock from '../Code/CodeBlock';
import Link from '../Link/Link';
import Table from '../Table/Table';
import TableBody from '../Table/TableBody';
import TableCell from '../Table/TableCell';
import TableHeader from '../Table/TableHeader';
import TableHeaderCell from '../Table/TableHeaderCell';
import TableRow from '../Table/TableRow';
import Text from '../Text/Text';

/* eslint-disable react/display-name, react/prop-types */
const remarkable = new Remarkable();
const renderer = new RemarkableReactRenderer({
  components: {
    a: ({ children, href }) => <Link href={ href } underline>{ children }</Link>,
    blockquote: ({ children }) => <BlockQuote margin="x3">{ children }</BlockQuote>,
    h1: ({ children }) => <Text margin="x3" size="x5">{ children }</Text>,
    h2: ({ children }) => <Text margin="x3" size="x4">{ children }</Text>,
    h3: ({ children }) => <Text margin="x3" size="x3">{ children }</Text>,
    h4: ({ children }) => <Text margin="x3" strong>{ children }</Text>,
    h5: ({ children }) => <Text margin="x3" strong>{ children }</Text>,
    h6: ({ children }) => <Text margin="x3" strong>{ children }</Text>,
    p: ({ children }) => <Text margin="x2">{ children }</Text>,
    pre: ({ content, params }) =>
      <CodeBlock
          backgroundColor="shade-2"
          color
          language={ params ? params : null }
          margin="x4"
          padding="x4"
          scrollable
          size="x1"
          theme="night">
        { content }
      </CodeBlock>,
    strong: ({ children }) => <Text inline strong>{ children }</Text>,
    table: ({ children }) => <Table margin="x3">{ children }</Table>,
    tbody: ({ children }) => <TableBody>{ children }</TableBody>,
    td: ({ children }) => <TableCell>{ children }</TableCell>,
    th: ({ children }) => <TableHeaderCell>{ children }</TableHeaderCell>,
    thead: ({ children }) => <TableHeader>{ children }</TableHeader>,
    tr: ({ children }) => <TableRow>{ children }</TableRow>,
  },
});

remarkable.renderer = renderer;
/* eslint-enable react/display-name react/prop-types */


export default class Markdown extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
  };

  render() {
    return remarkable.render(this.props.children);
  }
}
