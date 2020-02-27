<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <v-app-bar
      color="#fbee9f"
      height = "31px"
      dense
      flat

    >
      <v-btn icon small>
        <v-icon small>mdi-heart</v-icon>
      </v-btn>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="caption">РДЗ ЗУП 3,1/ Зарплата и управление персоналом, редакция 3.1 (1С:Предприятие)</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field
        hide-details
        single-line
      ></v-text-field>

      <v-btn icon small>
        <v-icon small>{{ icons.mdiBell }}</v-icon>
      </v-btn>

      <v-btn icon small>
        <v-icon small>mdi-replay</v-icon>
      </v-btn>

      <v-btn icon small>
        <v-icon small>mdi-star</v-icon>
      </v-btn>

      <v-btn text small>
        <span class="caption">  admin </span>
      </v-btn>



      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn small icon v-on="on">
            <v-icon >mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
  import {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
    mdiBell,
  } from '@mdi/js'

  export default {
    data: () => ({
      icons: {
        mdiAccount,
        mdiPencil,
        mdiShareVariant,
        mdiDelete,
        mdiBell,
      },
    }),
  }
</script>

<style scoped>

  .custom_title
  {
    font-family: Arial;
    font-size:13.3333px;
  }


</style>

<!--{-->
<!--flex: 0 1 9em;-->
<!--flex-grow: 0;-->
<!--flex-shrink: 1;-->
<!--flex-basis: 9em;-->
<!--min-width: 1.8em;-->
<!--margin-left: 10px;-->
<!--}-->
