<script>
import axios from 'axios';


export default { 
  data(){
    return {
      name: '',
      email: '',
      message: '',
      accepted: false
    };
  },
  methods: {
    sendMessage() {
      // console.log(this.name)
      if (this.name !=  null 
          &&
          this.name != ''
          &&
          this.name.length <= 64
          &&
          this.email != null
          && 
          this.email != ''
          &&
          this.email.length <= 255
          &&
          this.message != null
          &&
          this.message != ''
          &&
          this.message.length <= 2048
          &&
          this.accepted ) {
        axios
            .post('http://127.0.0.1:8000/api/contacts', { // preso dalle routes di laravel in api.php/contacts
              name: this.name,
              email: this.email,
              message: this.message,
              accepted: false
            })
            .then(response => {
              console.log(response.data)
            })
            .catch(error => {   // catch per vedere se la chiamata API è andata in errore
              console.log(error)
            })
      }
      else {
        alert('Insert the right datas!')
      }

    }
  }
};
</script>

<template>
  <main>
    <h1>
      Contacts:
    </h1>

    <div>

      <form action="" method="POST" @submit.prevent="sendMessage()">

        <div>
          <label for="name">
            Name <span class="required">*</span>
          </label>
          <input v-model="name" type="text" id="name" name="name" placeholder="Insert your name..." maxlength="64" required>
        </div>

        <div>
          <label for="email">
            Email <span class="required">*</span>
          </label>
          <input v-model="email" type="email" id="email" name="email" placeholder="Insert your email..." maxlength="255" required>
        </div>

        <div>
          <label for="message">
            Message <span class="required">*</span>
          </label>
          <textarea v-model="message" type="text" id="message" name="message" placeholder="Insert your message..." maxlength="2048" required></textarea>
        </div>

        <div>
          <p>
            All the fields with <span class="required">*</span> they are mandatory. 
          </p>
        </div>

        <div class="form-check">
          <div>
            Accepted: {{ accepted ? 'yes' : 'no' }}
          </div>
          <input type="checkbox" value="1" id="accept" name="accept" v-model="accepted" required>
          <label for="accept">
            I read and accept <a href="#" target="_blank">Terms of condition</a> and the <a href="#" target="_blank">privacy police</a>
          </label>
        </div>

        <div>
          <button type="submit">
            Send 
          </button>
        </div>

      </form>

    </div>
  </main>
</template>

<style scoped>

main {
  margin-top: 30px;
}

.required {
  color: red;
}


</style>
