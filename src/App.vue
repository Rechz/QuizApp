<template>
  <v-app>

      <router-view></router-view>
 
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      layout: 'default',
    };
  },
};
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>