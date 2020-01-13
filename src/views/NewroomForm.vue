<template>
<div>
    <div class="label-main margin-greater" align="center">
        <div class="text-header text-primary margin-greater">New Event</div>
    </div>

    <div class="margin-greater" align="center">
        <div class="text-body margin-lower">Nama event</div>
        <div class="margin-greater-down" style="display:flex;align-content:center;justify-content:center;">
            <div class="label-inputicon"><i class="fas fa-thumbtack"></i></div><input class="input-basic input-standart" type="text">
        </div>

        <div class="margin-greater-down" style="display:flex;align-content:center;justify-content:center;">
            <div class="label-inputicon"><i class="fas fa-lock"></i></div><input class="input-basic input-standart" type="text">
        </div>

        <div class="button-standart button-secondary margin-greater" v-ripple>Create</div>
    </div>
</div>
</template>

<script>
export default {
  name: 'NewRoom'
}
</script>