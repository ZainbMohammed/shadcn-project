/** @type {import('postcss-load-config').Config} */
const config = {
  resolve: {
    alias: {
      "@validations": path.resolve(__dirname, "./src/validations"),
    },
  },
  plugins: {
    tailwindcss: {},
  },
};

export default config;
