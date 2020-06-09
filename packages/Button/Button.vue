<template lang="pug">
  button.button(
    @click="handleClick"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="classObject")

    //- Loading spinner
    az-loading(:type="loadingType" size=".8em" v-if="loading")
    az-icon(:name="iconName" v-if="iconName && !loading")
    span(v-if="$slots.default && (!loading || loadingIconOnly)")
      slot
    span(v-if="loading && !loadingIconOnly") {{ loadingText }}
</template>

<script>
export default {
  name: 'AzButton',
  props: {
    autofocus: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    ghost: {
      type: Boolean,
      default: false,
    },
    iconName: {
      type: String,
      default: '',
    },
    iconPosition: {
      type: String,
      default: '',
      validator: value => ['top', 'right', 'bottom', 'left', ''].indexOf(value) !== -1,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    loadingType: {
      type: String,
      default: 'star',
    },
    loadingIconOnly: {
      type: Boolean,
      default: false,
    },
    loadingText: {
      type: String,
      default: 'Cargando',
    },
    plain: {
      type: Boolean,
      default: false,
    },
    nativeType: {
      type: String,
      default: 'button',
      validator: value => ['button', 'submit', 'reset'].indexOf(value) !== -1,
    },
    size: {
      type: String,
      default: '',
    },
    square: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
  },
  computed: {
    classObject() {
      return [
        this.type ? `button--${this.type}` : '',
        this.size ? `button--${this.size}` : '',
        this.iconName && this.iconPosition ? `button--icon-${this.iconPosition}` : '',
        {
          'button--icon': this.iconName,
          'button--icon-only': !this.$slots.default,
          'button--disabled': this.buttonDisabled,
          'button--loading': this.loading,
          'button--loadingIconOnly': this.loadingIconOnly,
          'button--block': this.block,
          'button--ghost': this.ghost,
          'button--plain': this.plain,
          'button--square': this.square,
          'button--circle': this.circle,
        },
      ];
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
