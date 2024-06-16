<template>
  <div class="tw-w-full tw-h-full">
    <span class="tw-text-black tw-bg-gray-700">1111</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as api from '@/api/management'

export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      avatar: 'user/avatar',
      username: 'user/username',
    }),
  },
  created() {},
  mounted() {
    api
      .fieldlist({
        pageNum: 1,
        pageSize: 10,
        searchMode: 0,
      })
      .then((res) => {
        console.log(res)
      })
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.home-container {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .head-img {
    height: 100px;
    width: 100px;
  }

  p {
    margin-top: 10px;
    font-size: 30px;
    font-weight: bold;
  }
}
</style>
