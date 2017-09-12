export const makeRequest = (url: any, options: any) => {
  options = options || {};
  options.headers = options.headers || {};
  options.method = options.method || 'GET';

  if (typeof options.body === 'string') {
    options.headers['Content-Type'] = 'application/json';
  }

  return fetch(url, options).then(checkStatus).then(response => response.json());
};

export const checkStatus = (response: any) => {
  if (response.ok) {
    return Promise.resolve(response);
  }

  return response.json().then((json: any) => {
    const error = new Error(response.statusText);
    return Promise.reject(Object.assign(error, { json }));
  });
};
