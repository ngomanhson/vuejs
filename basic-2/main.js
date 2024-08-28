const app = Vue.createApp({
    template: ``,
    data() {
        return {
            x: 0,
            y: 0,
        };
    },
    methods: {
        onLogEvent(event, x, y) {
            console.log("Running event", x, y);
            this.x = x;
            this.y = y;
        },
        onMouseMove(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
    },
});

app.mount("#contact");
