<template>
  <v-main>
    <v-container class="py-8 px-6" fluid>
      <div class="d-flex gap-3 align-items-center justify-content-center">
        <h1 class="head">Generate Code: </h1>
        <v-btn size="x-large" color="purple-darken-4" variant="elevated" elevation="5">Generate</v-btn>
      </div>
      <div class=" mt-5 d-flex gap-5">
        <v-table class="table-container">
          <thead class=" bg-purple-lighten-5 ">
            <tr>
              <th class="text-center">
                ID
              </th>
              <th class="text-center">
                QUIZ TITLE
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
        <v-card class="table-container" elevation="5">
          <v-card-title class="py-4">
            <h3 class="text-center text-uppercase add">Add Quiz</h3>
          </v-card-title>
          <v-card-text class="px-3 mt-2">
            <v-form>
              <v-select v-model="selectedSubject" :items="subjects" label="Select Subject"
                density="comfortable"></v-select>
              <v-text-field label="Quiz Title" density="comfortable"></v-text-field>
              <v-text-field label="Set Timer( HH:MM:SS )" density="comfortable"></v-text-field>
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
        selectedSubject: '',
      }
    },
    computed: {
      category() {
        return this.$store.getters.getCategory;
      },
      subjects() {
      const subjectsData = this.$store.getters.getSubjects;
      return subjectsData.map(subject => subject.subject);
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
  