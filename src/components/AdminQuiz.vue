<template>
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <div class="d-flex gap-3 align-items-center justify-content-center">
          <h1 class="head">Generate Code: </h1>
          <v-btn size="x-large" color="purple-darken-4" variant="elevated" elevation="5">Generate</v-btn>
        </div>
        <div class="table-container mt-5">
          <v-table>
            <thead class=" bg-purple-lighten-5 ">
              <tr>
                <th class="text-center">
                  ID
                </th>
                <th class="text-center">
                  Title
                </th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr v-for="(value, id) in category" :key="id">
                <td>{{ id }}</td>
                <td>{{ value }}</td>
              </tr>
            </tbody>
          </v-table>
        </div>
      </v-container>
    </v-main>
  </template>
  
  <script>
  export default {
    computed: {
      category() {
        return this.$store.getters.getCategory;
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Jersey+10+Charted&family=Jersey+20&family=Orbitron:wght@400..900&family=Reddit+Mono:wght@200..900&display=swap');

  .table-container {
    max-height: 440px;
    /* Adjust as needed */
    overflow-y: auto;
    width: 50%;
    /* Full width */
    margin-inline: auto;
  }

  .head {
    font-family: "Jersey 20", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 3rem;
  }
</style>
  