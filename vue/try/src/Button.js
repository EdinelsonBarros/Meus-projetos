const HelloVueApp = {
  data() {
    return {
      message: 'Olá Vue!'
    }
  }
}

Vue.createApp(HelloVueApp).mount('#hello-vue')