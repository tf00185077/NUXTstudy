export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  //   const isAuthenticated = () => {
  //       return true
  //   } 
  // if (isAuthenticated() === false) {
  //   return navigateTo('/user')
  // }
  // console.log(to,"TO")
  // console.log(from,'FROM')
  const route = useRoute()
  if (to.path == "/user/4") {
    // setting the redirect code to '301 Moved Permanently'
    return abortNavigation();
  }
  if (route.params.id == 3) {
    return navigateTo("/user");
  }
})