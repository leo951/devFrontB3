<template>
    <div>
        <!-- <img src="../../assets/img/dybala.jpg" alt=""> -->
       
        <div class="product__card" v-if="productsObject">
            <router-link :to="{name: 'Product', params:{id:this.productsObject._id}}">
                <h2>
                    {{productsObject.title}}
                </h2>
            </router-link>
            <p>            
                {{productsObject.price}}
            </p>
              <img :src="require(`@/assets/img/${productsObject.imageUrl}`)" alt="">
            
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
        data() {
            return {
                // img: productsObject.imageUrl
                img: "@/assets/img/dybala.jpg"
            }
        },
        created() {
            console.log(this.img)
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