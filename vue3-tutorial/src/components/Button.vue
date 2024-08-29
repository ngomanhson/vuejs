<template>
  <button class="btn" :class="`btn-${theme}`" @click="$emit('toggle')">
    {{ content }}
  </button>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },

    theme: {
      type: String,
      default: "primary",
      validator: (value) => {
        return ["primary", "secondary"].includes(value);
      },
    },
  },

  name: "BaseButton",
};
</script>

<style scoped lang="css">
.btn {
  padding: 10px 15px;
  border: none;
  outline: none;
  border-radius: 6px;
  font-weight: bold;
  color: #fff;
}

.btn + .btn {
  margin-left: 10px;
}

.btn-primary {
  background-color: #007bff;
}

.btn-secondary {
  background-color: #6c757d;
}
</style>
