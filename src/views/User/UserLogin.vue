<script setup>
import ButtonL from '../../components/partials/ButtonL.vue';
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="w-full h-screen bg-[#0f172a] ">
        <div class="w-full h-screen relative">
            <div class="flex-row bg-[#080a1c] border-white rounded-lg items-center w-[37rem] h-[43rem] absolute top-[9rem] left-[10rem] rounded-[2.5rem]">
                <div class="text-white text-bold text-6xl p-12 p-b-2">Welcome back!</div>
                <div class="text-[#7090a7] text-bold text-2xl px-8">Enter your username and password to log in to your admin panel</div>
                <div class="py-10 px-20 flex-row items-center w-40 text-[15pt] space-y-[0.8em]">
                    <span class="text-[#89a3a2cf] w-auto ">Email</span>
                    <input type="text" v-model="email" class="text-white bg-[#0f172a]/50 w-[18em] h-[2em] focus:h-[2.5rem] focus:w-[19em]" placeholder="example@expm.pp">
                </div>
                <div class="px-20 flex-row items-center w-40 text-[15pt] space-y-[0.8em]">
                    <span class="text-[#89a3a2cf] w-auto ">Password</span>
                    <input type="text" v-model="password" class="text-white  bg-[#0f172a]/50 w-[18em] h-[2em] focus:h-[2.5rem] focus:w-[19em]" placeholder="******">
                </div>
                <div class="px-20 flex-row items-center w-40 text-[15pt] space-y-[0.8em] mx-0 w-[20rem]">
                    <ButtonL @click="loginReq">Connect</ButtonL>
                </div>
                <div class="py-10 px-16 flex items-center contents-center w-70 text-[15pt]  space-x-2">
                    <span class="flex-1 w-24 text-[#9ca3af8a] :hover-text-[#9ca3aff7]">Dont have account yet?</span>
                    <RouterLink class="flex-2 w-18 text-[#8bafa0] hover:underline" to="/register">Sign Up |</RouterLink>
                    <span class="flex-3 w-18 text-[#8bafa0] hover:underline "><a href="/forgot-password">Forgot Password</a></span>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { verifyEmail } from '../../helpers/helpers';
import { loginUser } from '../../api/api';

export default {
    data(){
        return {
            email: '',
            password: '',
        }
    },
    computed: {
        validateAll(){
            // console.log(email, password);
            if (!this.getEmail) {
                return false;
            }
            return true;
        },
        getEmail(){
            if (!verifyEmail(this.email) || this.email == '') {
                return false;
            }
            return true;
        },
    },
    methods: {
        loginReq(){
            if(this.validateAll){
                loginUser(this.email, this.password);
            }
        }
    },
}
</script>