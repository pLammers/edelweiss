<script>
    import Button from "../../SimpleElements/Button.svelte";
    import { openWA } from "../../Helper.js";
</script>

<div class="header-container">
    <div class="header-menu">
        <h1 class="header-menu-left">
            <img src="./assets/wholelogo_horizontal.png" alt="logo" />
        </h1>
        <!-- <div class="header-menu-right">
            <span class="header-menu-item">SALON</span>
            <span class="header-menu-item">SERVICES</span>
            <span class="header-menu-item">PREISE</span>
            <span class="header-menu-item">KONTAKT</span>
            <Button text="Termin buchen" onClick={openWA}></Button>
        </div> -->
    </div>
    <div class="header-center">
        <div>Dein Hund ist wieder</div>
        <div style="font-weight: bolder;">"fellig"?</div>
    </div>
    <div class="header-bottom">
        <div>Dann ab zum Hundesalon Edelweiss in Bad König-Zell!</div>
        <Button text="Termin buchen" onClick={openWA}></Button>
    </div>
</div>

<style>
    .header-container {
        color: white;
        display: flex;
        flex-direction: column;
        gap: 210px;
        padding: 20px;
        padding-left: 40px;
        padding-right: 40px;
        max-width: 100%;
        text-align: center;

        background-image: url("./header_bg.png");
        height: 900px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        background-color: rgba(0, 0, 0, 0.4);
        background-blend-mode: overlay;

        @media only screen and (max-width: 1200px) {
            height: 500px;
            background-position: top;
        }
    }

    .header-menu {
        display: flex;
        justify-content: space-between;

        @media only screen and (max-width: 1200px) {
            display: inherit;
            flex-direction: column;
            align-items: center;
            gap: 0px;
        }
    }

    .header-menu-left {
        display: flex;
        width: 40%;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 10px;
        font-size: 3.5rem;

        @media only screen and (max-width: 1200px) {
            flex-direction: column;
            align-items: center;
            gap: 0px;
            width: 100%;
        }

        img {
            width: 100%;
        }
    }

    .header-menu-left-logo-text {
        padding-top: 40px;
        font-family: "wrath";

        @media only screen and (max-width: 1200px) {
            padding-top: 0;
        }
    }

    .header-menu-right {
        display: flex;
        flex-direction: row;
        font-size: 1.2rem;
        padding-top: 50px;
        justify-content: space-between;
        width: 50%;
        align-items: baseline;

        @media only screen and (max-width: 1200px) {
            display: none;
        }
    }

    .header-menu-item {
        cursor: pointer;
    }

    .header-center {
        font-size: 3.9rem;
        line-height: 70px;

        @media only screen and (max-width: 1200px) {
            display: none;
        }
    }

    .header-bottom {
        text-align: center;
        font-size: 2.3rem;
        max-width: 610px;
        min-width: 200px;
        margin: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 40px;
        font-weight: 600;
        margin-top: 0;
        line-height: 35px;

        @media only screen and (max-width: 1200px) {
            div {
                display: none;
            }
        }
    }
</style>
