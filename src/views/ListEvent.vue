<template>
<div>
    <div class="label-main margin-greater" align="center">
        <div class="text-header text-primary margin-greater">LIST EVENT</div>
        <div v-for="event in events.data" v-bind:key="event.id" class="text-body text-primary margin-lower">
            <table style="font-size: large">
                <thead>
                    <th>Id</th>
                    <th>Event Name</th>
                </thead>
                <tbody align="center">
                    <td>{{ event.id.slice(1,10) }}</td>
                    <td>{{ event.name }}</td>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>
<script>
const axios = require('axios')

export default {
  name: 'ListEvent',
  data: () => {
      return {
          events: [{id: '', name: ''}],
          url: `idih:${JSON.stringify(process.env)}:${process.env.BCK_PORT}`
      }
  },
  mounted () {
      // http://${process.env.HOST}:${process.env.PORT}/events
      axios
        .get(`http://${process.env.VUE_APP_BCK_HOST}:${process.env.VUE_APP_BCK_PORT}/events`)
        .then(res => (this.events = res))
  }
}

</script>