<template>
    <div class="shopping__cart">
        <table class="shop__table">
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Quantité</th>
                    <th>Prix</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in favoriArray" :key="item.id">
                    <td>{{item.title}}</td>
                    <td>{{item.qty}}</td>
                    <td>{{item.price}}</td>
                    <td>
                        <button @click="removeFavori(item)">Supprimer le produit</button>
                    </td>

                </tr>
                    <div>
                        <button @click="clearFavori()">Supprimer les favoris</button>
                    </div>
            </tbody>
        </table>
    </div>
</template>


<script>
    import Favorite from '../mixins/Favorite';
    export default {
        mixins:[Favorite],
        data: function() {
            return {
                favoriArray:[],
            }
        },
        created() {
            this.favoriArray = this.getFavori();
            console.log(this.favoriArray)
        },
        computed:{

        },
        methods: {
            clearFavori: function () {
                this.clearFavorite()
                this.favoriArray = this.getFavori();
                console.log(this.favoriArray)
            },
            removeFavori: function (product) {
                this.removeItemFavori(product);
                this.favoriArray = this.getFavori();
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>