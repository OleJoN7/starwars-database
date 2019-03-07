class RequestService {
    getResorce = async (url,options = {}) => {
        const res = await fetch(url,options);
        return await res.json()
    }
    signIn = async (email,password) => {
        const result = await this.getResorce('http://localhost:3005/signin',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:email,
                password:password
            })
        })
        return result
    }
    register = async (name,email,password) => {
        const result = await this.getResorce('http://localhost:3005/register',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                name:name,
                email:email,
                password:password
            })
        })
        return result
    }
}

export default RequestService;