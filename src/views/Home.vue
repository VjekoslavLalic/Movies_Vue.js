<template>
  <div class="home">
    <div class="zgradaPivMed">
      <img src="@/assets/pivovaramedvedgradhome.jpg" />
      <div class="naslovPivMed">Pivovara Medvedgrad</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style>
.home {
  color: white;
}
.home img {
  width: 946px;
  height: 409px;
  border: 3px solid rgba(20, 17, 17, 0.64);
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
}
.naslovPivMed {
  border: 3px solid rgba(20, 17, 17, 0.64);
  width: 200px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  background-color: rgba(20, 17, 17, 0.64);
}
</style>
