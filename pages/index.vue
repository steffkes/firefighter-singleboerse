<template>
  <div class="container">
    <section class="section">
      <div class="content">
        <h1>Singlebörsen</h1>
        <ul>
          <newEntry v-for="event in events" :event="event"></newEntry>

          <entry ident="250208-ulm" title="08.02.25 Ulm"></entry>
          <entry
            ident="240907-radebeul"
            title="07.09.24 Radebeul"
            past="true"
          ></entry>
          <entry
            ident="240511-schonach"
            title="11.05.24 Schonach"
            past="true"
          ></entry>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import events from "../data.js";
</script>
