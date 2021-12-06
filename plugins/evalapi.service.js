export class ApiService {
  baseUrl = "http://127.0.0.1:3001";
  context = null;

  constructor(context) {
    this.context = context;
  }

  getPosts() {
    return this.context.$axios.get(this.baseUrl + "/posts");
  }
}
