import {JWT_HEADER, JSON_HEADER} from 'config';

export class Services {
    fetchRecords = (endpoint, token, removeHeader, fetchAsTxt) => {
      const config = {
          method: 'GET',
          mode: 'cors',
          headers: token
              ? Object.assign({}, JWT_HEADER(token), JSON_HEADER)
              : Object.assign({}, JSON_HEADER),
          cache: 'default',
      };

      if (!token && removeHeader) {
          delete config.headers;
      }
      return fetch(endpoint, config)
          .then(response => (fetchAsTxt ? response.text() : response.json()));
          // .then(res => res)
          // .catch(err => err);
    };
  //createUpdateRecord
  createUpdateRecord = (token, endpoint, data, method) => {
    const config = {
      method,
      mode: 'cors',
      headers: token
        ? Object.assign({}, JWT_HEADER(token), JSON_HEADER)
        : Object.assign({}, JSON_HEADER),
      cache: 'default',
      body: JSON.stringify(data),
    };
    return fetch(endpoint, config)
      .then(response => response.json())
      .then(res => res);
    // .catch(err => err);
  };

  // delete records
  deleteRecord = (token, endpoint) => {
    const config = {
      method: 'DELETE',
      mode: 'cors',
      headers: token
        ? Object.assign({}, JWT_HEADER(token), JSON_HEADER)
        : Object.assign({}, JSON_HEADER),
      cache: 'default',
    };
    return fetch(endpoint, config)
      .then(response => response.json())
      .then(res => res)
      .catch(err => err);
  };

  //statusChange
  updateStatus = (token, endpoint, bodyData) => {
    const config = {
      method: 'PATCH',
      mode: 'cors',
      headers: token
        ? Object.assign({}, JWT_HEADER(token), JSON_HEADER)
        : Object.assign({}, JSON_HEADER),
      cache: 'default',
      body: JSON.stringify(bodyData),
    };
    return fetch(endpoint, config)
      .then(response => response.json())
      .then(res => res)
      .catch(err => err);
  };

  // uploading single file
  uploadFile = (token, endpoint, filedata, key) => {
    const formData = new FormData();
    formData.append(key, filedata);

    return fetch(endpoint, {
      method: 'PATCH',
      headers: JWT_HEADER(token),
      body: formData,
    })
      .then(res => res.json())
      .then(res => res)
      .catch(err => err);
  };

  // uploading multiple files in a single go
  uploadMultiFile = (token, endpoint, bodyData) => {
    const formData = new FormData();
    bodyData.map(({key, fileData}) => formData.append(key, fileData));
    return fetch(endpoint, {
      method: 'PATCH',
      headers: JWT_HEADER(token),
      body: formData,
    })
      .then(res => res.json())
      .then(res => res)
      .catch(err => err);
  };

  /// send form data ----  used to send binary data along with json
  sendFormdata = (token, endpoint, method, bodyData) => {
    const formData = new FormData();
    bodyData.map(({key, data}) => formData.append(key, JSON.stringify(data)));
    return fetch(endpoint, {
      method: method,
      headers: JWT_HEADER(token),
      body: formData,
    })
      .then(res => res.json())
      .then(res => res)
      .catch(err => err);
  };
}
