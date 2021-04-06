<template>
    <div>
        <div class="order__card" v-if="ordersObject">
            <router-link :to="{name: 'Orders', params:{id:this.ordersObject._id}}">
                <h2>
                    Total de la commande : {{ordersArray.total}}
                </h2>
                <p>Lastname : {{ordersArray.user.lastname}}</p>
                <p>Firstname : {{ordersArray.user.firstname}}</p>
                <div 
                v-for="product in ordersArray.products"
                :key="product._id"
                >
                    <p>Contient le produit : {{ordersArray}}</p>
                </div>

            </router-link>
        </div>
    </div>
</template>

<script>

    export default {
        name:"OrdersItem",
        data: function () {
            return {
                i: Number,
                ordersArray : [],
                productsId : [],
            }  
        },
        props:{
            ordersObject: String,
        },
        created() {
            // for (this.i = 0; this.i < this.ordersArray.products.length; this.i++) {
            //     console.log(this.i)                
            // }
            console.log(`Je suis ordersObject in OrdersItem = ${this.ordersObject}`)
            fetch(`http://localhost:3000/api/v1/orders/${this.ordersObject}`)
            .then(res=>res.json())
            .then((data) => {
                console.log(data)
                this.ordersArray = data
                console.log(this.ordersArray)
            })
            .catch(err=> console.log(err))
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>

</style>