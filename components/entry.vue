<template>
  <li>
    <component :is="past ? 's' : 'p'">
      <NuxtLink :to="ident">{{ title }}</NuxtLink>
      <span v-if="!past" class="tag is-primary ml-2">🤚 {{ count }}</span>
    </component>
  </li>
</template>

<script setup>
const { ident, title, past } = defineProps(["ident", "title", "past"]);
const { data: count } = await useFetch("/api/" + ident + ".json");
</script>
