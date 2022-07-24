import { getAuthToken } from '@/domain/constants'

export const httpGet = ({
    url,
    onSuccess,
    onError,
    doFinally,
    isSecureRequest = false
}) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': null,
        'X-Requested-With': null
    }
    if (isSecureRequest) headers.Authorization = getAuthToken()
    fetch(url, {
        method: 'GET',
        headers
    }).then(response => response.json())
        .then(json => {
            onSuccess(json)
        }).catch(error => {
            if (onError) onError(error)
        }).finally(() => {
            if (doFinally) doFinally()
        })
}