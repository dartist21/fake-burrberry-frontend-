const apiUrl = 'https://erodionov-burberry-fake-api.now.sh';

function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  const { status, body } = response;
  const error = { status, body };

  throw error;
}

const request = (method, route, headers, body = null) =>
  fetch(apiUrl + route, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body,
    mode: 'cors',
  }).then(checkStatus);

export function get(route, headers) {
  return request('GET', route, headers).then(response => response.json());
}

export function post(resource, body, headers) {
  return request('POST', resource, headers, JSON.stringify(body));
}
