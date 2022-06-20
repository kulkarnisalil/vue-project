<script>
  export default {
    methods: {
      flash(message) {
        alert(message);
      }
    }
  }
</script>
<template>
  <div>
    <p>
     <button @click="flash('It Works On The About Page!')">Click Me</button>
   </p>
  </div>
</template>
