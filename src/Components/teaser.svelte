<script>
    export let backgroundUrl = "";
    export let text1 = "";
    export let text2 = "";
</script>

<div class="teaser" style="background-image: url({backgroundUrl});">
    <div>{text1}</div>
    <div>{text2}</div>
</div>

<style>
    .teaser {
        height: 250px;
        line-height: 40px;
        position: relative;
        background-size: cover;
        text-align: left;
        color: white;
        font-size: 2rem;
        padding: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(1, 1, 1, 0.3);
        background-blend-mode: darken;

        @media only screen and (max-width: 1200px) {
            line-height: 24px;
            padding: 25px;
            text-align: center;
            font-size: 1.6rem;
        }

        @media only screen and (max-width: 410px) {
            height: 220px;
        }
    }
</style>
