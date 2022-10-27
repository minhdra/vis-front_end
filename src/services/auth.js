import {instance} from './axios';

export const search = async (data) => (await instance.post('/auth/search', {
  ...data
})).data;

export const getById = async (id) => (await instance.get('/auth/' + id)).data;

export const register = async (data) => (await instance.post('/auth/register', {
  ...data
}));

export const login = async (data) => (await instance.post('/auth/login', {
  ...data
}));

export const changePassword = async (data) => (await instance.post('/auth/change-password', {
  ...data
}));

export const remove = async (data) => (await instance.post('/auth/delete', {
  ...data
}));

export const update = async (data) => (await instance.post('/auth/update', {
  ...data
}));
