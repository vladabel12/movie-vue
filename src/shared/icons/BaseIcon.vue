<template>
    <div :class="className">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g :opacity="opacity">
        </g>
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      opacity: {
        type: String,
        default: "0.8"
      },
      stroke: {
        type: String,
        default: "currentColor"
      },
      strokeWidth: {
        type: String,
        default: "2"
      },
      strokeLinecap: {
        type: String,
        default: "round"
      },
      strokeLinejoin: {
        type: String,
        default: "round"
      }
    },
    computed: {
      className() {
        return `icon-${this.stroke}-${this.strokeWidth}`;
      }
    }
  };
  </script>
  
  <style scoped>
  .icon-currentColor-2 {
    stroke: currentColor;
  }
  .icon-currentColor-2 path {
    stroke: currentColor;
  }
  </style>
  