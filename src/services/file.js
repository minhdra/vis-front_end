import {instanceImage} from './axios';

export const uploadSingle = async (data) =>
  await instanceImage({
    url: '/image/upload',
    method: 'POST',
    data,
  });

export const remove = async (data) =>
  await instanceImage.post('/image/remove', data);
