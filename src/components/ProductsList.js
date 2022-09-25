import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Trail } from 'react-spring';

import ProductItem from './ProductItem';
import Heading from './Heading';

const Container = styled.div`
  position: relative;
`;

class ProductsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isOpen: true });
    }, 200);
  }

  render() {
    const { title, products } = this.props;
    const { isOpen } = this.state;
    const keys = products.map(item => item.node.id);

    return (
      <Container className="container">
        <section className="section">
          <Heading>{title}</Heading>
          <div className="columns is-multiline">
            <Trail
              native
              from={{ opacity: 0 }}
              to={{ opacity: isOpen ? 1 : 0.25 }}
              keys={keys}
            >
              {products.map(({ node }) => styles => (
                <ProductItem key={node.id} item={node} styles={styles} />
              ))}
            </Trail>
          </div>
        </section>
      </Container>
    );
  }
}

ProductsList.defaultProps = {
  title: 'New arrivals',
  products: [],
};

ProductsList.propTypes = {
  title: PropTypes.string,
  products: PropTypes.array,
};

export default ProductsList;
