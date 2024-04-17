import { createStore } from "vuex";
import axios from 'axios';
const store = createStore({
    state() {
            return {
                base_url: 'http://localhost:8081',
                api_key: 'd5071786-fa68-11ee-8cbb-0200cd936042',
                mobile: 9746552792,
                studentDetails : JSON.parse(sessionStorage.getItem('details')) || {},
                subjects: JSON.parse(sessionStorage.getItem('subjects')) || [],
                category: JSON.parse(sessionStorage.getItem('category')) || [],
                viewQuiz: JSON.parse(sessionStorage.getItem('questions')) || [],
                viewSubjects: JSON.parse(sessionStorage.getItem('viewSub')) || null,
                results: JSON.parse(sessionStorage.getItem('results')) || {}
            };
        },
        getters: {
            getUrl(state) {
                return state.base_url;
            },
            getDetails(state) {
                return state.studentDetails;  
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
            },
            getApi(state) {
                return state.api_key;
            },
            getViewSubjects(state) {
                return state.viewSubjects;
            },
            getResults(state) {
                return state.results;
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
   
        setCategory(state, payload) {
            state.category = payload;
            sessionStorage.setItem('category', JSON.stringify(payload))
        },
          setResults(state, payload) {
            state.results = payload;
            // sessionStorage.setItem('results', JSON.stringify(payload))
        },
        setQuiz(state, payload) {
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
            state.viewQuiz = payload;
            sessionStorage.setItem('questions', JSON.stringify(payload))
        },
        setViewSubjects(state, payload) {
            state.viewSubjects = payload;
            sessionStorage.setItem('viewSub', JSON.stringify(payload))
        },
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
                    console.log(response.data)
                    commit('setDetails', response.data)
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
        async getQuestions({ commit, getters }, payload) {
            try {
                const response = await axios.get(`${getters.getUrl}/Question/quizId/${payload}`);
                console.log(response)
                if (response.status === 200) {
                    commit('setQuiz', response.data);
                    console.log(payload)
                    const cat = getters.getCategory
                    const details = cat.filter(item => item.id === parseInt(payload));
                    console.log(details)
                    commit('setViewSubjects',details)
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
                    "category": payload.subject,
                    "quizName": payload.exam,
                    "timer": payload.time
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
        },
        //get verify otp
        async verifyOtp({ getters }, payload) {
            try {
                const response = await axios.get(`${getters.getUrl}/otp/verify?api_key=${getters.getApi}&phoneNumber=${getters.getMobile}&otp=${payload}`)
                if (response.status === 200) {
                    return true;
                }
            }
            catch (error) {
                console.error(error)
            }
        },
        //submit quiz
        async submit({ commit, getters }, payload) {
           try {
               const response = await axios.post(`${getters.getUrl}/quiz/submit/${payload.id}?studentName=${payload.student}&total=${payload.total}`, 
                   payload.result
               );
               if (response.status === 200) {
                   console.log(response.data)
                   commit('setResults', response.data);
                    return true;
                }
            }
            catch (error) {
                console.error(error)
            } 
        },
        //get results
        async getResults({ commit, getters }, payload) {
            try {
                const response = await axios.get(`${getters.getUrl}/quiz/result/${payload}`);
                if (response.status === 200) {
                    console.log('result',response.data)
                    const cat = getters.getCategory
                    const details = cat.filter(item => item.id === parseInt(payload));
                    commit('setViewSubjects',details)
                    commit('setResults', response.data)
                } 
                
                }
            
            catch(error) {
               commit('setResults', []);
                console.error(error)
            }
        }
    }
});
export default store;