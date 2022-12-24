<script>
  import Photo from "./Photo.svelte";
  import { photos } from ".";
</script>

<style>
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>

<ul>
  {#each Object.values(photos).filter(x => !x.hide) as { src, alt }}
  <li><Photo {src} {alt} /></li>
  {/each}
</ul>
