<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" elevation="4">
            <v-sheet class="pa-4 pb-0 bg-purple-lighten-5 d-flex justify-content-center ">
                <v-avatar class="mb-4" color="purple-darken-2" size="64">A</v-avatar>

            </v-sheet>


            <v-list nav class="mt-0">
                <router-link to='/admin/quiz' style="text-decoration: none; " class="text-grey-darken-3"><v-list-item
                        prepend-icon="mdi mdi-lightbulb" title="Quiz" value="quiz"></v-list-item></router-link>
                <router-link to='/admin/viewsubject' style="text-decoration: none; "
                    class="text-grey-darken-3"><v-list-item prepend-icon="mdi mdi-book-multiple" title="Subjects"
                        value="subject" density="compact"></v-list-item>
                </router-link>


                <v-list-group value="Questions">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-file-question-outline"
                            title="Questions"></v-list-item>
                    </template>
                    <router-link to='/admin/viewQuestion' style="text-decoration: none; "
                        class="text-grey-darken-3"><v-list-item prepend-icon="mdi mdi-eye-check" title="View Questions"
                            value="questions" density="compact"></v-list-item>
                    </router-link>
                    <router-link to='/admin/addQuestion' style="text-decoration: none; "
                        class="text-grey-darken-3"><v-list-item prepend-icon="mdi mdi-plus" title="Add Questions"
                            value="createques" density="compact"></v-list-item>
                    </router-link>
                </v-list-group>
                <router-link to='/admin/viewResults' style="text-decoration: none; "
                    class="text-grey-darken-3"><v-list-item prepend-icon="mdi mdi-trending-up" title="View Results"
                        value="result"></v-list-item></router-link>
                <v-spacer></v-spacer>
                <v-divider></v-divider>

                <v-list-item prepend-icon="mdi mdi-logout" title="Logout" value="logout" @click="$router.push('/')"></v-list-item>
                <v-spacer></v-spacer>
            </v-list>

        </v-navigation-drawer>
        <div class="mt-4 ">
            <router-view></router-view>
        </div>

        <v-app-bar class="navbar text-blue-grey-lighten-5">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-app-bar-title>{{ selectedNavItem }}</v-app-bar-title>
        </v-app-bar>

        <!-- <v-main>
     
    </v-main> -->
    </v-app>
</template>



<script>
export default {
    data() {
        return {
            drawer: null,
            navItems: [ // Define your navigation items here
                { text: 'Results', route: '/admin/viewResults' },
                { text: 'Home', route: '/admin/quiz' },
                { text: 'Subjects', route: '/admin/viewsubject' },
                { text: 'Add Questions', route: '/admin/addQuestion' },
                { text: 'View Questions', route: '/admin/viewQuestion' },
            ],
        };
    },
    computed: {
        selectedRoute() {
            return this.$route.path;
        },
        selectedNavItem() {
            const selectedItem = this.navItems.find(item => item.route === this.selectedRoute);
            return selectedItem ? selectedItem.text : '';
        }
    },
    watch: {
        selectedRoute(newRoute) {
            const selectedItem = this.navItems.find(item => item.route === newRoute);
            if (selectedItem) {
                this.selectedNavItem = selectedItem.text;
            }
        }
    }
};
</script>

<style scoped>
.navbar {
    background-image: linear-gradient(161deg, rgba(117, 117, 117, 0.03) 0%, rgba(117, 117, 117, 0.03) 50%, rgba(8, 8, 8, 0.03) 50%, rgba(8, 8, 8, 0.03) 100%), linear-gradient(59deg, rgba(245, 245, 245, 0.05) 0%, rgba(245, 245, 245, 0.05) 50%, rgba(68, 68, 68, 0.05) 50%, rgba(68, 68, 68, 0.05) 100%), linear-gradient(286deg, rgba(107, 107, 107, 0.07) 0%, rgba(107, 107, 107, 0.07) 50%, rgba(7, 7, 7, 0.07) 50%, rgba(7, 7, 7, 0.07) 100%), linear-gradient(123deg, rgba(9, 9, 9, 0.09) 0%, rgba(9, 9, 9, 0.09) 50%, rgba(120, 120, 120, 0.09) 50%, rgba(120, 120, 120, 0.09) 100%), linear-gradient(170deg, rgba(202, 202, 202, 0.01) 0%, rgba(202, 202, 202, 0.01) 50%, rgba(19, 19, 19, 0.01) 50%, rgba(19, 19, 19, 0.01) 100%), linear-gradient(210deg, rgba(64, 64, 64, 0.04) 0%, rgba(64, 64, 64, 0.04) 50%, rgba(4, 4, 4, 0.04) 50%, rgba(4, 4, 4, 0.04) 100%), linear-gradient(90deg, rgb(76, 5, 58), rgb(63, 13, 142));
}

a.router-link-active .v-list-item,
.v-list-item--active {
    background-color: #F3E5F5;
}
:deep(.v-list-item__spacer){
    width: 10px !important;
}
</style>