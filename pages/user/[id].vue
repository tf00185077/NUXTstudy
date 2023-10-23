<script setup>
// await navigateTo('https://nuxt.com',{ external: true })
definePageMeta({
  middleware: 'user'
})
// const route = useRoute()
const router = useRouter()
console.log(router.getRoutes())
router.removeRoute('hi')
console.log(router.getRoutes())
const goPage = () => {
  navigateTo("/user")
}
const tryBlank = async() => {
  await navigateTo('https://nuxt.com', {  
    
  open: {
    target: '_blank',
    windowFeatures: {
      width: 500,
      height: 500
    }
  }
})
}
</script>
<template>
  <h1>useRouter</h1>
   <button @click="$router.back()">Back</button>
   <button @click="tryBlank">GO TO Page</button>
    <!-- <p>You are now at member page, and your id is {{ route.params.id }}</p> -->
    <!-- <p>You are now at member page, and your id is {{ route.params.id }}</p> -->
</template>