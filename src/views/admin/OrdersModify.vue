
<template>
        <div class="order__page">
            <div v-if="show">

                <div class="order__content" v-if="ordersItem">

                    <p> Numéro de la commande: {{id}}   </p>
                    <h3>Date de la commande: {{date}}</h3>
                    <h4>La commande est : {{status}}</h4>

                    <button @click="modify">Modifier le status </button>
            
                </div>
            </div>

            <div v-if="isclick">
                <form @submit.prevent="update">
            
                    <div class="form__group">
                        <input class="inpt" type="text" name="status" placeholder="Status" v-model="status" />
                    </div>
                   
    
                    <div class="form__group">
                        <input type="submit" value="update" />
                    </div>
                </form>
            </div>
    </div>
    
</template>

<script>
    import TitlePage from "../../components/TitlePage";
    export default {
        name:"OrdersModify",
        components:{
            TitlePage
        },
        data: function() {
            return {
                show:true,
                isclick:false,
                ordersItem:{},
                id:"",
                date:"",
                status:""
        

            }
        },
        methods: {
            modify: function(){
                this.isclick = true;
                this.show = false;
            },
             update: function(){
    
                return fetch(`http://localhost:3000/api/v1/order/modify/${this.$route.params.id}`, {
                 method: "POST",
                 headers: {"Content-Type":"Application/json"},
                 body: JSON.stringify( {
                    status: this.status,
                })
                })
                .then (res => res.json())
                .then((data) => {
                    this.ordersItem = data;
                    this.status= data.status;
                        if(data.error) {
                            console.log(data.error);
                            this.messageError = data.error;
                        } else {
                            this.$router.push('/Dashboard');
                        }
                })
                .catch(err => console.log(err));
            }
        
            
        },
        created() {
            fetch(`http://localhost:3000/api/v1/orders/${this.$route.params.id}`)
            .then(res=>res.json())
            .then((data)=>{
                console.log("Je suis data = ",data);
                this.ordersItem = data;
                this.id= data._id;
                this.date= data.date;
                this.status= data.status;
            })
            .catch(err=> console.log(err));
        }
    }
</script>

<style lang="scss" scoped>
.Sign__form {
        width: 500px;
        border: 1px solid #CCCCCC;
        border-radius: 4px;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 50px;
        padding: 20px;
    }

.inpt{
    width: 350px;
    height:30px;
    text-align: center;
    color: black;
    background-color: #FFFFFF;
    border: 1px solid #CCCCCC;
    border-radius: .25rem;
    margin-bottom: 30px;
}
</style>