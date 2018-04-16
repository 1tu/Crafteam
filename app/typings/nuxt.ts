import Vue from 'vue';
import { Route } from 'vue-router';
import { Store } from 'vuex';

import { RootState } from '../store/root.storeState';

export interface Context {
  app: Vue;
  isStatic: boolean;
  isDev: boolean;
  isHMR: boolean;
  route: Route;
  store: Store<RootState>;
  base: any;
  env: any;
  params: { [key: string]: string };
  query: { [key: string]: string };
  redirect(status: number, path: string, query?: { [key: string]: string }): void;
  error({ statusCode: number, message: string }): void;
  $axios: any;

  // client only
  nuxtState: any;

  // server only
  req: Request;
  res: Response;
}
