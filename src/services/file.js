import instance from './axiosImage';

export const uploadSingle = async (data) => (await instance({
  url: '/image/upload',
  method: 'POST',
  data
}));

export const remove = async (data) => (await instance.post('/image/remove', data));
