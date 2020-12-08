async function invokeAPI(url,data)
{
    
    var response = await _make_request(url,data);
    return response;
}
function _make_request(url,data){
    return fetch(url,data).then(response => {
        // Successful response, parse the JSON and return the data
        return response.json();
    }).catch(error =>{
        return Promise.resolve(error);
    })
}
export const webService = {
    invokeAPI
}