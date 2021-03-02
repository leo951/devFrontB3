<template>
    <div class="page__account">
        <TitlePage title="Account"/>
    </div>
</template>

<script>
    import TitlePage from '../components/TitlePage'
    export default {
        name: "Account",
        components: {
            TitlePage,
        },
        data: function(){
            return{
                myTitle:"Page Account",
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>