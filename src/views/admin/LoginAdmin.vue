<template>
    <div class="login__form">
        <form @submit.prevent="login">
            <div class="form__group">
                <label htmlFor="email">Mail</label>
                <input type="email" name="email" v-model="email"/>
            </div>
            <div class="form__group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" v-model="password"/>
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
    export default {
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
                    console.log(data)
                        if(!data.auth) {
                            this.messageError = data.message;
                            console.log('je ne rentre pas dans la validation')
                        }
                        else {
                            let tokenAdmin = data.token;
                            var ImAdmin = "je suis admin"
                            localStorage.setItem('token',tokenAdmin);
                            localStorage.setItem('Admin', ImAdmin)
                            console.log(`Je suis tokenAdmin = ${tokenAdmin}`)
                            this.$router.push('/account');
                            console.log(`Je suis connecter en temps qu'administrateur`)
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

</style>