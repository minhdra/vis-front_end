import instance from './axios';

export const uploadSingle = async (data) =>
  await fetch('/api/upload', {
    method: 'POST',
    // headers: {
    //   "Content-Type": "multipart/form-data"
    // },
    body: data,
  })
    .then((response) => response.json());

export const remove = async (data) =>
  await instance.post('/image/remove', data);
