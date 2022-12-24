<script>
  export let src;
  export let alt;
</script>

<figure>
  <a href={src} download>
    <img {src} {alt} />
  </a>
</figure>
