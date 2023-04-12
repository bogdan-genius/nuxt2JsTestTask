import {Api} from "~/api/api";
import {AxiosResponse} from "axios";

let $api
export default function ({ app, $axios }: any, inject: any) {
  const axios = $axios.create({});

  axios.setBaseURL(process.env.baseApiUrl);

  $api = new Api(axios);

  axios.interceptors.request.use(
      function (config: any) {
        const token = app.$cookiz.get("token");

        if (token && !config.headers.isRefresh) {
          config.headers.Authorization = 'Bearer ' + token;
        }

        return config;
      },

      (err: AxiosResponse) => {
        return Promise.reject(err);
      }
  );

  inject("api", $api);
}

export const api = $api