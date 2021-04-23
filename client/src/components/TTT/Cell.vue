<template functional>
  <div @click="listeners.click" class="cell" :class="{ pointer: !props.mark }">
    <div :class="props.mark"></div>
  </div>
</template>

<script>
export default {
  name: 'cell',
  props: ['mark'],
}
</script>

<style>
.pointer {
  cursor: pointer;
}

.cell {
  float: left;
  width: 150px;
  width: 30vmin;
  height: 150px;
  height: 30vmin;
  position: relative;
}

.x:before {
  position: absolute;
  top: 0;
  left: 75px;
  left: 15vmin;
  content: '';
  display: block;
  width: 7px;
  width: 1.5vmin;
  height: 150px;
  height: 30vmin;
  background-color: #10a0e1;
  border-radius: 5px;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.x:after {
  position: absolute;
  top: 0;
  left: 75px;
  left: 15vmin;
  content: '';
  display: block;
  width: 7px;
  width: 1.5vmin;
  height: 150px;
  height: 30vmin;
  background-color: #10a0e1;
  border-radius: 5px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.o {
  position: absolute;
  top: 15px;
  top: 3vmin;
  left: 15px;
  left: 3vmin;
  width: 120px;
  width: 24vmin;
  height: 120px;
  height: 24vmin;
  border: 8px solid #e110a0;
  border: 1.5vmin solid #e110a0;
  border-radius: 50%;
}
</style>
