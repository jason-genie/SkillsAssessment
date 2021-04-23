<!-- @format -->

<template>
  <v-container fluid>
    <v-card elevation="2" outlined class="rps-card">
      <v-card-title>Rock-Paper-Scissors</v-card-title>
      <v-space></v-space>
      <div class="letsplay" v-if="!play">
      <v-btn color="error" x-large @click="play = true">Start Game!</v-btn>
    </div>

    <h3 v-if="play">Your Move</h3>
    <div class="moves" v-if="play">
      <div v-if="isRockSelected === null || isRockSelected" v-on:click="makeUsersMove('rock')">
        <img :src="require('@/assets/rps_images/fist.png')" alt="Rock">
      </div>
      <div v-if="isPaperSelected === null || isPaperSelected" v-on:click="makeUsersMove('paper')">
        <img :src="require('@/assets/rps_images/hand.png')" alt="Fist">
      </div>
      <div v-if="isScissorsSelected === null || isScissorsSelected" v-on:click="makeUsersMove('scissors')">
        <img :src="require('@/assets/rps_images/scissors.png')" alt="Scissors">
      </div>
    </div>

    <h3 v-if="isGameOver" class="opponent-title">Opponent's Move</h3>
    <div class="opponentsMove" v-if="isGameOver">
      <div v-if="moveWillBeShown === 'rock'">
        <img :src="require('@/assets/rps_images/fist.png')" alt="Rock" >
      </div>
      <div v-if="moveWillBeShown === 'paper'">
        <img :src="require('@/assets/rps_images/hand.png')" alt="Fist">
      </div>
      <div v-if="moveWillBeShown === 'scissors'">
        <img :src="require('@/assets/rps_images/scissors.png')" alt="Scissors">
      </div>
    </div>

    <div class="winner" v-if="winner !== ''">
      <h2>{{ winner }}</h2>

      <v-btn color="primary" large @click="playAgain()">Play Again!</v-btn>
    </div>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  computed: {
    ...mapGetters({
      opponentsMove: "common/rpsOpponentsMove",
    }),
  },
  data: () => ({
    play: false,
    isGameOver: false,
    usersMove: null,
    moveWillBeShown: '',
    winner: '',
    isRockSelected: null,
    isPaperSelected: null,
    isScissorsSelected: null,
  }),
  created() {
  },
  methods: {
    ...mapActions({
      getOpponentsMove: "common/getRPSOpponentsMove",
    }),
    makeUsersMove(move) {
      if (this.usersMove === null) {
        if (move === 'rock') {
          this.usersMove = 0
          this.isRockSelected = true
          this.isPaperSelected = false
          this.isScissorsSelected = false
          this.isGameOver = true
          this.makeOpponentsMove()
        } else if (move === 'paper') {
          this.usersMove = 1
          this.isRockSelected = false
          this.isPaperSelected = true
          this.isScissorsSelected = false
          this.isGameOver = true
          this.makeOpponentsMove()
        } else if (move === 'scissors') {
          this.usersMove = 2
          this.isRockSelected = false
          this.isPaperSelected = false
          this.isScissorsSelected = true
          this.isGameOver = true
          this.makeOpponentsMove()
        } else {
          this.play = false
        }
      }
    },
    async makeOpponentsMove() {
      if (this.usersMove !== null) {
        await this.getOpponentsMove()
        this.opponentsMove = Math.floor(Math.random() * 3)
        if (this.opponentsMove === 0) {
          this.moveWillBeShown = 'rock'
          this.determineTheWinner()
        } else if (this.opponentsMove === 1) {
          this.moveWillBeShown = 'paper'
          this.determineTheWinner()
        } else if (this.opponentsMove === 2) {
          this.moveWillBeShown = 'scissors'
          this.determineTheWinner()
        } else {
          this.play = false
        }
      }
    },
    determineTheWinner() {
      if (this.opponentsMove !== null && this.usersMove !== null) {
        // Rock - Paper
        if (this.usersMove === 0 && this.opponentsMove === 1) {
          this.winner = 'You Lost!'
          return
        }

        // Rock - Scissors
        if (this.usersMove === 0 && this.opponentsMove === 2) {
          this.winner = 'You Won!'
          return
        }

        // Paper - Rock
        if (this.usersMove === 1 && this.opponentsMove === 0) {
          this.winner = 'You Won!'
          return
        }

        // Paper - Scissors
        if (this.usersMove === 1 && this.opponentsMove === 2) {
          this.winner = 'You Lost!'
          return
        }

        // Scissors - Rock
        if (this.usersMove === 2 && this.opponentsMove === 0) {
          this.winner = 'You Lost!'
          return
        }

        // Scissors - Paper
        if (this.usersMove === 2 && this.opponentsMove === 1) {
          this.winner = 'You Won!'
          return
        }

        this.winner = 'Draw!'
      }
    },
    playAgain() {
      this.isGameOver = false
      this.usersMove = null
      this.opponentsMove = null
      this.moveWillBeShown = ''
      this.winner = ''
      this.isRockSelected = null
      this.isPaperSelected = null
      this.isScissorsSelected = null
      this.play = true
    },
  },
}
</script>

<style scoped>
.rps-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 600px;
}

img {
  border: 0;
}

:focus {
  outline: 0;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container h1,
.container h2,
.container h3 {
  color: #1a237e;
}

.container h1 {
  margin-bottom: 10px;
  margin-top: 5px;
}

.container h2 {
  font-size: 1.8em;
  margin-bottom: 5px;
}

.opponent-title {
  margin-top: 30px;
}

#letsplay-button,
#playAgain {
  border-radius: 8px;
  background: #00ae68;
  border: 0;
  padding: 20px 30px;
  font-size: 1.2em;
  color: #fff;
  cursor: pointer;
}

.moves,
.opponentsMove {
  width: 420px;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  transition: justify-content 1s;
}

.moves img,
.opponentsMove img {
  width: 100px;
  height: 90px;
  cursor: pointer;
}

.moves > div,
.opponentsMove > div {
  padding: 20px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
}

.moves > div:hover,
.opponentsMove > div:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.22);
}

.opponentsMove {
  margin-top: 10px;
}

.winner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
