import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useNetworkStore = defineStore('Socialnetworks', () => {
    const state = reactive({
        products: [],
    })

    const createProducts = async (data) => {
        let token = localStorage.getItem('tokenAdminPanel');
        try {
            await fetch('http://localhost:3000/api/socialnetworks/create', {
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
            const response = await fetch('http://localhost:3000/api/socialnetworks/findall')
            const products = await response.json()
            state.products = products
        } catch (error) {
            console.log(error);
        }
    }

    const updateProduct = async (id, data) => {
        let token = localStorage.getItem('tokenAdminPanel');
        try {
            const response = await fetch(`http://localhost:3000/api/socialnetworks/${id}`, {
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
            const response = await fetch(`http://localhost:3000/api/socialnetworks/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, },
            })
            getProducts()
        } catch (error) {
            console.log(error);
        }
    }

    const Products = computed(() => state.products)

    return { state, Products, createProducts, getProducts, updateProduct, deleteProduct }
})