<template>
    <div class="pages">
        <br>
        <br>
        <q-form ref="myForm" class="bg-grey-3 text-left shadow-2" @submit="onSubmit"
           @reset="onReset">
            <br>
                <q-input v-model="name" placeholder="Name" lazy-rules
                    :rules="[ val => val && val.length > 0 || 'You should fill this one']"/>
                <q-input v-model="address" placeholder="Address" lazy-rules
                    :rules="[ val => val && val.length > 0 || 'You should fill this one']" />
                <q-input v-model="email" placeholder="Email" lazy-rules
                    :rules="[ val => val && val.length > 0 || 'You should fill this one']" />
                <q-input v-model="notelp" placeholder="notelp" lazy-rules
                    :rules="[ val => val && val.length > 0 || 'You should fill this one']" />
                  <br>
                <q-radio v-model="shape" val="line" label="1 unit" />
                <q-radio v-model="shape" val="rectangle" label="2 Unit" />
                <q-radio v-model="shape" val="ellipse" label="3 unit" />
                <q-select v-model="model" :options="options" label="Masukan input" lazy-rules
                    :rules="[ val => val && val.length > 0 || 'You should fill this one']" /><br>
                <q-input v-model="mcoin" placeholder="Enter code M-coin" lazy-rules
                    :rules="[ val => val && val.length > 0 || 'You should fill this one']" /><br>
                <q-btn label="Buy it Now" type="submit" color="secondary"/>
                <q-btn label="Reset" type="reset" color="red" />
        </q-form>
        <br>

      <q-dialog v-model="confirm" persistent>
       <q-card class="card1 absolute center">
        <q-card-section class="row items-center">
          <h2><q-icon name="redeem"></q-icon></h2>
          <h5><span class="q-ml-md">Are u sure want to buy</span></h5>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Yes" color="primary" v-close-popup to="/Success"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

    </div>
</template>

<script>
export default {

  data () {
    return {
      model: null,
      shape: 'line',
      options: [
        'Guitar Gibson black', 'Piano Sound Classic', 'Drum Dw guardian'
      ],
      alert: false,
      confirm: false,
      prompt: false,
      name: '',
      address: '',
      email: '',
      notelp: '',
      mcoin: '',
      link: ''
    }
  },
  methods: {
    click: function () {
      alert('hello')
    },
    onReset () {
      this.name = null
      this.address = null
      this.email = null
      this.notelp = null
      this.mcoin = null
    },
    onSubmit () {
      this.confirm = true
    }
  }
}
</script>

<style>
    form {
        border: 1px solid lightgray;
        width: 80%;
        margin: auto;
        padding: 50px;
    }
    h2 {
      text-shadow: gray 2px 2px 4px;
    }
    .page {
      background-color: silver;
      height: 96vh;
    }
    .card1 {
      padding: 20px;
      width: 35%;
      margin-bottom: 60px;
    }
    h5{
      font-weight: bold;
      text-align: right;
    }
    .q-btn {
      margin: 3px;
      width: 47%;
    }
</style>
