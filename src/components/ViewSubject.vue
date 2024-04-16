<template>
  <v-main>
    <v-container class="py-8 px-6" fluid>
      <v-snackbar v-model="snackbar" :timeout="timeout" :color="color" location="top">
        <h6 class="text-center">{{ text }}</h6>
      </v-snackbar>
      <div class="d-flex justify-content-center align-items-center gap-3">
        <div class="d-flex gap-2">
          <v-card color="purple-lighten-5" max-width="400" width="350" height="70" class="d-flex align-items-center ">
            <v-card-text>
              <v-text-field density="compact" label="Enter Subject" variant="solo" hide-details v-model="subject"
                required single-line></v-text-field>
            </v-card-text>
          </v-card>
        </div>
        <v-btn size="x-large" color="purple-darken-4" @click="add">Add Subject</v-btn>
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
  },
  created() {
    this.getSubject();
  },
  data() {
    return {
      subject: null,
      text: '',
      color: '',
      snackbar: false,
timeout: 3000,
    };
  },
  methods: {
    async add() {
      if (this.subject) {
        try {
          const response = await this.$store.dispatch('addSubject', this.subject);
          if (response) {
            this.text = "Subject added successfully!";
            this.color = 'primary'
            this.snackbar = true;
            this.subject = ''
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
        }
        catch (error) {
          this.text = "Error adding subject!";
          this.color = 'danger'
          this.snackbar = true;
            console.error(error)
          }
        }
    },
    async getSubject() {
      try {
        await this.$store.dispatch('getSubject');
      }
      catch (error) {
          console.error(error)
        }
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
  