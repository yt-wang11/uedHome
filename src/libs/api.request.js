import HttpRequest from '@/libs/axios';

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://rap2api.taobao.org/app/mock' : 'http://rap2api.taobao.org/app/mock';
const axios = new HttpRequest(baseUrl);
// const baseUrl = 'http://rap2api.taobao.org/app/mock'

export default axios;
