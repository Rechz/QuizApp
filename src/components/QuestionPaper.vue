<template>
    <div class="main">
        <v-card elevation="10" class="bg-cyan-darken-1 d-flex flex-column align-items-center justify-content-between"
            style="width: 500px;">
            <div class="profile row  w-100 ps-0">
                <div class="d-flex justify-content-start">
                    <v-icon size="140" class="mdi mdi-account-outline"></v-icon>
                    <div class="d-flex flex-column justify-content-center info">
                        <div>
                            <h6>Name :</h6>
                            <p>{{details.name}}</p>
                        </div>
                        <div>
                            <h6>Course :</h6>
                            <p>{{details.course}}</p>
                        </div>
                        <div>
                            <h6>Year :</h6>
                            <p>{{details.courseYear}}</p>
                        </div>
                        <div>
                            <h6>Subject :</h6>
                            <p>{{ category.category}}</p>
                        </div>
                        <div>
                            <h6>Exam :</h6>
                            <p>{{ category.quizName}}</p>
                        </div>
                    </div>
                </div>

            </div>
            <h5><u>Question Nos.</u></h5>
            <div class="d-flex flex-wrap justify-content-start gap-2 ms-3 mt-3" style="overflow-y: auto;">

                <div v-for="(num, index) in questions.length" :key="num" class="d-inline ">
                    <v-btn height="40" variant="elevated" width="40" icon="" class="mb-2 fs-6"
                        @click="displayQuestion(index)" :color="getButtonClass(index)">{{ num }}</v-btn>
                </div>
            </div>
            <div class="d-flex flex-wrap justify-content-around w-100 gap-2 ms-2 my-3">
                <div>
                    <div style="height: 30px; width: 30px; border-radius: 50%;" class="bg-light-green-darken-4"></div>
                    <h6>Answered</h6>
                </div>
                <div>
                    <div style="height: 30px; width: 30px; border-radius: 50%;" class="bg-danger"></div>
                    <h6>Not answered</h6>
                </div>
                <div>
                    <div style="height: 30px; width: 30px; border-radius: 50%;" class="bg-white"></div>
                    <h6>Not visited</h6>
                </div>
            </div>
        </v-card>
        <v-card elevation="10" class="d-flex flex-column pb-0 w-100" style="height: 100vh;">
            <div class="d-flex justify-content-between border px-3 mb-5">
                <p class="mt-3">Question Type: MCQ</p>
                <p class="mt-3">Marks for right answer: 1</p>
            </div>
            <div style="height: 410px;" class="my-5 d-flex justify-content-center align-items-center">
                <div v-if="currentQuestion" style="height: 380px; width: 1000px;">
                    <pre><h4 class="d-flex">{{ currentQuestionIndex +1 }}.<span class="ms-1">{{ currentQuestion.questionTitle
                            }}</span></h4></pre>
                    <ol class="list">
                        <li @click="selectOption(currentQuestion.option1)"
                            :class="{ 'selected': currentQuestion.selectedOption === currentQuestion.option1 }">{{
                            currentQuestion.option1 }}</li>
                        <li @click="selectOption(currentQuestion.option2)"
                            :class="{ 'selected': currentQuestion.selectedOption === currentQuestion.option2 }">{{
                            currentQuestion.option2 }}</li>
                        <li @click="selectOption(currentQuestion.option3)"
                            :class="{ 'selected': currentQuestion.selectedOption === currentQuestion.option3 }">{{
                            currentQuestion.option3 }}</li>
                        <li @click="selectOption(currentQuestion.option4)"
                            :class="{ 'selected': currentQuestion.selectedOption === currentQuestion.option4 }">{{
                            currentQuestion.option4 }}</li>
                    </ol>
                </div>

            </div>
            <div class="d-flex justify-content-end gap-2 mb-3">
                <v-btn @click="previousQuestion" color="blue" :disabled="currentQuestionIndex === 0"
                    prepend-icon="mdi-chevron-double-left" size="large">Previous</v-btn>
                <v-btn @click="nextQuestion" class="me-5" color="blue" append-icon="mdi-chevron-double-right"
                    v-if="currentQuestionIndex !== questions.length - 1" size="large">Next</v-btn>
                <v-btn class="me-5" color="green" v-else append-icon="mdi-check-circle-outline" @click="submit"
                    size="large">Submit</v-btn>
            </div>
            <footer class="d-flex justify-content-end border px-3 mb-0">
                <p class="mt-3 fs-5">Time: <span class="text-danger">{{ category.timer }}
                    </span>
                </p>
            </footer>
        </v-card>
    </div>
    <v-dialog v-model="dialog" max-width="600">
        <v-card rounded="5">
            <v-card-title class="bg-cyan-darken-3 text-center">RESULTS</v-card-title>
            <v-card-title>
                <div class="">
                    <div>
                        <div class="row">
                            <div class="col-6">
                                <div class="d-flex align-items-center gap-2">
                                    <h5><b>Name :</b></h5>
                                    <h5>{{ details.name }}</h5>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center gap-2">
                                    <h5><b>Subject :</b></h5>
                                    <h5>{{ category.category }}-{{ category.quizName }}</h5>
                                </div>

                            </div>
                        </div>
                        <div class="d-flex align-items-center gap-2">
                            <h5><b>Course :</b></h5>
                            <h5>{{ details.course }} ({{ details.courseYear }})</h5>
                        </div>

                    </div>
                    <v-divider></v-divider>
                    <h4 class="text-center">You scored</h4>
                    <div v-if="!wait" class="d-flex justify-content-center ">
                        <v-progress-circular :size="200" :width="6" color="#006064" indeterminate></v-progress-circular>
                    </div>

                    <div v-else class=" mx-auto px-5 d-flex justify-content-center align-items-center bg-cyan-lighten-5"
                        style="height: 200px; width: 200px; border-radius: 50%; border: 2px solid #006064">
                        <p class="mark">{{ results.score }}/<span class="total">{{ questions.length }}</span></p>
                    </div>
                </div>
            </v-card-title>
            <v-card-actions class="d-flex justify-content-center my-3">
                <v-btn class="mx-auto  mb-2" size="x-large" color="cyan-darken-3" variant="elevated" elevation="5"
                    @click="$router.push('/')">Exit Quiz</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    data() {
        return {
            currentQuestionIndex: 0,
            dialog: false,
            wait: false
            
        };
    },
 
    computed: {
        
        currentQuestion() {
            if (this.questions) {
                return this.questions[this.currentQuestionIndex];
            }
            else return {};  
        },
        details() {
            return this.$store.getters.getDetails;
        },
        questions() {
            return this.$store.getters.getViewQuiz;
        },
        category() {
            return this.$store.getters.getViewSubjects[0] || {};
        },
        results() {
            return this.$store.getters.getResults;
        },
        
    },
    methods: {
        nextQuestion() {
            if (this.currentQuestionIndex < this.questions.length - 1) {
                if (this.currentQuestion.selectedOption !== null) {
                    this.questions[this.currentQuestionIndex].answered = true; // Set answered to true if an option is selected
                }
                this.questions[this.currentQuestionIndex].visited = true; // Set visited to true
                this.currentQuestionIndex++;
            }
        },
        previousQuestion() {
            if (this.currentQuestionIndex > 0) {
                if (this.currentQuestion.selectedOption !== null) {
                    this.questions[this.currentQuestionIndex].answered = true; // Set answered to true if an option is selected
                }
                this.questions[this.currentQuestionIndex].visited = true; // Set visited to true
                this.currentQuestionIndex--;
            }
        },
        displayQuestion(index) {
            const question = this.questions[index];
            question.visited = true;
            this.currentQuestionIndex = index;
        },
        getButtonClass(index) {

            const question = this.questions[index];
            
            if (question) {
                if (question.answered) {
                    return 'success'; // Green for answered
                } else if (question.visited) {
                    return 'danger'; // Red for visited but not answered
                } else {
                    return 'white'; // Default color for not visited
                }
            }
            return 'btn btn-light'; // Default color
        },
        selectOption(selectedOption) {
            this.currentQuestion.visited = true;
            if (this.currentQuestion.selectedOption === selectedOption) {
                // If the clicked option is already selected, unselect it
                this.currentQuestion.selectedOption = null;
                this.currentQuestion.answered = false; // Reset answered status
            } else {
                this.currentQuestion.selectedOption = selectedOption;
                this.currentQuestion.answered = true;
                // Here you can send the selected option to the backend
                console.log("Selected option:", selectedOption);
            }
        },
        async submit() {
            try {
                const submissions = this.questions.map(question => ({
                    id: question.id,
                    response: question.selectedOption
                }));
                console.log('result',submissions);
                const response = this.$store.dispatch('submit', {
                    id: this.category.id,
                    student: this.details.name,
                    title: this.category.category,
                    total: this.questions.length,
                    result: submissions
                });
                if (response) {
                    this.dialog = true;
                    setInterval(() => {
                        this.wait = true;
                    }, 2500)
                }
                console.log(response);
            }
            catch (error) {
                console.log(error)
            }
        }
    }
};
</script>

