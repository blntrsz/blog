module.exports = {
  content: [
    "./src/_includes/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/blog/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/pages/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/index.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent-color)",
        "dark-500": "var(--dark-500-color)",
        "dark-400": "var(--dark-400-color)",
        "dark-300": "var(--dark-300-color)",
        grey: "var(--grey-color)",
      },
    },
  },
};
