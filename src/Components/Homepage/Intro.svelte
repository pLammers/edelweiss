<script>
    import Button from "../../SimpleElements/Button.svelte";
    import { openWA } from "../../Helper.js";
    import EdelweissHeadline from "../../SimpleElements/EdelweissHeadline.svelte";
</script>

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
                    Ich bin Marion, geboren 1970 in Groß-Umstadt. Ich bin eine
                    stolze Mama von zwei wundervollen Buben und lebe meinen
                    Traum von einer kleinen Farm, umgeben von meinen geliebten
                    Tieren - Ziegen, einem Hund, einer Katze sowie Enten und
                    Hühnern.
                    <br /><br />
                    Als gelernte Reiseverkehrskauffrau bin ich schließlich als Quereinsteiger
                    in einer Tierarztpraxis gelandet und habe dort x Jahre gearbeitet.
                </div>
                <img
                    class="intro-block1-image"
                    src="./assets/ziegen1.png"
                    alt="ziege"
                />
            </div>
            <div class="intro-block end">
                <img
                class="intro-block2-image"
                src="./assets/marion_hund.png"
                alt="ziege"
            />
                <div class="intro-headline">Deine Hundefriseurin in Zell!</div>
                <div class="intro-text">
                    Ich liebe es, mich um unsere tierischen Freunde zu kümmern.
                    Mit meinem Freund an der Seite, dessen Unterstützung
                    unentbehrlich für die Verwirklichung meines Traums war,
                    konnte ich meinen eigenen Hundesalon eröffnen. Auch meine
                    liebe Familie hat mir geraten, zu tun, was mich glücklich
                    macht.
                    <br /><br />
                    Meine Wurzeln liegen in Österreich, und durch das Edelweiß verkörpere
                    ich meine Liebe zu den Bergen und den schönen Erinnerungen an
                    meine Heimat, die einen besonderen Platz in meinem Herzen haben.
                </div>
            </div>
        </div>
    </div>
    <div class="intro-footer">
        <div class="intro-text h-color-dark">
            Ich habe meine Erfüllung in einem Beruf gefunden, der sich ganz um
            Tiere dreht. Ich bringe meine Erfahrungen täglich ein und freue
            mich, sie mit Dir und Deinem Hund zu teilen.
            <br />
            <br />
            Im Hundesalon Edelweiss steht Dein Hund im Mittelpunkt. Ich biete ein
            entspanntes und liebevolles Umfeld und lege selbstverständlich großen
            Wert auf eine behutsame und gleichzeitig professionelle Pflege.
        </div>
        <Button cssClass="h-self-center" text="Termin buchen" onClick={openWA}
        ></Button>
    </div>
</div>

<style>
    .intro-container {
        background-color: white;
        padding: 35px;
        padding-top: 120px;
        overflow: hidden;
    }

    .intro-content {
        position: relative;
        background-color: #c39e6f;
        height: 1300px;
        padding: 30px;
    }

    .mountains {
        position: absolute;
        background-image: url("./mountains.png");
        background-position: center center;
        width: 100%;
        height: 200px;
        top: -200px;
        left: 0;
    }

    .intro-block-container {
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        gap: 340px;

        @media only screen and (max-width: 1500px) {
            gap: 100px;
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
    }

    .intro-block2-image {
        width: 490px;
        position: absolute;
        left: 170px;
        top: 600px;

        @media only screen and (max-width: 1500px) {
            width: 410px;
            top: 700px;
            left: 130px;
        }
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
            padding-bottom: 45px;
            gap: 30px;
        }
    }
</style>
