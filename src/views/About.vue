<template>
  <div class="about">
    <TitlePage :title="myTitle"/>
  </div>
</template>

<script>
import TitlePage from '../components/TitlePage'
export default {
  name: "About",
  components: {
    TitlePage
  },
  data: function () {
    return{
      myTitle:"Page About"
    }
  }
  
}
</script>
<style>
  
</style>
