<template>
    <div class="login__form">

        <TitlePage title="Page de connection d'admin"/>

        <form @submit.prevent="login">
            <div class="form__group">
                <input class="inpt" type="email" name="email" placeholder="Email" v-model="email"/>
            </div>
            <div class="form__group">
                <input class="inpt" type="password" name="password" placeholder="Mot de passe" v-model="password"/>
            </div>
            <div class="form__group">
               <input type="submit" value="se connecter">
            </div>
        </form>
        <p v-if="messageError">
            {{messageError}}
        </p>
    </div>
</template>

<script>
import TitlePage from '../../components/TitlePage';

    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                email:"",
                password:"",
                messageError:""
            }
        },
        methods: {
            login: function(e) {

                const body = {
                        email : this.email,
                        password: this.password
                }
                
                const requestOptions = {
                   method: "POST",
                   headers: {
                       "Content-Type":"application/json"
                   },
                   body : JSON.stringify(body)
                }
                fetch("http://localhost:3000/api/v1/users/loginAdmin",requestOptions)
                .then (res => res.json())
                .then((data) => {
                    // console.log(data)
                        if(!data.auth) {
                            this.messageError = data.message;
                            // console.log('je ne rentre pas dans la validation')
                        }
                        else {
                            let tokenAdmin = data.token;
                            var ImAdmin = "je suis admin"
                            localStorage.setItem('token',tokenAdmin);
                            localStorage.setItem('Admin', ImAdmin)
                            // console.log(`Je suis tokenAdmin = ${tokenAdmin}`)
                            this.$router.push('/account');
                            // console.log(`Je suis connecter en temps qu'administrateur`)
                        }
                    }
                )
                .catch(
                    err => console.log(err)
                )
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