<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-show="!isActive" class="item-icon">
      <slot name="icon"></slot>
    </div>
    <div v-show="isActive" class="item-active-icon">
      <slot name="active-icon"></slot>
    </div>
    <div class="item-text">
      <slot name="text" :style="activeStyle"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  props: {
    link: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive() {
      //那个路由活跃就切换到哪个svg
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle() {
      //路由是否活跃 是的话就把颜色改成红色 不是的话就默认  三元表达式
      return this.isActive ? { color: 'red' } : {}
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link) //replase不返回记录值
      console.log(this.link)
    },
  },
}
</script>

<style lang="css">
.tab-bar-item {
  flex: 1;
}

.item-icon img,
.item-active-icon img {
  width: 2.4rem;
  height: 2.4rem;
  margin-top: 0.5rem;
  vertical-align: middle;
}

.item-text {
  font-size: 1.2rem;
  margin-top: 0.3rem;
  color: #333;
}
</style>
