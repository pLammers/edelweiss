<script>
    import { onMount } from 'svelte';
    import BasePopup from './BasePopup.svelte';
    
    const STORAGE_KEY = 'edelweiss_pfotenbalsam_popup_shown';
    const EBAY_LINK = 'https://www.ebay.de/itm/317599419328';
    const DAYS_UNTIL_RESHOW = 7;
    
    let showPopup = false;
    
    onMount(() => {
        // Check if popup should be shown
        const popupData = localStorage.getItem(STORAGE_KEY);
        
        if (popupData) {
            try {
                const { timestamp } = JSON.parse(popupData);
                const now = Date.now();
                const daysSinceShown = (now - timestamp) / (1000 * 60 * 60 * 24);
                
                // Show popup again if more than DAYS_UNTIL_RESHOW days have passed
                if (daysSinceShown >= DAYS_UNTIL_RESHOW) {
                    setTimeout(() => {
                        showPopup = true;
                    }, 500);
                }
            } catch (e) {
                // If parsing fails, show popup (old format or corrupted data)
                setTimeout(() => {
                    showPopup = true;
                }, 500);
            }
        } else {
            // First time visitor - show popup
            setTimeout(() => {
                showPopup = true;
            }, 500);
        }
    });
    
    function closePopup() {
        showPopup = false;
        // Store timestamp when popup was closed
        const data = {
            timestamp: Date.now(),
            closedAt: new Date().toISOString()
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
    
    function handleBuyClick() {
        closePopup();
    }
</script>

<BasePopup show={showPopup} onClose={closePopup}>
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
        margin-bottom: 8px;
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
            padding: 20px 20px 15px 20px;
        }
        
        .popup-image img {
            max-height: 280px;
        }
        
        .popup-text {
            padding: 20px 25px 25px 25px;
        }
        
        .popup-text h2 {
            font-size: 1.65rem;
            margin-bottom: 8px;
        }
        
        .popup-text h3 {
            font-size: 1.4rem;
            margin-bottom: 4px;
        }
        
        .subtitle {
            font-size: 1.1rem;
            margin-bottom: 18px;
        }
        
        .features {
            margin-bottom: 18px;
        }
        
        .feature {
            font-size: 1.05rem;
            margin-bottom: 6px;
        }
        
        .price {
            font-size: 1.8rem;
            margin-bottom: 20px;
        }
        
        .cta-button {
            padding: 15px 28px;
            font-size: 1.05rem;
            margin-bottom: 12px;
        }
        
        .secondary-button {
            font-size: 1rem;
        }
        
        .popup-badge {
            top: 12px;
            left: 12px;
            font-size: 13px;
            padding: 7px 14px;
        }
    }
    
    @media only screen and (max-width: 480px) {
        .popup-image {
            padding: 18px 15px 12px 15px;
        }
        
        .popup-image img {
            max-height: 250px;
        }
        
        .popup-text {
            padding: 18px 20px 22px 20px;
        }
        
        .popup-text h2 {
            font-size: 1.5rem;
            margin-bottom: 6px;
        }
        
        .popup-text h3 {
            font-size: 1.3rem;
        }
        
        .subtitle {
            font-size: 1.05rem;
            margin-bottom: 15px;
        }
        
        .features {
            margin-bottom: 15px;
        }
        
        .feature {
            font-size: 1rem;
            margin-bottom: 5px;
        }
        
        .price {
            font-size: 1.7rem;
            margin-bottom: 18px;
        }
        
        .cta-button {
            padding: 14px 24px;
            font-size: 1rem;
        }
    }
</style>

