<template>
  <div class="inputs">
    <div class="content">
      <p class="name">Registration form</p>
      <div class="forms">
        <div class="input" v-for="(e, i) in inputs" :key="i">
          <label>{{ e.label }}</label>
          <input :type="e.type" :v-model="e.model" />
        </div>
      </div>
      <div class="btn">
        <button>Register</button>
      </div>
      <button class="view">View Users</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const inputs = [
      {
        id: 1,
        label: 'First Name',
        type: 'text',
        model: 'datas.fname',
      },
      {
        id: 2,
        label: 'Email',
        type: 'email',
        model: 'datas.email',
      },
      {
        id: 3,
        label: 'Age',
        type: 'number',
        model: 'datas.age',
      },
      {
        id: 4,
        label: 'Gender',
        type: 'text',
        model: 'datas.gender',
      },
      {
        id: 5,
        label: 'Last Name',
        type: 'text',
        model: 'datas.lname',
      },
      {
        id: 6,
        label: 'Phone Number',
        type: 'number',
        model: 'datas.phone',
      },
      {
        id: 7,
        label: 'Job',
        type: 'text',
        model: 'datas.job',
      },
    ]

    const datas = {
      fname: '',
      emial: '',
      age: null,
      gender: '',
      lname: '',
      phone: null,
      job: '',
    }

    return {
      inputs,
      datas,
    }
  },
}
</script>

<style>
</style>