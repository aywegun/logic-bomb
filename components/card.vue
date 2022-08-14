<template>
  <section class="card">
    <div class="left">
      <div class="img">
        <img :src="require(`~/assets/images/card/${info.img}`)" alt="" />
        <div class="play">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z"
              fill="#8A8A8A"
            />
            <path
              d="M29.0001 20.268C29.3041 20.4435 29.5566 20.696 29.7321 21C29.9076 21.3041 30 21.6489 30 22C30 22.3511 29.9076 22.6959 29.7321 23C29.5566 23.304 29.3041 23.5565 29.0001 23.732L20.0001 28.932C19.6961 29.1075 19.3512 29.1999 19.0001 29.1999C18.649 29.1999 18.3041 29.1075 18.0001 28.932C17.6961 28.7565 17.4436 28.504 17.2681 28.2C17.0925 27.8959 17.0001 27.5511 17.0001 27.2V16.8C17.0001 16.4489 17.0925 16.104 17.2681 15.8C17.4436 15.496 17.6961 15.2435 18.0001 15.068C18.3041 14.8925 18.649 14.8 19.0001 14.8C19.3512 14.8001 19.6961 14.8925 20.0001 15.068L29.0001 20.268Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="right">
      <p class="title">{{ info.name }}</p>
      <p class="price">{{ info.price }}</p>
      <p class="type">{{ info.type }}</p>
      <div class="stars">
        <div class="star" v-for="(e, i) in info.star" :key="i">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 0L10.4084 5.87336L16.584 5.87336L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336L6.59163 5.87336L8.5 0Z"
              fill="#FFC700"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
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