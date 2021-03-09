<template>
    <div class="product__page">
        <div class="product__content" v-if="productItem">
            <TitlePage :title="productItem.title"/>
            <p>
                Le prix est de : {{productItem.price | formatPrice}}
            </p>
        </div>
    </div>
</template>

<script>
import TitlePage from '../components/TitlePage'
    export default {
        name:"Product",
        components:{
            TitlePage
        },
        data: function() {
            return {
                productItem: {}
            }
        },
        created(){
            fetch(`http://localhost:3000/api/v1/products/${this.$route.params.id}`)
            .then(res=>res.json())
            .then((data) => {
                this.productItem = data;
            })
            .catch(err=> console.log(err))
        }
    }
</script>

<style lang="scss" scoped>

</style>