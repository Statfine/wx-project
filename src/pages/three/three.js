import wx, { Component, PropTypes } from 'labrador-immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'labrador-redux';
import Todo from '../../components/todo/todo';
import * as threeActions from '../../redux/three';
import { sleep } from '../../utils/utils';

const { any } = PropTypes;

class Three extends Component {
  static propTypes = {
    foo: any
  };

  static defaultProps = {
    foo: 'bar'
  };

  constructor(props) {
    super(props);
    this.state = {
      page: 2,
    }
  }

  children() {
    let { threeList } = this.props.threeState;
    return {
      list: threeList.map((todo) => ({
        component: Todo,
        key: todo.title,
        props: {
          ...todo,
          firstImg: todo.picUrl,
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
    this.props.getList(this.state.page)
  }

  // onHide() {
  // }

  // onUnload() {
  // }

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
  ({ threeState }) => ({ threeState }),
  (dispatch) => bindActionCreators({
    getList: threeActions.threeRequest,
  }, dispatch)
)(Three);
