export const resizeImage = (file, platform) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const dimensions = {
          Twitter: { width: 1024, height: 512 },
          Instagram: { width: 1080, height: 1080 },
          LinkedIn: { width: 1200, height: 627 },
        };

        const { width, height } = dimensions[platform] || { width: img.width, height: img.height };

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => {
          resolve(new File([blob], file.name, { type: file.type }));
        }, file.type);
      };
      img.src = event.target.result;
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};
