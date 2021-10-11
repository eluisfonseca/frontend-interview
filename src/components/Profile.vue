<template>
  <div class="profile-container">
    <div class="personal-data">
      <div class="photo" />
      <div class="personal-info">
        <h1>John Smith</h1>
        <p>Age: 30</p>
        <p>Location: Porto</p>
        <p>Occupation: Ui/Ux designer</p>
      </div>
    </div>
    <div class="about">
      <p>About me:</p>
      <p>
        My Name Is john Smith lorem empus id fringilla molestie ornare diam in
        olestie ipsum etium rosn ollicitudin est, porttitor amet hitmassa Done
        cporttitor dolor shit dolor kiren lorem nisl molestie pretium etfring.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
};
</script>

<style lang="scss" scoped>
.profile-container {
  align-items: flex-end;
  padding: 30px 10%;
  display: flex;
  justify-content: space-between;

  h1,
  p {
    margin: 0 0 5px;
    font-weight: normal;
  }

  .personal-data {
    flex: 1 0 50%;
    display: flex;
    align-items: flex-end;

    .photo {
      width: 150px;
      height: 150px;
      border: 1px solid useColor('black');
      border-radius: 50%;
      margin-right: 20px;
    }
  }

  .about {
    flex: 0 1 50%;
    text-align: right;
  }
}

@media only screen and (max-width: 768px) {
  .profile-container {
    justify-content: center;
    padding: 30px;

    .personal-data {
      flex-direction: column;
      align-items: center;

      h1,
      p {
        text-align: center;
      }

      .photo {
        margin: 0 0 30px;
      }
    }

    .about {
      display: none;
    }
  }
}
</style>
