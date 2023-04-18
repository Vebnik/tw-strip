import {API} from './Api'

class AppService {

    async getCategory() {
        return await API.get('category/')
    }

    async getPosts() {
        return await API.get('posts/')
    }

    async createPosts(data){
        return await API.post('posts/', data)
    }
}

export default new AppService()
