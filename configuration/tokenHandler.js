
let dummyToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJsYXN0TmFtZSI6bnVsbCwidXNlckFkZHJlc3NQcm9vZlZlcmlmaWNhdGlvblN0YXR1cyI6eyJjb2RlIjoiUyIsImRlc2NyaXB0aW9uIjoiVmVyaWZpY2F0aW9uIFN1Y2Nlc3NmdWwiLCJ0aXRsZSI6IiIsIm1lc3NhZ2UiOiIifSwidXNlcl9uYW1lIjoid2VuZWlnaGJvcnMudGVzdDFAeW9wbWFpbC5jb20iLCJmdWxsTmFtZSI6IlRlc3QgVXNlcjEiLCJ1c2VySWQiOjQ5NzEsImF1dGhvcml0aWVzIjpbIlJPTEVfQ09NTVVOSVRZX1JFU0lERU5UIiwiUk9MRV9SRUdJT05BTF9NQU5BR0VSIl0sImNsaWVudF9pZCI6InRhbGt0aXZhQXBwIiwiZmFtaWx5SWQiOiIzMTY2Nzg0ODQxMTktNjA3ZC00YTNiLWFjNjMtODQwYWI0NjA2N2UyIiwiZmlyc3ROYW1lIjpudWxsLCJ0ZW1wb3JhcnlQYXNzd29yZCI6ZmFsc2UsImVtYWlsVmVyaWZpZWQiOnRydWUsImF1ZCI6WyJtcy9ub3RpZmljYXRpb24iLCJtcy91c2VyIiwibXMvZXZlbnQiLCJtcy9zZW5kRW1haWwiXSwic2NvcGUiOlsiUk9MRV9DT01NVU5JVFlfUkVTSURFTlQiXSwiZXhwIjoxNTg2Njk1OTQ0LCJqdGkiOiIwNDk4NzIyZC01OGE4LTQxMjctYWY1Mi0zOTc0OTdhMmYzYjYiLCJlbWFpbCI6IndlbmVpZ2hib3JzLnRlc3QxQHlvcG1haWwuY29tIn0.DWlyKv611qVS_frm_nSBSLLboIDiRwpuIbT3GlgvDxxG97VYwPsI-bCozauh8I2usP2QQKyxO8e-Sp8aXPW-woVZspEG3OtM-v55cQM7mqTUfIAELQUD6Dzv04aCDggx5TL5IiL_yewRWm2tcsiEo_tNE4vUVAsZLM6tmesW7NROOUjLu9DwmD54IlZLTNbaF9-Mqk7A07YThtzRmqUIoKcgyVtc0svjo1_mtz2nz-NOxcTlVkP6iscXecfUqYrmbFnEsiJzk7qzi-LDSfkg13PUgzvm1tQ-cgB-DPdA-O2suoZyWkCB-3lL5jgOaoeedSkR5q4-dECoFADjdmaM8w'

let token;
export const setToken = (token) => {
    token = token
} 

export const getToken = () => {
    //  fetch('https://devapp.talktiva.com/uaa/oauth/token',{
    //     method:'POST',
    //         headers:{
    //             "Content-Type":"application/json",
    //             "Authorization":"Basic dGFsa3RpdmFBcHA6dGFsa0BUaXZhITE="
    //     },
    //     body:JSON.stringify({
    //         grant_type:'password',
    //         username:"weneighbors.test1@yopmail.com",
    //         password:"Unimel@n12345"
    //     })
    // }).then(res => {
    //     token = res.access_token
    // }).catch(err => {
    //     console.log('err =====>>>>>>>>>..',err)
    // })
    return token ? token : dummyToken
}