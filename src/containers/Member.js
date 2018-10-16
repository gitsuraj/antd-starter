import React from 'react';
import { connect } from 'react-redux';
import {login} from '../actions/member';

const Member = ({
    Layout,
    member,
    onLoginUser
  }) => (
    <Layout
    member={member}
    onLoginUser={onLoginUser} />
  );

  const mapStateToProps = state => ({
    member: state.member || {}
  });

  const mapDispatchToProps = {
    onLoginUser: login,
  };

  export default connect(mapStateToProps,mapDispatchToProps)(Member);
