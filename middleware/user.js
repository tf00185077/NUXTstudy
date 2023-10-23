export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  //   const isAuthenticated = () => {
  //       return true
  //   } 
  // if (isAuthenticated() === false) {
  //   return navigateTo('/user')
  // }
    if (to.path !== "/user/3") {
      // setting the redirect code to '301 Moved Permanently'
      return navigateTo("/user", { redirectCode: 301 });
    }
})