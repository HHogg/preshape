import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { Route } from 'react-router';
import { Base, Button, Flex, Icon, Link, Markdown, Separator, Text } from 'preshape';

export default class DocumentationPage extends Component {
  static propTypes = {
    back: PropTypes.string,
    backTo: PropTypes.string,
    children: PropTypes.node.isRequired,
    description: PropTypes.string,
    name: PropTypes.string.isRequired,
    next: PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
    previous: PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
  };

  render() {
    const {
      back,
      backTo,
      children,
      description,
      name,
      next,
      previous,
    } = this.props;

    return (
      <Fragment>
        { backTo && (
          <Link to={ backTo }>
            <Flex
                alignChildrenVertical="middle"
                direction="horizontal"
                gap="x1">
              <Flex>
                <Icon name="ChevronLeft" size="1rem" />
              </Flex>

              <Flex>
                Back to { back }
              </Flex>
            </Flex>
          </Link>
        ) }

        <Base margin="x6">
          <Text margin="x2" size="x5">{ name }</Text>
          { description && (
            <Text color="shade-3" margin="x1">
              <Markdown>{ description }</Markdown>
            </Text>
          ) }
        </Base>

        { children }

        { (next || previous) && (
          <Fragment>
            <Separator />

            <Flex
                alignChildrenHorizontal="between"
                direction="horizontal"
                margin="x8">
              <Flex>
                { previous && (
                  <Route render={ ({ history }) => (
                    <Button onClick={ () => history.push(previous.to) }>
                      <Flex
                          alignChildrenVertical="middle"
                          direction="horizontal"
                          gap="x1">
                        <Flex>
                          <Icon name="ChevronLeft" size="1rem" />
                        </Flex>

                        <Flex>
                          { previous.name }
                        </Flex>
                      </Flex>
                    </Button>
                  ) } />
                ) }
              </Flex>

              <Flex>
                { next && (
                  <Route render={ ({ history }) => (
                    <Button onClick={ () => history.push(next.to) }>
                      <Flex
                          alignChildrenVertical="middle"
                          direction="horizontal"
                          gap="x1">
                        <Flex>
                          { next.name }
                        </Flex>

                        <Flex>
                          <Icon name="ChevronRight" size="1rem" />
                        </Flex>
                      </Flex>
                    </Button>
                  ) } />
                ) }
              </Flex>
            </Flex>
          </Fragment>
        ) }
      </Fragment>
    );
  }
}
