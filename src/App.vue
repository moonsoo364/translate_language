<template>
  <nav class="navbar">
    <router-link to="/">Message</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>
<style>
  .navbar{
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .navbar > a{
    margin: 8px;
  }
  .content{
    text-align: center;
  }
</style>
