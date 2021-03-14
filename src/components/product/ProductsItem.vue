<template>
    <div class="product__card">
        <router-link :to="{name: 'Product', params:{id:productsObject._id}}">
            <h2>
                {{productsObject.title}}
            </h2>
        </router-link>
        <p>
            {{productsObject.price}}
        </p>
    </div>
</template>

<script>
    export default {
        name: "ProductsItem",
        components: {

        },
        props: {
            productsObject: Object
        },
    }
</script>

<style lang="scss" scoped>

</style>