<template>
    <div>
        <div class="order__card" v-if="ordersObject">
                <h2>
                    Votre numéro de commande est : {{allData._id}}
                </h2>
                <h3>Votre commande à été réalisé le : {{allData.date}}</h3>
                <h4>Votre commande est : {{allData.status}}</h4>
                <h4>Votre commande comporte : {{allData.products[0].title}}</h4>
                <!-- <div 
                v-for="product in allData.products"
                :key="product._id"
                > -->
                    <!-- <p>Contient le produit : {{allData}}</p> -->
                <!-- </div> -->
        </div>
    </div>
</template>

<script>

    export default {
        name:"OrdersItem",
        data: function () {
            return {
                i: Number,
                allData : [] || {},
                productsId : [],
            }  
        },
        props:{
            ordersObject: String,
        },
        created() {
            // for (this.i = 0; this.i < this.allData.products.length; this.i++) {
            //     console.log(this.i)                
            // }
            console.log(`Je suis ordersObject in OrdersItem = ${this.ordersObject}`)
            fetch(`http://localhost:3000/api/v1/orders/${this.ordersObject}`)
            .then(res=>res.json())
            .then((data) => {
                console.log(data)
                this.allData = data
                console.log(this.allData)
            })
            .catch(err=> console.log(err))
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>

</style>