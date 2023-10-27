module.exports = function(babel) {
  return {
    name: "remove-debugger-plugin", // this is optional
    visitor: {
      ExpressionStatement: 
      // {
      //   enter(path) {
      //     console.log("Entered!",{path});
      //   },
      //   exit(path) {
      //     console.log("Exited!");
      //   }
      // }
      (path) =>{
        console.log('path', 1)
         path.remove();
      }
    }
  };
};
