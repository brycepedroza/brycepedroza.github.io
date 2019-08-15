let axios = require("axios")

// leaving the base url blank will allow it to look to the proxy in the package.json
const client = axios.create({
 baseURL: '',
 json: true
});

exports.auth = function(token_id, cb){
  return client({
     method: 'post',
     url: 'auth',
     headers: {Authorization:token_id}
   }).then(checkStatus).then(cb).catch(error => {
     if (error.response) {
       cb({data: error.response.data, response: error.response.status})
      }
   })
}


exports.update_score = function(token_id, score, cb){
  return client({
     method: 'post',
     url: 'demo/score',
     data: {score: score},
     headers: {Authorization:"Bearer " + token_id}
   }).then(checkStatus).then(cb).catch(error => {
     if (error.response) {
       cb({data: error.response.data, response: error.response.status})
      }
   })
}

exports.age = function(token_id, cb){
  return client({
     method: 'post',
     url: 'demo/simulate-time',
     headers: {Authorization:"Bearer " + token_id}
   }).then(checkStatus).then(cb).catch(error => {
     if (error.response) {
       cb({data: error.response.data, response: error.response.status})
      }
   })
}


exports.users = function(token_id, cb){
  return client({
     method: 'get',
     url: 'user',
     headers: {Authorization:"Bearer " + token_id}
   }).then(checkStatus).then(cb).catch(error => {
     if (error.response) {
       cb({data: error.response.data, response: error.response.status})
      }
   })
}

exports.pals = function(token_id, cb){
  return client({
     method: 'get',
     url: 'pals/current',
     headers: {Authorization:"Bearer " + token_id}
   }).then(checkStatus).then(cb).catch(error => {
     if (error.response) {
       cb({data: error.response.data, response: error.response.status})
      }
   })
}

exports.name_pal = function(token_id, name, cb){
  return client({
     method: 'post',
     url: 'pals/current',
     data: {name: name},
     headers: {Authorization:"Bearer " + token_id}
   }).then(checkStatus).then(cb).catch(error => {
     if (error.response) {
       cb({data: error.response.data, response: error.response.status})
      }
   })
}


exports.graveyard = function(token_id, cb){
  return client({
     method: 'get',
     url: 'graveyard',
     headers: {Authorization:"Bearer " + token_id}
   }).then(checkStatus).then(cb).catch(error => {
     if (error.response) {
       cb({data: error.response.data, response: error.response.status})
      }
   })
}



function checkStatus(response){
  if (response.status >= 200 && response.status < 300) {
    // console.log('checking status code', response.data)
    return {data: response.data, status:response.status};
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  // console.log(error); // eslint-disable-line no-console
  throw error;
}
