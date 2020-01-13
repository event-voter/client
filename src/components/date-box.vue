<template>
    <div>
        <button v-bind:class="classObject" v-on:click="isClicked = !isClicked">
            <div style="font-size: medium; margin: 5px;">{{ day }}</div>
            <div >{{ date }}</div>
        </button>
    </div>
</template>
<script>
    export default {
        name: 'date-box',
        data: function(){
            return { 
                isClicked: false,
            }
        },
        props: ['date', 'day'],
        computed: {
            classObject: function(){
                return {
                    'button-squareicon': true,
                    'button-date': true,
                    'button-date-picked': this.isClicked,
                }
            }
        }
    }

</script>