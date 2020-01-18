<template>
<div>
    <div v-if="!submited">
        <div class="label-main margin-greater" align="center">
            <div class="text-header text-primary">New Event</div>
        </div>

        <div class="margin-greater" align="center">
            <!-- Nama Event -->
            <div style="display:flex;align-content:center;justify-content:center;">
                <div class="mocker-label-inputicon-zero"></div><div class="label-input-standart text-body">Nama Event</div>
            </div>
            <div class="margin-greater-down" style="display:flex;align-content:center;justify-content:center;">
                <div class="label-inputicon"><i class="fas fa-thumbtack"></i></div><input class="input-basic input-standart" type="text" placeholder="nama acara">
            </div>

            <!-- Password -->
            <div style="display:flex;align-content:center;justify-content:center;">
                <div class="mocker-label-inputicon-zero"></div><div class="label-input-standart text-body">Password (opsional)</div>
            </div>
            <div class="margin-greater-down" style="display:flex;align-content:center;justify-content:center;">
                <div class="label-inputicon"><i class="fas fa-lock"></i></div><input class="input-basic input-standart" type="text" placeholder="password">
            </div>

            <!-- Tanggal Mulai -->
            <div style="display:flex;align-content:center;justify-content:center;">
                <div class="mocker-label-inputicon-zero"></div><div class="label-input-standart text-body">Tanggal Mulai</div>
            </div>
            <div class="margin-lower" align="center" style="display:flex;align-content:center;justify-content:center;">
                <div class="label-inputicon"><i class="fas fa-calendar-alt"></i></div><input readonly class="input-basic input-standart" type="text" id="startdate" placeholder="YYYY-MM-DD">
            </div>

            <!-- Tanggal End -->
            <div style="display:flex;align-content:center;justify-content:center;">
                <div class="mocker-label-inputicon-zero"></div><div class="label-input-standart text-body">Tanggal Akhir</div>
            </div>
            <div class="margin-lower" align="center" style="display:flex;align-content:center;justify-content:center;">
                <div class="mocker-label-inputicon-zero"></div><input readonly class="input-basic input-standart" type="text" id="enddate" placeholder="YYYY-MM-DD">
            </div>
        </div>
    

        <div class="margin-greater" align="center">
            <div class="button-standart button-primary" v-ripple>Create</div>
        </div>
    </div>

    <div v-else>
        <div class="label-main margin-greater" align="center">
            <div class="text-header text-primary">New Event</div>
        </div>

        <div class="label-bigcardicon text-counterprimary margin-greater" align="center">
            <i class="fas fa-check-circle"></i>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'NewRoom',
  data(){
      return {submited: true}
  }
}

import Rolldate from "@nandyo/kumpulyuk-rolldate"

window.onload = function() {
			new Rolldate({
				el: '#startdate',
				format: 'YYYY-MM-DD',
				beginYear: new Date().getFullYear(),
				endYear: new Date(new Date().setFullYear(new Date().getFullYear() + 2)).getFullYear()
            })
            
            new Rolldate({
				el: '#enddate',
				format: 'YYYY-MM-DD',
				beginYear: new Date().getFullYear(),
                endYear: new Date(new Date().setFullYear(new Date().getFullYear() + 2)).getFullYear()
			})
			
			
		}
</script>