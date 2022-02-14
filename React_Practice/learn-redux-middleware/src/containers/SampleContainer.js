import { connect } from "react-redux";
import Sample from "../components/Sample";

import { getPost, getUsers } from "../modules/sample";

import { useEffect } from "react";

const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    getPost(1);
    getUsers(1);
  }, [getPost, getUsers]);

  console.log(loadingPost, loadingUsers);

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: sample.loadingPost,
    loadingUsers: sample.loadingUsers,
  }),
  { getPost, getUsers }
)(SampleContainer);
