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
            console.log(`Je suis CategoryArray dans CategoryGrid ${this.CategoryArray}`)
        }
    }
</script>

<style lang="scss" scoped>
    .category__grid{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>