<template>
  <div class="">
    <div class="img">
      <img :src="require(`~/assets/images/${user.img}`)" alt="" />
    </div>
    <h1>{{ user.name }}</h1>
    <p>{{ user.text }}</p>
  </div>
</template>

<script>
export default {
  data() {
    const users = [
      
    ]
    return {
      user: users[this.$route.params.id - 1],
      users,
    }
  },
}
</script>

<style>
</style>