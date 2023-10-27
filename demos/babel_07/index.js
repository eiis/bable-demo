import * as babylon from "babylon";
import traverse from "babel-traverse";

const code = `function square(n) {
  return n * n;
}`;

const ast = babylon.parse(code);
console.log(ast);

// traverse(ast, {
//   enter(path) {
//     if (
//       path.node.type === "Identifier" &&
//       path.node.name === "n"
//     ) {
//       path.node.name = "x";
//     }
//   }
// });
