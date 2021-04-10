<template>
    <div class="profil__form">
        <TitlePage title="Mon compte"/>
        <div  v-if="isLogged">
            <div v-if="isVisible">
            <div class="user__info" v-if="user">
                <p>Nom :{{user.firstname}}</p>
                <p>Prénom :{{user.lastname}}</p>
                <p>Numéro de téléphone :{{user.phone}}</p>
                <p>Email :{{user.email}}</p>
                <p> Adresse : {{user.adress.fullAddress}} {{user.adress.postalCode}}</p>
                <p> {{user.adress.city}} , {{user.adress.country}} </p>
                <button @click="logout">Se déconnecter</button>
                <button @click="modify">modifier le profil</button>
            </div>
            </div>
            <div v-if="isClicked && user">
                <form @submit.prevent="update">
                    <div class="form__group">
                        <label htmlFor="firstname"> Prenom </label>
                        <input class="inpt" type="text" name="firstname"  v-model="firstname" />
                    </div>
                    <div class="form__group">
                        <label htmlFor="lastname"> Nom </label>
                        <input class="inpt" type="text" name="lastname"  v-model="lastname" />
                    </div>
                    <div class="form__group">
                        <label htmlFor="phone"> Numéro de téléphone </label>
                        <input class="inpt" type="text" name="phone" v-model="phone"> <br>
                    </div>
                    
                     <div class="form__group">
                        <label htmlFor="address"> Adresse (numéro et rue) </label>
                        <input class="inpt" type="text" name="adress"  v-model="fullAddress" />
                    </div>
                    <div class="form__group">
                        <label htmlFor="ville"> Ville </label>
                        <input class="inpt" type="text" name="ville"  v-model="city" />
                    </div>
                    <div class="form__group">
                        <label htmlFor="cp"> Code postal </label>
                        <input class="inpt" type="text" name="cp"  v-model="postalCode" />
                    </div>
                    <div class="form__group">
                        <label htmlFor="pays"> Pays </label>
                        <input class="inpt" type="text" name="pays"  v-model="country" />
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
        }
    }
</script>

<style lang="scss" scoped>

</style>