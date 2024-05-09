export const successResponse = (Param?: any) => {
  return {
    status: 200,
    message: "Server completed the request as expected!",
    object: Param,
  };
};

export const errorResponse = (Error?: any) => {
  return {
    status: 500,
    message: "Server Error!",
    Error,
  };
};

  
export const badRequestResponse = (Error: any) => {
  return {
    status: 400,
    message: Error,
  };
};
