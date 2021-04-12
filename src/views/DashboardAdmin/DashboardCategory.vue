<template>
    <div class="dash--admin">

        <TitlePage title="Bienvenue sur le dashboard Admin"/>
        
         <div class="categories">
            <div class="category__container-center" v-if="categoryItem">
                <CategoryGrid :CategoryArray="categoryFromApi"/> 
            </div>
            <router-link :to="{name: 'CreateCategory'}">
            <button class="btn btn-black">
                Créer un catégorie
            </button>
        </router-link>
        </div>

    </div>
</template>

<script>

import CategoryGrid from '../../components/admin/category/CategoryGrid';
import ApiCategory from '../../mixins/ApiCategory';
import TitlePage from '../../components/TitlePage';




    export default {
     name: "DashboardCategory",
        components: {
            TitlePage,
            CategoryGrid
        },
        data: function () {
            return {
                categoryFromApi:[],
                categoryItem:{}
            };
        },
        mixins:[ApiCategory],
        created(){
            this.getCategoryAll()
                .then((data) => {
                    this.categoryFromApi = data;
                })
                .catch((err) => console.log(err));
        }
    }
</script>

<style lang="scss" scoped>
    .category__container-center{
        display: flex;
        flex-direction: row;
        justify-content: center;
  }
</style>