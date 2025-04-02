<script setup lang="ts">
  import { getThumbnailIcon } from './useFileIcon';
  import { computed, defineComponent } from 'vue';

  defineComponent({
    inheritAttrs: false,
  });

  interface Props {
    nameFile: string;
    isDirectory?: boolean;
    alt?: string;
  }

  const props = defineProps<Props>();

  const nameFile = computed(() => props.nameFile);
  const alt = computed(() => props.alt);
  const isDirectory = computed(() => props.isDirectory || false);
</script>

<template>
  <img
    v-bind="$attrs"
    :src="getThumbnailIcon({ fileName: nameFile, isDirectory: isDirectory })"
    :alt="alt || nameFile" />
</template>
