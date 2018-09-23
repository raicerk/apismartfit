const request = require('postman-request');

exports.login = async function (rut,contrasena){
    return new Promise((resolve, reject)=>{
        var options = {
            "uri": "https://www.smartfit.cl/person_sessions",
            "method": "POST",
            //"followAllRedirects": true,
            "form": {
                'utf8': '✓',
                'authenticity_token': 'ySjkHot+4GXJjRQCuy7dRBrzv7IeUu/r6HqDwZCRgSgCwMiRyGvhwRm39wzHM29VETowprHUnSTc8eN4JiTURw==',
                'person_session[login]': rut,
                'person_session[password]': contrasena
            },
            "headers": {
                "Origin": "https://www.smartfit.cl",
                "Referer": "https://www.smartfit.cl/person_sessions/new",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36",
                "Host": "www.smartfit.cl",
                "Content-Type": "application/x-www-form-urlencoded",
                "Cookie": "current_ip=190.162.124.154; current_position=-33.45&-70.6667; _ga=GA1.2.1394308249.1536538783; __utmc=42769319; __utmz=42769319.1536538784.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); geolocations=405&307&265; _gid=GA1.2.166734058.1537579693; _gat=1; _gat_UA-62487816-1=1; __utma=42769319.1394308249.1536538783.1536725676.1537579693.5; __utmt_UA-62487816-1=1; _Smart-Site_session=eGNtbTZ5ZDZMbGZxVkRySHFIOUZIdnBwTHZFbmE5OVR4b2YvVDJNdmsxNTFPUEJQekw4U3JEcFFuckVnSW9Ud1YyWmd6V0trRUZVL2pqOFhZVHZndlFXaEVoaHBQMk5Ta2UyQmNYdnlsK0hkM3RQSU5jSTltbUNpdWNVcjQ4TzJUNzJ6RHI5RXREY0J3U2FuK0NHYXJiLzUyWUhIOTBicnFiUkh2L3pkYWc1QjZFMHhGRWxqQVg4Lzk1aWJhU0RkMFdnVGtQRlcwcnVWb3gwV3duT3NYVVpkejF3QUMvNUlLM2J5S0IxZGJnZkdaZWZBazdlYlhQZ1JmU3U3R1hVbmV3Yk1VSmlYWDNVVFlZbmRQVzZPUlVBV1MyMkw3d2pCZHF4ZWJPcnlvK3M9LS1HQjB2WitDeEo1Q3BBeUdjcWJPRm13PT0%3D--00ed47d32a0be5c54e0436c847a8e97b3a0ceefb; __utmb=42769319.2.10.1537579693"
            }
        };
    
        function callback(error, response, body) {
            if(response.statusCode == 302){
                resolve(true)
            }else{
                resolve(false)
            }
            
            console.log(body);

            if(error){
                reject(false)
            }
        }
    
        request(options, callback);
    })
}