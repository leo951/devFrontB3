<template>
    <div class="dash--admin">
        <TitlePage title="Bienvenue sur le dashboard Admin"/>
        <div class="dashboard__container">
            <div class="container">
                <router-link :to="{name: 'DashboardUsers'}">
                    <div class="Dashboard__menu">
                       <h2>Gérer les utilisateurs</h2> 
                    </div>
                </router-link>
            </div>

            <div class="container">
                <router-link :to="{name: 'DashboardProducts'}">
                    <div class="Dashboard__menu">
                        <h2>Gérer les produits</h2>
                    </div>
                </router-link>
            </div>

            <div class="container">
                <router-link :to="{name: 'DashboardCategory'}">
                <div class="Dashboard__menu">
                    <h2>Gérer les categories</h2>
                </div>
            </router-link>
            </div>

            <div class="container">
                <router-link :to="{name: 'DashboardOrders'}">
                <div class="Dashboard__menu">
                    <h2>Gérer les commandes</h2>
                </div>
            </router-link>
            </div>
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
.dashboard__container{
    height: auto;
    width: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

        .container{
            height: 300px;
            width: 300px;
            background-color: whitesmoke;
            border-radius: 10px;
            margin: 50px;
            font-size: 1.5em;
            text-decoration: none;
            a{
                text-decoration: none;
                text-decoration: none;
                letter-spacing: 2px;
                color: grey;
                .Dashboard__menu{
                    text-decoration: none;
                    h2{
                        display: flex;
                        flex-direction: row;
                        padding-top: 85px;
                        justify-content: center;
                        text-decoration: none;
                    }
                        :hover{
                            text-transform: uppercase;
                            text-decoration: none;
                            font-weight: bold;
                            color: green;
                            transition-delay: 0,3s;
                        }
            }
            }

        }
}

</style>