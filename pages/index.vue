<template>
  <div></div>
</template>
<script>
  export default {
    layout: 'blog',
    created() {
      // 首页暂时无特别用途，暂时先跳转至博客首页
      this.skip(); 
    },
    methods: {
      skip() {
        this.$router.push({ path: '/blog' }); 
      }  
    }  
  }
</script>
