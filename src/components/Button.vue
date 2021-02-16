<template>
    <div>
        <button class="buttonClass" @click="buttonFunction">{{buttonName}}</button>
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


</style>