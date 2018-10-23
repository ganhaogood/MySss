<template>
  <div id="app">
    <transition>
      <router-view/>
    </transition>
    <Footer v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import Footer from './components/Footer'
  export default {
    components: {
      Footer
    }

  }
</script>

<style>

</style>
