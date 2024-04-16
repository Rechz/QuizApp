import { createStore } from "vuex";
import axios from 'axios';
const store = createStore({
    state() {
            return {
                // base_url: 'http://192.168.1.20:8081',
                base_url: 'http://localhost:8082',
                mobile: 9539894490,
                studentDetails : JSON.parse(sessionStorage.getItem('details')) || {},
                questions: JSON.parse(sessionStorage.getItem('questions')) || [
//                 {
//                     "questionTitle": "What is an operating system?", 
//  "option1": " interface between the hardware and application programs", 
//  "option2": "collection of programs that manages hardware resources", 
//  "option3": "system service provider to the application programs", 
//  "option4": " all of the mentioned", 
//  "rightAns": "all of the mentioned", 
//  "category": "Operating System" ,
//                     visited: false,
//                     answered: false,
//                     selectedOption: null
//                 },
//                 {
//                     "id": 4, 
//  "questionTitle": "What is the main function of the command interpreter?", 
//  "option1": "to provide the interface between the API and application program", 
//  "option2": "to handle the files in the operating system", 
//  "option3": "to get and execute the next user-specified command", 
//  "option4": " none of the mentioned", 
//  "rightAns": "to get and execute the next user-specified command", 
//  "category": "Operating System" ,
//                     visited: false,
//                     answered: false,
//                     selectedOption: null
//                 },
//                 {
//                     "id": 5, 
//  "questionTitle": " In Operating Systems, which of the following is/are CPU scheduling algorithms?", 
//  "option1": "Priority", 
//  "option2": "Round Robin", 
//  "option3": "Shortest Job First", 
//  "option4": " All of the mentioned", 
//  "rightAns": "All of the mentioned", 
//  "category": "Operating System" ,
//                     visited: false,
//                     answered: false,
//                     selectedOption: null
//                 },
//                 {
//                   "id": 6, 
//  "questionTitle": "To access the services of the operating system, the interface is provided by the ___________", 
//  "option1": "Library", 
//  "option2": "System calls", 
//  "option3": "API", 
//  "option4": "Assembly instructions", 
//  "rightAns": "System calls", 
//  "category": "Operating System" ,
//                     visited: false,
//                     answered: false,
//                     selectedOption: null
//                 }
                ],
                allQuestions: JSON.parse(sessionStorage.getItem('allQuestions')) || [],
            subjects: JSON.parse(sessionStorage.getItem('subjects')) || [],
                category: JSON.parse(sessionStorage.getItem('category')) || [],
                viewQuiz: []
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
            },
            getViewQuiz(state) {
                return state.viewQuiz;
            },
            getMobile(state) {
                return state.mobile;
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
        },
        setCategory(state, payload) {
            state.category = payload;
            sessionStorage.setItem('category', JSON.stringify(payload))
        },
        setQuiz(state, payload) {
            state.viewQuiz = payload;
        }
        },
    actions: {
        //generate OTP
        async generateOtp({ getters }) {
try {
                const response = await axios.get(`${getters.getUrl}/otp/sendOtp?phoneNumber=${getters.getMobile}`);
    if (response.status === 200) {
                    console.log(response)
                    return true;
                }
            }
            catch (err) {

                if (err.response.status === 500) {
                    throw new Error('Error logging in!')
                }
            }
        },
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

                if (err.response.status === 500) {
                    throw new Error('Error logging in!')
                }
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
                    console.log(response.data)
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
                const response = await axios.get(`${getters.getUrl}/Question/quizId/${payload}`);
                console.log(response)
                if (response.status === 200) {
                        commit('setQuiz', response.data);
                    
                   
                    return true;
                }
                else if (response.status === 204) {
                      commit('setQuiz', []);
                }
            }
            catch (error) {
                console.error(error)
            }
        },
        //add questions
        async addQuestions({ getters }, payload) {
            try {
                const response = await axios.post(`${getters.getUrl}/Question/addQ`, {
                    "questionTitle": payload.title,
                    "option1": payload.opt1,
                    "option2": payload.opt2,
                    "option3": payload.opt3,
                    "option4": payload.opt4,
                    "rightAns": payload.answer,
                    "quizId": payload.category
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
                const response = await axios.post(`${getters.getUrl}/category/addCategory`, {
                    "subject": payload
                });
                if (response.status === 200) {
                    return true;
                }
            }
            catch (err) {
                console.error(err);
            }
        },
        //add quiz
        async addQuiz({ getters }, payload) {
            try {
                const response = await axios.post(`${getters.getUrl}/quiz/addQuiz`, {
                    "category":payload.subject,
                    "quizName":payload.exam,
                    "timer":payload.time
                });
                if (response.status === 200) {
                    return true;
                }
            }
            catch (error) {
                console.error(error)
            }
        },
        //get quiz id
        async getQuizId({ commit, getters }) {
            try {
                const response = await axios.get(`${getters.getUrl}/quiz/getQuiz`);
                if (response.status === 200) {
                    console.log(response.data)
                    commit('setCategory', response.data)
                }
            }
            catch (error) {
                console.error(error)
            }
        }
    }
});
export default store;