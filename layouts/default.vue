<template>
  <div class="main">
    <div :class="[{scrolled_nav: scrolled}, 'header']">
      <HeaderComponent :active="scrolled"/>
    </div>
    <nuxt />
  </div>
</template>

<script>
import HeaderComponent from '~/components/header-component.vue'
export default {
  name: 'DefaultLayout',
  components: {
    HeaderComponent,
  },
  data() {
    return {
      scrolled: false,
    }
  },
  beforeMount() {
    window.onscroll = () => {
      if (scrollY > 80) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }
    }
  },
}
</script>
