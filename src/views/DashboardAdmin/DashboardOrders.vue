<template>
    <div class="dash--admin">
       
        <TitlePage title="Gérer les commandes"/>

        <div class="orders">
            <div class="orders__content" v-if="ordersItem">
                <OrdersGrid :ordersArray="ordersFromApi"/> 
            </div>
        </div>

    </div>
</template>

<script>
import TitlePage from '../../components/TitlePage';
import OrdersGrid from '../../components/admin/orders/OrdersGrid';
import ApiOrders from '../../mixins/ApiOrders';

    export default {
     name: "DashboardOrders",
        components: {
            TitlePage,
            OrdersGrid
        },
        data: function () {
            return {
              
                ordersFromApi:[],
                ordersItem:{}


            };
        },
        mixins:[ApiOrders],
        created(){
            this.getOrdersAll()
                .then((data) => {
                    this.ordersFromApi = data;
                })
                .catch((err) => console.log(err));
        }
    }
</script>

<style lang="scss" scoped>
    
</style>