import { Component, PropTypes } from 'labrador-immutable';
import immutable from 'seamless-immutable';
//import { connect } from 'labrador-redux';

const { any } = PropTypes;

class One extends Component {
  static propTypes = {
    foo: any
  };

  static defaultProps = {
    foo: 'bar'
  };

  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  children() {
    return {};
  }

  onLoad(option) {
    this.setState({ title: option.id });
  }

  // onReady() {
  // }

  // onUpdate() {
  // }

  // onShow() {
  // }

  // onHide() {
  // }

  // onUnload() {
  // }

}

export default One;

// export default connect(
//   (state)=>({})
// )(One);
