<script lang="ts">
    import Sidebar from "$lib/components/Sidebar.svelte";
    import "../app.css";
</script>

<div class="flex h-dvh">
    <div class="col" style="width: 15rem;">
        <Sidebar />
    </div>
    <div class="flex-1">
        <slot />
    </div>
</div>