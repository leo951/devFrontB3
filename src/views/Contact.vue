<template>
    <div>
        <div>
            <TitlePage :title="myTitle"/>
            <Button 
            :buttonName="buttonContent"
            :buttonClass="ClassButton"
            :buttonFonction="functionButton"/>
        </div>

    </div>
</template>

<script>
import TitlePage from '../components/TitlePage'
import Button from '../components/Button'
    export default {
        name: "Contact",
        components: {
            TitlePage,
            Button
        },
        data: function(){
            return{
                myTitle:"Page Contact",
                ClassButton: "button-black",
                buttonContent:"Clique-moi"
            }
        },
        methods: {
            functionButton: function(){
                alert("tu as bien cliquer");
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>