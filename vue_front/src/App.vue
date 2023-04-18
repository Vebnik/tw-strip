<template>
    <notifications />
    <div class="app">
        <v-card title="Create post" color="black" variant="tonal" class="main-card my-card">
            <forms/>
        </v-card>
    </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6c6c84;
}

body {
    padding: 10px;
    background-color: #cccccc;
}

.my-card {
    max-width: 700px;
    margin: auto
}

</style>

<script>
import Forms from "@/components/Forms.vue";

export default {
    components: {
        Forms
    }
}

</script>