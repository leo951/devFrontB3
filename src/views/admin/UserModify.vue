<template>
    <div class="userAd__form">
        <TitlePage title="Gerer le profil"/>
        <div v-if="show">
            <div class="user__info" v-if="UserItem">
                <p>{{firstname}}</p>
                <p>{{lastname}}</p>
                <p>{{phone}}</p>
                <p>{{email}}</p>
                <p>{{fullAddress}} {{postalCode}} ,</p>
                <p> {{city}} , {{country}} </p>
            </div>
            <div class="user__button">
                <button @click="delet"> Supprimer l'utilisateur</button>
                <button @click="modify">modifier l'utilisateur</button>
            </div>
        </div>


        <div v-if="isclick && UserItem">
                <form @submit.prevent="update">
                    <div class="form__group">
                        <input class="inpt" type="text" name="firstname" placeholder="Prénom" v-model="firstname" />
                    </div>
                    <div class="form__group">
                        <input class="inpt" type="text" name="lastname" placeholder="Nom" v-model="lastname" />
                    </div>
                    <div class="form__group">
                        <input class="inpt" type="text" name="phone" placeholder="Numéro de téléphone" v-model="phone"> <br>
                    </div>
                    
                     <div class="form__group">
                        <input class="inpt" type="text" name="address" placeholder="Adresse complète" v-model="fullAddress" />
                    </div>
                    <div class="form__group">
                        <input class="inpt" type="text" name="city" placeholder="Ville" v-model="city" />
                    </div>
                    <div class="form__group">
                        <input class="inpt" type="text" name="postalCode" placeholder="Code postale" v-model="postalCode" />
                    </div>
                    <div class="form__group">
                        <input class="inpt" type="text" name="country" placeholder="Pays" v-model="country" />
                    </div> 
                    
                    
                    <div class="form__group">
                        <input type="submit" value="update" />
                    </div>
                </form>
        </div>  
        
    </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import TitlePage from "../../components/TitlePage";
    export default {
        components: {
            TitlePage
        },
        data: function() {
            
            return {
                show:true,
                isclick:false,
                UserItem:{},
                firstname: "",
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
           delet: function() {
                const token = localStorage.getItem('token');
                const decodedToken = VueJwtDecode.decode(token);
        
                return fetch(`http://localhost:3000/api/v1/users/delete/${this.$route.params.id}`, {
                
                   headers: {
                       Authorization: token
                   }
                })
                .then (res => res.json())
                .then((data) => {
                    if(data.error) {
                        console.log(data.error);
                        this.messageError = data.error;
                    } else {
                        this.$router.push('/dashboard');
                    }
                })
                .catch(err => console.log(err));
                

            },
            modify: function(){
                this.isclick = true;
                this.show = false;

            },
            
            update: function(){
                const token = localStorage.getItem('token');
                const decodedToken = VueJwtDecode.decode(token);
                // console.log("Je suis decodedToken = "+decodedToken.id)

                //Fonctionne sur postMan mais pas ici
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
                    // console.log("Je suis data "+data.firstname)
                    this.firstname= data.firstname;
                   this.lastname= data.lastname;
                   this.phone= data.phone;
                   this.email= data.email;
                   this.fullAddress= data.fullAddress;
                   this.city= data.city;
                   this.postalCode= data.postalCode;
                   this.country= data.country;
                    if(data.error) {
                        console.log(data.error);
                        this.messageError = data.error;
                    } else {
                        this.$router.push('/dashboard');
                    }
                })
                .catch(err => console.log(err));
            }
        },
        created() {
            const token = localStorage.getItem('token');
            // console.log(token);
            if(token) {
               const decodedToken = VueJwtDecode.decode(token);
            //    console.log(decodedToken);            
               fetch(`http://localhost:3000/api/v1/users/${this.$route.params.id}`,{
            
                   headers: {
                       Authorization: token
                   }
               })
                
            .then(res=>res.json())
            .then((data)=>{
                // console.log(data);
                this.userItem = data;
                this.user = data;
                this.firstname= data.firstname;
                this.lastname= data.lastname;
                this.phone= data.phone;
                this.email= data.email;
                this.fullAddress= data.adress.fullAddress;
                this.city= data.adress.city;
                this.postalCode= data.adress.postalCode;
                this.country= data.adress.country;
            })
            .catch(err=> console.log(err));
            }
        }
    }
    
</script>

<style lang="scss" scoped>
.profil__form {
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