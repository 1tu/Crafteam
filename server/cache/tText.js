module.exports = function tText(text, city, meta) {
  if (!text || !meta) return '';
  return text.replace(/{{([^}]+)}}/g, (substr, strPath) => {
    const path = strPath.trim().split('.');
    return path[0][0] === 'c' ? city[path[1]] : meta.keys[path[1]];
  });
};
