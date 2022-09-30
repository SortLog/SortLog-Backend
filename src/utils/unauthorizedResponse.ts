export function unauthorizedResponse(res:any ) {
    return {
        status:{
            code: 401,
            header: "unauthorized",
            description: 'invalid credentials'
        },
        data: res
    }
}