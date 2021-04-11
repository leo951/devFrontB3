<template>
    <header class="header__main">
        <div class="header__logo">
            <img src="../assets/logo.png" alt="My App Vue">
        </div>
        <div class="header__nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/cart">Panier</router-link> |
            <router-link to="/favorite">Favoris</router-link> |
            <router-link to="/orders">Commandes</router-link> |
            <!-- <router-link to="/about">About</router-link> | -->
            <router-link to="/shop">Nos produits</router-link> |
            <!-- <router-link to="/product">Product</router-link> | -->
            <router-link to="/account">Mon compte</router-link> |
            <router-link to="/signIn">Inscription</router-link> |
            <router-link to="/login">Login</router-link> |||
            <router-link to="/dashboard">Dashboard</router-link> |



        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
        
    }
</script>

<style lang="scss" scoped>

</style>