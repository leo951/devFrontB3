<template>
    <div class="product__card">
        <h2>
            {{productsObject.title}}
        </h2>
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
        data: function(){
            return{
            }
        },
        props: {
            productsObject: Object
        },
    }
</script>

<style lang="scss" scoped>

</style>