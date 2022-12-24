<script>
  import Gallery from "$lib/photos/Gallery.svelte";
  import Photo from "$lib/photos/Photo.svelte";
  import { photos } from "$lib/photos";
</script>

<Photo alt={photos.familyTree.alt} src={photos.familyTree.src} />

<h2>Family History</h2>

<p>
  This year our gift to you is the gift of family history. Next time you're in town
  Britt will hang with the boys (and probably Dad!), while you and Chris go to the Beverly
  historical society together.
</p>
<p>
  You and Chris will spend the day together learning about Ralph and our other relatives,
  having lunch, seeing the Ellingwoods' grave stones, and doing whatever other fun things
  the historical society (or we) can come up with to learn more about our family history.
</p>

<h2>Photos</h2>

<p>
  We also <em>did</em> take some photos of all your kids together. Wrangling smiles out of
  everyone was tricky, and these were the best we came up with. Love you Nonni, Mom, Brenda!
</p>

<p class='script'>P.S. Click the Images to download them!</p>

<Gallery />