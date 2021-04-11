<template>
    <div class="page__order">
        <TitlePage title="Mon Commandes"/>
        <div>
            <!-- <OrdersGrid :ordersArray="ordersFromApi"/>
             -->
            <OrdersGrid :ordersArray="ordersId"/>

        </div>
    </div>
</template>

<script>
import TitlePage from '../components/TitlePage'
import OrdersGrid from '../components/order/OrdersGrid'
import ApiOrders from '../mixins/ApiOrders'
import VueJwtDecode from "vue-jwt-decode";

//http://localhost:3000/api/v1/products


    export default {
        name: "Orders",
        components: {
            TitlePage,
            OrdersGrid
        },
        data: function(){
            return{
                ordersFromApi: [],
                ordersId:[]
            }
        },
        methods: {
        },
        mixins:[ApiOrders],
        created() {
            const token = localStorage.getItem('token');
            if(token) {
                const decodedToken = VueJwtDecode.decode(token);
                console.log("Je suis l'id decodé = "+decodedToken.id);
                // this.idUser = decodedToken.id
               fetch(`http://localhost:3000/api/v1/users/${decodedToken.id}`, {
                   headers: {
                       Authorization: token
                   }
               })
                .then (res => res.json())
                .then((data) => {
                    this.ordersFromApi = data;
                    // console.log("je suis data = ", data)
                    console.log(`Je suis ordersFromApi in Orders = ${this.ordersFromApi.orders[0]._id}`)
                    for (let index = 0; index < this.ordersFromApi.orders.length; index++) {
                        this.ordersId.push(this.ordersFromApi.orders[index]._id)
                        console.log(`Je suis ordersId = ${this.ordersId}`)
                    }
                })
                .catch((err) => console.log(err));
                }
        },
    }
</script>

<style lang="scss" scoped>

.page__shop{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
}
.product__container{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background-color: burlywood;
    width: auto;
    border-radius: 10px;
}
</style>