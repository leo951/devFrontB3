<template>
    <div class="category__grid">
        <CategoryItem
        v-for="category in CategoryArray" 
        :key="category._id"
        :categoryObject="category"/>
    </div>

</template>

<script>
import CategoryItem from './CategoryItem'
    export default {
        name: "CategoryGrid",
        components: {
            CategoryItem
        },
        props: {
            CategoryArray: Array,
        },
        created(){
        }
    }
</script>

<style lang="scss" scoped>

</style>