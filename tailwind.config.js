 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["index.html"],
      theme: {
        container:{
          center  : true,
          padding : "16px",
        },
        extend: {
          colors: {
            "primary" : "#c084fc",
            "secondary" : "#94a3b8",
            "dark"    :  "020617",
          }
        },
      },
      plugins: [],
    }