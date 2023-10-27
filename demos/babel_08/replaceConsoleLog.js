module.exports = function(babel) {
  const t = babel.types;
  return {
    name: "convert-alert-to-console", // this is optional
    visitor: {
      CallExpression:(path)=>{
        if (path.node.callee.name === 'alert') {
          const args = path.node.arguments;
          path.replaceWith(
            t.callExpression(t.memberExpression(t.identifier('console'), t.identifier('log')), args));
        }
      }
    }
  };
};
