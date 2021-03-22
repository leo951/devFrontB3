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
            fetch(`http://localhost:3000/api/v1/category/${this.$route.params.id}`)
            .then((data) => {
                this.categoryItem = data;
                console.log(`Je suis categoryItem dans Category ${this.categoryItem.id}`)
            })
            .catch(err=> console.log(err))
        }
    }
</script>

<style lang="scss" scoped>

</style>