<script>
    import { onMount } from 'svelte';
    import BasePopup from './BasePopup.svelte';
    
    const STORAGE_KEY = 'edelweiss_pfotenbalsam_popup_shown';
    const EBAY_LINK = 'https://www.ebay.de/itm/317599419328';
    
    let showPopup = false;
    
    onMount(() => {
        // Check if popup was already shown
        const popupShown = localStorage.getItem(STORAGE_KEY);
        
        if (!popupShown) {
            // Wait a bit before showing popup for better UX
            setTimeout(() => {
                showPopup = true;
            }, 1000);
        }
    });
    
    function closePopup() {
        showPopup = false;
        // Remember that popup was shown
        localStorage.setItem(STORAGE_KEY, 'true');
    }
    
    function handleBuyClick() {
        closePopup();
    }
</script>

<BasePopup show={showPopup} onClose={closePopup} title="Neu in unserem Shop!">
    <div class="popup-badge">NEU</div>
    
    <div class="popup-image">
        <img src="/images/pfoetchenpflege.png" alt="Pfötchenpflege BIO & VEGAN Pfotenbalsam" />
    </div>
    
    <div class="popup-text">
        <h2 id="popup-title">🐾 Neu in unserem Shop!</h2>
        <h3>Pfötchenpflege 50 ml</h3>
        <p class="subtitle">BIO & VEGAN Pfotenbalsam</p>
        
        <div class="features">
            <div class="feature">✓ 100% Bio-Qualität</div>
            <div class="feature">✓ Vegan & tierversuchsfrei</div>
            <div class="feature">✓ Natürliche Pflege für gesunde Pfoten</div>
        </div>
        
        <div class="price">Nur 11,50 €</div>
        
        <a 
            href={EBAY_LINK}
            target="_blank" 
            rel="noopener noreferrer"
            class="cta-button"
            on:click={handleBuyClick}
        >
            Jetzt auf eBay kaufen
        </a>
        
        <button class="secondary-button" on:click={closePopup}>
            Vielleicht später
        </button>
    </div>
</BasePopup>

<style>
    .popup-badge {
        position: absolute;
        top: 20px;
        left: 20px;
        background: linear-gradient(135deg, #c39e6f 0%, #a0855a 100%);
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        font-weight: bold;
        font-size: 14px;
        z-index: 10;
        box-shadow: 0 4px 15px rgba(195, 158, 111, 0.4);
    }
    
    .popup-image {
        flex: 1;
        max-width: 50%;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px;
    }
    
    .popup-image img {
        width: 100%;
        height: auto;
        max-height: 500px;
        object-fit: contain;
        border-radius: 10px;
    }
    
    .popup-text {
        flex: 1;
        padding: 50px 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .popup-text h2 {
        color: #170916;
        font-size: 2rem;
        margin-bottom: 10px;
        font-weight: 700;
    }
    
    .popup-text h3 {
        color: #c39e6f;
        font-size: 1.5rem;
        margin-bottom: 5px;
        font-weight: 600;
    }
    
    .subtitle {
        color: #666;
        font-size: 1.1rem;
        margin-bottom: 25px;
    }
    
    .features {
        margin-bottom: 25px;
    }
    
    .feature {
        color: #333;
        font-size: 1rem;
        margin-bottom: 10px;
        padding-left: 5px;
    }
    
    .price {
        font-size: 2rem;
        font-weight: bold;
        color: #c39e6f;
        margin-bottom: 25px;
    }
    
    .cta-button {
        background: linear-gradient(135deg, #c39e6f 0%, #a0855a 100%);
        color: white;
        border: none;
        padding: 16px 32px;
        border-radius: 10px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        text-decoration: none;
        display: inline-block;
        text-align: center;
        box-shadow: 0 4px 15px rgba(195, 158, 111, 0.3);
        margin-bottom: 15px;
    }
    
    .cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(195, 158, 111, 0.4);
    }
    
    .secondary-button {
        background: transparent;
        color: #666;
        border: none;
        padding: 10px;
        font-size: 0.95rem;
        cursor: pointer;
        transition: color 0.3s;
        text-decoration: underline;
    }
    
    .secondary-button:hover {
        color: #333;
    }
    
    /* Mobile responsiveness */
    @media only screen and (max-width: 768px) {
        .popup-image {
            max-width: 100%;
            padding: 30px 20px 20px 20px;
        }
        
        .popup-image img {
            max-height: 300px;
        }
        
        .popup-text {
            padding: 30px 20px;
        }
        
        .popup-text h2 {
            font-size: 1.5rem;
        }
        
        .popup-text h3 {
            font-size: 1.2rem;
        }
        
        .subtitle {
            font-size: 1rem;
        }
        
        .feature {
            font-size: 0.9rem;
        }
        
        .price {
            font-size: 1.5rem;
        }
        
        .cta-button {
            padding: 14px 24px;
            font-size: 1rem;
        }
        
        .popup-badge {
            top: 15px;
            left: 15px;
            font-size: 12px;
            padding: 6px 12px;
        }
    }
    
    @media only screen and (max-width: 480px) {
        .popup-text h2 {
            font-size: 1.3rem;
        }
        
        .popup-text h3 {
            font-size: 1.1rem;
        }
        
        .popup-text {
            padding: 25px 15px;
        }
        
        .popup-image {
            padding: 25px 15px 15px 15px;
        }
    }
</style>

