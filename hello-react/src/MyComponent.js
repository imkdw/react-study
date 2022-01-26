import PropTypes from 'prop-types';
import { Component } from 'react';

// const MyComponent = ({ name, favoriteNumber }) => {
//   return (
//     <div>
//       <div>Hello! My name is {name}</div>
//       <div>My favorite Number is {favoriteNumber}</div>
//     </div>
//   );
// }



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

// MyComponent.defaultProps = {
//   name: 'Default Name'
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired
// };

export default MyComponent;