<template>
  <div id="app">
    <meta http-equiv="ScreenOrientation" content="autoRotate:disabled">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, width=device-width, user-scalable=no" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karla&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    
    <div class="header-bar"><div class="header-logo"></div></div>
  <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import Home from '@/views/Homehome.vue'
// import dateBox from "@/components/date-box.vue"

export default {
  name: 'App',
  components: {
  }
}
</script>
<style src="../src/assets/general.css"></style>
<style src="../src/assets/header.css"></style>
<style src="../src/assets/button.css"></style>
<style src="../src/assets/label.css"></style>
<style src="../src/assets/form.css"></style>
<style src="../src/assets/layout.css"></style>