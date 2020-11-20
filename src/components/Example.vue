<template>
  <div class="hello">
    <h1><router-link to="/">Go to home</router-link></h1>
    <h3>{{appCount}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Example',
  props: {
    msg: String
  },
  computed: {
    appCount: function(){
      return this.$store.getters.getCounter
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
