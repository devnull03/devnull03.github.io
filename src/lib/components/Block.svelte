<script lang="ts">
  import Rogue from "$lib/icons/Rogue.svelte";

  export let button = false;
  export let free = false;
</script>

<button
  class="{$$props.class} font-kaisei font-bold text-center flex items-center justify-center border border-black bg-white overflow-clip transition-all duration-500 ease-in-out {button &&
    'hover:rounded hover:translate-x-4 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:z-50'}"
  class:cursor-default={!button}
  class:cursor-pointer={button}
  class:aspect-square={!free}
  on:click
>
  <slot>
    <Rogue />
  </slot>
</button>
