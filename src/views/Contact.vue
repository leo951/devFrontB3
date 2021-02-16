<template>
    <div>
        <div>
            <TitlePage :title="myTitle"/>
        </div>
        <div>

    </div>
        </div>
</template>

<script>
import TitlePage from '../components/TitlePage'
    export default {
        name: "Contact",
        components: {
            TitlePage
        },
        data: function(){
            return{
                myTitle:"Page Contact"
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>