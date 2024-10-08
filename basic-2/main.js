const app = Vue.createApp({
    data() {
        return {
            classTesting: "flex",
            products: [
                {
                    thumbnail: "./assets/images/image-1.jpg",
                    name: "Product 1",
                    price: 100.0,
                    isCart: false,
                },
                {
                    thumbnail: "./assets/images/image-2.jpg",
                    name: "Product 2",
                    price: 150.0,
                    isCart: false,
                },
                {
                    thumbnail: "./assets/images/image-3.jpg",
                    name: "Product 3",
                    price: 200.0,
                    isCart: true,
                },
            ],
        };
    },
    methods: {
        onToggleCart(event, product) {
            product.isCart = !product.isCart;
        },
    },
    computed: {
        productComputed() {
            return this.products.filter((product) => product.price < 160);
        },
    },
});

app.mount("#contact");
