<script lang="ts">
  import Block from "./Block.svelte";

  export let button = false;
</script>

<Block bind:button class="{$$props.class} line-clamp-1" on:click>
  <span class="text-[20rem] pb-5 pl-3">
    <slot>タ</slot>
  </span>
</Block>
