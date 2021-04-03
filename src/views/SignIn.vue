<template>
    <div class="login__form">
        <TitlePage title="Page d'inscription"/>
        <form @submit.prevent="sign">
            <div class="form__group">
                <label htmlFor="firstName"> Prenom </label>
                <input class="inpt" type="text" name="firstName"  v-model="firstname" />
            </div>
             <div class="form__group">
                <label htmlFor="lastName"> Nom </label>
                <input class="inpt" type="text" name="lastName"  v-model="lastname" />
            </div>
            <div class="form__group">
                <label htmlFor="telephone"> Numéro de téléphone </label>
                <input class="inpt" type="text" name="telephone" v-model="phone"> <br>
            </div>
            <div class="form__group">
                <label htmlFor="email"> Email </label>
                <input class="inpt" type="text" name="email"  v-model="email" />
            </div>
            <div class="form__group">
                <label htmlFor="email"> Adresse (numéro et rue) </label>
                <input class="inpt" type="text" name="fullAddress"  v-model="adress.fullAddress" />
            </div>
            <div class="form__group">
                <label htmlFor="email"> Ville </label>
                <input class="inpt" type="text" name="city"  v-model="adress.city" />
            </div>
            <div class="form__group">
                <label htmlFor="email"> Code postal </label>
                <input class="inpt" type="text" name="postalCode"  v-model="adress.postalCode" />
            </div>
            <div class="form__group">
                <label htmlFor="email"> Pays </label>
                <input class="inpt" type="text" name="country"  v-model="adress.country" />
            </div>

            <div class="form__group">
                <label htmlFor="password"> Mot de passe </label>
                <input class="inpt" type="password" name="password" v-model="password" />
            </div>
            <div class="form__group">
                <input type="submit" value="s'inscrire" />
            </div>
        </form>
        <p v-if="messageError">
            {{messageError}}
        </p>
    </div>
</template>
<script>
import TitlePage from '../components/TitlePage';

 export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                firstname: "",
                lastname: "",
                phone:"",
                email: "",
                password: "",
                adress: {},

                messageError: ""
            }
        },
        methods: {
            sign: function() {
                return fetch("http://localhost:3000/api/v1/users", {
                    method: "POST",
                    headers: {"Content-Type":"Application/json"},
                    body: JSON.stringify( {
                        firstname: this.firstname,
                        lastname: this.lastname,
                        phone: this.phone,
                        email: this.email,
                        password: this.password,
                        adress: {
                            fullAddress: this.adress.fullAddress,
                            city: this.adress.city,
                            postalCode: this.adress.postalCode,
                            country: this.adress.country
                            
                        } 
                    })
                })
                .then (res => res.json())
                .then((data) => {
                    if(data.error) {
                        console.log(data.error);
                        this.messageError = data.error;
                    } else {
                        this.$router.push('/login');
                    }
                })
                .catch(err => console.log(err));
            }
        }
    }
</script>

<style lang="scss" scoped>
.login__form {
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