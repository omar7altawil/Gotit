import RestClient from 'react-native-rest-client';

export default class Controller extends RestClient {
  constructor () {
    // Initialize with your base URL
    super('http://localhost::3000');
  }
  // Now you can write your own methods easily
  login (username, password) {
    // Returns a Promise with the response.
    return this.POST('/auth', { username, password });
  }
  getCurrentUser () {
    // If the request is successful, you can return the expected object
    // instead of the whole response.
    return this.GET('/auth')
      .then(response => response.user);
  }
};