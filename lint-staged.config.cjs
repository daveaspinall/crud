module.exports = {
  "src/**/*.{ts,tsx,js,jsx}": ["lint:fix"],
  "*": ["prettier --write --ignore-unknown"],
};
