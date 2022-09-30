const messageResponse: { [key: string]: any } = {
  created: "Record Created",
  updated: "Record Updated",
  deleted: "Record Deleted",
  fetch: "Records fetch",
  notUpdated: "Records not updated",
  notFound: "Not found"
}
export function successResponse(response: any, recordStatus: string) {
  return {
    status: {
      code: 200,
      header: "SUCCESS",
      description: messageResponse[recordStatus]
    },
    data: response
  }
}


