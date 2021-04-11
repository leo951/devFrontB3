<template>
    <div class="user__card">
        <router-link :to="{name: 'UserModify', params:{id:usersObject._id}}">
            <h2>
                {{usersObject.firstname}}
            </h2>
        </router-link>
        <div>
          <p> Nom: {{usersObject.firstname}} </p>
          <p> Mail: {{usersObject.email}} </p>
          <p> Telephone: {{usersObject.phone}} </p>
          <!-- <p> Adresse: {{usersObject.fullAddress}}
                    {{usersObject.postalCode}}
                    {{usersObject.city}}
            </p> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: "UsersItem",
        components: {
        },
        data: function(){
            return{
            }
        },
        props: {
            usersObject: Object
        },
         methods:{
          
            
        }
    }
</script>

<style lang="scss" scoped>
</style>