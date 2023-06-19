import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCommentStore = defineStore('comment', () => {
    const state = reactive({
        comment: [],
    })

    const createProducts = async (data) => {
        let token = localStorage.getItem('tokenAdminPanel');
        try {
            await fetch('http://localhost:4000/api/comment/create', {
                method: 'POST',
                headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(data)
            })
            getProducts();
        } catch (error) {
            console.log(error);
        }
    }

    const getProducts = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/comment/findall')
            state.comment = await response.json()
            return state.comment;
            console.log('object');
        } catch (error) {
            console.log(error);
        }
    }

    const getOneProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/api/comment/${id}`)
            const comment = await response.json()
            return comment;
        } catch (error) {
            console.log(error);
        }
    }

    const updateProduct = async (id, data) => {
        let token = localStorage.getItem('tokenAdminPanel');
        try {
            const response = await fetch(`http://localhost:4000/api/comment/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, },
                body: JSON.stringify(data),
            })
            getProducts()
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProduct = async (id) => {
        let token = localStorage.getItem('tokenAdminPanel');
        try {
            const response = await fetch(`http://localhost:4000/api/comment/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, },
            })
            getProducts()
        } catch (error) {
            console.log(error);
        }
    }

    const Comments = computed(() => state.comment)

    return { Comments, createProducts, getOneProduct, getProducts, updateProduct, deleteProduct }
})