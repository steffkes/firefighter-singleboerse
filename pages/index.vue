<template>
  <div class="container">
    <section class="section">
      <div class="content">
        <h1>Singlebörsen</h1>
        <ul>
          <li>
            <NuxtLink to="240907-radebeul">07.09. Radebeul</NuxtLink>
            <span class="tag is-primary ml-2">🤚 {{ count_radebeul }}</span>
          </li>
          <li><del>
            <NuxtLink to="240511-schonach">11.05. Schonach</NuxtLink>
            <span class="tag is-primary ml-2">🤚 {{ count_schonach }}</span>
          </del></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
const { data: count_radebeul } = await useFetch("/api/240907-radebeul.json");
const { data: count_schonach } = await useFetch("/api/240511-schonach.json");
</script>
