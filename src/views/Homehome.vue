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

[].map.call(document.querySelectorAll('[anim="ripple"]'), function (el) {
  el.addEventListener('click', function (e) {
    e = e.touches ? e.touches[0] : e;
    var r = el.getBoundingClientRect(),d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
    el.style.cssText = "--s: 0; --o: 1;";
    el.offsetTop;
    el.style.cssText = "--t: 1; --o: 0; --d: " + d + "; --x:" + (e.clientX - r.left) + "; --y:" + (e.clientY - r.top) + ";";
  });
});
</script>