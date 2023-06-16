import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', () => {
    const state = reactive({
        products: [],
        productOne: [],
        errorMessage: ''
    })

    const createProducts = async (form) => {
        let token = localStorage.getItem('tokenAdminPanel');
        try {
            await fetch('http://localhost:3000/api/experience/create', {
                method: 'POST',
                headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({
                    time: form.time,
                    title: form.title,
                    description: form.description,
                    languages: form.languages.join(','),
                })
            })
            getProducts();
        } catch (error) {
            console.log(error);
        }
    }

    const getProducts = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/experience/findall')
            const products = await response.json()
            state.products = products
        } catch (error) {
            console.log(error);
        }
    }

    const getOneProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/api/experience/${id}`)
            const products = await response.json()
            state.productOne = products
        } catch (error) {
            console.log(error);
        }
    }

    const updateProduct = async (id, data) => {
        let token = localStorage.getItem('tokenAdminPanel');
        try {
            const response = await fetch(`http://localhost:3000/api/experience/${id}`, {
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
            const response = await fetch(`http://localhost:3000/api/experience/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, },
            })
            getProducts()
        } catch (error) {
            console.log(error);
        }
    }

    const Products = computed(() => state.products)

    return { state, Products, createProducts, getProducts, getOneProduct, updateProduct, deleteProduct }
})