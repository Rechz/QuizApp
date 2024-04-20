<template>
    <v-main class="home">
        <h1>Welcome</h1>
        <h5>Choose your role</h5>
        <v-container class="d-flex justify-content-center gap-5 flex-wrap">
            <router-link to='/adminLogin'><v-btn height="80" width="300" class="fs-1" variant="elevated" color="#4E342E"
                    rounded="xl">
                    ADMIN</v-btn></router-link>
            <router-link to='/studentLogin'><v-btn height="80" width="300" class="fs-1" variant="elevated"
                    color="#ffdcbf" rounded="xl">
                    STUDENT</v-btn></router-link>
        </v-container>
    </v-main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Reddit+Mono:wght@200..900&display=swap');

.home {
background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
.home>h1{
    font-size: clamp(5rem, 5rem + 5.3333vw, 9rem);
    font-family: "Reddit Mono", monospace;
    font-weight: 900;
    text-transform: uppercase;
    color:ghostwhite
}
.home>h5{
    font-size: clamp(1rem, 1.1667rem + 1.7778vw, 2.1rem);
    font-weight: 400;
    color: azure;
}
.v-btn:hover{
   transform: scale(1.1);
}
</style>
