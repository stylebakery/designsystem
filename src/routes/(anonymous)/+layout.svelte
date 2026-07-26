<script>
  import '@stylebakery/stylebakery/css';
  import { onMount } from 'svelte';
  import { theme } from '@stylebakery/stylebakery/theme';
  let { children } = $props();
  onMount(() => theme.init());
</script>

{@render children?.()}
