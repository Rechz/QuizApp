<template>
    <v-main>
        <v-container class="py-8 px-6" fluid>
            <div class="d-flex gap-3 align-items-center mb-4">
                <h4 class="head">Select Quiz: </h4>
                <v-select v-model="selectedSubject" :items="subjects" item-value="id" item-title="label"
                    label="Select Quiz"></v-select>
            </div>
            <v-table class="table-container mt-5" v-if="results.length !==0">
                <thead class=" bg-purple-lighten-5 ">
                    <tr>
                        <th class="text-center">
                            STUDENT ID
                        </th>
                        <th class="text-center">
                            NAME
                        </th>
                        <th class="text-center">
                            EXAMINATION
                        </th>
                        <th class="text-center">
                            SCORE
                        </th>
                        <th class="text-center">
                            TOTAL
                        </th>
                        <th class="text-center">
                            RESULT
                        </th>
                    </tr>
                </thead>
                <tbody class="text-center">
                    <tr v-for="result in results" :key="result.id">
                        <td>{{ result.id }}</td>
                        <td>{{ result.studentName }}</td>
                        <td>{{ details.category + " - " + details.quizName }}</td>
                        <td>{{ result.score }}</td>
                        <td>{{ result.total }}</td>
                        <td :class="textColor(result)">{{ resultPassOrFail(result) }}</td>
                    </tr>
                </tbody>
            </v-table>
            <div v-else>No results to display.</div>
        </v-container>
    </v-main>
</template>

<script>
export default {
    data() {
        return {
            // results: [
            //     {
            //         id: 1,
            //         Name: "Reshma",
            //         Score: 5,
            //         MaxScore: 10,
            //         Category: "First-Internal-IV",
            //         Subject: "DBMS",
            //     },
            //     {
            //         id: 2,
            //         Name: "Akhila",
            //         Score: 9,
            //         MaxScore: 10,
            //         Category: "First-Internal-IV",
            //         Subject: "Operating System",
            //     },
            //     {
            //         id: 3,
            //         Name: "Anu",
            //         Score: 8,
            //         MaxScore: 10,
            //         Category: "First-Internal-IV",
            //         Subject: "PhP",
            //     },
            //     {
            //         id: 4,
            //         Name: "Deva",
            //         Score: 1,
            //         MaxScore: 10,
            //         Category: "First-Internal-IV",
            //         Subject: "C++",
            //     },
            // ],
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
    methods: {
        resultPassOrFail(result) {
            const percentage = (result.score / result.total) * 100;
            return percentage >= 30 ? "Pass" : "Fail";
        },
        textColor(result) {
            if(this.resultPassOrFail(result) === "Pass") {
                return "text-success"
            }
            else {
                return "text-danger"
            }
        },
        async getQuestions() {
            try {
                await this.$store.dispatch("getResults", this.selectedSubject);
            }
            catch (error) {
                console.error(error);
            }
        }, 
    },
    computed: {
        subjects() {
            const subjectsData = this.$store.getters.getCategory;
            return subjectsData.map(item => ({
                id: item.id,
                label: `${item.category}: ${item.quizName}`
            }));
        },
        details() {
            return this.$store.getters.getViewSubjects[0] || {};
        },
        results() {
            return this.$store.getters.getResults;
        },
    },
    
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jersey+10+Charted&family=Jersey+20&family=Orbitron:wght@400..900&family=Reddit+Mono:wght@200..900&display=swap');

:deep(.v-input__control) {
    width: 350px;
}

.head {
    font-family: "Reddit Mono", monospace;
    font-weight: 700;
}
</style>
