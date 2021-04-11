<template>
    <div class="dash--admin">
        <TitlePage title="Bienvenue sur le dashboard Admin"/>

        <div class="user">
            <UsersGrid :usersArray="usersFromApi" />
            <router-link :to="{name: 'CreateUser'}">
                <button class="btn btn-black">
                    Créer un utilisateur
                </button>
            </router-link>
     </div>
    </div>
</template>

<script>
import TitlePage from '../../components/TitlePage';

import UsersGrid from '../../components/admin/users/UsersGrid';
import ApiUsers from '../../mixins/ApiUsers'

    export default {
     name: "DashboardUsers",
        components: {
            TitlePage,
            UsersGrid,
        },
        data: function () {
            return {
                usersFromApi: [],
            };
        },
        mixins:[ApiUsers],
        created(){
            this.getAllUser()
                .then((data) => {
                    this.usersFromApi = data;
                })
                .catch((err) => console.log(err));
        }
    }
</script>

<style lang="scss" scoped>
    
</style>