<template functional>
  <div class="overlay">
    <div class="modal">
      <div>
        <p class="winner">Let's play!</p>
        <p>X's or O's?</p>
      </div>
      <button class="start x-color" @click="listeners['mark']('x')">x</button>
      <button class="start o-color" @click="listeners['mark']('o')">o</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'choice',
}
</script>

<style>
.overlay {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal {
  color: #333;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: inline-block;
  background-color: #e5e5e5;
  padding: 15px;
  text-align: center;
  border-radius: 5px;
}

.x-color {
  color: #10a0e1;
  border-color: #10a0e1;
}

.o-color {
  color: #e110a0;
  border-color: #e110a0;
}

button {
  cursor: pointer;
  border-radius: 5px;
  margin: 10px;
  padding: 5px 20px 10px 20px;
  padding: 1vmin 4vmin 2vmin 4vmin;
  font-size: 300%;
  font-size: 10vmin;
  background-color: transparent;
  outline: none;
  border-style: solid;
  font-family: 'PT Mono', sans;
}

button:hover {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
</style>
