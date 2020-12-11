<template>
  <div class="Home">
    <h1>This is an Home page</h1>
    <button @click="test">Get UUID</button>
    <br />
    <button @click="test2">Get ADID</button>
    <br />
    <router-link to="/second">Go to second page</router-link>
    <br />
    <router-link to="/third">Go to third page</router-link>

  </div>
</template>
<script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
  methods: {
    test() {
      alert(`uuid: ${window.device.uuid}`);
      window.cordova.plugins.firebase.analytics.logEvent("test2", {
        d1: "v1",
        d2: "v2",
      });
    },
    test2() {
      window.cordova.plugins.idfa.getInfo().then(function (info) {
        if (!info.limitAdTracking) {
          alert(info.idfa || info.aaid);
        } else {
          alert(`被限制無法回傳`);
        }
      });
    },
  },
  mounted() {
    window.cordova.plugins.firebase.analytics.setCurrentScreen("首頁");
    window.cordova.plugins.firebase.analytics.logEvent("SCREEN", {
      name: "首頁",
      class: "首頁_class",
      division: "首頁_division",
      section: "首頁_section",
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
