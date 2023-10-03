<script setup>
import MainNav from '../components/layouts/MainNav.vue';
import Footer from '../components/layouts/Footer.vue';
import ProductCart from '../components/partials/products/ProductCart.vue';

</script>

<template>
  <div class="w-full h-screen bg-[#080a1cd9] p-12">
    <header class="w-full">
      <MainNav/>
    </header>
    <main>
      <div class="min-w-[80%] min-h-[50rem] p-12 flex gap-5">
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </main>
    <Footer />
  </div>
</template>
