<template>
  <div class="w-screen flex flex-col mx-16">
    <h1 class="px-5 text-2xl font-bold text-gray-700 mb-5">Dashboard</h1>
    <!-- Dashboard Header -->
    <div class="w-full flex flex-row items-center justify-center px-5 py-2">
      <h1 class="flex-1 text-gray-600 font-bold text-lg">All Documents</h1>
      <div class="flex flex-row items-center space-x-3 justify-center">
        <!-- Search -->
        <button class="flex p-2 rounded-md bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <!-- Filter -->
        <button
          class="flex flex-row space-x-2 items-center justify-center bg-white p-2 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
          <span>Filter</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        <!-- Download -->
        <button class="p-2 rounded-md bg-[#1767AB] text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.845 17.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V12a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
              clip-rule="evenodd"
            />
            <path
              d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z"
            />
          </svg>
        </button>
        <!-- Add -->
        <button class="p-2 rounded-md bg-[#4B97D8] text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- List Header -->
    <table class="w-full flex flex-col">
      <thead>
        <tr class="w-full flex flex-row p-5 text-black font-bold">
          <th class="mx-auto">Company Name</th>
          <th class="mx-auto">Document Name</th>
          <th class="mx-auto">Type</th>
          <th class="mx-auto">Status</th>
          <th class="mx-auto">Last Updated</th>
          <th class="mx-auto text-transparent">Actions</th>
        </tr>
      </thead>
      <tbody>
        <ListItem />
        <ListItem />
      </tbody>
    </table>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
  name: "DocumentList",
  components: {
    ListItem,
  },
};
</script>
