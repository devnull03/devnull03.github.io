<script lang="ts">
  import { goto } from "$app/navigation";
  import Block from "$lib/components/Block.svelte";
  import CharBlock from "$lib/components/CharBlock.svelte";
  import ImgBlock from "$lib/components/ImgBlock.svelte";
</script>

<div class="p-20 w-[60%] flex items-center justify-center">
  <div class="border border-black w-full grid grid-cols-7">
    <CharBlock class="col-span-2">こ</CharBlock>

    <ImgBlock free class="row-span-2 col-span-3">
      <img
        src="/svg/LateForClass.svg"
        class="object-cover align-top h-full"
        alt=""
      />
    </ImgBlock>

    <CharBlock class="col-span-2">ん</CharBlock>

    <CharBlock class="col-span-2">に</CharBlock>

    <a
      href="https://github.com/devnull03"
      target="_blank"
      class="col-span-2 hover:animate-none"
    >
      <Block button class="w-full text-2xl font-bold underline">Github</Block>
    </a>

    <a
      href="https://www.youtube.com/watch?v=iik25wqIuFo"
      target="_blank"
      class="col-span-2 hover:animate-none"
    >
      <ImgBlock button class="w-full">
        <img
          src="/svg/Rogue.svg"
          class="object-cover align-top h-full"
          alt=""
        />
      </ImgBlock>
    </a>

    <Block free class="col-span-3">I'm Arnav</Block>

    <CharBlock class="col-span-2">ち</CharBlock>

    <CharBlock class="col-span-2">は</CharBlock>

    <ImgBlock free class="row-span-2 col-span-3">
      <img src="/svg/Runner.svg" class="object-cover align-top h-full" alt="" />
    </ImgBlock>

    <ImgBlock class="col-span-2">
      <img src="/svg/Growth.svg" class="object-cover align-top h-full" alt="" />
    </ImgBlock>

    <a
      href="https://linkedin.com/in/devnull03"
      target="_blank"
      class="col-span-2 hover:animate-none"
    >
      <Block button class="w-full text-2xl font-bold underline">Linkedin</Block>
    </a>

    <a
      href="https://cdn.discordapp.com/attachments/953200607659982848/1210414358979674203/Resume.pdf?ex=65ea7937&is=65d80437&hm=a32fe081345b914d0bfdb4431cd792f953799f9e1ce9f918a1326431eb7d2b4e&"
      target="_blank"
      class="col-span-2 hover:animate-none"
    >
      <Block button class="w-full text-2xl font-bold underline">Resume</Block>
    </a>

  </div>
</div>
