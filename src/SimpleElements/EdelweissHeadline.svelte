<script>
    export let showLogo = false;
</script>

<h1 class="edelweiss-headline-container">
    {#if showLogo}
        <img
            class="edelweiss-headline-logo"
            src="./assets/logo.png"
            alt="logo"
        />
    {/if}
    <div class="edelweiss-headline-upper">Hundesalon</div>
    <div class="edelweiss-headline-lower">EDELWEISS</div>
</h1>

<style>
    .edelweiss-headline-container {
        text-align: center;
        line-height: 75px;
    }

    .edelweiss-headline-logo {
        width: 100px;
    }
    .edelweiss-headline-upper {
        color: #331223;
        font-size: 6.5rem;
    }
    .edelweiss-headline-lower {
        color: white;
        font-size: 4.7rem;
    }
</style>
