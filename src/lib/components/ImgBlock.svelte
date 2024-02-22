<script lang="ts">
  import Rogue from "$lib/icons/Rogue.svelte";
  import Block from "./Block.svelte";

  export let button = false;
  export let free = false;
</script>

<Block
  bind:button
  bind:free
  class="{$$props.class} bg-repeat bg-[url('/bg.png')]"
  on:click
>
  <slot>
    <Rogue />
  </slot>
</Block>
