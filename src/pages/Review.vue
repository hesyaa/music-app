<template>
    <div class="row q-pa-lg">
      <div class="col-12 col-md-6 text-center">
        <q-card class="my-card">
            <img src="statics/guitar.png">
            <q-card-section>

            </q-card-section>
            <q-card-section class="q-pt-none">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur placeat dignissimos enim! Iste, sapiente veritatis tempora minima consectetur delectus </p>
                 <q-separator />
                 <q-card-actions></q-card-actions>
            </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-5 text-left q-pa-md">
        <div class="text-h4 q-pt-md q-pb-md">Gibson Black Guardian</div>
        <q-list bordered separator>
            <q-item clickable v-ripple class="q-pa-md">
            <q-item-section>
                <q-item-label>$270.00</q-item-label>
                <q-item-label caption>Price</q-item-label>
            </q-item-section>
             <q-item-section>
                <q-item-label>Stock</q-item-label>
                <q-item-label caption>20</q-item-label>
            </q-item-section>
             <q-item-section>
                <q-item-label>Sold</q-item-label>
                <q-item-label caption>12</q-item-label>
            </q-item-section>
             <q-item-section>
                <q-item-label>Month</q-item-label>
                <q-item-label caption>January</q-item-label>
            </q-item-section>
            </q-item>
        </q-list>
                <q-btn color="secondary" label="Add to cart" class="text-center"/>
                <q-btn outline color="primary" label="Checkout" class="text-center" to="/Buy"/>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .col-12 {
        padding: 10px;
    }
    .my-card {
        box-shadow: none;
        border: none;
    }
    .text-h4 {
        font-weight: bold;
        color: salmon;
    }
    .text-h6 {
        color: grey;
        font-weight: normal;
    }
    .q-btn {
        margin: 6px;
        width: 80%;
    }
    .q-list {
        margin-bottom: 12px;
    }
    .row {
        margin: auto;
    }
</style>
