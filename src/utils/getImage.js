const images = import.meta.glob('/src/assets/images/*.{webp,jpg,png}', {
  eager: true,
});

export const getImage = (filename) => {
  const path = `/src/assets/images/${filename}`;
  return images[path]?.default || '';
};
