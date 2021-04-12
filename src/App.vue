<template>
  <div id="app">

	  <Header/>

	  <main>
    <router-view/>
	</main>

	<Footer/>
	
  </div>
</template>

<script>

import Footer from './layout/Footer';
import Header from "./layout/Header";
export default {
  components: {
	Header,
    Footer
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
}
#app {
  margin: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

#nav {
  // padding: 30px;
  width: 100%;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
