<template>
    <div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g :opacity="opacity">
          <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" :stroke="stroke" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" />
          <path d="M16 2V6" :stroke="stroke" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" />
          <path d="M8 2V6" :stroke="stroke" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" />
          <path d="M3 10H21" :stroke="stroke" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" />
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
    }
  };
  </script>
  