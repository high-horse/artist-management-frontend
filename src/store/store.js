import { defineStore } from "pinia";

export const useLoginStore = defineStore({
    id: "login",
    state: () => ({
        loggedIn: false,
        test: 'Test'
    }),
    actions: {
        updateLoginStatus() {
            if (localStorage.getItem('token')) {
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
            }
        }
    },
    getters: {
        getLoginStatus() {
            return this.loggedIn;
        }
    }
})