import wx, { Component, PropTypes } from 'labrador-immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'labrador-redux';
import Todo from '../../components/todo/todo';
import * as twoActions from '../../redux/two';
import { sleep } from '../../utils/utils';

const { any } = PropTypes;

class Two extends Component {
  static propTypes = {
    foo: any
  };

  static defaultProps = {
    foo: 'bar'
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  // onShow  事件每次都会执行   onLoad首次执行 只执行一次
  onLoad() {
    // this.props.getList();
  }

  children() {
    let { twoList } = this.props.twoState;
    return {
      list: twoList.map((todo) => ({
        component: Todo,
        key: todo.news_id,
        props: {
          ...todo,
          firstImg: todo.thumbnail,
        }
      })),
    };
  }

  // onLoad() {
  // }

  // onReady() {
  // }

  // onUpdate() {
  // }

  onShow () {
    console.log(' ---------- onShow ----------')
    this.props.getList()
  }

  // onHide() {
  // }

  // onUnload() {
  // }

}

export default connect(
  ({ twoState }) => ({ twoState }),
  (dispatch) => bindActionCreators({
    getList: twoActions.twoRequest,
  }, dispatch)
)(Two);