<style scoped>
.main{
    height: 100vh;
    display: flex;
}

.profile{
    background-image: linear-gradient(216deg, rgba(77, 77, 77, 0.05) 0%, rgba(77, 77, 77, 0.05) 25%, rgba(42, 42, 42, 0.05) 25%, rgba(42, 42, 42, 0.05) 38%, rgba(223, 223, 223, 0.05) 38%, rgba(223, 223, 223, 0.05) 75%, rgba(36, 36, 36, 0.05) 75%, rgba(36, 36, 36, 0.05) 100%), linear-gradient(44deg, rgba(128, 128, 128, 0.05) 0%, rgba(128, 128, 128, 0.05) 34%, rgba(212, 212, 212, 0.05) 34%, rgba(212, 212, 212, 0.05) 57%, rgba(25, 25, 25, 0.05) 57%, rgba(25, 25, 25, 0.05) 89%, rgba(135, 135, 135, 0.05) 89%, rgba(135, 135, 135, 0.05) 100%), linear-gradient(241deg, rgba(55, 55, 55, 0.05) 0%, rgba(55, 55, 55, 0.05) 14%, rgba(209, 209, 209, 0.05) 14%, rgba(209, 209, 209, 0.05) 60%, rgba(245, 245, 245, 0.05) 60%, rgba(245, 245, 245, 0.05) 69%, rgba(164, 164, 164, 0.05) 69%, rgba(164, 164, 164, 0.05) 100%), linear-gradient(249deg, rgba(248, 248, 248, 0.05) 0%, rgba(248, 248, 248, 0.05) 32%, rgba(148, 148, 148, 0.05) 32%, rgba(148, 148, 148, 0.05) 35%, rgba(202, 202, 202, 0.05) 35%, rgba(202, 202, 202, 0.05) 51%, rgba(181, 181, 181, 0.05) 51%, rgba(181, 181, 181, 0.05) 100%), linear-gradient(92deg, hsl(214, 0%, 11%), hsl(214, 0%, 11%));
    /* background-image: radial-gradient(circle at 7% 60%, hsla(229, 0%, 69%, 0.03) 0%, hsla(229, 0%, 69%, 0.03) 44%, transparent 44%, transparent 100%), radial-gradient(circle at 66% 79%, hsla(229, 0%, 69%, 0.03) 0%, hsla(229, 0%, 69%, 0.03) 31%, transparent 31%, transparent 100%), radial-gradient(circle at 25% 6%, hsla(229, 0%, 69%, 0.03) 0%, hsla(229, 0%, 69%, 0.03) 44%, transparent 44%, transparent 100%), radial-gradient(circle at 18% 89%, hsla(229, 0%, 69%, 0.03) 0%, hsla(229, 0%, 69%, 0.03) 37%, transparent 37%, transparent 100%), radial-gradient(circle at 33% 2%, hsla(229, 0%, 69%, 0.03) 0%, hsla(229, 0%, 69%, 0.03) 73%, transparent 73%, transparent 100%), linear-gradient(0deg, rgb(0, 0, 0), rgb(0, 0, 0)); */
}
.profile.row>*{
    padding-left: 0;
}
.profile .info>div{
    display: flex;
    gap: 10px;
}
.info h6{
    margin: 0;
    margin-top: 2px;
    padding: 0;
}
.info p{
margin: 0;
    padding: 0;
    font-weight: 300;
    font-style: italic;
}
.selected {
    border: 2px solid green;
    background-color: rgba(0, 128, 0, 0.378);
    border-radius: 50px;
    /* Change the background color to highlight the selected option */
}
.list{
    list-style-type: lower-alpha;
}
.list li{
    font-size: 1.5rem;
    padding: 10px;
    cursor: pointer;
}
.list li:hover{
   background-color: rgba(47, 55, 107, 0.151);
   border-radius: 50px;
}
.mark{
    font-size: 4rem;
    background-color: transparent;
}
.total{
    font-size: 2rem;;
}
</style>