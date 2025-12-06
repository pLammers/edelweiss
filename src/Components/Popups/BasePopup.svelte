<script>
    import { onMount, onDestroy } from 'svelte';
    
    export let show = false;
    export let onClose = () => {};
    
    function handleKeyDown(event) {
        if (event.key === 'Escape' && show) {
            handleClose();
        }
    }
    
    onMount(() => {
        window.addEventListener('keydown', handleKeyDown);
    });
    
    onDestroy(() => {
        window.removeEventListener('keydown', handleKeyDown);
    });
    
    function handleClose() {
        onClose();
    }
    
    function handleBackdropClick(event) {
        if (event.target === event.currentTarget) {
            handleClose();
        }
    }
</script>

{#if show}
    <div 
        class="popup-backdrop" 
        role="dialog" 
        aria-modal="true"
        aria-labelledby="popup-title"
        on:click={handleBackdropClick}
    >
        <div class="popup-container">
            <button class="close-button" on:click={handleClose} aria-label="Popup schließen">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            
            <div class="popup-content">
                <slot />
            </div>
        </div>
    </div>
{/if}

<style>
    .popup-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        padding: 20px;
        animation: fadeIn 0.3s ease-in-out;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    .popup-container {
        background: white;
        border-radius: 20px;
        max-width: 900px;
        width: 100%;
        position: relative;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.4s ease-out;
        overflow: hidden;
    }
    
    @keyframes slideUp {
        from {
            transform: translateY(50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    .close-button {
        position: absolute;
        top: 15px;
        right: 15px;
        background: rgba(255, 255, 255, 0.9);
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        transition: all 0.3s;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .close-button:hover {
        background: white;
        transform: scale(1.1);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
    
    .close-button svg {
        color: #170916;
    }
    
    .popup-content {
        display: flex;
        flex-direction: row;
        align-items: stretch;
    }
    
    /* Mobile responsiveness */
    @media only screen and (max-width: 768px) {
        .popup-backdrop {
            padding: 10px;
        }
        
        .popup-container {
            max-width: 100%;
            border-radius: 15px;
        }
        
        .popup-content {
            flex-direction: column;
        }
    }
</style>

