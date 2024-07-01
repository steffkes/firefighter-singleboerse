<template>
  <div class="container">
    <section class="section">
      <div class="content">
        <h1>Singlebörsen</h1>
        <ul>
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
const { data: count_schonach } = await useFetch("/api/240511-schonach.json");
</script>
