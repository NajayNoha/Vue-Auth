<script setup >
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="w-[24rem] bg-[#92f0fe] h-[40vh] p-2 rounded-lg flex-auto">
        <img src="/public/products/1/product_1_image_1.webp" class="h-[80%] min-w-[23rem] bg-white rounded-lg flex-auto"
         >
        <div class="m-4 tw-flex flex-col">
            <div class="text-slate-900 text-2xl">TitleTitle</div>
            <div class="">description</div>
        </div>
    </div>
</template>

<script>

export default {
    // props: {
    //     product: Object, 
    // }
}

</script>