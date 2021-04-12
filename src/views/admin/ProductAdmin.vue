
<template>
    <div class="product__page">
        <div v-if="isVisible">
            <div class="product__content" v-if="productItem">
                <TitlePage :title="productItem.title"/>

                <img :src="(`@/assets/img/${this.imageUrl}`)"/>
                <!-- <img :src="require(`@/assets/img/${productsObject.imageUrl}`)" alt=""> -->
                <p>
                    {{productItem.description}}
                </p>
                <p>
                    {{productItem.price}}
                </p>
                <button @click="modify">Modifier le produit</button>
                <button @click="delet">Supprimer le produit</button>
                
            </div>
        </div>
        <div v-if="isClicked">
                <form @submit.prevent="update">
                    <div class="form__group">
                        <input class="inpt" type="text" name="title" placeholder="Titre" v-model="title" />
                    </div>
                    <div class="form__group">
                        <input class="inpt" type="text" name="description" placeholder="Description du produit" v-model="description" />
                    </div>
                    <div class="form__group">
                        <input class="inpt" type="text" name="image" placeholder="Nom de l'image" v-model="imageUrl"> <br>
                    </div>
                    
                     <div class="form__group">
                        <input class="inpt" type="text" name="price" placeholder="Prix" v-model="price" />
                    </div>
                    <div class="form__group">
                        <input class="inpt" type="text" name="category" placeholder="Categorie" v-model="category" />
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
        name:"ProductAdmin",
        components:{
            TitlePage
        },
        data: function() {
            return {
                isVisible:true,
                isClicked:false,
                productItem:{},
                title: "",
                description: "",
                imageUrl: "",
                price: "",
                category : ""  

            }
        },
        methods: {
           delet: function() {
               const token = localStorage.getItem('token');
                const decodedToken = VueJwtDecode.decode(token);
                return fetch(`http://localhost:3000/api/v1/products/delete/${this.$route.params.id}`, {
                
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
    
                return fetch(`http://localhost:3000/api/v1/products/update/${this.$route.params.id}`, {
                 method: "POST",
                 headers: {"Content-Type":"Application/json"},
                 body: JSON.stringify( {
                    title: this.title,
                    description: this.description,
                    imageUrl: this.imageUrl,
                    price: this.price,
                    category : this.category                                      
                })
                })
                .then (res => res.json())
                .then((data) => {
                    this.productItem = data;
                    this.title= data.title;
                    this.description= data.description;
                    this.imageUrl= data.imageUrl;
                    this.price= data.price;
                    // console.log(`je suis this.price ${this.prices}`)
                    this.category= data.category;
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
            fetch(`http://localhost:3000/api/v1/products/${this.$route.params.id}`)
            .then(res=>res.json())
            .then((data)=>{
                // console.log(data);
                this.productItem = data;
                this.title= data.title;
                this.description= data.description;
                this.imageUrl= data.imageUrl;
                this.price= data.price;
                this.category= data.category;
                // console.log(`Je suis this.imgUrl = ${this.imageUrl}`)
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