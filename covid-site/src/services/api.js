import axios from 'axios';
import Config from '../Config';

let token;
const getAuth = () => token && `Bearer ${token}`;

const instance = axios.create({
  baseURL: Config.apiURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  transformResponse: data => (data ? JSON.parse(data) : undefined),
  paramsSerializer(params) {
    return qs.stringify(params, { arrayFormat: 'brackets' });
  }
});

const METHODS = ['get', 'put', 'post', 'patch', 'delete', 'head', 'options'];

const httpMethods = METHODS.map(method => async (url, headers = {}, data, params) =>
  instance.request({
    url,
    method,
    headers: { Authorization: getAuth(), ...headers },
    data,
    params
  })
);

export const [get, put, post, patch, del, head, options] = httpMethods;

export const authenticate = async (accessToken) => {
  token = accessToken;
  return post("/users");
};