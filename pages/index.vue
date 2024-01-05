<script setup lang="ts">
import data from "~/assets/data.json";
</script>

<template>
  <Head>
    <Title>Yanke's Last Will</Title>
  </Head>
  <div
    class="flex flex-col items-center justify-center w-full sm:w-2/3 md:1/2 lg:w-1/3 mx-auto py-8 px-2"
  >
    <article class="w-full mb-8 prose dark:prose-invert">
      <h1 class="text-2xl font-bold">
        <span>Yanke's Last Will</span>
      </h1>
      <p>I've built an automatic disclosure system for my last will</p>
      <p>
        If I failed to renew the beacon file for
        <em>21 days</em>, the decryption key of my last will will be disclosed
        automatically
      </p>
      <p>
        The encrypted file is already published to a npm package
        <ULink
          to="https://www.npmjs.com/package/@yankeguo/lastwill-data"
          target="_blank"
          >@yankeguo/lastwill-data</ULink
        >
      </p>
      <p>
        You can also
        <ULink
          to="https://unpkg.com/@yankeguo/lastwill-data/lastwill.html.asc"
          target="_blank"
          >download it directly</ULink
        >
        from
        <em>unpkg.com</em>
      </p>
    </article>

    <div
      :class="{
        'w-full': true,
        flex: true,
        'flex-row': true,
        'justify-between': true,
        'items-center': true,
        'bg-green-600': data.active,
        'bg-red-600': !data.active,
        'py-2': true,
        'px-4': true,
        'mb-8': true,
      }"
    >
      <span class="font-bold">
        <span>STATUS: </span>
        <span v-if="data.active">ACTIVE</span>
        <span v-else>INACTIVE</span>
      </span>
      <span class="text-sm">{{ data.beacon }}</span>
    </div>

    <div
      v-if="!data.active"
      class="w-full flex flex-col justify-between items-center outline outline-1 outline-red-600 rounded-sm py-2 px-4"
    >
      <div class="mb-2 text-sm">DECRYPTION KEY</div>
      <div class="font-mono font-bold text-2xl">{{ data.secret_key }}</div>
    </div>
  </div>
</template>
