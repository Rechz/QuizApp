<template>
    <v-main>
        <v-container class="py-8 px-6" fluid>
            <div class="d-flex gap-3 align-items-center justify-content-center">
            <h1>Add Subject</h1>
    <!-- <v-icon class="mdi mdi-arrow-down-bold-outline" size="160" color="white"></v-icon> -->
    <div class="d-flex gap-2">
        <v-card  color="grey-lighten-3" max-width="400" width="250">
            <v-card-text>
                <v-text-field append-inner-icon="mdi-arrow-right-bold-box" density="default"
                    label="Enter Subject" variant="solo" hide-details single-line
                    ></v-text-field>
            </v-card-text>
        </v-card>
    </div>
</div>
        </v-container>
    </v-main>
</template>

<style scoped>
.subject {
    height: 100vh;
}

.subject h1 {
    font-family: "Reddit Mono", monospace;
    text-transform: uppercase;
    font-size: 6rem;
    color: ghostwhite;
    font-weight: 900;
    font-style: normal;
    text-align: center;
}

.options {
    margin-top: 20px;
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
}

.options .v-btn {
    width: 300px;
    height: 50px;
    font-size: x-large;
}

.v-btn:hover {
    background-color: #4E342E !important;
    color: azure !important;
    transform: scale(1.1);
}
</style>

