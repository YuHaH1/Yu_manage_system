import crypto from 'crypto'

export default ()=>{
    return {
        encrypt: (value:string,key:string) => {
            return crypto.AES.encrypt(value,key).toString()
        },
        decrypt:(value:string,key:string)=>{
            const bytes = crypto.AES.decrypt(value, key);
            return bytes.toString(crypto.enc.Utf8);
        }
    }
}
