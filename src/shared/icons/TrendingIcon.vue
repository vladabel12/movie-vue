<template>
    <div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.8">
          <path d="M23 6L13.5 15.5L8.5 10.5L1 18" :stroke="stroke" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" />
          <path d="M17 6H23V12" :stroke="stroke" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" />
        </g>
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    name: "TrendingIcon",
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
