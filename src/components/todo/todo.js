import { Component, PropTypes } from 'labrador-immutable';
import wx from 'labrador';

const { string, bool, func } = PropTypes;

class Todo extends Component {
  static propTypes = {
    firstImg: string,
    id: string,
    mark: string,
    source: string,
    title: string,
    url: string,
  };

  constructor(props) {
    super(props);
    this.state = {
      icon: props.finished ? 'success_circle' : 'circle',
      className: props.finished ? 'todo-finished' : ''
    };
  }

  onUpdate(props) {
    this.setState({
      icon: props.finished ? 'success_circle' : 'circle',
      className: props.finished ? 'todo-finished' : ''
    });
  }

  handleFinish() {
    wx.showToast({ title: this.props.title + '哈哈， 你点击了我' });
    if (this.props.handleJump) {
      this.props.handleJump(this.props);
    }
  }
}

export default Todo;

