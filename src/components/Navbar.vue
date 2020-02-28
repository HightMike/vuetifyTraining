<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <nav>

        <v-app-bar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-exit_to_app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="purple lighten-3">

            <v-list rounded>
                <v-subheader>REPORTS</v-subheader>
                <v-list-item-group v-model="item" color="primary">
                    <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
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
                items: [
                    {
                        action: 'mdi-local_act',
                        title: 'Календарь',
                        route: '/calendar',
                        active: true,
                        items: [
                            { title: 'Breakfast & brunch' },
                            { title: 'New American' },
                            { title: 'Sushi' },
                        ],
                    },
                    {
                        action: 'mdi-school',
                        title: 'Планировщик',
                        route: '/scheduler',
                        items: [
                            { title: 'List Item' },
                        ],
                    },
                    {
                        action: 'mdi-directions_run',
                        title: 'Статистика',
                        route: '/statistic',
                        items: [
                            { title: 'List Item' },
                        ],
                    },
                    {
                        action: 'mdi-healing',
                        title: 'Заявки',
                        route: '/bids',
                        items: [
                            { title: 'List Item' },
                        ],
                    },
                    {
                        action: 'mdi-content_cut',
                        title: 'Баланс',
                        route: '/balance',
                        items: [
                            { title: 'List Item' },
                        ],
                    },
                ],
            }
        }
    }
</script>

<style>
</style>