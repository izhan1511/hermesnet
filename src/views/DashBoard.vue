<template>
  <div class="mt-20 flex items-start justify-center min-h-screen">
    <DocumentList />
  </div>
</template>

<script>
import DocumentList from "@/components/DocumentList.vue";

export default {
  name: "DashBoard",
  components: {
    DocumentList,
  },
};
</script>
