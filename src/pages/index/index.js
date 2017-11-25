import wx, { Component, PropTypes } from 'labrador-immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'labrador-redux';
import Todo from '../../components/todo/todo';
import * as todoActions from '../../redux/todos';
import { sleep } from '../../utils/utils';

const { array, func } = PropTypes;

class Index extends Component {
  static propTypes = {
    todos: array,
    getList: func,
  };

  state = {
    page: 1,
  };

  onLoad() {
    this.props.getList(this.state.page);
  }

  children() {
    let todos = this.props.todos || [];
    return {
      list: todos.map((todo) => ({
        component: Todo,
        key: todo.title,
        props: {
          ...todo,
          firstImg: todo.picUrl,
          handleJump: this.handleJump
        }
      })),
    };
  }

  onUpdate(props) {
    //
  }

  handleJump = (params) => {
    console.log(params);
    // this.jump();
    wx.navigateTo({
      url: `/pages/one/one?id=${params.title}`
    })
  }

  async jump() {
    // await sleep(3000);
    wx.navigateTo({
      url: `/pages/one/one?id=${params.title}`
    })
  }

  async onPullDownRefresh() {
    const page = this.state.page + 1;
    this.setState({ page });
    this.props.getList(page);
    await sleep(1000);
    wx.showToast({ title: '刷新成功' });
    wx.stopPullDownRefresh();
  }
}

export default connect(
  ({ todos }) => ({ todos }),
  (dispatch) => bindActionCreators({
    getList: todoActions.todoRequest,
  }, dispatch)
)(Index);
