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
  methods: {
    async getQuizId() {
      try {
        await this.$store.dispatch('getQuizId');
      }
      catch (err) {
        console.error(err)
      }
    },
    async getSubjects() {
      try {
        await this.$store.dispatch('getSubject');
      }
      catch (err) {
        console.error(err)
      }
    },
    mounted() {
      this.getQuizId();
      this.getSubjects();
    }
  }
};
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>