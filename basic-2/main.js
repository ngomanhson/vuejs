const app = Vue.createApp({
    data() {
        return {
            classTesting: "flex",
            products: [
                {
                    thumbnail: "./assets/images/image-1.jpg",
                    name: "Product 1",
                    price: 120.0,
                    isCart: false,
                },
                {
                    thumbnail: "./assets/images/image-2.jpg",
                    name: "Product 2",
                    price: 120.0,
                    isCart: false,
                },
                {
                    thumbnail: "./assets/images/image-3.jpg",
                    name: "Product 3",
                    price: 120.0,
                    isCart: true,
                },
            ],
        };
    },
    methods: {
        onToggleCart(event, product) {
            console.log(product);
            product.isCart = !product.isCart;
        },
    },
});

app.mount("#contact");
