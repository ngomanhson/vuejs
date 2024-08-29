<template>
  <h1 class="fade">Hello VueJS</h1>
  <teleport to="body">
    <transition name="modal-fade">
      <base-modal
        v-if="isShowModal"
        title="this is new title from app component"
        content="this is content modal"
        theme="example"
        @toggle="onToggleModal"
      >
        <template v-slot:header>
          <h2>This is header</h2>
        </template>

        <label>Name</label>
        <input type="password" />

        <template v-slot:footer>
          <base-button
            content="Cancel"
            theme="secondary"
            @toggle="onToggleModal"
          />

          <base-button content="Save changes" @toggle="onToggleModal" />
        </template>
      </base-modal>
    </transition>
  </teleport>

  <base-button content="Toggle modal" @click="onToggleModal" />
</template>

<script>
import Modal from "./components/Modal.vue";
import Button from "./components/Button.vue";

export default {
  name: "App",
  components: {
    BaseModal: Modal,
    BaseButton: Button,
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    onToggleModal() {
      console.log("running here");
      this.isShowModal = !this.isShowModal;
      console.log(this.isShowModal);
    },
  },
};
</script>

<style>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.modal-fade-enter-to,
.modal-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
