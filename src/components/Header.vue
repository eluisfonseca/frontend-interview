<template>
  <div class="header-container">
    <img
      class="logo"
      src="../assets/images/SWORD_Health_logo.svg"
      alt="Sword Health Logo"
    />
    <div>
      <h3>Frontend developer</h3>
      <p>Challenge</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
.header-container {
  background-color: useColor('gray');
  max-height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10%;

  .logo {
    height: 50px;
  }

  h3 {
    margin: 0;
    text-align: right;
  }

  p {
    font-style: italic;
    margin: 5px 0 0;
    text-align: right;
  }
}

@media only screen and (max-width: 768px) {
  .header-container {
    padding: 15px;
  }
}
</style>
