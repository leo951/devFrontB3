<template>
  <div class="home">
      <h1>{{ myTitle }}</h1>
      <p>J'ai {{ myAge }} ans</p>
      <p>
        {{ myAge > 30 ? "Je suis vieux" : "Je suis jeune" }}
      </p>

      <div class="visible__block" v-if="!isVisible">
        <p>Je suis invisible</p>
      </div>
      <div class="visible__block" v-else-if="isVisible">
        <p>Je suis visible</p>
      </div>
      <div class="visible__block" v-else>
        <p>Je suis ni visible ni invisible</p>
      </div>
      <div class="font-bold" v-html="textStyling">
      </div>
      <div class="link">
        <a target="_blank" :href="link">Lien vers Google</a>
        <br>
        <img :src="googleLogo" alt="logo google">
      </div>
      <div class="products__grid" v-for="product in productsArray" v-bind:key="product.id">
        {{ product.title }}
        {{ product.price }} £
      </div>
      <button @click="sayHello('Léo')">Bonjour</button>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: function () {
    return{
      myTitle: "Ma Homepage",
      myAge: 22,
      isVisible: false,
      textStyling: "<strong>c'est du bold</strong>",
      link: "https://google.fr",
      googleLogo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
      productsArray:[
        {id: 1, title: "product 1", price: 20},
        {id: 2, title: "product 2", price: 30}
      ]
    }
  },
  methods: {
    sayHello: function(name){
      alert("bonjour "+name)
    }
  },
}
</script>

<style>

</style>
