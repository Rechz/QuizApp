<template>
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <div class="d-flex gap-3 align-items-center justify-content-center">
          <h3>Generate Code</h3>
          <v-btn rounded="xl" size="x-large" color="purple-darken-2">Generate</v-btn>
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
              <tr v-for="(value, id) in Category" :key="id">
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
    data() {
      return {
        Category: {
          "1": "Java Quiz",
          "2": "Java Quiz",
          "3": "First-Internal-IV",
          "4": "First-Internal-IV",
          "5": "First-Internal-IV",
          "6": "First-Internal-IV",
          "7": "First-Internal-IV",
          "8": "Internal-II",
          "9": "Internal-II"
        }
      };
    }
  };
  </script>
  
  <style scoped>
  .table-container {
    max-height: 440px; /* Adjust as needed */
    overflow-y: auto;
    width: 50%; /* Full width */
   margin-inline: auto;
  }
  </style>
  