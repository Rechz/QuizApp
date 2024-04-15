<template>
    <div class="d-flex justify-content-center align-items-center background">


        <div class="main ">
            <input type="checkbox" id="chk" aria-hidden="true">
            <v-card class="signup bg-transparent px-4">
                <v-form>

                    <label for="chk" aria-hidden="true" class="label ">Register</label>
                    <div class="d-flex gap-4 pt-5">
                        <v-text-field v-model="name" :rules="[required]" class="mb-2" label="Name" density="comfortable"
                            clearable></v-text-field>
                        <v-text-field v-model="course" :rules="[required]" class="mb-2" label="Course"
                            density="comfortable" clearable></v-text-field>
                    </div>
                    <div class="d-flex gap-4">
                        <v-text-field v-model="year" :rules="[required]" class="mb-2" label="Course Year"
                            density="comfortable" clearable></v-text-field>
                        <v-text-field v-model="email" :rules="[required]" class="mb-2" label="Email"
                            density="comfortable" clearable></v-text-field>
                    </div>
                    <div class="d-flex gap-4">
                        <v-text-field v-model="password" :rules="[required]" class="mb-2" label="Password"
                            density="comfortable" clearable></v-text-field>
                        <v-text-field v-model="cpassword" :rules="[required]" class="mb-2" label="Confirm Password"
                            density="comfortable" clearable></v-text-field>
                    </div>
                    <div class="d-flex justify-content-center ">
                        <v-btn size="large" class="button" variant="elevated" color="#512DA8"
                            @click="register">Register</v-btn>
                    </div>
                    <v-dialog v-model="dialog" width="auto">
                        <v-card class="pa-4 px-5 text-center mx-auto" elevation="12" max-width="600" rounded="lg"
                            width="100%">
                            <v-icon class="mb-2" color="success" icon="mdi-check-circle mx-auto" size="112"></v-icon>
                            <h2 class="text-h5 mb-2">You have successfully registered!</h2>
                            <p class="mb-2 text-medium-emphasis text-body-2">
                                Login to proceed with the quiz. </p>
                            <v-divider class="mb-3"></v-divider>
                            <div class="text-end">
                                <v-btn class="ms-auto" color="success" variant="tonal" text="Ok" @click="dialog = false"></v-btn>
                            </div>
                        </v-card>
                    </v-dialog>
                </v-form>
            </v-card>

            <div class="login pt-4">
                <form>
                    <label for="chk" aria-hidden="true" class="label">Login</label>
                    <v-card class="pt-5 bg-transparent px-5 " flat>
                        <v-text-field v-model="emaillogin" :rules="[required]" class="mb-4 mt-4 log" label="Email"
                            density="comfortable" clearable></v-text-field>
                        <v-text-field v-model="passwordlogin" :rules="[required]" class="mb-5 log" label="Password"
                            density="comfortable" clearable></v-text-field>
                        <div class="d-flex justify-content-center ">
                            <v-btn size="large" class="button" variant="elevated" color="#512DA8"
                                @click="login">Login</v-btn>
                        </div>
                    </v-card>
                </form>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            name: '',
            course: '',
            year: '',
            email: '',
            password: '',
            cpassword: '',
            emaillogin: '',
            passwordlogin: '',
            dialog: false,
        };
    },
    methods: {
        login() {
            this.$router.push('/studentHome')
        },
        register() {
            this.dialog = true
        }
    }
}
</script>

