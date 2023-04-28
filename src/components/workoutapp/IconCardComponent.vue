<template>
  <div role="button">
    <div
      class="pa-4 bg-indigo-lighten-2 rounded-circle"
      style="width: 80px; height: 80px"
    >
      <div class="text-center">
        <i class="text-body-2 text-md-h6">
          <slot name="icon"></slot>
        </i>
        <p class="text-body-2 font-weight-light text-center">
          <slot name="description"></slot>
        </p>
      </div>
    </div>
  </div>
</template>
