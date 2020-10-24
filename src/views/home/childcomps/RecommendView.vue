<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    margin-top: 0.5rem;
    padding: 0.5rem 0 2rem;
    border-bottom: 0.8rem solid #eeeeee;
    text-align: center;
  }

  .recommend-item {
    flex: 1;
    width: 25%;
  }

  .recommend-item img {
    width: 7rem;
    height: 7rem;
    margin-bottom: 0.5rem;
  }

  .recommend-item span {
    display: block;
    font-size: 1.2rem;
  }
</style>
