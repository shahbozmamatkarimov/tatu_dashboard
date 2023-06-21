import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useSkillStore = defineStore('skills', () => {
    const state = reactive({
        skills: [],
    })

    const createProducts = async (data) => {
        let token = localStorage.getItem('tokenAdminPanel');
        try {
            await fetch('https://portfoliobackend-production-792f.up.railway.app/api/skills/create', {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(data)
            })
            getProducts();
        } catch (error) {
            console.log(error);
        }
    }

    const getProducts = async () => {
        try {
            const response = await fetch('https://portfoliobackend-production-792f.up.railway.app/api/skills/findall')
            const products = await response.json()
            mode: 'no-cors'
            state.skills = products
        } catch (error) {
            console.log(error);
        }
    }

    const updateProduct = async (id, data) => {
        let token = localStorage.getItem('tokenAdminPanel');
        try {
            const response = await fetch(`https://portfoliobackend-production-792f.up.railway.app/api/skills/${id}`, {
                method: 'PUT',
                mode: 'no-cors',
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
            const response = await fetch(`https://portfoliobackend-production-792f.up.railway.app/api/skills/${id}`, {
                method: 'DELETE',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, },
            })
            getProducts()
        } catch (error) {
            console.log(error);
        }
    }

    const Skills = computed(() => state.skills)

    return { state, Skills, createProducts, getProducts, updateProduct, deleteProduct }
})