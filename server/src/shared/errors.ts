export const ERRORS = {
  INVALID_FILE_TYPE: {
    statusCode: 415,
    message: {
      error: 'Unsupported file type',
      error_description:
        'Unsupported file type. Please upload a JSON or CSV file.',
    },
  },
  MISDIRECTED_REQUEST: {
    statusCode: 421,
    message: {
      error: 'Misdirected Request',
      error_description: 'You have given a wrong request',
    },
  },
  USER_NOT_FOUND: {
    code: 404,
    message: {
      error: 'User Not Found',
      error_description: 'User does not exist',
    },
  },
  USER_ALREADY_EXISTS: {
    code: 409,
    message: {
      error: 'User already Exists',
      error_description: 'User already Exists',
    },
  },
  UNAUTHORIZED: {
    statusCode: 401,
    message: {
      error: 'Unauthorized Access',
      error_description: "You don't have access to view this",
    },
  },
  TOKEN_GENERATION_FAILED: {
    statusCode: 500,
    message: {
      error: 'Token generation failed',
      error_description: 'Token generation failed',
    },
  },
  INVALID_TOKEN: {
    statusCode: 401,
    message: {
      error: 'Invalid token',
      error_description: 'Invalid token',
    },
  },
};
