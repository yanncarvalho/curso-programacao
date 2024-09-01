export default{
    formatDate, buildError, buildSuccess
}
function formatDate(dateStr){
    return  new Date(dateStr).toLocaleString()
}

export function buildError(msg){
    return {
          hasError: true, data: msg
    }
}

export function buildSuccess(data){
    return {
          hasError: false, data: data
    }
}