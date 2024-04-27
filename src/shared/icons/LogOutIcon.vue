<template>
    <div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.8">
          <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" :stroke="stroke" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" />
          <path d="M16 17L21 12L16 7" :stroke="stroke" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" />
          <path d="M21 12H9" :stroke="stroke" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" />
        </g>
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    name: "LogOutIcon",
    props: {
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