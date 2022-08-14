<template>
  <div class="nav_menu">
    <div class="content">
      <div class="logo">
        <img
          :src="require(`~/static/${active ? 'Logo1.png' : 'Logo1.png'}`)"
          alt=""
        />
  
      </div>
      <ul>
        <li v-for="(e, i) in links" :key="i">
          <nuxt-link :class="{ color: active }" :to="e.href">{{
          }}</nuxt-link>
        </li>
      </ul>
       
        <ul>
          <li><h3>Baş sahypa</h3></li>
          <li><h3>Kategoriýa</h3></li>
          <li><h3>Dükan</h3></li>
        </ul>
 

      <div class="lang">
        <button class="dropbtn">TM</button>
        <div class="lang-content">
          <button v-for="(e,i) in locales" :key="i" @click="$i18n.setLocale(e.code)">{{e.name}}</button>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
lang() {
return this.$i18n.locale
},
locales() {
return this.$i18n.locales
},
  },
  data() {
    const links = [
      {
        id: 1,
        href: '#',
        name_tm: 'Bash Sahpa',
        name_ru: 'Glawny',
        name_en: 'Home',
      },
      {
        id: 2,
        href: '#',
        name_tm: 'Tarhy',
        name_ru: 'Istoria',
        name_en: 'Story',
      },
      {
        id: 3,
        href: '#',
        name_tm: 'Media',
        name_ru: 'Media',
        name_en: 'Media',
      },
      {
        id: 4,
        href: '#',
        name_tm: 'Biz Barada',
        name_ru: 'O nas',
        name_en: 'About Us',
      },
    ]

    return {
      links,
    }
  },
}
</script>

<style>
</style>