<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
}
</script>

<style>
.tab-bar {
  z-index: 999;
  display: flex;
  text-align: center;
  background-color: var(--color-background);
  border-top: 0.1rem solid #eee;
  box-shadow: 0 -0.1rem 0.1rem rgba(150, 150, 150, 0.08);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
