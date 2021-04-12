<template>
    <div>
        <!-- <img src="../../assets/img/dybala.jpg" alt=""> -->
            <div class="product__card" v-if="productsObject">
                <router-link :to="{name: 'Product', params:{id:this.productsObject._id}}">
                    <h2>
                        {{productsObject.title}}
                    </h2>
                    <h4>
                        <img :src="require(`@/assets/img/${productsObject.imageUrl}`)" alt="">
                    </h4>
                </router-link>
                <h3>            
                    {{productsObject.price}}
                </h3>
                <div class="product__card-button">
                    <button @click="addItemToCart(productsObject)">Ajouter au panier</button>
                    <button @click="addItemToFavorite(productsObject)">Ajouter au favori</button>
                </div>
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
            }
        },
        created() {
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
.product__card{
    height: 450px;
    width: 350px;
    background-color: whitesmoke;
    border-radius: 10px;
    text-decoration: none;
    margin: 60px 30px;
    text-decoration: none;
    img{
        height: 200px;
        width: 200px;
        border-radius: 10px;
    }
    .product__card-button button{
        margin: 0px 5px;
        cursor: pointer;
    }
    a{
    width: 350px;
    margin: 3px;
    text-decoration: none;
    color: grey;
    }; 
    :hover{
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    color: green;
    transition-delay: 0,3s;

} 
}
</style>