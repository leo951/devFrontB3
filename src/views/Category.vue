<template>
    <div class="category__page">
        <div class="category__title" v-if="categoryItem">
            <TitlePage :title="categoryItem.title"/>
        </div>
        <div class="categery__content">

            <ProductsItem 
            v-for="product in products" :key="product._id" :productsObject="product"
        />
        </div>
    </div>
</template>

<script>
import TitlePage from '../components/TitlePage'
import ProductsItem from '../components/product/ProductsItem'
import ApiProducts from '../mixins/ApiProducts';
export default {
    name:"Category",
    components:{
        TitlePage,
        ProductsItem

    },
    data: function() {
        return {
            categoryItem: {},
            products: []
        }
    },
    mixins:[ApiProducts],
    created(){
        console.log(this.$route.params.id)
        fetch(`http://localhost:3000/api/v1/category/${this.$route.params.id}`)
        .then(res=>res.json())
        .then((data) => {
            // console.log(data)
            this.products = data.products
            // console.log(this.products)
        })
        .catch(err=> console.log(err))
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>

</style>