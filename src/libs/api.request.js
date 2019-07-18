import HttpRequest from '@/libs/axios';

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://rap2api.taobao.org/app/mock' : '';
const axios = new HttpRequest(baseUrl);

export default axios;
