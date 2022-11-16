<template>
  <div class="bg-[#F6FBFF] overflow-hidden grid grid-cols-5">
    <div class="col-span-1"></div>
    <div class="col-span-3">
      <DashBoard />
    </div>
    <div class="col-span-1"></div>
  </div>
</template>

<script>
import DashBoard from "./DashBoard.vue";

export default {
  name: "HomeView",
  components: {
    DashBoard,
  },
};
</script>
