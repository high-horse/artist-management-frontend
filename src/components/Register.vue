<template>
    <div class="text-center p-5" >
        <div class="d-flex justify-content-center" >
            <form @submit.prevent="handleRegister" style="border: 2px solid black; border-radius: 20px; width: 35%; padding: 30px; background-color: white;">
                
                <h1 class="h3 mb-3 fw-normal">Please Register</h1>
                <label v-if="error_message" class="text-danger">{{error_message}}</label>
            
                <div class="form-floating">
                    <input type="text" v-model="name" class="form-control" id="floatingInput" placeholder="Full name">
                    <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating">
                    <input type="email" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating">
                    <input type="password" v-model="password_confirmation" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Confirm Password</label>
                </div>
                <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit" >Sign in</button>
                <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
            </form>
        </div >
    </div>
</template>

<script>
import axios from "axios";
import { toast } from "vue3-toastify";
import 'vue3-toastify/dist/index.css';


export default {
    name: 'Registration-component',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            error_message: null,
        }
    },
    methods:{
        handleRegister(){
            const submit_data ={
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
            };
            console.log(submit_data);

            const request = axios.post('register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                })
                .then(response => {
                    this.error_message = '';
                    console.log(response);
                    toast.success(
                        'Great Success!!',
                        {
                        autoClose: 1000,
                    });
                    this.$router.push('/login');
                })
                .catch(err => {
                    console.log(err);
                    this.error_message = err.message;
                    toast.error(
                        'Something went wrong',
                        {
                        autoClose: 3000,
                    })
                });

            console.log('completed request' , request);
        }   
    }
};

</script>

<style>

</style>