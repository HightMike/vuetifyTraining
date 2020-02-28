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

        <v-navigation-drawer app v-model="drawer" class="green darken-3">

            <v-list rounded>
                <v-subheader class="white--text">Brutiful</v-subheader>
                <v-list-item-group v-model="item" color="primary">
                    <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                            router :to="item.route"

                    >
                        <v-list-item-icon>
                            <v-icon class="white--text" v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="white--text" v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>


        </v-navigation-drawer>

    </nav>
</template>

<script>
    import { mdiAccountMultiple } from '@mdi/js';
    import { mdiCalendarMonth } from '@mdi/js';
    import { mdiCalendarText } from '@mdi/js';
    import { mdiFileCancelOutline } from '@mdi/js';
    import { mdiGraphOutline } from '@mdi/js';
    import { mdiCashUsdOutline } from '@mdi/js';
    export default {
        data() {
            return {
                drawer: false,
                item: 1,
                items: [
                    { text: 'Profile', icon: mdiAccountMultiple, route: '/profile'},
                    { text: 'Calendar', icon: mdiCalendarMonth, route: '/' },
                    { text: 'Scheduler', icon: mdiCalendarText, route: '/scheduler' },
                    { text: 'Bids', icon: mdiFileCancelOutline,route: '/bids' },
                    { text: 'Statistic', icon: mdiGraphOutline, route: '/statistic' },
                    { text: 'Balance', icon: mdiCashUsdOutline, route: '/balance' },
                ],
            }
        }
    }
</script>

<style>
</style>