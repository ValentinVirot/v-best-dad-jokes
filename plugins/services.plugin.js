import { ApiService } from "./evalapi.service";

export default (context, inject) => {
  const api = new ApiService(context);

  inject("evalApi", api);
};
