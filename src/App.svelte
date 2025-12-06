<script>
    import { onMount } from 'svelte';
    import Homepage from './Homepage.svelte';
    import PrivacyPolicy from './Components/PrivacyPolicy.svelte';
    import PopupManager from './Components/Popups/PopupManager.svelte';
    import { getCurrentRoute } from './Helper';

    let currentRoute = 'home';

    onMount(() => {
        // Set initial route
        currentRoute = getCurrentRoute();
        
        // Listen for popstate events (browser back/forward)
        const handlePopState = () => {
            currentRoute = getCurrentRoute();
        };
        
        window.addEventListener('popstate', handlePopState);
        
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    });
</script>

<PopupManager />

{#if currentRoute === 'home'}
    <Homepage />
{:else if currentRoute === 'privacy'}
    <PrivacyPolicy />
{:else}
    <Homepage />
{/if}

<style>
    /* Global styles can go here if needed */
</style>
