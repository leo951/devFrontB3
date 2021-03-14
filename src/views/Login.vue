<template>
    <div class="form__login">
        <!-- prevent permet d'empecher le rechargement de la page -->
        <form @submit.prevent="login">
                <div class="form__group">
                    <label htmlFor="email"> Email :</label>
                    <input type="email" name="email" placeholder="Email" v-model="email">
                </div>
                <div class="form__group">
                    <label htmlFor="password"> Password :</label>
                    <input type="password" name="password" placeholder="Password" v-model="password">
                </div>
                <div>
                    <input type="submit" value="Enter">    
                </div>
        </form>
        <p v-if="messageError">
            {{messageError}}
        </p>
    </div>
</template>

<script>
    export default {
        name:"Login",
        data: function() {
            return {
                email: "",
                password: "",
                messageError: ""
            }
        },
        methods: {
            login: function() {
                const body = {
                    email: this.email,
                    password: this.password
                }
                const requestOptions = {
                   method: "POST",
                   headers: {
                       "Content-Type":"application/json"
                   },
                   body : JSON.stringify(body)
                }
                fetch(`http://localhost:3000/api/v1/users/login`,requestOptions)
                .then(res => res.json())
                .then((data) => {
                        if(!data.auth) {
                            this.messageError = data.message;
                        }
                        else {
                            let token = data.token;
                            localStorage.setItem('token',token);
                            this.$router.push('/account');
                        }
                    }
                )
                .catch(err => console.log(err))
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>