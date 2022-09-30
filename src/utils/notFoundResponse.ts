export function notFoundResponse(res:any, recordStatus: string) {
    return {
        status:{
            code: 404,
            header: "NOT_FOUND",
            description: 'instance not found'
        },
        data: res
    }
}