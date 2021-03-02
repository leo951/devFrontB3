<template>
    <div>
        <button :class="buttonClass" @click="buttonFonction">{{buttonName}}</button>
    </div>
</template>

<script>
    export default {
        name: "Button",
        props:{
            buttonFonction: {
                type: Function,
                required: true
            },
            buttonClass: {
                type: String
            },
            buttonName: {
                type: String,
                required: true
            }
        },
    }

</script>

<style lang="scss" scoped>
    .button{
        display: inline-block;
        font-size: 18px;
        text-transform: uppercase;
        transition: 0.3s all;
        border-radius: 5px;

        &-black{
            background-color: black;
            color: white;
        }
        &-white{
            background-color: white;
            color: black;
        }
    }
    .btn-black{
        background-color: black;
        color: white;
    }
    .btn-white{
        background-color: white;
        color: black;
    }
</style>