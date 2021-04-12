<template>
    <div class="category__card" v-if="categoryObject">
        <router-link :to="{name: 'Category', params:{id:categoryObject._id}}">
            <div class="home__category">
                <h2>
                    {{categoryObject.title}}
                </h2>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name:"CategoryItem",
        created() {
            // console.log(`Je suis categoryObject dans CategoryItem ${this.categoryObject.title}`)
        },
        props:{
            categoryObject: Object,
        }
    }
</script>

<style lang="scss" scoped>
.home__category{
    height: 200px;
    width: 200px;
    background-color: whitesmoke;
    border-radius: 10px;
    text-decoration: none;
    margin: 0px 20px;
    h2{
        display: flex;
        flex-direction: row;
        padding-top: 85px;
        justify-content: center;
    }

    :hover{
        text-transform: uppercase;
        text-decoration: none;
        font-weight: bold;
        color: green;
        transition-delay: 0,3s;

    }
}
a{
    text-decoration: none;
    letter-spacing: 2px;
    color: grey;
}
</style>