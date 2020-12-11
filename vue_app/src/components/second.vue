<template>
  <div class="second">
    <h1>This is an second page</h1>
    <router-link to="/">Go to Home page</router-link>
    <br />
    <router-link to="/third">Go to third page</router-link>
  </div>
</template>
<script>
export default {
  name: "second",
  mounted() {
    window.cordova.plugins.firebase.analytics.setCurrentScreen("第二頁");
  },
};
</script>