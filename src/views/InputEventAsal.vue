<template>
<div>
    <div class="label-main margin-greater" align="center">
        <div class="text-header text-primary margin-lower">KumpulYuk</div>
        <div class="text-body text-primary margin-lower">Sebuah sihir yang mengubah wacana menjadi acara</div>
    </div>
    <div class="margin-greater" align="center">
        <form method="post" @submit.prevent="formSubmit">
            <div class="label-input margin-lower">Your Event Date</div>
            <div class="margin-lower" style="display:flex;align-content:center;justify-content:center;">
                <input v-model="date" class="input-basic input-centersmall" type="date">
            </div>
            <div class="label-input margin-lower">Your Event Name</div>
            <div class="margin-lower" style="display:flex;align-content:center;justify-content:center;">
                <input v-model="name" class="input-basic input-centersmall" type="text">
            </div>
            <button type="submit" class="button-squareinputencenterer button-secondary margin-greater" v-ripple>
                Baru +
            </button>
        </form>
        <a href="#/events">
            <div class="button-squareinputencenterer button-secondary margin-greater" v-ripple>
                Lihat Semua Event
            </div>
        </a>
    </div>  
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'InputEventAsal',
  data: () => {
      return {
          name: '',
          date: ''
      }
  },
  methods: {
    formSubmit() {
        axios.post(`http://${process.env.VUE_APP_BCK_HOST}:${process.env.VUE_APP_BCK_PORT}/event/new`, {
            name: this.name,
            start_date: this.date
        });
        alert("berhasil dimasukkan!");
    }
  }
}   
</script>