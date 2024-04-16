import { createStore } from "vuex";
import axios from 'axios';
const store = createStore({
    state() {
            return {
                base_url: 'http://localhost:8081',
                studentDetails : JSON.parse(sessionStorage.getItem('details')) || {
                    name: "Reshma",
                    course: "M.tech",
                    courseYear: "2014-2018"
                },
                questions: JSON.parse(sessionStorage.getItem('questions')) || [
                {
                    "questionTitle": "What is an operating system?", 
 "option1": " interface between the hardware and application programs", 
 "option2": "collection of programs that manages hardware resources", 
 "option3": "system service provider to the application programs", 
 "option4": " all of the mentioned", 
 "rightAns": "all of the mentioned", 
 "category": "Operating System" ,
                    visited: false,
                    answered: false,
                    selectedOption: null
                },
                {
                    "id": 4, 
 "questionTitle": "What is the main function of the command interpreter?", 
 "option1": "to provide the interface between the API and application program", 
 "option2": "to handle the files in the operating system", 
 "option3": "to get and execute the next user-specified command", 
 "option4": " none of the mentioned", 
 "rightAns": "to get and execute the next user-specified command", 
 "category": "Operating System" ,
                    visited: false,
                    answered: false,
                    selectedOption: null
                },
                {
                    "id": 5, 
 "questionTitle": " In Operating Systems, which of the following is/are CPU scheduling algorithms?", 
 "option1": "Priority", 
 "option2": "Round Robin", 
 "option3": "Shortest Job First", 
 "option4": " All of the mentioned", 
 "rightAns": "All of the mentioned", 
 "category": "Operating System" ,
                    visited: false,
                    answered: false,
                    selectedOption: null
                },
                {
                  "id": 6, 
 "questionTitle": "To access the services of the operating system, the interface is provided by the ___________", 
 "option1": "Library", 
 "option2": "System calls", 
 "option3": "API", 
 "option4": "Assembly instructions", 
 "rightAns": "System calls", 
 "category": "Operating System" ,
                    visited: false,
                    answered: false,
                    selectedOption: null
                }
                ],
                allQuestions: JSON.parse(sessionStorage.getItem('allQuestions')) || [
                {
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
                ],
            subjects: JSON.parse(sessionStorage.getItem('subjects')) || [
                {
                    "id": 1,
                    "subject": "DBMS"
                },
                {
                    "id": 2,
                    "subject": "Java"
                },
                {
                    "id": 3,
                    "subject": "C++"
                },
                {
                    "id": 4,
                    "subject": "Php"
                }
                ],
            category: JSON.parse(sessionStorage.getItem('category')) || {
          "1": "Java Quiz",
          "2": "Java Quiz",
          "3": "First-Internal-IV",
          "4": "First-Internal-IV",
          "5": "First-Internal-IV",
          "6": "First-Internal-IV",
          "7": "First-Internal-IV",
          "8": "Internal-II",
          "9": "Internal-II"
        }
            };
        },
        getters: {
            getUrl(state) {
                return state.base_url;
            },
            getDetails(state) {
                return state.studentDetails;  
            },
            getQuestions(state) {
                return state.questions;
            },
             getAllQuestions(state) {
                return state.allQuestions;
            },
            getSubjects(state) {
                return state.subjects;
            },
             getCategory(state) {
                return state.category;
            }
    },
    mutations: {
        setDetails(state, payload) {
            state.studentDetails = payload;
            sessionStorage.setItem('details', JSON.stringify(payload))
        },
        setSubjects(state, payload) {
            state.subjects = payload;
            sessionStorage.setItem('subjects', JSON.stringify(payload))
        },
         setAllQuestions(state, payload) {
            state.allQuestions = payload;
            sessionStorage.setItem('allQuestions', JSON.stringify(payload))
        },
        setQuestions(state, payload) {
            const additionalFields = {
                visited: false,
                answered: false,
                selectedOption: null
            };
            // Loop through the questions array and add additional fields to each object
            payload.forEach(question => {
            Object.assign(question, additionalFields);
            });
            console.log('questions', payload)
            state.questions = payload;
            sessionStorage.setItem('questions', JSON.stringify(payload))
        }
        },
    actions: {
        //login for admin
        async loginAdmin({ getters }, payload) {
            try {
                const response = await axios.post(`${getters.getUrl}/admin/loginAdmin`, {
                    "email": payload.email,
                    "password": payload.password,
                });
                if (response.status === 200) {
                    return true;
                }
            }
            catch (err) {
                console.error(err.message)
            }
        },
        //login for user
        async loginStudent({ commit, getters }, payload) {
            try {
                const response = await axios.post(`${getters.getUrl}/reg/studentLogin`, {
                    "email": payload.email,
                    "password": payload.password,
                });
                if (response.status === 200) {
                    commit('setDetails', payload)
                    return true;
                }
            }
            catch (err) {
                console.error(err.message)
            }
        },
        //register for student
        async regStudent({ getters }, payload) {
            try {
                const response = await axios.post(`${getters.getUrl}/reg/student`, {
                    "name": payload.name,
                    "course": payload.course,
                    "courseYear": payload.year,
                    "email": payload.email,
                    "password": payload.password
                });
                if (response.status === 200) {
                    return true;
                }
            }
            catch (err) {
                console.error(err.message)
            }
        },
        //get quiz with id
        async getQuiz({ commit, getters }, payload) {
            try {
                const response = await axios.get(`${getters.getUrl}/quiz/get/${payload}`);
                if (response.status === 200) {
                    commit('setQuestions', payload);
                    return true;
                }
            }
            catch (err) {
                console.error(err);
            }
        },
        //get quiz all questions
        async getAllQuestions({ commit, getters }) {
            try {
                const response = await axios.get(`${getters.getUrl}/Question/allQuestions`);
                if (response.status === 200) {
                    commit('setAllQuestions', response.data);
                    return true;
                }
            }
            catch (error) {
                console.error(error)
            }
        },
        //get questions by category
        async getQuestions({ commit, getters }, payload) {
            try {
                const response = await axios.get(`${getters.getUrl}/Question/category/${payload}`);
                if (response.status === 200) {
                    commit('setQuestions', response.data);
                    return true;
                }
            }
            catch (error) {
                console.error(error)
            }
        },
        //add questions
        async addQuestions({ getters }, payload) {
            try {
                const response = await axios.post(`${getters.getUrl}/Question/add`, {
                    "questionTitle": payload.title,
                    "option1": payload.opt1,
                    "option2": payload.opt2,
                    "option3": payload.opt3,
                    "option4": payload.opt4,
                    "rightAns": payload.answer,
                    "category": payload.category
                });
                if (response.status === 200) {
                    return true;
                }
            }
            catch (err) {
                console.error(err);
            }
        },
        //get subject
        async getSubject({ commit, getters }) {
            try {
                const response = await axios.get(`${getters.getUrl}/category/allCategory`);
                if (response.status === 200) {
                    commit('setSubjects', response.data)
                }
            }
            catch (err) {
                console.error(err);
            }
        },
        //add subject
        async addSubject({ getters }, payload) {
            try {
                const response = await axios.get(`${getters.getUrl}/category/addCategory`, {
                    "subject": payload
                });
                if (response.status === 200) {
                    return true
                }
            }
            catch (err) {
                console.error(err);
            }
        }
    }
});
export default store;