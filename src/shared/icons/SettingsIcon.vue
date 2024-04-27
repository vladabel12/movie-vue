<template>
    <div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.8">
          <path d="M4 21V14" :stroke="stroke" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" />
          <path d="M4 10V3" :stroke="stroke" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" />
          <path d="M12 21V12" :stroke="stroke" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" />
          <path d="M12 8V3" :stroke="stroke" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" />
          <path d="M20 21V16" :stroke="stroke" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" />
          <path d="M20 12V3" :stroke="stroke" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" />
          <path d="M1 14H7" :stroke="stroke" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" />
          <path d="M9 8H15" :stroke="stroke" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" />
          <path d="M17 16H23" :stroke="stroke" :stroke-width="strokeWidth" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" />
        </g>
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    name: "SettingsIcon",
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

  