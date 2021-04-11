<template>
    <div class="users__grid">
        <UsersItem v-for="user in usersArray" 
        :key="user._id"
        :usersObject="user"
        />
    </div>
</template>

<script>
import UsersItem from './UsersItem'
    export default {
        name: "UsersGrid",
        components: {
            UsersItem
        },
        data: function(){
            return{
            }
        },
        props: {
            usersArray: Array
        },
    }
</script>

<style lang="scss" scoped>
</style>