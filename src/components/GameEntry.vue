<template>
    <div @dblclick="$emit('toggle-reminder', game.id)" class="game">
        <div><h3>{{ game.name }}</h3>
        <p>Year: {{game.year}} </p>
        <p>Playtime: {{game.playingtime}} minutes</p>
        <p>{{game.minplayers}} - {{game.maxplayers}} players</p></div>
        <img :src="game.thumbnail">
    </div>
</template>

<script>
export default {
    name: 'GameEntry',
    props: {
        game: Object
    },
}
</script>

<style scope>
.fas {
  color: red;
}
.game {
  display: flex;
  justify-content: space-between;
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.game.selected {
  border-left: 5px solid green;
}
.game h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>