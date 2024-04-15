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
                    "id": 3,
                    "questionTitle": "What is an operating system?",
                    "option1": "interface between the hardware and application programs",
                    "option2": "collection of programs that manages hardware resources",
                    "option3": "system service provider to the application programs",
                    "option4": "all of the mentioned",
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
                    "option4": "none of the mentioned",
                    visited: false,
                    answered: false,
                    selectedOption: null
                },
                {
                    "id": 5,
                    "questionTitle": "In Operating Systems, which of the following is/are CPU scheduling algorithms?",
                    "option1": "Priority",
                    "option2": "Round Robin",
                    "option3": "Shortest Job First",
                    "option4": "All of the mentioned",
                    visited: false,
                    answered: false,
                    selectedOption: null
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
            ]
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
            getSubjects(state) {
                return state.subjects;
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
        async loginStudent({ commit , getters },payload) {
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
        async regStudent({ getters },payload) {
            try {
                const response = await axios.post(`${getters.getUrl}/reg/student`, {
                    "name":payload.name,
                    "course":payload.course,
                    "courseYear":payload.year,
                    "email":payload.email,
                    "password":payload.password
                });
                if (response.status === 200) {
                    return true;
                }
            }
            catch (err) {
                console.error(err.message)
            }
        },
        //get quiz
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
        }
    }
});
export default store;