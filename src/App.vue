<template>
  <div id="app">
    <meta http-equiv="ScreenOrientation" content="autoRotate:disabled">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, width=device-width, user-scalable=no" />
    <link href="https://fonts.googleapis.com/css?family=Karla&display=swap" rel="stylesheet">
    
    <div class="header-bar"><div class="header-logo"></div></div>
  <Home msg="a"/>
  </div>

  <!-- <div id="app">
    <h1>a {{ product }}</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
</template>

<script>
// @ is an alias to /src
import Home from '@/views/Homehome.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
<style src="../src/assets/general.css"></style>
<style src="../src/assets/header.css"></style>
<style src="../src/assets/button.css"></style>
<style src="../src/assets/label.css"></style>
<style src="../src/assets/form.css"></style>
<style src="../src/assets/layout.css"></style>