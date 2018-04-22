export function cityFromHost(host: string) {
  return host
    .replace(/\.[^\.]+$/, '')
    .split('-')
    .slice(1)
    .join('-');
}
