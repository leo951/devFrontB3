<template>
    <div class="products__grid">
        <ProductsItem v-for="product in productsArray" 
        :key="product._id"
        :productsObject="product"
        />
    </div>
</template>

<script>
import ProductsItem from './ProductsItem'
    export default {
        name: "ProductsGridAd",
        components: {
            ProductsItem
        },
        data: function(){
            return{
            }
        },
        props: {
            productsArray: Array
        },
    }
</script>

<style lang="scss" scoped>
</style>