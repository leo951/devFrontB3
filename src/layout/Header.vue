<template>
    <header class="header__main">
        <div class="header__logo">
            <img src="../assets/logo.png" alt="My App Vue">
        </div>
        <div class="header__nav">
            <router-link to="/">Home</router-link>
            <router-link v-if="this.isUser" to="/cart">Panier</router-link>
            <router-link v-if="this.isUser" to="/favorite">Favoris</router-link>
            <router-link v-if="this.isUser" to="/orders">Commandes</router-link>
            <!-- <router-link to="/about">About</router-link> | -->
            <router-link v-if="this.isUser" to="/shop">Produits</router-link>
            <!-- <router-link to="/product">Product</router-link> | -->
            <router-link to="/account">Mon compte</router-link>
            <router-link v-if="this.isUser" to="/signIn">Inscription</router-link>
            <router-link v-if="isConnect" to="/login">Connexion</router-link>
            <router-link v-if="this.isAdmin" to="/dashboard">Dashboard</router-link>
        </div>
    </header>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";

    export default {
        name: "Header",

    data() {
        return {
            user: String,
            isAdmin: Boolean,
            isUser: Boolean,
            isConnect: Boolean
        }
    },
    mounted() {
        const token = localStorage.getItem('token');
        const decodedToken = VueJwtDecode.decode(token);
        fetch(`http://localhost:3000/api/v1/users/${decodedToken.id}`, {
            headers: {
                Authorization: token
            }
        })
        .then(res => res.json())
        .then(data=>{
            this.user = data;

            if (this.user.isAdmin) {
                this.isAdmin = true
                this.isUser = false
                this.isConnect = true
                // console.log(`Je suis this.admin1 = ${this.isAdmin} & Je suis aussi this.User1 = ${this.isUser} puis isConnect ${this.isConnect}`)
            }
            else{
                this.isAdmin = false
                this.isUser = true
                this.isConnect = true
                // console.log(`Je suis this.admin2 = ${this.isAdmin} & je suis aussi this.User2 = ${this.isUser} puis isConnect ${this.isConnect}`)
        }
            // console.log(`Je suis this.user = ${this.user.isAdmin}`)
        })
        .catch(err => console.log(err))     
    },
    created() {

        
    },
}
</script>

<style lang="scss" scoped>

.header__main{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: whitesmoke;

    .header__logo img{
        height: 150px;
        width: 150px;
    }
    .header__nav{
        font-size: 1.9em;
        width: 100%;
        a {
            font-size: 0.7em;
            letter-spacing: 2px;
            color: grey;
            padding: 5px 20px;
            text-decoration: none;
        }
        :hover{
            text-transform: uppercase;
            font-weight: bold;
            color: green;
        }
    }
    
}

</style>