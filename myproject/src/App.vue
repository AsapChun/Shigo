<template>
  <div id="app">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <router-view/>
  </div>
</template>

<script>
  export default{
    name: 'App',
    mounted(){
      /*
            let jQuery = document.createElement('script')
            jQuery.setAttribute('src', 'https://code.jquery.com/jquery-3.4.1.min.js')
            document.head.appendChild(jQuery)

       */
    }
  }
</script>

<style>
#app {
  z-index: -50;
  /*
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
