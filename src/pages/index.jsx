import { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../layout';

class Index extends Component {
  componentDidMount() {}

  render() {
    return <Layout>test</Layout>;
  }
}

const mapDispatchToProps = {};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
