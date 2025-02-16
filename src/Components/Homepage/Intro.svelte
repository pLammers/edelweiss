<script>
    import Button from "../../SimpleElements/Button.svelte";
    import { openWA } from "../../Helper.js";
    import EdelweissHeadline from "../../SimpleElements/EdelweissHeadline.svelte";
    import Teaser from "../Teaser.svelte";

    let innerWidth;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth <= 1200}
    <div class="intro-container">
        <div class="intro-content">
            <div class="mountains"></div>
            <div class="h-font-size-l slogan">
                Dein Hund ist wieder <span style="font-family: Wreath;font-size:43px">"fellig"?</span>
            </div>
            <div class="h-font-size-l">
                <div style="color: black">Dann ab zum</div>
                <div style="color: white;font-weight: bold;">
                    Hundesalon Edelweiss
                </div>
                <div style="color: black">in Bad-König Zell</div>
            </div>
            <div class="absolute-container" style="height: 92vw">
                <img
                    class="intro-block1-image"
                    src="/images/image00002_shortformat.webp"
                    alt="ziege"
                />
                <div
                    class="h-font-size-l intro-block1-image-abs-text"
                    style="color: white"
                >
                    Wer stutzt hier meinen Hund zusammen?
                </div>
            </div>

            <div class="intro-text h-width-95">
                Ich bin Marion, geboren im Dezember 1970 in Groß-Umstadt und
                darf mich stolze Mama von zwei wundervollen Buben nennen. Ich
                lebe glücklich, gemeinsam mit meinem lieben Freund, unseren
                Traum von einer kleinen Farm, umgeben von unseren Ziegen,
                Schafen, einem Hund, einer Katze, sowie Enten und Hühnern.
            </div>

            <div class="absolute-container">
                <img
                    class="intro-block2-image"
                    src="/images/ziegen2.webp"
                    alt="ziege"
                />
            </div>
            <div class="intro-text h-width-95">
                Im Hundesalon Edelweiss steht Dein Hund im Mittelpunkt. Ich lege
                meinen Fokus darauf, Hundebesitzern im stressigen Alltag zu
                helfen, indem ich liebevolle und geduldige Pflegeleistungen für
                ihre Fellnasen anbiete.
            </div>
        </div>
        <Teaser backgroundUrl="/images/banner_mobile_schnoodle_spruch.webp"
        ></Teaser>
        <div class="intro-footer">
            <div class="intro-text h-color-pink">
                Zu meinen Leistungen gehören Baden, Föhnen, Ausbürsten
                (Unterwolle, Verfilzungen), Pfötchenpflege, sowie das Scheren
                oder Schneiden einfacher, ansprechender und hübscher Frisuren.
                <br /><br />
                Mein Ziel ist es, dass sich die Hundchen rundum wohl und glücklich
                fühlen, deshalb freue ich mich über jeden einzelnen Besucher in meinem
                Salon.
            </div>
            <Button
                cssClass="h-self-center"
                text="Termin buchen"
                onClick={openWA}
            ></Button>
        </div>
    </div>
{:else}
    <div class="intro-container">
        <div class="intro-content">
            <div class="mountains"></div>
            <EdelweissHeadline></EdelweissHeadline>
            <div class="intro-block-container">
                <div class="intro-block">
                    <div class="intro-headline">
                        Wer stutzt hier meinen Hund zusammen?
                    </div>
                    <div class="intro-text">
                        Ich bin Marion, geboren im Dezember 1970 in Groß-Umstadt
                        und darf mich stolze Mama von zwei wundervollen Buben
                        nennen. Ich lebe glücklich, gemeinsam mit meinem lieben
                        Freund, unseren Traum von einer kleinen Farm, umgeben
                        von unseren Ziegen, Schafen, einem Hund, einer Katze,
                        sowie Enten und Hühnern.
                    </div>
                    <img
                        class="intro-block1-image"
                        src="/images/ziegen1.webp"
                        alt="ziege"
                    />
                </div>
                <div class="intro-block end">
                    <img
                        class="intro-block2-image"
                        src="/images/image00002.webp"
                        alt="ziege"
                    />
                    <div class="intro-headline">
                        Deine Hundefriseurin in Zell!
                    </div>
                    <div class="intro-text">
                        Im Hundesalon Edelweiss steht Dein Hund im Mittelpunkt.
                        Ich lege meinen Fokus darauf, Hundebesitzern im
                        stressigen Alltag zu helfen, indem ich liebevolle und
                        geduldige Pflegeleistungen für ihre Fellnasen anbiete.
                    </div>
                    <img
                        class="intro-block2-edelweiss"
                        src="/images/edelweiss.png"
                        alt="edelweiss"
                    />
                </div>
            </div>
        </div>
        <div class="intro-footer">
            <div class="intro-text h-color-dark">
                Zu meinen Leistungen gehören Baden, Föhnen, Ausbürsten
                (Unterwolle, Verfilzungen), Pfötchenpflege, sowie das Scheren
                oder Schneiden einfacher, ansprechender und hübscher Frisuren.
                Mein Ziel ist es, dass sich die Hundchen rundum wohl und
                glücklich fühlen, deshalb freue ich mich über jeden einzelnen
                Besucher in meinem Salon.
            </div>
            <Button
                cssClass="h-self-center"
                text="Termin buchen"
                onClick={openWA}
            ></Button>
        </div>
    </div>
{/if}

