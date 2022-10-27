<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Thank you for checking out my portfolio. This version is in-process.
    </p>
    <p>
      In the mean time, please visit
      <a href="https://anhbernhardt.com/"
         target="_blank" rel="noreferrer"
         className="hover:text-orange-400"
      >
        anhbernhart.com
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
