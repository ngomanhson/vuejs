const app = Vue.createApp({
    template: `<h1>Welcome to {{ teamName }} and {{ !isHello ? firstName + lastName : 'N/A'}}</h1>

            <!-- Click event -->
            <!-- 1. -->
            <button v-on:click="firstName= 'SonDauTo'; lastName= ''">Change Name</button>

            <!-- 2. -->
            <button v-on:click="onChangeName">Change Name 2</button>

            <!-- 3. -->
            <button @click="onChangeName">Change Name But Shorter</button>

            <!-- Condition Rendering -->
            <div class="modal" v-if="isShowModal">
                <h1>Modal content</h1>
            </div>`,
    data() {
        return {
            teamName: "FI Team",
            firstName: "Son",
            lastName: "Ngo Manh",
            isHello: false,
            isShowModal: false,
        };
    },
    methods: {
        onChangeName() {
            console.log(this);
            this.firstName = "Son ";
            this.lastName = "Dau To";
            this.isShowModal = !this.isShowModal;
        },
    },
});

app.mount("#contact");
