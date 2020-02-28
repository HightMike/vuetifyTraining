<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <nav>

        <v-app-bar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Bruti</span>
                <span>ful</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-exit_to_app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="purple lighten-3">

            <v-list rounded>
                <v-subheader>Brutiful</v-subheader>
                <v-list-item-group v-model="item" color="primary">
                    <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                            router :to="item.route"

                    >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>


        </v-navigation-drawer>

    </nav>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
                item: 1,
                items: [
                    { text: 'Profile', icon: 'mdi-clock', route: '/profile'},
                    { text: 'Calendar', icon: 'mdi-account', route: '/' },
                    { text: 'Scheduler', icon: 'mdi-flag', route: '/scheduler' },
                    { text: 'Bids', icon: 'mdi-bid',route: '/bids' },
                    { text: 'Statistic', icon: 'mdi-statistic', route: '/statistic' },
                    { text: 'Balance', icon: 'mdi-balance', route: '/balance' },
                ],
            }
        }
    }
</script>

<style>
</style>