<template>
  <div class="user_info">
    <img :src="require(`~/assets/images/${user.img}`)" alt="" />
  </div>
  
</template>

<script>
export default {
  data() {
    const users = [
      ]

    let route_path = this.$route.params.id

    return {
      route_path,
      user: users[route_path - 1],
      users,
    }
  },
}
</script>

<style>
</style>