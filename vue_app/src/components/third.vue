<template>
  <div class="third">
    <h1>This is an third page</h1>
    <router-link to="/">Go to Home page</router-link>
    <br>
    <router-link to="/second">Go to second page</router-link>
  </div>
</template>

<script>
export default {
  name: "third",
   mounted() {
    window.cordova.plugins.firebase.analytics.setCurrentScreen("第三頁");
  },
};
</script>