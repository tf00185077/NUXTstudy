export default defineAppConfig({
  title: 'Hello Nuxt',
  theme: {
    dark: true,
    colors: {
      primary: '#ff0000'
    }
  },
  about: {
  head: {
    meta: [
      // <meta name="viewport" content="width=device-width, initial-scale=1">
      { name: 'ABOUT PAGE', content: 'width=device-width, initial-scale=1' }
    ],
    script: [
      // <script src="https://myawesome-lib.js"></script>
      { src: 'https://awesome-lib.js' }
    ],
    link: [
      // <link rel="stylesheet" href="https://myawesome-lib.css">
      { rel: 'stylesheet', href: 'https://awesome-lib.css' }
    ],
    // please note that this is an area that is likely to change
    style: [
      // <style type="text/css">:root { color: red }</style>
      { children: ':root { color: red }', type: 'text/css' }
    ],
    noscript: [
      // <noscript>JavaScript is required</noscript>
      { children: 'JavaScript is required' }
    ]
  }
}
})