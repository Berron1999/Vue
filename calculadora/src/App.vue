<template>
  <div id="app" class="container mt-5">
    <div class="calculator card">
      <div class="card-body">
        <input type="text" v-model="display" class="form-control mb-3" disabled />
        <div class="buttons row">
          <div class="col-3" v-for="button in buttons" :key="button">
            <button class="btn btn-primary w-100 mb-2" @click="handleButtonClick(button)">
              {{ button }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: '',
      buttons: ['C', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+']
    };
  },
  methods: {
    handleButtonClick(button) {
      if (button === 'C') {
        this.clearDisplay();
      } else if (button === '=') {
        this.calculateResult();
      } else {
        this.appendToDisplay(button);
      }
    },
    appendToDisplay(character) {
      this.display += character;
    },
    clearDisplay() {
      this.display = '';
    },
    calculateResult() {
      try {
        this.display = eval(this.display).toString();
      } catch {
        this.display = 'Error';
      }
    }
  }
};
</script>

<style>
.calculator {
  max-width: 300px;
  margin: 0 auto;
}
.buttons {
  display: flex;
  flex-wrap: wrap;
}
button {
  height: 50px;
}
</style>
