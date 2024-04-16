<template>
    <v-main>
        <v-container class="py-8 px-6" fluid>
            <v-snackbar v-model="snackbar" :timeout="timeout" color="primary" location="center">
                <h6 class="text-center">{{ text }}</h6>
            </v-snackbar>
            <p class="font-italic text-success">*Fill out all the fields before submitting</p>
            <v-form class="mt-5">
                <v-text-field label="Question" v-model="title"></v-text-field>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Option 1" counter v-model="opt1"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Option 2" counter v-model="opt2"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Option 3" counter v-model="opt3"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Option 4" counter v-model="opt4"></v-text-field>
                    </v-col>
                </v-row>
                <div class="d-flex justify-content-between gap-5">
                    <div class="d-flex align-items-center">
                        <h6>Select Right Answer: </h6>
                        <v-radio-group v-model="answer" inline class="mt-3">
                            <v-radio color="bg-purple-lighten-5" label="Option 1" :value="opt1"></v-radio>
                            <v-radio color="bg-purple-lighten-5" label="Option 2" :value="opt2"></v-radio>
                            <v-radio color="bg-purple-lighten-5" label="Option 3" :value="opt3"></v-radio>
                            <v-radio color="bg-purple-lighten-5" label="Option 4" :value="opt4"></v-radio>
                        </v-radio-group>

                    </div>
                    <v-select v-model="selectedSubject" :items="subjects" label="Select Subject"></v-select>
                </div>
                <div class="d-flex justify-content-end mt-2">
                    <v-btn size="x-large" color="purple-darken-4" @click="add">Add Question</v-btn>
                </div>
            </v-form>
        </v-container>
    </v-main>
</template>

<script>
export default {
  computed: {
    subjects() {
      const subjectsData = this.$store.getters.getSubjects;
      return subjectsData.map(subject => subject.subject);
    }
    },
    data() {
        return {
            title: '',
            opt1: null,
            opt2: null,
            opt3: null,
            opt4: null,
            answer: '',
            category: '',
            timeout: 2500,
            snackbar: false,
            text: 'Question added successfully !'
        };
    },
    methods: {
        async add() {
            try {
                const success = await this.$store.dispatch('addQuestions', {
                    title: this.title,
                    opt1: this.opt1,
                    opt2: this.opt2,
                    opt3: this.opt3,
                    opt4: this.opt4,
                    answer: this.answer,
                    category: this.category,
                });
                if (success) {
                    this.snackbar = true;
                }
            }
            catch (err) {
                console.error(err);
        }
    }
  }
}
</script>





