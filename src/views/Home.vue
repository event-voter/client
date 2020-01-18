<template>
<div>
    <div class="label-main margin-greater" align="center">
        <div class="text-header text-primary margin-lower">KumpulYuk</div>
        <div class="text-body text-primary margin-lower">Sebuah sihir yang mengubah wacana menjadi acara</div>
    </div>

    <div class="margin-greater" align="center">
        <div class="label-input margin-lower">Your Event ID</div>
        <div class="margin-lower" style="display:flex;align-content:center;justify-content:center;">
            <input v-model="id" class="input-basic input-centersmall" type="text"><div class="button-squareicon button-primary"><i class="fas fa-arrow-right"></i></div>
        </div>
        <div class="button-squareinputencenterer button-secondary margin-greater" v-ripple>
            Baru +
        </div>
        <router-link :to="{path: '/createroom', params:{msg}}">
        <div class="button-squareinputencenterer button-secondary margin-greater" v-ripple>Baru +</div>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
  name: 'Home'
}
</script>