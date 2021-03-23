<template>
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
    </div>
</template>

<script>
    import Cart from "../../mixins/Cart";

    export default {
        name:"ProductsItem",
        mixins:[Cart],
        props:{
            productsObject: Object
        },
        created() {
            // console.log(this.productsObject)
        },
        methods:{
            addItemToCart: function(product) {
                console.log("Je suis produit : "+product)
                this.addToCart(product)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>