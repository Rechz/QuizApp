<template>
    <v-snackbar v-model="snackbar" :timeout="timeout" color="danger" location="top">
        <h6 class="text-center">{{ text }}</h6>
    </v-snackbar>
    <v-sheet class="pa-12 d-flex justify-content-center align-items-center flex-column login" rounded
        style="height: 100vh;">
        <v-card class="mx-auto pb-8" max-width="400" width="344" elevation="6">
            <v-card-title class="bg-deep-purple-lighten-4 text-grey-darken-3 text-center">Admin Login</v-card-title>
            <v-form v-model="form" @submit.prevent="onSubmit" class=" px-6 pt-8">
                <v-text-field v-model="email" :readonly="loading" :rules="[required]" class="mb-2" label="Email"
                    clearable></v-text-field>
                <v-text-field v-model="password" :readonly="loading" :rules="[required]" label="Password"
                    placeholder="Enter your password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'" 
                     @click:append-inner="visible = !visible"></v-text-field>
                <br>
                <div class="d-flex justify-content-center">
                    <v-btn :loading="loading" color="#512DA8" size="large" type="submit" variant="elevated"
                        rounded="xl">
                        LogIn
                    </v-btn>
                </div>
            </v-form>
        </v-card>
    </v-sheet>
</template>
<script>
export default {
    data: () => ({
        form: false,
        email: null,
        password: null,
        loading: false,
        timeout: 3000,
        visible: false,
        snackbar: false,
        text: 'Error logging in !'
    }),

    methods: {
        async onSubmit() {
            try{
            if (!this.form) return;
            this.loading = true;
            const payload = {
                email: this.email,
                password: this.password,
            };
            const success = await this.$store.dispatch('loginAdmin', payload);
                if (success) {
                    this.loading = false;
                    this.$router.push('/admin');    
            } 
            } catch (error) {
                this.text = error
                this.snackbar = true;
                setTimeout(() => {
                    this.loading = false;
                }, 3000);
                
      }
    },
        required(v) {
            return !!v || 'Field is required'
        },
    },
}
</script>

<style scoped>
.login{
    background-image: linear-gradient(161deg, rgba(117, 117, 117, 0.03) 0%, rgba(117, 117, 117, 0.03) 50%, rgba(8, 8, 8, 0.03) 50%, rgba(8, 8, 8, 0.03) 100%), linear-gradient(59deg, rgba(245, 245, 245, 0.05) 0%, rgba(245, 245, 245, 0.05) 50%, rgba(68, 68, 68, 0.05) 50%, rgba(68, 68, 68, 0.05) 100%), linear-gradient(286deg, rgba(107, 107, 107, 0.07) 0%, rgba(107, 107, 107, 0.07) 50%, rgba(7, 7, 7, 0.07) 50%, rgba(7, 7, 7, 0.07) 100%), linear-gradient(123deg, rgba(9, 9, 9, 0.09) 0%, rgba(9, 9, 9, 0.09) 50%, rgba(120, 120, 120, 0.09) 50%, rgba(120, 120, 120, 0.09) 100%), linear-gradient(170deg, rgba(202, 202, 202, 0.01) 0%, rgba(202, 202, 202, 0.01) 50%, rgba(19, 19, 19, 0.01) 50%, rgba(19, 19, 19, 0.01) 100%), linear-gradient(210deg, rgba(64, 64, 64, 0.04) 0%, rgba(64, 64, 64, 0.04) 50%, rgba(4, 4, 4, 0.04) 50%, rgba(4, 4, 4, 0.04) 100%), linear-gradient(90deg, rgb(76, 5, 58), rgb(63, 13, 142));
}
.v-btn:hover{
    transform: scale(1.1);
}
</style>