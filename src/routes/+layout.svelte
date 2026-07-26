<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import '@stylebakery/stylebakery/css';
  let { children } = $props();
</script>

{@render children?.()}
