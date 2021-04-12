<template>
    <div class="order__grid">
        <OrdersItem 
        v-for="order in ordersArray" 
        :key="order._id"
        :ordersObject="order"
        />
    </div>
</template>

<script>
import OrdersItem from './OrdersItem'
    export default {
        name: "OrdersGrid",
        components: {
            OrdersItem
        },
        props: {
            ordersArray: Array
        },
        created() {
        },
    }
</script>

<style lang="scss" scoped>

</style>