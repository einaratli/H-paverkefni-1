<script>
async function inject(id, url) {
  const host = document.getElementById(id);
  if (!host) return;
  const res = await fetch(url, { cache: "no-cache" });
  host.innerHTML = await res.text();
}

</script>
