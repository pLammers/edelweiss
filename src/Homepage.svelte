<script>
  import Footer from "./Components/Homepage/Footer.svelte";
  import Header from "./Components/Homepage/Header.svelte";
  import Intro from "./Components/Homepage/Intro.svelte";
  import Teaser from "./Components/teaser.svelte";
</script>

<main>
  <Header></Header>
  <Intro></Intro>
  <Teaser
    text1="ES GIBT NUR EINEN EINZIGEN, DEN KLÜGSTEN UND SCHÖNSTEN HUND"
    text2="AUF DER WELT - UND JEDER BESITZT GENAU DIESEN!"
    backgroundUrl="./src/assets/waterhose_dog.png"
  ></Teaser>
  <Footer></Footer>
</main>

<style>
</style>
