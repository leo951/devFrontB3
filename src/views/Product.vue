<template>
    <div class="product__page">
        <div class="product__content" v-if="productItem">
            <TitlePage :title="productItem.title"/>
            <div>
                     <img :src="require(`@/assets/img/${productItem.imageUrl}`)" alt="">
            </div>
            <h3>
                {{productItem.description}}
            </h3>
            <p>
                Le prix est de : {{productItem.price | formatPrice}}
            </p>
            
            <div class="product__card-button">
                <button @click="addItemToCart(productItem)">Ajouter au panier</button>
                <button @click="addItemToFavorite(productItem)">Ajouter au favori</button>
            </div>
        </div>
    </div>
</template>

<script>
import TitlePage from '../components/TitlePage'
import Cart from "../mixins/Cart";
import Favorite from "../mixins/Favorite";
    export default {
        name:"Product",
        mixins:[Cart, Favorite],
        components:{
            TitlePage
        },
        data: function() {
            return {
                productItem: {}
            }
        },
        created(){
            fetch(`http://localhost:3000/api/v1/products/${this.$route.params.id}`)
            .then(res=>res.json())
            .then((data) => {
                this.productItem = data;
                // console.log(`Je suis productItem ${this.productItem.title}`)
            })
            .catch(err=> console.log(err))
        },
        methods:{
            addItemToCart: function(product) {
                console.log(`Je suis product.title dans productItem = ${this.productItem.title}`)
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