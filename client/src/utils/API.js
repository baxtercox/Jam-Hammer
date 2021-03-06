import axios from 'axios';

export default {
  getSongs: function () {
    return axios.get('/api/song');
  },

  updateSong: function (id) {
    return axios({
      method: 'put',
      url: '/api/song/like/' + id,
      headers: { Authorization: localStorage.getItem('SavedToken') },
    });
  },
  // saveSongs: function (id) {
  //   return axios.get('/api/songs/' + id);
  // },
  getUser: function (id) {
    return axios.get('/api/users/' + id);
  },

  getCurrentUser: function () {
    return axios({
      method: 'get',
      url: '/api/users',
      headers: { Authorization: localStorage.getItem('SavedToken') },
    });
  },

  updateUser: function(id) {
    return axios.put('/api/users' + id)
  },
  // deleteSongs: function(id) {
  //   return axios.delete("/api/songs/" + id);
  // },

  registerUser: function (userData) {
    return axios.post('/api/register', userData);
  },
  loginUser: function (loginData) {
    return axios.post('/api/login', loginData);
  }
};
