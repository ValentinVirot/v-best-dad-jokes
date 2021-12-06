export class ApiService {
  context = null;

  constructor(context) {
    this.context = context;
  }

  getPosts() {
    return this.context.$axios.get("http://127.0.0.1:3001/posts");
  }
}
