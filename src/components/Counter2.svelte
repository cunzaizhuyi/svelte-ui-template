<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 2
  }
</script>

<button on:click={increment} class="btn bg-red text-white">
  count is {count}
</button>

<style>
.btn{
  border: 8px solid #35eb9a;
}
</style>