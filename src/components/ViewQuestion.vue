<template>
    <v-main>
        <v-container class="py-8 px-6" fluid>
            <div class="d-flex gap-3 align-items-center mb-4">
                <h4 class="head">Select Subject: </h4>
                <v-select v-model="selectedSubject" :items="subjects" item-value="id" item-title="label"
                    label="Select Quiz"></v-select>
            </div>
            <v-divider></v-divider>
            <div class="">
                <div v-for="(question,index) in questions" :key="question.id" style=" width: 700px;">
                    <h3 class="d-flex">{{ index + 1 }}.<span class="ms-1">{{ question.questionTitle
                            }}</span></h3>
                    <ol class="list mb-1">
                        <li>{{ question.option1 }}</li>
                        <li>{{ question.option2 }}</li>
                        <li>{{ question.option3 }}</li>
                        <li>{{ question.option4 }}</li>
                    </ol>
                    <div class="d-flex">
                        <v-icon class="mdi mdi-check-circle" color="success"></v-icon><i><b>
                                <p class="text-success mx-3 mt-0 mb-2">{{ question.rightAns }}</p>
                            </b></i>
                    </div>

                </div>
                <div v-if="questions.length === 0" class="text-center">No questions to display.</div>
            </div>
        </v-container>
    </v-main>
</template>

<script>
export default {
    data() {
        return {
            selectedSubject: null,
        };
    },
    watch: {
        selectedSubject(newValue) {
        
            if (newValue) {
                
                this.getQuestions(newValue);
            }
        }
    },
    computed: {
        subjects() {
            const subjectsData = this.$store.getters.getCategory;
            return subjectsData.map(item => ({
                id: item.id,
                label: `${item.category}: ${item.quizName}`
            }));
        },
        questions() {
            return this.$store.getters.getViewQuiz;
        }
    },
    methods: {
        
        async getQuestions() {
            try {
                await this.$store.dispatch("getQuestions", this.selectedSubject);
            }
            catch (error) {
                console.error(error);
            }
        }, 
    },
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jersey+10+Charted&family=Jersey+20&family=Orbitron:wght@400..900&family=Reddit+Mono:wght@200..900&display=swap');
:deep(.v-input__control) {
    width: 350px;
}
.head{
    font-family: "Reddit Mono", monospace;
    font-weight: 700;
}
</style>