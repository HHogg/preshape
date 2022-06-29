module.exports = {
  dimensions: false,
  replaceAttrValues: {
    '#000': 'var(--color-text-shade-1)',
    '#000001': 'var(--color-text-shade-2)',
    '#000002': 'var(--color-text-shade-3)',
    '#5C7CFA': 'var(--color-accent-shade-3)',
    '#4C6EF5': 'var(--color-accent-shade-4)',
    '#4263EB': 'var(--color-accent-shade-5)',
    '#FFF': 'var(--color-background-shade-1)',
    '#FFFFFE': 'var(--color-background-shade-2)',
    '#FFFFFD': 'var(--color-background-shade-3)',
  },
  svgoConfig: {
    plugins: [
      {
        cleanupIDs: false,
      },
    ],
  },
};
