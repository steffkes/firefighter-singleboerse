<template>
  <li>
    <component :is="past ? 's' : 'p'">
      <NuxtLink :to="event.slug"
        ><time :datetime="event.date.toISOString().substr(0, 10)">{{
          event.formattedDate
        }}</time>
        {{ event.city }}</NuxtLink
      >
      <span v-if="!past" class="tag is-primary ml-2">🤚 {{ count }}</span>
    </component>
  </li>
</template>

<style scoped>
time {
  font-variant-numeric: tabular-nums;
}
</style>

<script setup>
const past = false;
const { event } = defineProps(["event"]);
const { data: count } = await useFetch("/api/" + event.slug + ".json");
</script>
