<template>
  <NuxtPage></NuxtPage>
  <footer class="footer mt-6">
    <div class="content has-text-centered">
      <p>
        Hast du Fragen zur Singlebörse?<br />
        Melde dich bitte bei <strong>Stefan</strong>:
        <a href="tel:004916097048114">📞 0160 970 48 114</a>&nbsp;
        <a href="mailto:stefan@mathe.is">✉️ stefan@mathe.is</a>
      </p>
    </div>
  </footer>
</template>

<script setup>
useHead({
  titleTemplate: (title) => [title, "Singlebörse"].filter(Boolean).join(" | "),
});
</script>
