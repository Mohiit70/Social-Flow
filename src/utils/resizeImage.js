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

        const { width: targetWidth, height: targetHeight } = dimensions[platform] || { width: img.width, height: img.height };

        const imgAspectRatio = img.width / img.height;
        const targetAspectRatio = targetWidth / targetHeight;

        let drawWidth, drawHeight;

        if (imgAspectRatio > targetAspectRatio) {

          drawWidth = targetWidth;
          drawHeight = targetWidth / imgAspectRatio;
        } else {
          drawHeight = targetHeight;
          drawWidth = targetHeight * imgAspectRatio;
        }

        canvas.width = targetWidth;
        canvas.height = targetHeight;

        const xOffset = (targetWidth - drawWidth) / 2;
        const yOffset = (targetHeight - drawHeight) / 2;

        ctx.drawImage(img, xOffset, yOffset, drawWidth, drawHeight);

        canvas.toBlob((blob) => {
          if (blob) {
            resolve(new File([blob], file.name, { type: file.type }));
          } else {
            reject(new Error('Blob creation failed'));
          }
        }, file.type);
      };

      img.src = event.target.result;
    };

    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};