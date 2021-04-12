<template>
    <div class="page__shop">
        <TitlePage title="Mon Eshop"/>
        <div class="search__form">
            <input type="text" v-model="searchValue" @keyup="search" placeholder="Rechercher un produit">
        </div>
        <!-- <div class="input__content">
            Résultat de votre recherche = {{searchValue}} <br>
            Résultat de votre recherche precedente = {{oldSearchValue}}
        </div> -->
        <div class="search__content">
            <ProductsGrid :productsArray="filteredShop"/>
        </div>
        <!-- <ProductsGrid :productsArray="productsFromApi"/> -->
    </div>
</template>

<script>
import TitlePage from '../components/product/ProductsItem'
import ProductsGrid from '../components/product/ProductsGrid'
import ApiProducts from '../mixins/ApiProducts';

//http://localhost:3000/api/v1/products


    export default {
        name: "Shop",
        components: {
            TitlePage,
            ProductsGrid
        },
        data: function(){
            return{
                productsFromApi: [],
                searchValue: "",
                oldSearchValue: ""
            }
        },
        watch:{
            searchValue: function (newValue, oldValue) {
                this.oldSearchValue = oldValue
            }
        },
        computed:{
            filteredShop: function () {
                let filter = new RegExp(this.searchValue, "i");
                return this.productsFromApi.filter(item=>item.title.match(filter))
            }
        },
        methods: {
            search: function(){
                console.log(this.searchValue)
            }
        },
        mixins:[ApiProducts],
        created() {
            this.getProducts()
            .then((data) => {
                console.log(data)
                this.productsFromApi = data;
            })
            .catch((err) => console.log(err));
        },
    }
</script>

<style lang="scss" scoped>

.page__shop{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
}
.product__container{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background-color: burlywood;
    width: auto;
    border-radius: 10px;
}
.search__form{
    margin: 30px;
    display: flex;
    justify-content: center;
    input{
    height: 40px;
    width: 600px;
    font-size: 1.5em;
    }
}

</style>