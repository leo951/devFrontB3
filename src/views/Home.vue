<template>
  <div class="category__home">
    <div class="category__container-top">
      <h1>Bienvenue sur <span>StockY</span> </h1>
    </div>
        <div class="category__container-bottom">
      <h4>Tout ce que vous recherchez est accessible sur <router-link to="/shop">ici</router-link></h4>
    </div>
    <div class="category__container-center">
      <CategoryGrid :CategoryArray="categoryFromApi"/>
    </div>

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
        // console.log(`Je suis categoryFromApi dans Home ${data}`)
    })
    .catch(err=> console.log(err))
},
  methods: {

    }
  }
</script>

<style lang="scss" scoped>

.category__home{
  display: flex;
  flex-direction: column;
  margin: 50px 0px;
  justify-content: space-around;

    .category__container-top{
    font-size: 2em;
  }
  .category__container-center{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .category__container-bottom{
    font-size: 2em;
    // background-image: url("@/../../assets/img/hero_home.jpg");
    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    // height: 800px;
  }
}
    span{
      color: green;
    }
    a{
      color: green;
    }
</style>
