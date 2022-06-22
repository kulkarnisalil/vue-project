<script setup>
import { useStorage } from "@/composables/useStorage";

let food = useStorage("food");

// let food = ref(localStorage.getItem("food"));
// let age = ref(localStorage.getItem("age"));

// watch(food, (val) => {
//   write("food", val);
// });

// watch(age, (val) => {
//   write("age", val);
// });
</script>

<template>
  <main>
    <p>
      What is your favorite food?
      <input type="text" v-model="food" />
    </p>
  </main>
</template>
