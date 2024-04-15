<template>
    <v-main>
        <v-container class="py-8 px-6" fluid>
            <h3>Create Quiz</h3>
            <v-form class="mt-5"> 
                <v-text-field label="Question"></v-text-field>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Option 1" counter></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Option 2" counter></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Option 3" counter></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Option 4" counter></v-text-field>
                    </v-col>
                </v-row>
                <div class="d-flex align-items-center">
                    <h6>Select Right Answer</h6>
                <v-radio-group v-model="inline" inline class="mt-3">
                    <v-radio color="bg-purple-lighten-5" label="Option 1" value="radio-1"></v-radio>
                    <v-radio color="bg-purple-lighten-5" label="Option 2" value="radio-2"></v-radio>
                    <v-radio color="bg-purple-lighten-5" label="Option 1" value="radio-1"></v-radio>
                    <v-radio color="bg-purple-lighten-5" label="Option 2" value="radio-2"></v-radio>
                </v-radio-group>
                </div>
                <v-select
                    v-model="selectedSubject"
                    :items="subjects"
                    label="Select Subject"
                ></v-select>
                <div class="d-flex justify-content-end">
                    <v-btn color="primary">Create</v-btn>
                </div>
            </v-form>
        </v-container>
    </v-main>
</template>

<script>
export default {
  data() {
    return {
        subjectsData: [
        { id: 1, subject: "DBMS" },
        { id: 2, subject: "Java" },
        { id: 3, subject: "C++" },
        { id: 4, subject: "Php" },
        { id: 5, subject: "Computer Organization" }
      ],
      selectedSubject: null
    }
  },
  computed: {
    subjects() {
      // Extract only the subject names from subjectsData
      return this.subjectsData.map(subject => subject.subject);
    }
  }
}
</script>



