<template>
  <div class="Jelovnici">
    <div class="jelovniciIzbor">
      <h1>JELOVNICI</h1>

      <div class="jelovniciCard">
        <div class="pivnicaJelovnik">
          <h2>Ilica</h2>
          <img src="@/assets/burger.jpg" />
          <a
            href="https://pivovara-medvedgrad.hr/wp-content/uploads/2022/09/Pivnica-Ilica-jelovnik_2022_07-e.pdf"
            type="button"
            target="_blank"
            >Jelovnik</a
          >
        </div>

        <div class="pivnicaJelovnik">
          <h2>Fakin craft bar</h2>
          <img src="@/assets/fakinhrana.jpg" />
          <a
            href="https://pivovara-medvedgrad.hr/wp-content/uploads/2022/09/FAKIN-menu_8.2022.pdf"
            type="button"
            target="_blank"
            >Jelovnik</a
          >
        </div>

        <div class="pivnicaJelovnik">
          <h2>Mali medo</h2>
          <img src="@/assets/malimedoburger.jpg" />
          <a
            href="https://pivovara-medvedgrad.hr/wp-content/uploads/2022/09/Pivnica-MM-jelovnik_2022_08_E.pdf"
            type="button"
            target="_blank"
            >Jelovnik</a
          >
        </div>

        <div class="pivnicaJelovnik">
          <h2>Samoborska</h2>
          <img src="@/assets/samoborskajelovnik.jpg" />
          <a
            href="https://pivovara-medvedgrad.hr/wp-content/uploads/2022/09/Pivnica-Samoborska-jelovnik_2022-prijelom-srpanj-e.pdf"
            type="button"
            target="_blank"
            >Jelovnik</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Jelovnici",
  data() {
    return {};
  },
};
</script>

<style>
.Jelovnici {
  color: white;
  height: 800px;
}
.jelovniciIzbor {
  margin-top: 20px;
}
.jelovniciCard {
  display: flex;
  margin-top: 50px;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
}
.pivnicaJelovnik {
  border: 3px solid rgba(20, 17, 17, 0.64);
  border-radius: 16px;
  width: 25%;
  margin-left: 5px;
  margin-right: 5px;
  background-color: #171616;
}

.pivnicaJelovnik a {
  text-decoration: none;
  margin-top: 15px;
  background-color: #390d0d;
  color: hsl(0, 0%, 72%);
  border: 2px solid rgba(10, 9, 9, 0.932);
  border-radius: 10px;
  width: 120px;
  padding: 5px;
}
.pivnicaJelovnik img {
  width: 100%;
  height: 60%;
}
</style>