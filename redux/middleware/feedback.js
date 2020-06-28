import { _axios1 } from "$config"

export const Send_Feedback = (param) => {
    return new Promise( async (resolve, reject)=>{

        await _axios1.post('/v1/users/feedback',param).then( response => {
            console.log('res ===>', response)
            resolve(response)
        }).catch( error =>{
            console.log('error', error)
            reject(error)
        })
    })
    
}