<template>
  <NuxtPage></NuxtPage>
</template>

<script setup>
useHead({
  titleTemplate: (title) => [title, "Singlebörse"].filter(Boolean).join(" | "),
});
</script>
