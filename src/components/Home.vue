<template>

<div class="p-3 container">

    <div v-if="!loggedin">
        <h1>THIS IS HOME!!!</h1>
        <h2>Please register, you are not registered yet.</h2>
    </div>
    <div v-else-if="username">
        Hello user "{{ username }}" your emial is "{{ email }}". <br>
        Your account was created at {{ created_date }} and recently updated at "{{ updated_date }}".
    </div>
</div>
</template>

<script>
import axios from "axios";
import { toast } from "vue3-toastify";
import 'vue3-toastify/dist/index.css';

    export default {
        name: 'Home-component',
        data() {
            return {
                loggedin: false,
                username: '',
                email: '',
                created_date: '',
                updated_date: '',
            };
        },  
        components: {

        },
        mounted() {
            const token = localStorage.getItem('token');
            if (token) {
                this.loggedin = true;
                this.getUserData();
                // this.populatePage();
            } else{
                this.loader = "";
            }
        },
        methods: {
            async populatePage() {
                try {
                    const response = await axios.get('fetch_all_userdata');
                    if(response.data.status) {
                        toast.success(
                            response.data.message,
                            {
                                autoClose: 3000,
                            }
                        );
                    } else{
                        toast.success(
                            response.data.message,
                            {
                                autoClose: 3000,
                            }
                        );
                    }
                } catch (error) {
                    toast.success(
                        "Something Went wrong",
                        {
                            autoClose: 3000,
                        }
                    );
                }
            },

            async getUserData() {
                try {
                    const response = await axios.get('profile');
                    if (response.data.status) {
                        console.log(response.data);
                        this.username = response.data.user.name;
                        this.email = response.data.user.email;
                        this.created_date = response.data.user.created_at;
                        this.updated_date = response.data.user.updated_date;
                    } else {
                        console.log("Something went wrong");
                    }

                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>

<style>

</style>