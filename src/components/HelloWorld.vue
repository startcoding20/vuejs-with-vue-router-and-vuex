<template>
  <div class="hello">
    <h1><router-link to="/example">Go to example</router-link></h1>
    <h3>{{appCount}}</h3>
    <button @click="changeCount()">count++</button>
  </div>
</template>

<script>
import { ACTION_APP_INCREMENT } from './../store/app.store'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    appCount: function(){
      return this.$store.getters.getCounter
    }
  },
  methods: {
    changeCount: function(){
      this.$store.dispatch(ACTION_APP_INCREMENT)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
