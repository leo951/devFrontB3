<template>
    <div>
        <div class="product__card" v-if="productsObject">
            <router-link :to="{name: 'Product', params:{id:this.productsObject._id}}">
                <h2>
                    {{productsObject.title}}
                </h2>
            </router-link>
            <p>            
                {{productsObject.price}}
            </p>
            <p>
                <button @click="addItemToCart(productsObject)">Ajouter au panier</button>
            </p>
            <p>
                <button @click="addItemToFavorite(productsObject)">Ajouter au favori</button>
            </p>
        </div>
    </div>
</template>

<script>
    import Cart from "../../mixins/Cart";
    import Favorite from "../../mixins/Favorite";

    export default {
        name:"ProductsItem",
        mixins:[Cart, Favorite],
        props:{
            productsObject: Object,
        },
        created() {
            // console.log(this.productsObject)
        },
        methods:{
            addItemToCart: function(product) {
                // console.log(`Je suis product.title dans productItem = ${product.title}`)
                this.addToCart(product)
            },
            addItemToFavorite: function(product) {
                this.addToFavorite(product)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>