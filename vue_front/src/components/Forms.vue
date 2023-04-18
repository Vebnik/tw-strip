<template>
    <form @submit.prevent="postCreate" class="pa-2">
        <v-text-field
                v-model="title"
                label="Title"
        ></v-text-field>

        <v-textarea
                v-model="content"
                :counter="255"
                label="Content"
        ></v-textarea>

        <v-select
                v-model="category"
                :items="categories"
                label="Category"
                item-value="id"
        ></v-select>

        <v-btn
                class="me-4"
                type="submit"
        >
            Create
        </v-btn>

        <v-btn @click="handleReset">
            Discard
        </v-btn>
    </form>
</template>

<script>
import AppService from "@/service/AppService";
import Alert from "@/components/Alert";

export default {
    name: 'Forms',
    components: {Alert},
    data() {
        return {
            categories: [],
            title: '',
            content: '',
            category: '',
        }
    },
    methods: {
        handleReset() {
            this.title = ''; this.content = ''; this.category = ''
        },
        async postCreate() {
            const data = {
                title: this.title,
                content: this.content,
                category: this.category
            }

            await AppService.createPosts(data)
                .then(res => {
                    const metaData = `Created at: ${res.data.created_at}\nSymbols: ${res.data.symbol_count}`
                    this.$notify({ title: 'Post created', text: metaData, type: 'success' })
                    this.handleReset()
                })
                .catch(err => {
                    this.$notify({ title: 'Post not created', text: err, type: 'error' })
                })
        },
        async getCategory() {
            await AppService.getCategory()
                .then(res => { this.categories = res.data })
                .catch(err => console.log(err))
        }
    },
    mounted() {
        this.getCategory()
    }
}
</script>

<style scoped>

form {
    width: 100%;
    padding: 20px;
}
</style>