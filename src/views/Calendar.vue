<template>
    <div class="calendar">
        <h1 class="subheading grey--text">Calendar</h1>

        <v-container class="my-5">
            <v-layout row>
                <v-flex xs12 md6>
                    <v-btn outline block class="primary">first</v-btn>
                </v-flex>
                <v-flex xs12 md6>
                    <v-btn outline block class="primary">second</v-btn>
                </v-flex>
            </v-layout>
            content
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Calendar"
    }
</script>

<style scoped>

</style>
