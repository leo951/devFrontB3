<template>
    <div class="dash--admin">
        <TitlePage title="Bienvenue sur le dashboard Admin"/>

        <div class="user">
            <router-link :to="{name: 'DashboardUsers'}">
                <button class="btn btn-black">
                    Gérer les utilisateurs
                </button>
            </router-link>
     </div>

        <div class="product">
            <router-link :to="{name: 'DashboardProducts'}">
                <button class="btn btn-black">
                    Gérer les produits
                </button>
            </router-link>
        </div>

         <div class="categories">
            <router-link :to="{name: 'DashboardCategory'}">
            <button class="btn btn-black">
                Gérer les categories
            </button>
        </router-link>
        </div>

    </div>
</template>

<script>
import TitlePage from '../../components/TitlePage';

    export default {
     name: "Dashboard",
        components: {
            TitlePage,
        },
        data: function () {
            return {

            };
        },
        created(){

        }
    }
</script>

<style lang="scss" scoped>
    
</style>