import dva from './index.js'
import invariant from 'invariant'

export default function(url, { ...options }) {
    invariant(dva.api,`server api address is not set yet`)
    url = `${dva.api}/${url}`
    options.credentials = 'include'
    if (!options.method) options.method = "GET"
    options.method = options.method.toUpperCase()
    if (options.method === 'POST' || options.method === 'PUT') {
        options.body = transformBody(options.body)
    }
    if (options.query) {
        url = url + transformQuery(options.query)
    }
    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON)
        .catch(err => {
            console.log(err)
            alert(err)
        })
}

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
}

function transformQuery(query) {
    let queryStr = '?'
    for (let k in query) {
        if (query.hasOwnProperty(k)) {
            queryStr += k
            queryStr += '='
            queryStr += query[k]
            queryStr += '&'
        }
    }
    return queryStr.slice(0, -1)
}

function transformBody(body) {
    const postdata = new FormData()
    for (let k in body) {
        if (body.hasOwnProperty(k)) {
            postdata.append(k, body[k])
        }
    }
    return postdata
}