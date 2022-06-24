module.exports = function reverse (n) {
  result = '';
  for (let i = 0; i < n.length; i++) {
    result = `${n[i]}${result}`;
  }
  return result;
}
