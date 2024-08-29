<template>
  <div class="modal fade" @click.self="onCloseModal">
    <div class="modal-dialog">
      <div class="modal-content" :class="{ 'bg-purple': theme === 'contact' }">
        <div class="modal-header">
          <slot name="header"></slot>
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      default: "",
    },
    theme: {
      type: String,
      default: "example",
      validator: (value) => {
        return ["example", "sales", "contact"].includes(value);
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    onCloseModal() {
      this.$emit("toggle");
    },
  },
  name: "BaseModal",
};
</script>

<style scoped lang="css">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.2);
}

.modal-dialog {
  position: relative;
  width: auto;
  pointer-events: none;
  max-width: 500px;
  margin: 4.75rem auto;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 0.5rem;
  outline: 0;
}

.modal-content.bg-purple {
  background: purple;
}

.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
}

.modal-footer {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  background-color: var(--bs-modal-footer-bg);
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
</style>
