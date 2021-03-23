<template>
    <div class="category__page">
        <div class="category__content" v-if="categoryItem">
            <TitlePage :title="categoryItem.title"/>
        </div>
    </div>
</template>

<script>
import TitlePage from '../components/TitlePage'
export default {
    name:"Category",
    components:{
        TitlePage
    },
    data: function() {
        return {
            categoryItem: {}
        }
    },
    created(){
        // console.log(this.$route.params.id)
        fetch(`http://localhost:3000/api/v1/category/${this.$route.params.id}`)
        .then(res=>res.json())
        .then((data) => {
            console.log(data)
            this.categoryItem = data;
            // console.log(this.categoryItem)
            // console.log(`Je suis categoryItem dans Category ${this.categoryItem.product.title}`)
        })
        .catch(err=> console.log(err))
    }
}
</script>

<style lang="scss" scoped>

</style>