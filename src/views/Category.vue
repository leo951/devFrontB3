<template>
    <div class="category__page">
        <div class="category__title" v-if="categoryItem">
            <TitlePage :title="categoryItem.title"/>
        </div>
        <div class="categery__content">
            <!-- <ProductsGrid :productsArray="products"/> -->
            <h1>{{this.products.title}}</h1>
            
        </div>
    </div>
</template>

<script>
import TitlePage from '../components/TitlePage'
import ProductsGrid from '../components/product/ProductsGrid'
import ApiProducts from '../mixins/ApiProducts';
export default {
    name:"Category",
    components:{
        TitlePage,
        ProductsGrid

    },
    data: function() {
        return {
            categoryItem: {},
            products: []
        }
    },
    mixins:[ApiProducts],
    created(){
        // console.log(this.$route.params.id)
        fetch(`http://localhost:3000/api/v1/category/${this.$route.params.id}`)
        .then(res=>res.json())
        .then((data) => {
            for (let i = 0; i < data.product.length; i++) {
                fetch(`http://localhost:3000/api/v1/products/${data.product[i]}`)
                .then(res=>res.json())
                .then((data) => {
                    this.products = data
                    console.log(this.products.title)
                // this.products.push(data);
                // console.log(this.products[i].title)
            })
            .catch((err) => console.log(err));
            }

            // console.log(data.product[0])
            
            // this.categoryItem = data;
            
            // console.log(this.categoryItem)
            // console.log(`Je suis categoryItem dans Category ${this.categoryItem.product.title}`)
        })
        .catch(err=> console.log(err))
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>

</style>