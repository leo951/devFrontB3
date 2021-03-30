export default{
    methods: {
        addToFavorite(product){
            let favori = JSON.parse(localStorage.getItem('favorite')) || [];

            let productObject = {
                id: product._id,
                title: product.title,
                price: product.price,
                isFavorite: product.isFavorite = true
            };
            console.log(productObject)

            let indexOfExistingProduct = favori.findIndex(
                (el) =>  el.id === productObject.id
            )

            if (indexOfExistingProduct !== -1) {
                favori[indexOfExistingProduct].qty += 1

            }
            else{
                favori.push(productObject);
                console.log("Le produit à été ajouté")
            }

            localStorage.setItem('favorite',JSON.stringify(favori));
        },
        getFavori(){
            return JSON.parse(localStorage.getItem('favorite'))
        },
        clearFavorite(){
            localStorage.removeItem('favorite');
        },
        removeItemFavori(product){
            let favori = JSON.parse(localStorage.getItem('favorite'));

            const filteredFavorite = favori.filter((item) => {
                return item.id !== product.id
            });
            localStorage.setItem('favorite', JSON.stringify(filteredFavorite));
        },
    },
}