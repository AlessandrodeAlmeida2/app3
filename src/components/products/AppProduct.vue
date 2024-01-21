<template>
    <div class="card">
        <pre>
            {{ product.name }} - {{ product.price }}
            <button @click="addProduct" >
                Add
            </button>
            <button 
                v-if="cart.length > 0"
                @click="removeProduct()"
            >
                Remove
            </button>
        </pre>
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    },
    computed: {
        cart() {
            return this.$store.state.cart;
            
        }
    },
    methods: {
        addProduct() {
            this.$store.commit('addProduct', this.product)
        },
        removeProduct() {
            this.$store.commit('removeProduct', this.product.id)
        }
    }
}
</script>

<style>
.card {
    background: bisque;
    padding: 6px;
    margin-bottom: 5px;
}
</style>