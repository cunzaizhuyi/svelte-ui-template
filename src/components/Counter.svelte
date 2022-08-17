<script lang="ts">
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment} class="bg-black text-white">
  count is {count}
</button>

