<template>
  <div class="landing">
    <section class="home" id="home">
      <div class="hooper">
        <hooper :settings="hooperSettings">
          <slide>
            <div class="slider1">
              <div class="content">
                <!-- <p class="title">Gender Equality</p>
                <p class="sub_title">Our goal is:</p> -->
                <div class="info">
                  <p>Öz başarnyklaryňy öwret</p>
                  <!-- <button class="btn">Join us today</button> -->
                </div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="slider1 slider2">
              <div class="content">
                <!-- <p class="title">Gender Equality</p> -->
                <!-- <p class="sub_title">Our goal is:</p> -->
                <div class="info">
                  <p>Surat almak sungatyny öwren</p>
                  <!-- <button class="btn">Join us today</button> -->
                </div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="slider1 slider3">
              <div class="content">
                <!-- <p class="title">Gender Equality</p> -->
                <!-- <p class="sub_title">Our goal is:</p> -->
                <div class="info">
                  <p>Bal gazan we söwda et</p>
                  <button class="btn">Join us today</button>
                </div>
              </div>
            </div>
          </slide>

          <hooper-navigation slot="hooper-addons"></hooper-navigation>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
          <hooper-progress slot="hooper-addons"></hooper-progress>
        </hooper>
      </div>
    </section>

    <section class="story" id="story">
      <div class="sapak_img">
        <img src="~/assets/images/1.png" alt="" />
        <h3>Sapak ber</h3>
      </div>

      <div class="bal_img">
        <img src="~/assets/images/2.png" alt="" />
        <h3>Bal gazan</h3>
      </div>

      <div class="sowda_img">
        <img src="~/assets/images/3.png" alt="" />
        <h3>Dükanda söwda et</h3>
      </div>
    </section>

    <section class="mazmun">
      <div class="left">
        <img src="~/assets/images/mazmun.png" alt="" />
      </div>
      <div class="right">
        <p class="title">Başarnyklaryň bilen paýlaş</p>
        <p class="info">Bilmiň we başarnyklaryň üçin saňa serişdeler berilýär.</p>
        <button class="btn">Öwretmek</button>
      </div>
    </section>

    <section class="chosen">
      <div class="top">
        <p class="title">Saýlananlar</p>
        <nuxt-link to="/">Ählisi</nuxt-link>
      </div>
      <div class="cards">
        <Card v-for="(e,i) in cards" :key="i" :info="e"/>
      </div>
    </section>
    <section>
      
    </section>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from 'hooper'
import 'hooper/dist/hooper.css'
import Card from '@/components/card.vue'
 
export default {
  components: {
  
    Card,
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    HooperNavigation,
  },
  data() {
    const cards = [
      {
        id: 1,
        img: '1.png',
        name: 'Fitnes',
        price: '10 min',
        type: 'Başlangyç',
        star: 5
      },
      {
        id: 2,
        img: '2.png',
        name: 'Dizaýn',
        price: '20 min',
        type: 'Başlangyç',
        star: 5
      },
      {
        id: 3,
        img: '3.png',
        name: 'Diller',
        price: '30 min',
        type: 'Başlangyç',
        star: 5
      },
      {
        id: 4,
        img: '4.png',
        name: 'Kotlama',
        price: '40 min',
        type: 'Başlangyç',
        star: 5
      },
    ]

    return {
      cards,
    }
  },

  computed: {
    hooperSettings() {
      const settings = {
        itemsToShow: 1,
        centerMode: true,
        autoPlay: true, 
        playSpeed: 1000,
        transition: 1100,
        hoverPause: false,
        infiniteScroll: true, 
        wheelControl: false,
      }
      return settings
    },
  },
}
</script>

<style>
</style>