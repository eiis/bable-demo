import "babel-polyfill";
function addAll() {
  return Array.from(arguments).reduce((a, b) => a + b);
}
