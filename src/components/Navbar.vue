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

            <v-list>
                <v-list-group
                        v-for="item in items"
                        :key="item.title"
                        v-model="item.active"
                        :prepend-icon="item.action"
                        no-action
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                            v-for="subItem in item.items"
                            :key="subItem.title"
                            click=""
                    >
                        <v-list-item-content>
                            <v-list-item-title v-text="subItem.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
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
                        action: 'mdi-local_activity',
                        title: 'Личный кабинет',
                        items: [
                            { title: 'List Item' },
                        ],
                    },
                    {
                        action: 'mdi-restaurant',
                        title: 'Календарь',
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
                        items: [
                            { title: 'List Item' },
                        ],
                    },
                    {
                        action: 'mdi-directions_run',
                        title: 'Статистика',
                        items: [
                            { title: 'List Item' },
                        ],
                    },
                    {
                        action: 'mdi-healing',
                        title: 'Заявки',
                        items: [
                            { title: 'List Item' },
                        ],
                    },
                    {
                        action: 'mdi-content_cut',
                        title: 'Баланс',
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