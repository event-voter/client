<template>
<div>
    <div class="label-main margin-greater" align="center">
        <div class="text-header text-primary margin-lower">genericHomeText</div>
        <div class="text-body text-primary margin-lower">genericDescTextgenericDescTextgenericDescTextgenericDescTextgenericDescTextgenericDescText</div>
    </div>

    <div class="margin-greater" align="center">
        <div class="label-input margin-lower">Your Event ID</div>
        <div class="margin-lower" style="display:flex;align-content:center;justify-content:center;">
            <input class="input-centersmall" type="text"><div class="button-squareicon button-primary">G</div>
        </div>
        <div class="button-squareinputencenterer button-secondary margin-lower" anim="ripple">Baru +</div>
    </div>
</div>
</template>
<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}

</script>