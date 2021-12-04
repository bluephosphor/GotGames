<template>
  <div class="container">
    <Header
      @toggle-game-search="toggleGameSearch"
      title="GOT Games?"
      :showGameSearch="showGameSearch"
    />
    <router-view class="view" :showGameSearch="showGameSearch"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showGameSearch: false,
    };
  },
  methods: {
    toggleGameSearch() {
      this.showGameSearch = !this.showGameSearch;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.view {
  height: 78vh;
  overflow: auto;
}
.container {
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 25px auto;
  height: 95vh;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
@media screen and (max-width: 600px){
    .container{
        border: none;
        margin: 0px;
        padding: 10px;
        height: 100vh;
    }
}
</style>