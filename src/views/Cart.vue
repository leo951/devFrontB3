<template>
    <div class="shopping__cart">
        <table class="shop__table">
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Quantité</th>
                    <th>Prix</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cartArray" :key="item.id">
                    <td>{{item.title}}</td>
                    <td>{{item.qty}}</td>
                    <td>{{item.price}}</td>
                    <td>
                        <button @click="DeleteItemCart(item)">-</button>
                        <button @click="AddItemCart(item)">+</button>
                    </td>
                    <td>
                        {{item.qty *item.price}}$
                    </td>
                    <td>
                        <button @click="removeProductCart(item)">Supprimer le produit</button>
                    </td>

                </tr>
            </tbody>
        </table>
        <div>
            Quantité total = {{calcQty}}
        </div>
        <div>
            Prix total = {{calcTotal}}
        </div>
        <button @click="clearShopCart">Supprimer le panier</button>
    </div>
</template>


<script>
    import Cart from '../mixins/Cart';
    export default {
        mixins:[Cart],
        data: function() {
            return {
                cartArray:[],
                // calcQty:0
            }
        },
        created() {
            this.cartArray = this.getCart();
            console.log(this.cartArray)
            // this.calcQty = this.getCartCount(this.cartArray)
        },
        computed:{
            calcQty: function () {
                return this.getCartCount(this.cartArray)
            },
            calcTotal: function () {
                return this.getCartTotal(this.cartArray)
            }
        },
        methods: {
            removeProductCart: function (product) {
                this.removeItemCart(product);
                this.cartArray = this.getCart();
            },
            AddItemCart: function (product) {
                this.addOneQty(product)
                this.cartArray = this.getCart();
            },
            DeleteItemCart: function (product) {
                this.removeOneQty(product)
                this.cartArray = this.getCart();
                console.log(cartArray)
            },
            clearShopCart: function () {
                this.clearCart()
                this.cartArray = this.getCart();
                console.log(cartArray)
            }
        }
    }
</script>

<style lang="scss" scoped>
.shop__table{
    
}
</style>