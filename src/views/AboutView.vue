<script>
import swal from 'sweetalert';
  export default {
    methods: {
      flash(message) {
        swal('Success!', message, 'success');
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
