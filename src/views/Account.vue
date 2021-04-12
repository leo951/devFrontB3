<template>
    <div class="profil__form">
        <TitlePage title="Mon compte"/>
        <div  v-if="isLogged">
            <div class="user__content" v-if="isVisible">
            <div class="user__info" v-if="user">
                <p>{{user.firstname}}</p>
                <p>{{user.lastname}}</p>
                <p>{{user.phone}}</p>
                <p>{{user.email}}</p>
                <p>{{user.adress.fullAddress}} {{user.adress.postalCode}}</p>
                <p> {{user.adress.city}} , {{user.adress.country}} </p>
            </div>
            <div class="user__content-button">
                <button @click="logout">Se déconnecter</button>
                <button @click="modify">modifier le profil</button>
            </div>
            </div>
            <div class="modify__form" v-if="isClicked && user">
                <form @submit.prevent="update">
                    <div class="form__group">
                        <input class="inpt" type="text" name="firstname" placeholder="Prénom"  v-model="firstname" />
                    </div>
                    <div class="form__group">
                        <input class="inpt" type="text" name="lastname" placeholder="Nom" v-model="lastname" />
                    </div>
                    <div class="form__group">
                        <input class="inpt" type="text" name="phone" placeholder="Numéro de téléphone" v-model="phone"> <br>
                    </div>
                     <div class="form__group">
                        <input class="inpt" type="text" name="adress" placeholder="Adresse complète" v-model="fullAddress" />
                    </div>
                    <div class="form__group">
                        <input class="inpt" type="text" name="ville" placeholder="Ville" v-model="city" />
                    </div>
                    <div class="form__group">
                        <input class="inpt" type="text" name="cp" placeholder="Code postale" v-model="postalCode" />
                    </div>
                    <div class="form__group">
                        <input class="inpt" type="text" name="pays" placeholder="Pays" v-model="country" />
                    </div> 
                    
                    
                    <div class="form__group">
                        <input type="submit" value="update" />
                    </div>
                </form>
            </div>
        </div>
        <div v-else>
            <p>Veuillez vous connecter</p>
        </div>
        
    </div>
</template>

<script>

import VueJwtDecode from "vue-jwt-decode";
import TitlePage from "../components/TitlePage";
    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                user:{},
                isLogged:false,
                isVisible:true,
                isClicked:false,
                firstname:"",
                lastname: "",
                phone: "",
                email: "",
                fullAddress : "",
                city : "",
                postalCode : "",
                country : ""
            }
        },
        methods: {
            logout: function() {
                localStorage.removeItem('token');
                localStorage.removeItem('Admin');
                localStorage.removeItem('cart');

                this.isLogged = false;
            },
            modify: function(){
                this.isClicked = true;
                this.isVisible = false;

            },
            update: function(){
                const token = localStorage.getItem('token');
                const decodedToken = VueJwtDecode.decode(token);
                return fetch(`http://localhost:3000/api/v1/users/update/${decodedToken.id}`, {
                 method: "POST",
                 headers: {"Content-Type":"Application/json"},
                 body: JSON.stringify( {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    phone: this.phone,
                    email: this.email,
                    fullAddress : this.fullAddress,
                    city : this.city,
                    postalCode : this.postalCode,
                    country : this.country
                    
                })
                })
                .then (res => res.json())
                .then((data) => {
                    if(data.error) {
                        console.log(data.error);
                        this.messageError = data.error;
                    } else {
                        window.location.reload();
                    }
                })
                .catch(err => console.log(err));
            }
        },
        created() {
            const token = localStorage.getItem('token');
            const tokenAdmin = localStorage.getItem('tokenAdmin');
            if(token) {
               const decodedToken = VueJwtDecode.decode(token);
               console.log(decodedToken.id);
               fetch(`http://localhost:3000/api/v1/users/${decodedToken.id}`, {

                   headers: {
                       Authorization: token
                   }
               })
               .then(res => res.json())
               .then(data=>{
                   this.user = data;
                   this.firstname= data.firstname;
                   this.lastname= data.lastname;
                   this.phone= data.phone;
                   this.email= data.email;
                   this.fullAddress= data.adress.fullAddress;   
                   this.city= data.adress.city;
                   this.postalCode= data.adress.postalCode;
                   this.country= data.adress.country;
                   
                   this.isLogged = true;
                   console.log(data)
               })
               .catch(err => console.log(err))
            }            
            else if(tokenAdmin) {
               const decodedToken = VueJwtDecode.decode(tokenAdmin);
               console.log(`Je suis le token pour authorization = ${tokenAdmin}`)
               console.log(`Je suis le tokenAdmin decoder = ${decodedToken.id}`);
               fetch(`http://localhost:3000/api/v1/users/admin/${decodedToken.id}`, {
                   headers: {
                       Authorization: tokenAdmin
                   }
               })
               .then(res => res.json())
               .then(data=>{
                   console.log("Je suis data dans Account = "+data.adress)
                   this.user = data;
                   this.firstname= data.firstname;
                   this.lastname= data.lastname;
                   this.phone= data.phone;
                   this.email= data.email;
                   this.fullAddress= data.adress.fullAddress;
                   this.city= data.adress.city;
                   this.postalCode= data.adress.postalCode;
                   this.country= data.adress.country;
                   
                   this.isLogged = true;
                   console.log(data)
               })
               .catch(err => console.log(err))
            }
        },
    }
</script>

<style lang="scss" scoped>
    .user__content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

                width: 500px;
        border: 1px solid #CCCCCC;
        border-radius: 4px;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 50px;
        padding: 20px;
        .user__content-button{
            button{
                margin: 10px;
            }
        }
        .user__info{
            display: flex;
            flex-direction: column;
            text-align: start;
        }
    }
    .modify__form{
        width: 500px;
        border: 1px solid #CCCCCC;
        border-radius: 4px;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 50px;
        padding: 20px;
    }
    .inpt{
    width: 350px;
    height:30px;
    text-align: center;
    color: black;
    background-color: #FFFFFF;
    border: 1px solid #CCCCCC;
    border-radius: .25rem;
    margin-bottom: 30px;
}
</style>