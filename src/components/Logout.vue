<script>
import axios from "axios";
import { toast } from "vue3-toastify";
import 'vue3-toastify/dist/index.css';
export default {
    name: 'Logout-component',
    mounted() {
        this.callLogoutApi();
    },
    methods:{
        async callLogoutApi() {
            try {
                const response = await axios.get('logout');
                localStorage.removeItem("token");
                if(response.data.status) {
                    toast.success(
                        response.data.message,
                        {
                            autoClose: 30000,
                        }
                    );
                    this.$router.push('/');
                } else{
                    toast.error(
                        "Something went wrong1",
                        {
                            autoClose: 30000,
                        }
                    );
                    this.$router.push('/');
                }
            } catch (error) {
                console.log(error);
                toast.error(
                    "Something went wrong 1",
                    {
                        autoClose: 30000,
                    }
                );
                this.$router.push('/');
            }
        }
    },
}

</script>



<style>

</style>