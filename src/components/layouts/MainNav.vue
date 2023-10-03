<script setup>

</script>
<template>
    <div>
        <nav class="p-5 bg-[#080a1c] rounded-xl flex items-center space-x-4 flex-1">
          <div class="w-96 flex-1 text-white ">
            App Name
          </div>
          <div class="w-30 rounded-xl flex items-center space-x-6 flex-3">
            <RouterLink to="/" class="text-white">Home</RouterLink>
            <RouterLink to="/login" class="text-white">Login</RouterLink>
            <button class="flex-2 w-[5em] text-[#8bafa0] hover:underline" @click="logout"> LogOut </button>
          </div>
        </nav>
    </div>
</template>


<script>

import { logOut } from '../../api/api'

export default {
  methods :{
    logout(){
      logOut()
    }
  }
}

</script>