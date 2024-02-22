<script lang="ts">
  import Block from "$lib/components/Block.svelte";
  import CharBlock from "$lib/components/CharBlock.svelte";
  import ImgBlock from "$lib/components/ImgBlock.svelte";
  import LateForClass from "$lib/icons/LateForClass.svelte";

</script>

<div class="w-full p-8 flex items-center justify-center">
  <div class="border border-black w-full grid grid-cols-3">

    <ImgBlock button class="" />

    <ImgBlock free class=" row-span-2">
      <LateForClass />
    </ImgBlock>

    <CharBlock button class="" />

    <CharBlock button class="" />
    <CharBlock button class="" />
  </div>
</div>
