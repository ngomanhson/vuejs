const app = Vue.createApp({
    data() {
        return {
            products: [
                {
                    name: "Product 1",
                    price: 120.0,
                },
                {
                    name: "Product 2",
                    price: 120.0,
                },
                {
                    name: "Product 3",
                    price: 120.0,
                },
            ],
        };
    },
    methods: {},
});

app.mount("#contact");
