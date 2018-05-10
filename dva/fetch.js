export default function(url, { ...options }) {
    options.credentials = 'include'
    if(!options.method) options.method = "GET"
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
            message.error(`在请求${url}的时候`)
            message.error(`网络错误${err}`)
        })
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
    return queryStr.slice(0,-1)
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
