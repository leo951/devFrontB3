<template>
    <div class="page__shop">
        <TitlePage title="Mon Eshop"/>
        <ProductsGrid :productsArray="productsFromApi"/>
    </div>
</template>

<script>
import TitlePage from '../components/product/ProductsItem'
import ProductsGrid from '../components/product/ProductsGrid'

//http://localhost:3000/api/v1/products


    export default {
        name: "Shop",
        components: {
            TitlePage,
            ProductsGrid
        },
        data: function(){
            return{
                productsFromApi: []
            }
        },
        methods: {
            getProducts:function(){
                fetch("http://localhost:3000/api/v1/products")
                .then(res => res.json())
                //Data corresponds à nos produits dans notre cas
                .then((data) => {
                    this.productsFromApi = data
                })
                .catch(err => console.log(err))
                }
        },
        created(){
            this.getProducts();
        }
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
</style>