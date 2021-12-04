<template>
  <form @submit="onSubmit" class="search-form">
      <div class="form-column">
        <div class="form-control">
        <label>How many players?</label>
        <input
          type="text"
          v-model="playerNum"
          name="player-num"
          placeholder="2"
        />
      </div>
        <div class="form-control">
          <label>Ideal Playtime?</label>
          <div class="inline-row">
            <input
              type="text"
              v-model="playTime"
              name="play-time"
              placeholder="1"
            />
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
    <input type="submit" value="Submit" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: "GameSearch",
  data() {
    return {
      playerNum: "2",
      playTime: "30",
      timeUnit: "minutes",
      minAge: "12",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      const searchTerms = {
        playerNum: this.playerNum,
        playTime: (this.timeUnit === 'minutes') ? this.playTime : this.playTime * 60,
        minAge: this.minAge,
      };

      this.$emit("game-search", searchTerms);
    },
  },
};
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
.form-row {
  display: flex;
  justify-content: space-between;
}
.form-column {
  display: flex;
  flex-direction: column;
  width: 95%;
  padding: 16px;
  margin: 6px;
}
.inline-row {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
}
.sublabel {
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
.inline-row input {
  width: 60%;
}
.form-control select {
  height: 40px;
  padding: 3px 7px;
  font-size: 17px;
  width: 35%;
}
.btn-block {
  max-width: 96%;
  margin-bottom: 12px;
  justify-self: center;
}
@media screen and (max-width: 600px)  {
    .form-control label{
        font-size: 1em
    }
}
</style>