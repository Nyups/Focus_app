<script setup lang="ts">
console.log("sasalele")

// [LOCAL STORAGE LESSON PART 01] //////////////////////////////////////////
// - Data persist after refreshing the page.
// - Data Persist after closing and reopening the browser.
// - Data is stored as a string
// - It has key/value structure
// - It is specific to the website origin (domain and protocol)

// [Saving a value]:
localStorage.setItem('username','Nyu')
// First parameter is the name given to the data we save (username)
// Which when retrieved will give "Nyu"/

// [Retrieving a value]:
const username = <string>localStorage.getItem('username');
// We store the retrieved value into a variable
console.log(username); // Log test

// [Deleting a value]:
localStorage.removeItem('username');

// [Deleting everything]:
localStorage.clear()


// [LOCAL STORAGE LESSON PART 02] //////////////////////////////////////////
// [JSON.stringify() and JSON.parse() ]
// - localStorage only accept strings

// [Converting an object into a string]:
// - "JSON.stringify(target)" turn the target into a string
const note = <object>{
  title: <string>'Blabla virtual paper',
  content: <string>"Hello I'm a virtual paper I suppose."
} // Basic object

const serializedNote = JSON.stringify(note) // Turn the note object into a string

localStorage.setItem('note', serializedNote) // Save it

// [Converting the string back]:

</script>

<template>
  <h1>test area</h1>
</template>

<style scoped></style>
