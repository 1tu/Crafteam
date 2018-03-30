export function makePath(path: string): string[] {
  if (!path) return [];
  if (path[path.length - 1] === '/') path = path.slice(0, path.length - 1);
  return path
    .slice(1)
    .replace(/\?.+/, '')
    .split('/');
}
