<template>
    <div>
      <GameSearch
        v-show="showGameSearch"
        @game-search="gameSearch" 
      />
      <GamesList
        :games="games"
      />
    </div>
</template>

<script>
import GamesList  from "../components/GamesList";
import GameSearch from "../components/GameSearch";
import fb         from "@/firebase";

export default {
  name: 'Home',
  props: {
    showGameSearch: Boolean,
  },
  components: {
    GamesList,
    GameSearch
  },
  data(){
    return {
      games: [],
    }
  },
  methods: {
    async gameSearch(searchTerms){
      this.games = await fb.gameQuery(searchTerms);
    }
  },
  async created() {
    //this.games = await fb.loadGamesList();
  },
}
</script>