<style scoped>
.background{
    /* background-image: linear-gradient(161deg, rgba(117, 117, 117, 0.03) 0%, rgba(117, 117, 117, 0.03) 50%, rgba(8, 8, 8, 0.03) 50%, rgba(8, 8, 8, 0.03) 100%), linear-gradient(59deg, rgba(245, 245, 245, 0.05) 0%, rgba(245, 245, 245, 0.05) 50%, rgba(68, 68, 68, 0.05) 50%, rgba(68, 68, 68, 0.05) 100%), linear-gradient(286deg, rgba(107, 107, 107, 0.07) 0%, rgba(107, 107, 107, 0.07) 50%, rgba(7, 7, 7, 0.07) 50%, rgba(7, 7, 7, 0.07) 100%), linear-gradient(123deg, rgba(9, 9, 9, 0.09) 0%, rgba(9, 9, 9, 0.09) 50%, rgba(120, 120, 120, 0.09) 50%, rgba(120, 120, 120, 0.09) 100%), linear-gradient(170deg, rgba(202, 202, 202, 0.01) 0%, rgba(202, 202, 202, 0.01) 50%, rgba(19, 19, 19, 0.01) 50%, rgba(19, 19, 19, 0.01) 100%), linear-gradient(210deg, rgba(64, 64, 64, 0.04) 0%, rgba(64, 64, 64, 0.04) 50%, rgba(4, 4, 4, 0.04) 50%, rgba(4, 4, 4, 0.04) 100%), linear-gradient(90deg, rgb(146, 133, 145), rgb(255, 255, 255)); */
    background-image: linear-gradient(353deg, rgba(117, 117, 117, 0.03) 0%, rgba(117, 117, 117, 0.03) 50%, rgba(8, 8, 8, 0.03) 50%, rgba(8, 8, 8, 0.03) 100%), linear-gradient(251deg, rgba(245, 245, 245, 0.05) 0%, rgba(245, 245, 245, 0.05) 50%, rgba(68, 68, 68, 0.05) 50%, rgba(68, 68, 68, 0.05) 100%), linear-gradient(478deg, rgba(107, 107, 107, 0.07) 0%, rgba(107, 107, 107, 0.07) 50%, rgba(7, 7, 7, 0.07) 50%, rgba(7, 7, 7, 0.07) 100%), linear-gradient(315deg, rgba(9, 9, 9, 0.09) 0%, rgba(9, 9, 9, 0.09) 50%, rgba(120, 120, 120, 0.09) 50%, rgba(120, 120, 120, 0.09) 100%), linear-gradient(362deg, rgba(202, 202, 202, 0.01) 0%, rgba(202, 202, 202, 0.01) 50%, rgba(19, 19, 19, 0.01) 50%, rgba(19, 19, 19, 0.01) 100%), linear-gradient(402deg, rgba(64, 64, 64, 0.04) 0%, rgba(64, 64, 64, 0.04) 50%, rgba(4, 4, 4, 0.04) 50%, rgba(4, 4, 4, 0.04) 100%), linear-gradient(282deg, rgb(138, 30, 121), rgb(48, 20, 121));
    height: 100vh;
}

.main {
    width: 650px;
    height: 580px;
    overflow: hidden;
    background-image: linear-gradient(161deg, rgba(117, 117, 117, 0.03) 0%, rgba(117, 117, 117, 0.03) 50%, rgba(8, 8, 8, 0.03) 50%, rgba(8, 8, 8, 0.03) 100%), 
    linear-gradient(59deg, rgba(245, 245, 245, 0.05) 0%, rgba(245, 245, 245, 0.05) 50%, rgba(68, 68, 68, 0.05) 50%, rgba(68, 68, 68, 0.05) 100%), 
    linear-gradient(286deg, rgba(107, 107, 107, 0.07) 0%, rgba(107, 107, 107, 0.07) 50%, rgba(7, 7, 7, 0.07) 50%, rgba(7, 7, 7, 0.07) 100%), 
    linear-gradient(123deg, rgba(9, 9, 9, 0.09) 0%, rgba(9, 9, 9, 0.09) 50%, rgba(120, 120, 120, 0.09) 50%, rgba(120, 120, 120, 0.09) 100%), 
    linear-gradient(170deg, rgba(202, 202, 202, 0.01) 0%, rgba(202, 202, 202, 0.01) 50%, rgba(19, 19, 19, 0.01) 50%, rgba(19, 19, 19, 0.01) 100%), 
    linear-gradient(210deg, rgba(64, 64, 64, 0.04) 0%, rgba(64, 64, 64, 0.04) 50%, rgba(4, 4, 4, 0.04) 50%, rgba(4, 4, 4, 0.04) 100%), 
    linear-gradient(90deg, #4c053a, rgb(63, 13, 142));
    background-blend-mode: overlay, overlay, overlay, normal;
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000;
}

#chk {
    display: none;
}

.signup {
    position: relative;
    width: 100%;
    height: 100%;
}

.label {
    color: #fff;
    font-size: 2.3em;

    justify-content: center;
    display: flex;
    margin: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease-in-out;
}

:deep(.v-input__control) {
    border-bottom: 2px solid #172b6d;
    border-radius: 15px;
    width: 300px;
    background-color: #ffffff !important;
}
:deep(.log .v-input__control) {    
    background-color: #C5CAE9 !important;
}

.login {
    height: 570px;
    background: #eee;
    border-radius: 55% / 80px;
    transform: translateY(-120px);
    transition: .8s ease-in-out;
}

.login label {
    color: #573b8a;
    transform: scale(.6);
}

#chk:checked~.login {
    transform: translateY(-506px);
}

#chk:checked~.login label {
    transform: scale(1);
}

#chk:checked~.signup label {
    transform: scale(.6);
}
:deep(.log.v-input) {
    display: flex;
    justify-content: center;
}
:deep(.v-field__outline, .v-field__outline:blur) {
    opacity: 0;
}
</style>

