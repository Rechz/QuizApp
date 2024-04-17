<template>
  <v-main>
    <v-container class="py-8 px-6" fluid>
      <v-snackbar v-model="snackbar" :timeout="timeout" :color="color" location="top">
        <h6 class="text-center">{{ text }}</h6>
      </v-snackbar>
      <v-snackbar v-model="snackbar1" :timeout="timeout1" color="success" location="top">
        <h6 class="text-center">Code sent successfully!</h6>
      </v-snackbar>
      <div class="d-flex gap-3 align-items-center justify-content-center">
        <h1 class="head">Generate Code: </h1>
        <v-btn size="x-large" color="purple-darken-4" variant="elevated" elevation="5"
          @click="generate">Generate</v-btn>
      </div>
      <div class=" mt-5 d-flex gap-5 ">
        <v-table class="table-container">
          <thead class=" bg-purple-lighten-5 ">
            <tr>
              <th class="text-center">
                ID
              </th>
              <th class="text-center">
                QUIZ TITLE
              </th>
              <th class="text-center">
                TIME
              </th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="cat in category" :key="cat.id">
              <td>{{ cat.id }}</td>
              <td>{{ cat.category }}: {{ cat.quizName }}</td>
              <td>{{ cat.timer }}</td>
            </tr>
          </tbody>
        </v-table>
        <v-card class="table-container" elevation="5">
          <v-card-title class="py-4">
            <h3 class="text-center text-uppercase add">Add Quiz</h3>
          </v-card-title>
          <v-card-text class="px-3 mt-2">
            <v-form @submit.prevent="addQuiz" ref="form">
              <v-select v-model="selectedSubject" :items="subjects" label="Select Subject"
                density="comfortable"></v-select>
              <v-text-field label="Quiz Title" density="comfortable" v-model="exam"></v-text-field>
              <v-text-field label="Set Timer( HH:MM:SS )" density="comfortable" v-model="timer"></v-text-field>
              <v-btn class="mt-2" type="submit" color="purple-darken-4" block size="large">Submit</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </v-main>
</template>
  
  <script>
  export default {
    data() {
      return {
        selectedSubject: null,
        exam: null,
        timer: null,
        text: '',
        color: '',
        snackbar: false,
        timeout: 2000,
        snackbar1: false,
        timeout1: 3000,
      }
    },
    created() {
      this.getQuizId();
      this.getSubjects();
    },
    computed: {
      category() {
        return this.$store.getters.getCategory;
      },
      subjects() {
      const subjectsData = this.$store.getters.getSubjects;
      return subjectsData.map(subject => subject.subject);
    }
    },
    methods: {
      async addQuiz() {
        const valid = await this.$refs.form.validate();
        if (valid) {
          try {
            const success = await this.$store.dispatch('addQuiz', {
              subject: this.selectedSubject,
              exam: this.exam,
              time: this.timer
            });
            if (success) {
              this.text = "Quiz added successfully!";
              this.color = 'primary'
              this.snackbar = true;
              this.$refs.form.reset();
              setTimeout(() => {
                window.location.reload();
              }, 2000);
              
            }
          }
          catch (error) {
            this.text = "Error adding Quiz!";
            this.color = 'danger'
            this.snackbar = true;
            console.error(error);

          }
        }
      },
      async generate() {
        try {
          const success = await this.$store.dispatch('generateOtp');
          if (success) {
            this.snackbar1 = true;
          }
        }
        catch (err) {
          console.error(err)
        }
      },
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
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Jersey+10+Charted&family=Jersey+20&family=Orbitron:wght@400..900&family=Reddit+Mono:wght@200..900&display=swap');

  .table-container {
    max-height: 377px;
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

  .add {
    font-family: "Reddit Mono", monospace;
    font-weight: 700;
  }
</style>
  