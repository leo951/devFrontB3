<template>
  <div class="category__home">
    <TitlePage title="Ma page Home"/>
    <CategoryGrid :CategoryArray="categoryFromApi"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryGrid from '../components/category/CategoryGrid'
import ApiCategory from '../mixins/ApiCategory';
import TitlePage from '../components/product/ProductsItem'

export default {
  name: 'Home',
   components:{
          TitlePage,
          CategoryGrid
        },
  data: function () {
    return{
      categoryFromApi: []
    }
  },
  mixins:[ApiCategory],
  created(){
    this.getCategoryAll()
    .then((data) => {
        this.categoryFromApi = data;
        console.log(`Je suis categoryFromApi dans Home ${data}`)
    })
    .catch(err=> console.log(err))
},
  methods: {

    }
  }
</script>

<style>

</style>
