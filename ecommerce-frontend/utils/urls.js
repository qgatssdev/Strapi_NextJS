const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api';

/**
 *
 * Given an image return the Url to the image
 * Works for local and deployed Strapis
 * @param {any} image
 */

export const fromImageToUrl = (image) => {
  //   if (!image) {
  //     return '/vercel.svg';
  //   }

  if (image.url.indexOf('/') === 0) {
    return `${API_URL}${image[0].url}`;
  }

  return image.url;
};
