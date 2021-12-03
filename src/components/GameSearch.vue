<template>
  <form @submit="onSubmit" class="search-form">
    <div class ="form-row">
      <div class="form-control form-column">
          <label>How many players?</label>
          
          <div class="inline-row">
            <span class="sublabel">Min:</span>
            <input type="text" v-model="playerMin" name="player-min" placeholder="2" />
          </div>
          <div class="inline-row">
            <span class="sublabel">Max:</span>
            <input type="text" v-model="playerMax" name="player-max" placeholder="4" />
          </div>
      </div>
      <div class="form-column">
        <div class="form-control">
          <label>Ideal Playtime?</label>
            <div class="inline-row">
              <input type="text" v-model="playTime" name="play-time" placeholder="1" />
              <select name="time-unit" v-model="timeUnit">
                <option value="hours" selected>Hours</option>
                <option value="minutes">Minutes</option>
              </select>
            </div>
        </div>
        <div class="form-control">
          <label>Minimum age?</label>
          <input type="text" v-model="minAge" name="min-age" placeholder="10" />
        </div>
      </div>
    </div>
    <input type="submit" value="Submit" class="btn btn-block" />
  </form>
</template>

<script>

export default {
    name: 'GameSearch',
    data(){
        return {
            playerMin: '',
            playerMax: '',
            playTime: '',
            timeUnit: '',
            minAge: '',
        }
    },
    methods: {
        onSubmit(e){
            e.preventDefault();

            const searchTerms = {
              playerMin: this.playerMin,
              playerMax: this.playerMax,
              playTime: this.playTime,
              timeUnit: this.timeUnit,
              minAge: this.minAge,
            }

            this.$emit('game-search', searchTerms);
        }
    }
}
</script>

<style scoped>
.search-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  border: 1px solid #555;
  border-radius: 5px;
}
.form-row{
  display: flex;
  justify-content: space-between;
}
.form-column{
  display: flex;
  flex-direction: column;
  width:48%;
  padding: 16px;
  margin: 6px;
}
.inline-row{
  display:flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  
}
.sublabel{
  margin-bottom: 44px;
}
.form-control label {
  font-size: 1.2em;
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  padding: 3px 7px;
  font-size: 17px;
}
.inline-row input{
  width:57%;
}
.form-control select {
  height: 40px;
  padding: 3px 7px;
  font-size: 17px;
}
.btn-block{
  max-width: 96%;
  margin-bottom: 12px;
  justify-self: center;
}
</style>