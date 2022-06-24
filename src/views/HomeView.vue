<script setup>
import { ref } from "vue";

let textarea = ref(null);

console.log(textarea.value);

// textarea.addEventListenere("keydown", (e) => {
//   // tab was pressed
//   if (e.keyCode == 9) {
//     // get caret position/selection
//     let val =textarea.value,
//     start = textarea.selectionStart,
//     end = textarea.selectionEnd;

//     // set textarea value to: text before caret + tab + text after caret
//     tectarea.value = val.substring(0, start) + "\t" + val.substring(end);

//     // put caret at right position again
//     textarea.selectionStart = textarea.selectionEnd = start + 1;

//     e.preventDefault();
//   }
// })
</script>

<template>
  <main>
    <form>
      <textarea ref="textarea" style="width: 100%; height: 300px">
Hi There</textarea
      >
    </form>
  </main>
</template>
