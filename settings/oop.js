const fetchFunction = () => {
  const get = () => {
      console.log("Get")
  }
  const post = () => {
      console.log("post")
  }
  return {
      get,post
  }
  //   return {
  //       get: () => {
  //           console.log("Get")
  //       },
  //       post: () => {
  //         console.log("Post")
  //       }
  //   }
};
export default fetchFunction;
// let tryFun = fetchFunction()
// tryFun.post()
