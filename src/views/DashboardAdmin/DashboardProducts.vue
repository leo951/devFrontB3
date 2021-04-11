<template>
    <div class="dash--admin">
        <TitlePage title="Bienvenue sur le dashboard Admin"/>

        <div class="product">
            <div class="product__content" v-if="productItem">
                <ProductsGrid :productsArray="productsFromApi"/> 
            </div>
            <router-link :to="{name: 'CreateProducts'}">
                <button class="btn btn-black">
                    Créer un article
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
import TitlePage from '../../components/TitlePage';
import ProductsGrid from '../../components/admin/products/ProductsGrid'
import ApiProducts from '../../mixins/ApiProducts'

    export default {
     name: "DashboardProducts",
        components: {
            TitlePage,
            ProductsGrid,
        },
        data: function () {
            return {
                productsFromApi: [],
                productItem:{},
            };
        },
        mixins:[ApiProducts],
        created(){
            this.getProducts()
            .then((data) => {
                this.productsFromApi = data;
            })
            .catch((err) => console.log(err));
        }
    }
</script>

<style lang="scss" scoped>
    
</style>