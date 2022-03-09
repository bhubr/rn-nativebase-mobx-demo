import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.0.202:4000'
});

export async function fetchUsers(page = 1) {
  console.log('fetching page', page)
  let pathname = `/users?page=${page}`
  const { data } = await instance.get(pathname);
  return data;
}