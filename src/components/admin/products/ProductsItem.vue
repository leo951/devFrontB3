<template>
    <div>
        <div class="product__card" v-if="productsObject">
            <router-link :to="{name: 'ProductAdmin', params:{id:this.productsObject._id}}">
                <h2>
                    {{productsObject.title}}
                </h2>
            </router-link>
            <p>            
                {{productsObject.price}}
            </p>

            
        </div>
    </div>
</template>

<script>

    export default {
        name:"ProductsItem",
        props:{
            productsObject: Object,
        },
        created() {
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>

</style>