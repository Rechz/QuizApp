<template>
  <v-main>
    <v-container class="py-8 px-6" fluid>
      <div class="d-flex justify-content-center align-items-center gap-3">
        <div class="d-flex gap-2">
          <v-card color="purple-lighten-5" max-width="400" width="350" height="70" class="d-flex align-items-center ">
            <v-card-text>
              <v-text-field density="compact" label="Enter Subject" variant="solo" hide-details
                single-line></v-text-field>
            </v-card-text>
          </v-card>
        </div>
        <v-btn size="x-large" color="purple-darken-4">Add Subject</v-btn>
      </div>
      <div class="table-container mt-5">
        <v-table>
          <thead class=" bg-purple-lighten-5 ">
            <tr>
              <th class="text-center">
                ID
              </th>
              <th class="text-center">
                SUBJECTS
              </th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="subject in subjects" :key="subject.id">
              <td>{{ subject.id }}</td>
              <td>{{ subject.subject }}</td>
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
    subjects() {
      return this.$store.getters.getSubjects;
      }
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
  