<template>
    <div class="login__form">
        <TitlePage title="Page d'inscription"/>
        <form @submit.prevent="sign">
            <div class="form__group">
                <input class="inpt" type="text" name="firstName" placeholder="Prénom" v-model="firstname" />
            </div>
             <div class="form__group">
                <input class="inpt" type="text" name="lastName" placeholder="Nom" v-model="lastname" />
            </div>
            <div class="form__group">
                <input class="inpt" type="text" name="telephone" placeholder="Numéro de téléphone" v-model="phone"> <br>
            </div>
            <div class="form__group">
                <input class="inpt" type="text" name="email" placeholder="Email" v-model="email" />
            </div>
            <div class="form__group">
                <input class="inpt" type="text" name="fullAddress" placeholder="Adresse complète" v-model="adress.fullAddress" />
            </div>
            <div class="form__group">
                <input class="inpt" type="text" name="city" placeholder="Ville" v-model="adress.city" />
            </div>
            <div class="form__group">
                <input class="inpt" type="text" name="postalCode" placeholder="Code postale" v-model="adress.postalCode" />
            </div>
            <div class="form__group">
                <input class="inpt" type="text" name="country" placeholder="Pays" v-model="adress.country" />
            </div>

            <div class="form__group">
                <input class="inpt" type="password" name="password" placeholder="Mot de passe" v-model="password" />
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