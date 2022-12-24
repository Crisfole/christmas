<script>
  import "./app.css";
</script>

<style>
  header, main {
    max-width: 120ch;
    margin: auto;
    padding: .5rem 1rem;
  }
  main :global(figure) {
    max-width: 600px;
    margin: auto;
  }
</style>

<header>
  <h1>Merry Christmas</h1>
</header>

<main>
  <slot />
</main>