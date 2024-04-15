<template>
    <v-main>
        <v-container class="py-8 px-6" fluid>
            <v-select
                    v-model="selectedSubject"
                    :items="subjects"
                    label="Select Subject"
            ></v-select>
            <div  class="">
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
                        <v-icon class="mdi mdi-check-circle" color="success"></v-icon><i><b><p class="text-success mx-3 mt-0 mb-2">{{ question.rightAns }}</p></b></i>
                    </div>
                    
                </div>
            </div>
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
      selectedSubject: null,
            questions : [ 
 { 
 "id": 3, 
 "questionTitle": "What is an operating system?", 
 "option1": " interface between the hardware and application programs", 
 "option2": "collection of programs that manages hardware resources", 
 "option3": "system service provider to the application programs", 
 "option4": " all of the mentioned", 
 "rightAns": "all of the mentioned", 
 "category": "Operating System" 
 }, 
 { 
 "id": 4, 
 "questionTitle": "What is the main function of the command interpreter?", 
 "option1": "to provide the interface between the API and application program", 
 "option2": "to handle the files in the operating system", 
 "option3": "to get and execute the next user-specified command", 
 "option4": " none of the mentioned", 
 "rightAns": "to get and execute the next user-specified command", 
 "category": "Operating System" 
 }, 
 { 
 "id": 5, 
 "questionTitle": " In Operating Systems, which of the following is/are CPU scheduling algorithms?", 
 "option1": "Priority", 
 "option2": "Round Robin", 
 "option3": "Shortest Job First", 
 "option4": " All of the mentioned", 
 "rightAns": "All of the mentioned", 
 "category": "Operating System" 
 }, 
 { 
 "id": 6, 
 "questionTitle": "To access the services of the operating system, the interface is provided by the ___________", 
 "option1": "Library", 
 "option2": "System calls", 
 "option3": "API", 
 "option4": "Assembly instructions", 
 "rightAns": "System calls", 
 "category": "Operating System" 
 } 
]
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