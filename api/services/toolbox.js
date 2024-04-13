import https from 'https';

class ToolBox {

    constructor(auth = 'aSuperSecretKey') {
        this.auth = auth;
    }

    async getListFiles() {
        const listUrl = new URL("https://echo-serv.tbxnet.com/v1/secret/files")
        return await this.makeRequest(listUrl, true)
        .then(res => {
            return res['files']
        })
        .catch(error => {
            return error.message;
        });
    }

    async getFileData(fileName) {
        const fileUrl = new URL(`https://echo-serv.tbxnet.com/v1/secret/file/${fileName}`)
        return await this.makeRequest(fileUrl, false)
        .then(res => {
            return res
        })
        .catch(error => {
            return error.message;
        });
    }

    makeRequest(url, parse) {
        return new Promise((resolve, reject) => {
            const options = {
                hostname: url.hostname,
                port: url.port || 443,
                path: url.pathname + url.search,
                method: 'GET',
                headers: {
                'Authorization': `Bearer ${this.auth}`
                }
            };
        
            const req = https.get(options, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                data += chunk;
                });
                res.on('end', () => {
                try {
                    if(parse){ 
                        const parsedData = JSON.parse(data);
                        resolve(parsedData);
                    } else {
                        const parsedData = data
                        resolve(parsedData);
                    }
                } catch (error) {
                    reject(new Error('Failed to parse response data'));
                }
                });
            });
        
            req.on('error', (error) => {
                reject(error);
            });
        });
    }
}

export default ToolBox;