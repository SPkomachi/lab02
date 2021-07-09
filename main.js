const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            brand: 'SE 331',
            // image: './assets/images/socks_green.jpg',
            inStock: false,
            onSale: false,
            inventory: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg',
            quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',
            quantity: 0 }
            ],
            selectedVariant: 0,
            cart: 0
        }
    },
    computed: {
        title(){
            return this.brand + '' + this.product
        },
        image(){
        return this.variants[this.selectedVariant].image
        },
        inStock(){
        return this.variants[this.selectedVariant].quantity
        }, 
        saleMessage() {
        if (this.onSale==true) {
            return this.brand + ' ' + this.product + ' is on sale.'
        }
        else{

        }
        return ''
    }
},
    methods: {
        addToCart() {
            this.cart += 1
            this.inventory -= 1
                if (this.inventory < 0){
                    this.inventory = 0
                    this.cart = 0
                    // this.inStock = true
                    // this.onSale = true
                }
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index) {
            this.selectedVariant = index;
        }
    },
   
})