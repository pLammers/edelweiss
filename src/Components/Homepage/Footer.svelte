<script>
    import Map from "../Map.svelte";
    import { isMobile } from "../../Helper";
</script>

<div class="footer-container">
    <h2 class="footer-headline">Kontakt</h2>

    <div class="footer-wrapper">
        <div class="footer-contact-information">
            <img class="logo" src="/images/logo.png" alt="logo" />

            <div class="text-header">Inhaberin:</div>
            <div class="text-content">Marion Kabus</div>

            <br />

            <div class="text-header">Termin buchen:</div>
            <div class="text-content">
                <img class="icon" src="./assets/icons/phone.png" alt="phone" />
                {#if isMobile()}
                    <a href="tel:015120777965">015120777965</a>
                {:else}
                    015120777965
                {/if}
            </div>
            <div class="text-content">
                <img class="icon" src="./assets/icons/mail.png" alt="mail" />
                <a href="mailto:info@hundesalon-edelweiss.de" target="_self"
                    >info@hundesalon-edelweiss.de</a
                >
            </div>
            <div class="text-content">
                <img
                    class="icon"
                    src="./assets/icons/instagram.png"
                    alt="instagram"
                />
                <a
                    href="https://www.instagram.com/hundesalon_edelweiss/"
                    target="_blank"
                    >hundesalon_edelweiss
                </a>
            </div>

            <br />
        </div>

        <div class="footer-location">
            <div class="footer-location-address">
                <div>Königer Straße 20, 64732 Zell (Bad König)</div>
            </div>
            <div class="footer-location-map">
                <Map></Map>
            </div>
        </div>
    </div>
</div>

<style>
    a {
        color: white;
    }

    .footer-container {
        position: relative;
        font-size: 18px;
        text-align: left;
        color: white;
        background-color: rgb(195, 158, 111);
        display: flex;
        flex-direction: column;
        padding: 20px;
        padding-left: 50px;
        padding-right: 50px;
        max-width: 100%;

        background-image: url("/images/mountains.png"); /* GITHUB ASSETS CHANGE */
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;

        @media only screen and (max-width: 1500px) {
            padding-left: 10px;
            padding-right: 10px;
        }
    }

    .logo {
        position: absolute;
        width: 150px;
        top: 105px;

        @media only screen and (max-width: 1200px) {
            right: 30px;
            top: 110px;
        }
    }

    .footer-headline {
        text-align: center;
        color: #170916;
        font-size: 6rem;
        font-weight: bold;
        padding: 55px;
        padding-bottom: 60px;

        @media only screen and (max-width: 1200px) {
            padding: 25px;
            padding-bottom: 50px;
        }
    }

    .footer-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        @media only screen and (max-width: 1200px) {
            flex-direction: column;
        }
    }

    .footer-contact-information {
        padding-top: 100px;

        @media only screen and (max-width: 1200px) {
            padding-top: 30px;
        }
    }

    .footer-location {
        @media only screen and (max-width: 1200px) {
            margin-top: 30px;
        }
    }

    .footer-location-address {
        padding-bottom: 15px;
    }

    .text-header {
        font-size: 19px;
        font-weight: bold;
        padding-bottom: 5px;
    }

    .text-content {
        padding: 5px;
    }

    .icon {
        width: 15px;
    }
</style>
