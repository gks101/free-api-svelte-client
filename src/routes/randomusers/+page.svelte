<script lang="ts">
    let { data } = $props();

    $effect(() => {
        console.log("Receieved data: ", data);
    });
</script>

<svelte:head>
    <title>Random Users</title>
</svelte:head>

<h1>Random Users is working</h1>