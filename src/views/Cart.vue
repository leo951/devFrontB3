<template>
    <div class="shopping__cart">
        <h1>Panier</h1>
        <div class="shopping__cart-content">
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
                    <td>{{item.price}} €</td>
                    <td class="shop__table-button">
                        <button @click="DeleteItemCart(item)">-</button>
                        <button @click="AddItemCart(item)">+</button>
                    </td>
                    <td>
                        {{item.qty *item.price}} €
                    </td>
                    <td>
                        <button @click="removeProductCart(item)">Supprimer le produit</button>
                    </td>
                    <div class="space"></div>
                </tr>
            </tbody>
        </table>
        </div>
        <div class="shop__result">
            <div>
                Quantité total = <span>{{calcQty}}</span> 
            </div>
            <div>
                Prix total = <span>{{calcTotal}}</span> 
            </div>
        </div>
        <div class="shop__button">
            <button @click="clearShopCart">Supprimer le panier</button>
            <button @click="checkout">Payer</button>
            <!-- <button @click="getOrder(cartArray)">Payer</button> -->
        </div>
    </div>
</template>


<script>
    import { loadStripe } from '@stripe/stripe-js';
    // token : cs_test_a1rp06uqlmmAOzmMw87GIk2wZVFQBAZJHmvPoj3trO9oYaIH0LAbbwwZ2V
    //public : pk_test_51IYBNPL7gHzaRznXa6BoIdn8J9T2NPRqdmktp8Fhw1DCgtPN2um1gFSwrtUAKIhRjiJFDMhbSynnuDuKJbTZh8af00RnOXq6kz
    //prive : sk_test_51IYBNPL7gHzaRznXMk7Z6zNaqsTKHZEgQ0GvUg083PZC8BwhhUWmcqyE0O7Zh0iczCzreNG2Fe0IHguQ7TrLiNTd00KcuPqzAQ
    const stripePromise = loadStripe('pk_test_51IYBNPL7gHzaRznXa6BoIdn8J9T2NPRqdmktp8Fhw1DCgtPN2um1gFSwrtUAKIhRjiJFDMhbSynnuDuKJbTZh8af00RnOXq6kz');
    import Cart from '../mixins/Cart';
    import VueJwtDecode from "vue-jwt-decode";

import FooterVue from '../layout/Footer.vue';
    export default {
        mixins:[Cart],
        data: function() {
            return {
                cartArray:[],
                i: Number,
                idProducts: [],
                idUser : Array,
                dateActuel: String,
                total: Number
                // parseObj:[]
                // calcQty:0
            }
        },
        created() {
            this.cartArray = this.getCart();
            // console.log(this.cartArray)
            var parseObj = JSON.parse(JSON.stringify(this.cartArray))
            for (this.i = 0; this.i < parseObj.length; this.i++) {
                this.idProducts.push(parseObj[this.i].id)
                // console.log(`Je suis parseObj : ${parseObj[this.i].id}`)
                // console.log(`Je suis Id : ${this.id}`)

            }
             

            const token = localStorage.getItem('token');
            if(token) {
                const decodedToken = VueJwtDecode.decode(token);
                // console.log("Je suis l'id decodé = "+decodedToken.id);
                this.idUser = decodedToken.id
            }
                var today = new Date();
                var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

                this.dateActuel = date+' à '+time;
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
                // console.log("Je suis order : "+order)
                this.total = this.getCartTotal(this.cartArray)
                const stripe =  await stripePromise;
                const response = await fetch('http://localhost:3000/api/v1/create-checkout-session', { 
                    method: 'POST' ,
                    headers : {
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({ 
                        amount: this.total * 100
                    })
                    
                    });
                    this.getOrder()
                    // console.log("Je suis this.total = ",this.total)
                const session = await response.json();
                const result = await stripe.redirectToCheckout({
                    sessionId:session.id
                });
                if (result.error) {
                    console.log(result.error)
                }
            },
            getOrder: async function(){
                const mySelf = this
                return fetch("http://localhost:3000/api/v1/orders", {
                method: "POST",
                headers: {"Content-Type":"Application/json"},
                body: JSON.stringify( {
                    total:  this.total,
                    status: "En cours",
                    date: this.dateActuel,
                    user: mySelf.idUser,
                    products: mySelf.idProducts,
                })
            })
            .then (res => res.json())
            .then((data) => {
                if(data.error) {
                    console.log(data.error);
                    // console.log(`Je suis l'erreur : ${data}`)
                    this.messageError = data.error;
                } else {
                    // this.$router.push('/orders');
                    // console.log("Je suis la date actuelle = "+this.dateActuel)
                }
            })
            .catch(err => console.log(err));
                
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
            },
        }
    }
</script>

<style lang="scss" scoped>
.shopping__cart-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 2em;
    .shop__table{
        .shop__button{
            button{
                margin: 0px 10px;
            }
        }
    }

}
.shop__result{
    padding: 100px 0 50px 0;
    font-size: 1.5em;
    font-weight: bold;
    span{
        color: green;
    }
}
.shop__button{
    button{
        margin: 0px 10px;
        padding: 10px 15px;
        font-size: 1.2em;
    }
}
h1{
    font-size: 3em;
    margin: 50px;
}

</style>