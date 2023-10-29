import {createStore} from "vuex";
import axios from "@/utils/axios.js";
export default createStore({
    modules: {},
    actions: {
        async sendMessage({commit}, form) {
            const {data} = await axios.post("/message", form);
            commit("updateSendedMessage", data);
        },
    },
    mutations: {
        updateSendedMessage: (state, res) => {
            state.sendedMessage = res;
        },
    },
    state: {
        sendedMessage: null
    },
    getters: {
        getSendedMessage: (state) => state.sendedMessage,
    },
});
