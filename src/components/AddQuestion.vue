<template>
    <v-main>
        <v-container class="py-8 px-6" fluid>
            <v-snackbar v-model="snackbar" :timeout="timeout" :color="color" location="center">
                <h6 class="text-center">{{ text }}</h6>
            </v-snackbar>
            <p class="font-italic text-success">*Fill out all the fields before submitting</p>
            <v-form class="mt-5" @submit.prevent="add" ref="form">
                <v-text-field label="Question" v-model="title" :rules="titleRules"></v-text-field>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Option 1" counter v-model="opt1" :rules="optionRules"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Option 2" counter v-model="opt2" :rules="optionRules"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Option 3" counter v-model="opt3" :rules="optionRules"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Option 4" counter v-model="opt4" :rules="optionRules"></v-text-field>
                    </v-col>
                </v-row>
                <div class="d-flex justify-content-between gap-5">
                    <div class="d-flex align-items-center">
                        <h6 class="mt-4" :class="isAnswerSelected?'text-black': 'text-red-darken-4'">Select Right
                            Answer: </h6>
                        <v-radio-group v-model="answer" inline class="mt-3" hide-details @change="isAnswerSelected = true">
                            <v-radio color="bg-purple-lighten-5" label="Option 1" :value="opt1"></v-radio>
                            <v-radio color="bg-purple-lighten-5" label="Option 2" :value="opt2"></v-radio>
                            <v-radio color="bg-purple-lighten-5" label="Option 3" :value="opt3"></v-radio>
                            <v-radio color="bg-purple-lighten-5" label="Option 4" :value="opt4"></v-radio>
                        </v-radio-group>
                    </div>
                    <v-select v-model="selectedSubject" :items="subjects" item-value="id" item-title="label"
                        label="Select Quiz" :rules="subjectRules"></v-select>
                </div>
                <span v-if="!isAnswerSelected" class="text-red-darken-4 error ms-0" style="font-size: 13px;">Please
                    select the right answer</span>
                <div class="d-flex justify-content-end mt-2">
                    <v-btn size="x-large" color="purple-darken-4" type="submit">Add Question</v-btn>
                </div>
            </v-form>
        </v-container>
    </v-main>
</template>

<script>
export default {
  computed: {
    subjects() {
          const subjectsData = this.$store.getters.getCategory;
          return subjectsData.map(item => ({
              id: item.id,
              label: `${item.category}: ${item.quizName}`
          }));
        },
    },
    data() {
        return {
            title: '',
            opt1: null,
            opt2: null,
            opt3: null,
            opt4: null,
            answer: '',
            selectedSubject: null,
            timeout: 2500,
            snackbar: false,
            text: '',
            color: '',
            titleRules: [v => !!v || 'Question is required'], // Rule for title field
            optionRules: [v => !!v || 'Option is required'], // Rule for option fields
            subjectRules: [v => !!v || 'Quiz selection is required'], // Rule for selecting quiz,
            isAnswerSelected: true
        };
    },
    methods: {
        async add() {
            console.log(this.subjects)
            const { valid } = await this.$refs.form.validate();
            console.log(valid)
            if (valid && this.answer)
            {
                try {
                    const success = await this.$store.dispatch('addQuestions', {
                        title: this.title,
                        opt1: this.opt1,
                        opt2: this.opt2,
                        opt3: this.opt3,
                        opt4: this.opt4,
                        answer: this.answer,
                        category: this.selectedSubject,
                    });
                    if (success) {
                        this.text = 'Question added successfully !'
                        this.color ='primary'
                        this.snackbar = true;
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    }
                }
                catch (err) {
                    this.text = "Error adding question! "
                    this.color = 'danger'
                    this.snackbar = true;
                    console.error(err);
                }
            }
            else {
                this.isAnswerSelected = false
            }
            
        },
        async getSubject() {
            try {
                await this.$store.dispatch('getCategory')
            }
            catch (error) {
                console.error(error);
        }
    }
    },

}
</script>





