<template>
  <v-app>
    <cNavbar/>
    <secondNavbar/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

  // import Navbar from '@/components/Navbar'
  import cNavbar from '@/components/cNavbar'
  import secondNavbar from '@/components/secondNavbar'


  export default {
  components :{
    cNavbar,
    secondNavbar
  },
  name:'App',
  data() {
    return {
    }
  }

}
</script>
