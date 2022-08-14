<template>
  <nuxt-link :to="'/cards/' + info.id">
    <div class="card">
      <div class="top">
        <div class="img">
          <img :src="require(`~/assets/images/${info.img}`)" alt="" />
        </div>
      </div>
      <div class="bottom">
        <p class="name">{{ info.name }}</p>
        <p class="text">
          {{ info.text }}
          <nuxt-link :to="'/cards/' + info.id">View more</nuxt-link>
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
</style>