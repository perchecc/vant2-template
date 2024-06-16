<template>
  <div class="layout-container">
    <div class="layout-content">
      <transition mode="out-in" name="fade-transform">
        <keep-alive v-if="$route.meta.keepAlive">
          <router-view></router-view>
        </keep-alive>
        <router-view v-else></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layouts',
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .layout-content {
    flex: 1;
    width: 100%;
  }
}
</style>
