<template>
  <div class="home">
    <h1>Homepage</h1>
    <h1 class="display-4">Big text</h1>

    <v-btn class="pink">Кнопка</v-btn>
    <v-btn depressed large color="primary">Другая</v-btn>
    <v-btn class="pink v-btn--flat">Еще одна</v-btn>
    <v-btn small color="purple">
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn class="hidden-md-and-down">Исчезающая</v-btn>

  </div>
</template>

<script>

export default {

}
</script>
