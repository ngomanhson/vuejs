const app = Vue.createApp({
    data() {
        return {
            classTesting: "flex",
            products: [
                {
                    thumbnail: "./assets/images/image-1.jpg",
                    name: "Product 1",
                    price: 120.0,
                },
                {
                    thumbnail: "./assets/images/image-2.jpg",
                    name: "Product 2",
                    price: 120.0,
                },
                {
                    thumbnail: "./assets/images/image-3.jpg",
                    name: "Product 3",
                    price: 120.0,
                },
            ],
        };
    },
    methods: {},
});

app.mount("#contact");
