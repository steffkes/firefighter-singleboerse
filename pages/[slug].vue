<template>
  <section
    class="hero is-medium is-info"
    :style="{
      'background-image': 'url(/' + event.slug + '.jpg)',
      'background-size': 'cover',
      'background-position': '50% 50%',
    }"
  >
    <div class="hero-body">
      <h1 class="title has-text-black">Singlebörse {{ event.name }}</h1>
      <p class="subtitle has-text-dark">
        {{
          event.date.toLocaleDateString("de-DE", {
            weekday: "long",
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
          })
        }}
        @ {{ event.location }}
      </p>
    </div>
  </section>

  <div class="container is-max-desktop">
    <p class="block mt-4">
      Alleine unterwegs und auf der Suche nach jemand der mit dir läuft? Dann
      bist du hier genau richtig! Schau wer bereits nach einem Laufpartner sucht
      und nimm Kontakt auf:
    </p>

    <iframe
      :src="event.list + '?layout=card'"
      frameborder="0"
      width="100%"
      height="533"
      style="background: transparent"
      class="block"
    ></iframe>

    <p class="block">
      Nichts passendes gefunden? Dann leg einfach einen neuen Eintrag an und wir
      drücken die Daumen, dass sich jemand bei dir meldet! Trotzdem ist
      regelmäßig wieder reinschauen sicher kein Fehler ;)
    </p>

    <iframe
      class="airtable-embed block"
      :src="event.form"
      frameborder="0"
      width="100%"
      height="533"
      style="background: transparent"
    ></iframe>
  </div>
</template>

<script setup>
import events from "../data.js";

const {
  params: { slug },
} = useRoute();
const event = events.filter((event) => event.slug == slug)[0];

useSeoMeta({
  title: event.formattedDate + " " + event.city,
  ogImage: "/" + event.slug + "-og.jpg",
});
</script>
