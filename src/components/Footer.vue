<template>
  <div class="footer-container">
    <div>
      <h4>About page</h4>
      <p class="font-xs">Play tic tac toe or 4-in-a-row anytime!</p>
      <p class="font-xs">Created by Eduardo Fonseca</p>
    </div>
    <div>
      <h4>Contacts</h4>
      <p class="font-xs">(+351) 123 456 789</p>
      <p class="font-xs">Rua Sá da Bandeira, 111, Porto</p>
    </div>
    <div class="social-container">
      <h4>Stay in touch</h4>
      <div class="social-links">
        <a href="https://www.facebook.com/SWORDHealth1/">
          <img
            src="../assets/images/facebook.svg"
            alt="Go to Sword Health's facebook page"
          />
        </a>
        <a href="https://twitter.com/swordhealth">
          <img
            src="../assets/images/twitter.svg"
            alt="Go to Sword Health's Twitter page"
          />
        </a>
        <a href="https://instagram.com/">
          <img
            src="../assets/images/instagram.svg"
            alt="Go to Sword Health's intagram page"
          />
        </a>
      </div>
      <div class="subscribe">
        <form @submit.prevent="subscribeToGames">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Subscribe to our games"
          />
          <input
            type="image"
            :src="require('../assets/images/send.svg')"
            alt="Click to submit email for subscription"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    subscribeToGames() {
      console.log('subscribed to games');
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-container {
  background-color: useColor('white');
  padding: 30px 10%;
  display: flex;
  justify-content: space-between;

  > div {
    width: 33%;

    h4 {
      font-weight: normal;
    }
  }

  .social-container {
    h4 {
      margin-bottom: 1em;
    }
    .social-links {
      margin-bottom: 20px;
      a {
        margin-right: 5px;
      }

      img {
        height: 25px;
        width: 25px;
      }
    }
  }

  form {
    display: flex;
    align-items: center;
    width: 100%;

    input[type='email'] {
      height: 30px;
      box-sizing: border-box;
      border: 1px solid useColor('gray');
      border-right-width: 0;
      width: 100%;

      &::placeholder {
        color: useColor('gray');
      }
    }

    input[type='image'] {
      background-color: useColor('gray');
      height: 30px;
      width: 40px;
      padding: 4px;
      box-sizing: border-box;
    }
  }
}

@media only screen and (max-width: 768px) {
  .footer-container {
    padding: 15px;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > div {
      width: 100%;
    }

    .subscribe {
      display: flex;
      justify-content: center;
    }

    form {
      width: 70%;
    }
  }
}
</style>
