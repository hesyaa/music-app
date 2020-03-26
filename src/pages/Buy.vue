<template>
    <div class="pages">
        <br>
        <br>
        <div class="row">
          <div class="col-12 col-md-7">
        <q-form ref="myForm" class=" text-left" @submit="onSubmit"
           @reset="onReset">
           <h4 class="text-left">Billing address</h4>
           <p class="text-left">Please enter your M-coin code or or using Paypal for buying</p>
            <br>
                <q-input outlined v-model="name" placeholder="Name" lazy-rules
                    :rules="[ val => val && val.length > 0 || 'You should fill this one']"/>
                <q-input outlined v-model="address" placeholder="Address" lazy-rules
                    :rules="[ val => val && val.length > 0 || 'You should fill this one']" />
                <q-input outlined v-model="email" placeholder="Email" lazy-rules
                    :rules="[ val => val && val.length > 0 || 'You should fill this one']" />
                <q-input outlined v-model="notelp" placeholder="notelp" lazy-rules
                    :rules="[ val => val && val.length > 0 || 'You should fill this one']" />
                  <br>
                <q-input v-model="mcoin" placeholder="Enter code M-coin" lazy-rules
                    :rules="[ val => val && val.length > 0 || 'You should fill this one']" /><br>
                    <p class="text-left text-weight-bold">Or Using </p>
                    <div class=" text-left">
                      <q-option-group
                        v-model="group"
                        :options="option"
                        color="primary"
                        type="checkbox"
                      />
                      <img src="statics/paypal.png" width="100" height="100">
                    </div>
                   <br>
                    <q-btn label="Reset" type="reset" color="red" />
                     <q-btn label="Place order" type="submit" color="secondary"/>
        </q-form>
          </div>
          <div class="col-12 col-md-5">
          <q-form class="text-left">
           <h4 class="text-left">List of Your order</h4>
            <br>
               <q-list bordered separator class="text-left">
                 <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label overline>Product</q-item-label>
                    <q-item-label>Guitar gibson</q-item-label>
                  </q-item-section>
                 </q-item>
                  <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label overline>Category</q-item-label>
                    <q-item-label>Guitar</q-item-label>
                  </q-item-section>
                 </q-item>
                  <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label overline>Quantity</q-item-label>
                    <q-item-label>1</q-item-label>
                  </q-item-section>
                 </q-item>
                   <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label overline>Order Total</q-item-label>
                    <q-item-label>$270.0</q-item-label>
                  </q-item-section>
                 </q-item>
              </q-list>
              <br>
          </q-form>
              </div>
        </div>
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
      link: '',
      group: 'op1',
      option: [
        {
          label: 'Paypal',
          value: 'op1'
        }
      ]
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

<style scoped>
.pages {
  background-color: lightgrey;
}
    form {
        border: 1px solid lightgray;
        text-align: center;
        width: 90%;
        margin: 7px auto;
        padding: 30px;
        background-color: white;
    }
    img {
      display: inline-block;
    }
    h4 {
      font-weight: bold;
    }
    h2 {
      text-shadow: gray 2px 2px 4px;
    }
    .page {
      background-color:;
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
