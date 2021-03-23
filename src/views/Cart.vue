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
        <button @click="checkout">Payer</button>
    </div>
</template>


<script>
    import { loadStripe } from '@stripe/stripe-js';
    // token : cs_test_a1rp06uqlmmAOzmMw87GIk2wZVFQBAZJHmvPoj3trO9oYaIH0LAbbwwZ2V
    //public : pk_test_51IYBNPL7gHzaRznXa6BoIdn8J9T2NPRqdmktp8Fhw1DCgtPN2um1gFSwrtUAKIhRjiJFDMhbSynnuDuKJbTZh8af00RnOXq6kz
    //prive : sk_test_51IYBNPL7gHzaRznXMk7Z6zNaqsTKHZEgQ0GvUg083PZC8BwhhUWmcqyE0O7Zh0iczCzreNG2Fe0IHguQ7TrLiNTd00KcuPqzAQ
    const stripePromise = loadStripe('pk_test_51IYBNPL7gHzaRznXa6BoIdn8J9T2NPRqdmktp8Fhw1DCgtPN2um1gFSwrtUAKIhRjiJFDMhbSynnuDuKJbTZh8af00RnOXq6kz');
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
            // console.log(this.cartArray)
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
            checkout: async function () {
                const stripe =  await stripePromise;
                const response = await fetch('http://localhost:3000/api/v1/create-checkout-session', { 
                    method: 'POST' ,
                    headers : {
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({ 
                        amount:30000
                    })
                    });
                const session = await response.json();
                const result = await stripe.redirectToCheckout({
                    sessionId:session.id
                });
                if (result.error) {
                    console.log(result.error)
                }
            },
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
                // console.log(cartArray)
            },
            clearShopCart: function () {
                this.clearCart()
                this.cartArray = this.getCart();
                // console.log(cartArray)
            }
        }
    }
</script>

<style lang="scss" scoped>
.shop__table{
    
}
</style>