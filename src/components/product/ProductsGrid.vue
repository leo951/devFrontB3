<template>
    <div class="products__grid">
        <ProductsItem 
        v-for="product in productsArray" 
        :key="product._id"
        :productsObject="product"
        />
    </div>
</template>

<script>
import ProductsItem from './ProductsItem'
    export default {
        name: "ProductsGrid",
        components: {
            ProductsItem
        },
        props: {
            productsArray: Array
        },
    }
</script>

<style lang="scss" scoped>

</style>