<script>
    import Map from "../Map.svelte";
</script>

<div class="footer-container">
    <div class="footer-headline">Kontakt</div>

    <div class="footer-wrapper">
        <div class="footer-contact-information">
            <img class="logo" src="./assets/logo.png" alt="logo" />

            <div class="text-header">Inhaberin:</div>
            <div class="text-content">Marion Kabus</div>

            <br />
            <br />

            <div class="text-header">Termin buchen:</div>
            <div class="text-content">
                <img
                    class="icon"
                    src="./assets/icons/phone.png"
                    alt="phone"
                /> 015120777965
            </div>
            <div class="text-content">
                <img
                    class="icon"
                    src="./assets/icons/mail.png"
                    alt="mail"
                /> info@hundesalon-edelweiss.de
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
            <br />

            <div class="text-header">Termin buchen:</div>
            <div class="text-content">-> Vor Ort nach Vereinbarung</div>
            <div class="text-content">-> Täglich telefonisch</div>
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

        background-image: url("./assets/mountains.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }

    .logo {
        position: absolute;
        width: 150px;
        top: 80px;
    }

    .footer-headline {
        text-align: center;
        color: black;
        font-size: 4rem;
        font-weight: bold;
        padding: 20px;
    }

    .footer-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 40px;
    }

    .footer-contact-information {
        padding-top: 100px;
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
