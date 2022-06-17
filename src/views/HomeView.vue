<script>
import TheWelcome from "@/components/TheWelcome.vue";
import { ref } from "vue";

export default {
  components: { TheWelcome },

  setup() {

    let message =ref("Hello, World!");

    setTimeout(() => {
      message.value = "I Have Been Changed";
    }, 2000);
    
    return {
      message,
    };
  },
};
</script>

<template>
  <main>
    <TheWelcome />
    <p>{{ message }}</p>
    <p>
      <input type="text" v-model="message" />
    </p>
  </main>
</template>
 