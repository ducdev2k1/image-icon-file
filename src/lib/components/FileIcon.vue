<script setup lang="ts">
  import { getThumbnailIcon } from '../utils/useFileIcon';

  defineComponent({
    inheritAttrs: false,
  });

  interface Props {
    nameFile: string;
    alt?: string;
  }

  const props = defineProps<Props>();

  const nameFile = computed(() => props.nameFile);
  const alt = computed(() => props.alt);

  const;
</script>

<template>
  <img v-bind="$attrs" :src="getThumbnailIcon(nameFile)" :alt="alt || nameFile" />
</template>