<style>
    .intro-container {
        background-color: white;
        padding: 35px;
        padding-top: 120px;
        overflow: hidden;

        @media only screen and (max-width: 1200px) {
            padding: 0;
            overflow: visible;
        }
    }

    .intro-content {
        position: relative;
        background-color: #caac83;
        height: 1250px;
        padding: 30px;

        @media only screen and (max-width: 1200px) {
            text-align: center;
            padding: 0;
            height: auto;
            padding-bottom: 35px;
            background-image: url("/images/desktop_background_edelweiss-icon.png");
            background-size: contain;
        }
    }

    .mountains {
        position: absolute;
        background-image: url("/images/mountains.png"); /* GITHUB ASSETS CHANGE */
        background-position: center center;
        width: 100%;
        height: 200px;
        top: -200px;
        left: 0;

        @media only screen and (max-width: 1200px) {
            height: 163px;
            background-position: center center;
            background-size: cover;
            top: -163px;
            width: 100%;
            left: 0;
            background-repeat: no-repeat;
            display: block;
        }

        @media only screen and (max-width: 1000px) {
            height: 140px;
            background-position: 0px -80px;
            background-size: cover;
            top: -140px;
            width: 100%;
            left: 0;
            background-repeat: no-repeat;
            display: block;
        }

        @media only screen and (max-width: 850px) {
            height: 123px;
            background-position: 0px -75px;
            background-size: cover;
            top: -119px;
            width: 100%;
            left: 0;
            background-repeat: no-repeat;
            display: block;
        }

        @media only screen and (max-width: 565px) {
            background-size: cover;
            top: -85px;
            width: 100%;
            height: 86px;
            left: 0;
            background-repeat: no-repeat;
            display: block;
            background-position: bottom center;
        }
    }

    .intro-block-container {
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        gap: 380px;

        @media only screen and (max-width: 1700px) {
            gap: 310px;
        }

        @media only screen and (max-width: 1500px) {
            gap: 230px;
        }
    }

    .intro-block {
        padding: 15px;
        padding-left: 175px;
        padding-right: 175px;
        width: 45%;

        @media only screen and (max-width: 1670px) {
            padding-left: 90px;
            padding-right: 90px;
        }

        @media only screen and (max-width: 1500px) {
            padding-left: 70px;
            padding-right: 70px;
        }
    }

    .intro-block1-image {
        width: 690px;
        position: absolute;
        right: -35px;
        top: 225px;

        @media only screen and (max-width: 1500px) {
            width: 550px;
        }

        @media only screen and (max-width: 1200px) {
            position: relative;
            top: 0;
            width: -webkit-fill-available;
            z-index: 1;
            filter: brightness(0.7);
            max-width: 100%;
            left: 0;
            right: 0;
        }
    }

    .intro-block1-image-abs-text {
        position: absolute;
        z-index: 2;
        bottom: 35px;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
    }

    .intro-block2-image {
        width: 490px;
        position: absolute;
        left: 170px;
        top: 520px;

        @media only screen and (max-width: 1670px) {
            top: 540px;
        }

        @media only screen and (max-width: 1590px) {
            top: 560px;
        }

        @media only screen and (max-width: 1500px) {
            width: 410px;
            top: 640px;
            left: 120px;
        }

        @media only screen and (max-width: 1200px) {
            position: relative;
            top: 0;
            width: -webkit-fill-available;
            z-index: 1;
            filter: brightness(0.7);
            max-width: 80%;
            left: 0;
            right: 0;
            margin: auto;
        }
    }

    .intro-block2-edelweiss {
        width: 300px;
        right: -10px;
        position: absolute;
        bottom: 30px;
    }

    .end {
        align-self: end;
    }

    .intro-headline {
        color: #170916;
        font-size: 2.4rem;
        font-weight: 700;
        padding-bottom: 30px;
    }

    .intro-text {
        color: white;
        font-size: 2.1rem;
        font-weight: 300;

        @media only screen and (max-width: 1200px) {
            text-align: center;
            margin: auto;
            margin-top: 0;
            margin-bottom: 0;
            width: 100%;
        }
    }

    .intro-footer {
        display: flex;
        flex-direction: column;
        height: 195px;
        padding: 110px;
        padding-top: 165px;
        padding-bottom: 50px;
        gap: 35px;

        @media only screen and (max-width: 1500px) {
            padding-top: 125px;
            padding-bottom: 0px;
            gap: 25px;
            height: auto;
        }

        @media only screen and (max-width: 1200px) {
            justify-content: center;
            gap: 25px;
            height: auto;
            padding: 20px;
            padding-top: 35px;
            padding-bottom: 35px;
        }
    }

    .absolute-container {
        position: relative;
        margin: auto;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .slogan {
        color: white;
        padding-bottom: 30px;
        font-weight: bold;
    }
</style>
