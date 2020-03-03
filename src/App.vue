<template>
  <v-app>
<!--    <cNavbar/>-->
<!--    <secondNavbar/>-->
    <Navbar></Navbar>
    <v-content class="mx-4 my-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

  // import Navbar from '@/components/Navbar'
  // import cNavbar from '@/components/cNavbar'
  // import secondNavbar from '@/components/secondNavbar'
  import Navbar from '@/components/Navbar'


  export default {
  components :{
    // cNavbar,
    // secondNavbar,
    Navbar
  },
  name:'App',
  data() {
    return {
    }
  }

}
</script>
