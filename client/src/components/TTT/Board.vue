<template>
  <div>
    <div class="ttt-board" :class="{ 'overlay-on': winner }">
      <loading
        :active.sync="isLoading"
        loader="dots"
        :opacity="0.3"
        color="#006633"
      ></loading>
      <div class="board-row" v-for="(row, i) in cells" :key="i">
        <Cell
          v-for="(col, j) in row"
          :key="j"
          @click="cellClicked(i, j)"
          :mark="col"
        />
      </div>
      <div class="hline line1"></div>
      <div class="hline line2"></div>
      <div class="vline line3"></div>
      <div class="vline line4"></div>
    </div>
    <Choice v-if="!user" @mark="selectMark" />
    <Winner v-if="winner" :winner="winner" @mark="selectMark" />
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import Cell from './Cell'
import Choice from './Choice'
import Winner from './Winner'
import checkWin from '../../util/checkWin'
import { mapGetters, mapActions } from "vuex"

export default {
  components: {
    Cell,
    Choice,
    Winner,
    Loading,
  },
  computed: {
    ...mapGetters({
      tttAiMove: "common/tttAiMove",
    }),
  },
  data() {
    return {
      cells: Array(3)
        .fill(null)
        .map(() => Array(3).fill(null)),
      user: null,
      comp: null,
      winner: null,
      isLoading: false,
    }
  },
  watch: {
    cells: {
      handler() {
        this.winner = checkWin(this.cells)
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    ...mapActions({
      tttAiAssign: "common/tttAiAssign",
      getTttAiMove: "common/getTttAiMove",
    }),
    cellClicked(ui, uj) {
      if (!this.cells[ui][uj]) {
        this.$set(this.cells[ui], uj, this.user)
        this.isLoading = true
        // used nextTick because of wait `cells` watcher to set winner state
        this.$nextTick(() => {
          if (!this.winner)
            setTimeout(async () => {
              await this.getTttAiMove({i: ui, j: uj})
              const { i, j } = this.tttAiMove
              if (i != undefined && j != undefined)
                this.$set(this.cells[i], j, this.comp)
              this.isLoading = false
            }, 500)
        })
      }
    },
    async selectMark(mark) {
      Object.assign(this.$data, this.$options.data()) //initial state
      let result = await this.tttAiAssign(mark)
      if (result === null) {
        alert("Server is gone")
        this.user = 'o'
        return;
      }
      const { i, j } = this.tttAiMove
      this.user = mark
      this.comp = mark === 'x' ? 'o' : 'x'
      if (mark === 'o') {
        // first random play by AI
        this.$set(this.cells[i], j, this.comp)
      }
    },
  },
}
</script>

<style>
.ttt-board {
  position: relative;
  width: 450px;
  width: 90vmin;
  height: 450px;
  height: 90vmin;
  margin: auto;
  background-color: #e5e5e5;
}

.board-row {
  height: 150px;
  height: 30vmin;
}

.hline {
  position: absolute;
  height: 5px;
  height: 1vmin;
  width: 440px;
  width: 88vmin;
  left: 5px;
  left: 1vmin;
  border-radius: 50px;
  background-color: #333;
}

.line1 {
  top: 147.5px;
  top: 29.5vmin;
}

.line2 {
  bottom: 147.5px;
  bottom: 29.5vmin;
}

.vline {
  position: absolute;
  width: 5px;
  width: 1vmin;
  height: 440px;
  height: 88vmin;
  top: 5px;
  top: 1vmin;
  border-radius: 50px;
  background-color: #333;
}

.line3 {
  left: 147.5px;
  left: 29.5vmin;
}

.line4 {
  right: 147.5px;
  right: 29.5vmin;
}

.overlay-on {
  -webkit-filter: blur(5px);
  filter: blur(5px);
}

.vld-overlay {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  align-items: center;
  display: none;
  justify-content: center;
  overflow: hidden;
  z-index: 9999;
}

.vld-overlay.is-active {
  display: flex;
}

.vld-overlay.is-full-page {
  z-index: 9999;
  position: fixed;
}

.vld-overlay .vld-background {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background: #fff;
  opacity: 0.5;
}

.vld-overlay .vld-icon,
.vld-parent {
  position: relative;
}
</style>
