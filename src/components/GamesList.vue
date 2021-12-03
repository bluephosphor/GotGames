<template>
  <div>
    <div :key="game.id" v-for="game in games">
      <GameEntry
        @toggle-reminder="$emit('toggle-reminder', game.id)"
        @delete-task="$emit('delete-task', game.id)"
        :game="game"
      />
    </div>
  </div>
</template>

<script>
import GameEntry from "./GameEntry";

export default {
  name: "GamesList",
  props: {
    games: Array,
  },
  components: {
    GameEntry,
  },
  emits: ["delete-task", "toggle-reminder"],
};
</script>