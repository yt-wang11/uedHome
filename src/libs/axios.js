import axios from 'axios';

// 失败
const errorRresponse = () => {
};

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.queue = {}; // 请求队列
  }

  /**
   * 对外暴露请求方法
   * @param {*Object} options 自定义配置项
   */
  request(options) {
    const instance = axios.create();
    const unionOptions = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, unionOptions.url);
    return instance(unionOptions);
  }

  // 默认设置
  getInsideConfig(headers) {
    const config = {
      baseURL: this.baseUrl,
      headers: Object.assign({
        'Content-Type': ' application/json; charset=UTF-8',
      }, headers || { 'X-Token': 'c5e528091cd034f28b49c07ba67dccaa' }),
    };
    return config;
  }

  // 销毁队列
  destroy(url) {
    delete this.queue[url];
  }

  // 状态200+成功请求
  succssRresponse(data) {
    // 各种处理
    if (data.invalidToken) {
      this.destroy();
    }
  }

  // 统一拦截
  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use((config) => {
      this.queue[url] = true;
      return config;
    }, error => Promise.reject(error));
    // 响应拦截
    instance.interceptors.response.use((res) => {
      this.destroy(url);
      // 随具体后端业务封装正确与错误处理--刷新refresh-token
      const { data, status } = res;
      this.succssRresponse(data);
      return { data, status };
    }, (error) => {
      this.destroy(url);
      // 随具体后端业务封装错误处理
      errorRresponse();
      return Promise.reject(error);
    });
  }
}
export default HttpRequest;
