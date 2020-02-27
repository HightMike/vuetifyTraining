<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <v-app-bar
      color="#fbee9f"
      height = "35px"
      dense
      flat

    >

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-btn text small>
        <span class="caption">Главное</span>
      </v-btn>
      <v-btn text small>
        <span class="caption">Кадры</span>
      </v-btn>
      <v-btn text small>
        <span class="caption">Зарплата</span>
      </v-btn>
      <v-btn text small>
        <span class="caption">Выплаты</span>
      </v-btn>
      <v-btn text small>
        <span class="caption">Налоги и взносы</span>
      </v-btn>
      <v-btn text small>
        <span class="caption">Отчетность, справки</span>
      </v-btn>
      <v-btn text small>
        <span class="caption">Настройка</span>
      </v-btn>
      <v-btn text small>
        <span class="caption">Администрирование</span>
      </v-btn>



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
