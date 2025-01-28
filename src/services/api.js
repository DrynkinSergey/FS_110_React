import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com';

export const fetchAllUsers = async () => {
  const { data } = await axios.get('/users');
  return data.users;
};

export const fetchUserById = async id => {
  const { data } = await axios.get(`/users/${id}`);
  return data;
};

export const fetchPostsByUserId = async userId => {
  const { data } = await axios.get(`/posts/user/${userId}`);
  return data.posts;
};
export const fetchPostByPostId = async postId => {
  const { data } = await axios.get(`/posts/${postId}`);
  return data;
};
