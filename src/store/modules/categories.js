import axios from "@/utils/axios.js";

const actions = {
    async categories({commit}) {
        const {data} = await axios.get("/categories");
        commit("updateCategories", data);
    }, async catalogList({commit}) {
        const {data} = await axios.get("/catalog");
        commit("updateCatalogList", data);
    }, async categoriesWithProducts({commit}) {
        const {data} = await axios.get("/category-with-products");
        commit("updateCategoriesWithProducts", data);
    }, async category({commit}, id) {
        const {data} = await axios.get("/categories/" + id);
        commit("updateCategory", data);
    }, async createCategory({commit}, form) {
        const {data} = await axios.post("/categories/", form);
        commit("updateCreatedCategory", data);
    }, async removeCategory({commit}, id) {
        const {data} = await axios.post("/categories/" + id);
        commit("updateRemovedCategory", data);
    }, async editCategory({commit}, {id, form}) {
        const {data} = await axios.post("/categories/" + id, form);
        commit("updateEditedCategory", data);
    },
};
const mutations = {
    updateCategories: (state, res) => {
        state.categories = res;
    }, updateCategoriesWithProducts: (state, res) => {
        let arr = []
        res.data.forEach((item) => {
            if (item.products.length > 0) {
                arr.push(item)
            }
        })
        res.data = arr
        state.categoriesWithProducts = res;
    }, updateCategory: (state, res) => {
        state.category = res;
    }, updateCreatedCategory: (state, res) => {
        state.createdCategory = res;
    }, updateRemovedCategory: (state, res) => {
        state.removedCategory = res;
    }, updateEditedCategory: (state, res) => {
        state.editedCategory = res;
    }, updateCatalogList: (state, res) => {
        state.catalogList = res;
    },
};
const state = {
    categories: null,
    categoriesWithProducts: null,
    category: null,
    createdCategory: null,
    editedCategory: null,
    removedCategory: null,
    catalogList: null,
};
const getters = {
    getCategories: (state) => state.categories,
    getCategoriesWithProducts: (state) => state.categoriesWithProducts,
    getCategory: (state) => state.category,
    getCreatedCategory: (state) => state.createdCategory,
    getRemovedCategory: (state) => state.removedProduct,
    getEditedCategory: (state) => state.editedCategory,
    getCatalogList: (state) => state.catalogList
};

export default {state, getters, mutations, actions};
