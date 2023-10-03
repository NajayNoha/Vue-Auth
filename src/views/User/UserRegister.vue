<script setup>
import { RouterLink } from 'vue-router';
import ButtonL from '../../components/partials/ButtonL.vue';

</script>
<template>
    <div class=" w-full h-screen bg-[#0f172a] hidden md:block">
        <div class="w-full h-screen relative">
            <div class=" drop-shadow-md p-10 flex-row bg-[#080a1c] border-white rounded-lg items-center w-[37rem] h-[49rem] absolute top-[7rem] left-[10rem] rounded-[2.5rem] space-y-8">
                <div class="px-40 text-white text-bold text-4xl w-full h-[1.5em]">Register </div>
                <div class="m-0 flex-col items-center w-[100%] h-[10em] space-y-[0.9em]">
                    <!-- <div class="text-[#7090a7] text-bold text-2xl px-8">Enter the required infos to register to the Application</div> -->
                    <div class="px-12 flex-row items-center w-40 text-[15pt] space-y-[0.4em] ">
                        <span class="text-[#89a3a2cf] w-[18em] max-h-[2em] block">Full Name</span>
                        <input type="text" v-model="name" class="text-white focus:m-2 hover:m-2 hover:bg-[#0f172a] bg-[#0f172a]/50 w-[18em] h-[2em] focus:h-[2.5rem] focus:w-[19em]" placeholder="fname lname">
                        <span v-if="name.length==0&&email.length!=0" class="text-[red] w-[18em] max-h-[2em]  text-bold block">Name Required</span>
                    </div>
                    <div class=" px-12 flex-row items-center w-40 text-[15pt] space-y-[0.4em]">
                        <span class="text-[#89a3a2cf] w-auto ">Email</span>
                        <input type="text" v-model="email" class="text-white focus:m-2 hover:m-2 hover:bg-[#0f172a] bg-[#0f172a]/50 w-[18em] h-[2em] focus:h-[2.5rem] focus:w-[19em]" placeholder="example@expm.pp">
                        <span v-if="!getEmail&&email.length!=0" class="text-[red] w-[18em] max-h-[2em]  text-bold block">Invalid Email</span>
                    </div>
                    <div class="px-12 flex-row items-center w-40 text-[15pt] space-y-[0.4em]">
                        <span class="text-[#89a3a2cf] min-w-50 ">Password</span>
                        <input type="text" v-model="password" class="text-white focus:m-2 hover:m-2 hover:bg-[#0f172a] bg-[#0f172a]/50 w-[18em] h-[2em] focus:h-[2.5rem] focus:w-[19em]" placeholder="******">
                        <span  class="text-[red] w-[18em] max-h-[2em]  text-bold block" v-if="!getPw && password.length != 0">try stronger  </span>
                    </div>
                    <div class="px-12 flex-row items-center w-40 text-[15pt] space-y-[0.4em]">
                        <span class="text-[#89a3a2cf] w-[18em] max-h-[2em] block">Confirm Password</span>
                        <input type="text" v-model="confirmPW" class="text-white focus:m-2 hover:m-2 hover:bg-[#0f172a] bg-[#0f172a]/50 w-[18em] h-[2em] focus:h-[2.5rem] focus:w-[19em]" placeholder="******">
                        <span class="text-[red] w-[18em] max-h-[2em]  text-bold block" v-if="!confirm&&confirmPW.length!=0">not matching </span>
                    </div>
                    <div class="px-14 flex-row items-center w-40 text-[15pt] ">
                        <ButtonL @click="registerReq">Register</ButtonL>
                    </div>
                    <div class="px-12 min-h-[100%] min-w-[100%] flex w-[90%] text-[15pt]">
                        <span class="flex-1 w-[19em] text-[#9ca3af8a] :hover-text-[#9ca3aff7]">Do you Already have an account?</span>
                        <RouterLink class="flex-2 w-[5em] text-[#8bafa0] hover:underline " to="/login">Sign In</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        
    </div>
</template>

<script>

import { createUser } from '../../api/api'
import { verifyEmail , verifyPassword } from '../../helpers/helpers'

export default {
    data(){
        return {
            email: '',
            name: '',
            password: '',
            confirmPW: '',
        }
    },
    computed: {
        validateAll(){
            console.log(this.email, this.name, this.password, this.confirmPW);
            if (!this.getEmail ) {
                return false; 
            }
            if (!this.getPw) {
                return false;
            }
            if (!confirm()) {
                return false;
            }
            return true;
        },
        getEmail(){
            // console.log(this.email, this.name, this.password, this.confirmPW);
            if (!verifyEmail(this.email) || this.email == '') {
                return false;
            }
            return true;
        },
        getPw(){
            if (!verifyPassword(this.password) || this.password == '') {
                return false;
            }
            return true;
        },
        confirm(){
            if (this.password != this.confirmPW) {
                return false;
            }
            return true
        },
    },
    methods: {
        registerReq(){
            if(this.validateAll){
                const user = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
                createUser(user)
                return true
            }
            return false
        }
    },
}
</script>