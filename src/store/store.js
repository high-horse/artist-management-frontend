import { defineStore } from "pinia";

export const useLoginStore = defineStore({
    id: 'loggedIn',
    state : () => ({
        loggedIn: false,
    }),
    actions: {
        updateLoginStatus() {
            if(localStorage.getItem('token')){
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