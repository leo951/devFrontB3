
<template>
        <div class="category__page">
            <div v-if="isVisible">

                <div class="category__content" v-if="categoryItem">
                    <TitlePage :title="title"/>

                    <p>{{products.title}} </p>

                    <button @click="modify">Modifier la catégorie</button>
                    <button @click="delet">Supprimer la catégorie</button>
            
                </div>
            </div>

            <div v-if="isClicked">
                <form @submit.prevent="update">
                    <div class="form__group">
                        <input class="inpt" type="text" name="title" placeholder="Titre de la categorie" v-model="title" />
                    </div>
                    <div class="form__group">
                        <input class="inpt" type="text" name="products" placeholder="Produits" v-model="products" />
                    </div>
                   
    
                    <div class="form__group">
                        <input type="submit" value="update" />
                    </div>
                </form>
            </div>
    </div>
    
</template>

<script>
    import VueJwtDecode from "vue-jwt-decode";
    import TitlePage from "../../components/TitlePage";
    export default {
        name:"CategoryAdmin",
        components:{
            TitlePage
        },
        data: function() {
            return {
                isVisible:true,
                isClicked:false,
                categoryItem:{},
                title: "",
                products: []
        

            }
        },
        methods: {
            delet: function() {
               const token = localStorage.getItem('token');
                return fetch(`http://localhost:3000/api/v1/category/delete/${this.$route.params.id}`, {
                
                   headers: {
                       Authorization: token
                   }
                })
                .then (res => res.json())
                .then((data) => {
                    if(data.error) {
                        console.log(data.error);
                        this.messageError = data.error;
                    } else {
                        this.$router.push('/dashboard');
                    }
                })
                .catch(err => console.log(err));

            },
            modify: function(){
                this.isClicked = true;
                this.isVisible = false;
            },
             update: function(){
    
                return fetch(`http://localhost:3000/api/v1/category/update/${this.$route.params.id}`, {
                 method: "POST",
                 headers: {"Content-Type":"Application/json"},
                 body: JSON.stringify( {
                    title: this.title,
                    products: this.products,
                                                       
                })
                })
                .then (res => res.json())
                .then((data) => {
                    this.categoryItem = data;
                    this.title= data.title;
                    this.products= data.products;
                        if(data.error) {
                            console.log(data.error);
                            this.messageError = data.error;
                        } else {
                            this.$router.push('/dashboard');
                        }
                })
                .catch(err => console.log(err));
            }
        
            
        },
        created() {
            fetch(`http://localhost:3000/api/v1/category/${this.$route.params.id}`)
            .then(res=>res.json())
            .then((data)=>{
                console.log(data);
                this.productItemAdmin = data;
                this.title= data.title;
                this.products= data.products;
               
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