import qs from 'query-string';
import { Route } from 'vue-router';

export function makeSplitPath(path: string): string[] {
  if (!path) return [];
  if (path[path.length - 1] === '/') path = path.slice(0, path.length - 1);
  return path
    .slice(1)
    .replace(/\?.+/, '')
    .split('/');
}

interface MakeUrlOpts {
  replaceQuery?: object;
}
export function makeUrl(route: Route, opts: MakeUrlOpts = {}): string {
  const query = { ...route.query };
  if (opts.replaceQuery) {
    for (let key in opts.replaceQuery) {
      query[key] = opts.replaceQuery[key];
    }
  }
  const queryStr = '?' + qs.stringify(query);

  return route.path + queryStr;
}
