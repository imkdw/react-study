import PropTypes from 'prop-types';
import { Component } from 'react';

class MyComponent extends Component {
  static defaultProps = {
    name: 'defaultName'
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };

  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        Hello. My name is {name}.<br />
        My Favorite Number is {favoriteNumber}<br />
        children is {children}
      </div>
    );
  }
}

export default MyComponent;