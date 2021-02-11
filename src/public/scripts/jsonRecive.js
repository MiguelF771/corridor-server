function reciveUnityJson(json){
fetch('', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual,
    referrerPolicy: 'no-referrer',
    body: json
}).then(resp => {
        if (resp.status === 200) {
            return console.log(JSON.stringify(resp.json()));
        } else {
            window.alert("Status: " + resp.status)
            return Promise.reject("server")
        }
    })
    .catch(err => {
        if (err === "server") 
        return console.error(err);
    })
 }