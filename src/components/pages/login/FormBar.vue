<template>
    <div id="bar">
    <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "FormBar"
    }
</script>

<style scoped>
#bar{
    margin: 0 auto;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    -webkit-border-radius: 6px;
    border-radius: 6px;
    width: 600px;
    height: 400px;



}
</style>
