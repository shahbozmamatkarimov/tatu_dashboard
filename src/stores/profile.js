import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', () => {
    const state = reactive({
        profile: [],
    })

    const createProducts = async (data) => {
        let token = localStorage.getItem('tokenAdminPanel');
        try {
            await fetch('http://localhost:4000/api/profile/create', {
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
            const response = await fetch('http://localhost:4000/api/profile/findall')
            const products = await response.json()
            state.profile = products
            return products;
        } catch (error) {
            console.log(error);
        }
    }

    const updateProduct = async (id, data) => {
        let token = localStorage.getItem('tokenAdminPanel');
        try {
            const response = await fetch(`http://localhost:4000/api/profile/${id}`, {
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
            const response = await fetch(`http://localhost:4000/api/profile/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, },
            })
            getProducts()
        } catch (error) {
            console.log(error);
        }
    }

    const Profile = computed(() => state.profile)

    return { state, Profile, createProducts, getProducts, updateProduct, deleteProduct }
})