import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useContentStore = defineStore('content', () => {
    const state = reactive({
        content: [],
    })

    const createProducts = async (data) => {
        let token = localStorage.getItem('tokenAdminPanel');
        try {
            await fetch('http://localhost:4000/api/content/create', {
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
            const response = await fetch('http://localhost:4000/api/content/findall')
            state.content = await response.json()
            return state.content;
            console.log('object');
        } catch (error) {
            console.log(error);
        }
    }

    const getOneProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/api/content/${id}`)
            const content = await response.json()
            return content;
        } catch (error) {
            console.log(error);
        }
    }

    const updateProduct = async (id, data) => {
        let token = localStorage.getItem('tokenAdminPanel');
        try {
            const response = await fetch(`http://localhost:4000/api/content/${id}`, {
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
            const response = await fetch(`http://localhost:4000/api/content/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, },
            })
            getProducts()
        } catch (error) {
            console.log(error);
        }
    }

    const Contents = computed(() => state.content)

    return { Contents, createProducts, getOneProduct, getProducts, updateProduct, deleteProduct }
})