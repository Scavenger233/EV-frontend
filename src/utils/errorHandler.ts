
import { ApiError } from '@/types/api';

export const handleApiError = (error: any): ApiError => {
  if (error.response) {
    // Server responded with error status
    return {
      message: error.response.data?.message || 'Server error occurred',
      status: error.response.status,
      code: error.response.data?.code,
    };
  } else if (error.request) {
    // Request was made but no response received
    return {
      message: 'Network error - please check your connection',
      status: 0,
    };
  } else {
    // Something else happened
    return {
      message: error.message || 'An unexpected error occurred',
      status: 500,
    };
  }
};

export const getErrorMessage = (error: ApiError): string => {
  switch (error.status) {
    case 401:
      return 'Unauthorized - please log in again';
    case 403:
      return 'Access denied - insufficient permissions';
    case 404:
      return 'Resource not found';
    case 500:
      return 'Internal server error - please try again later';
    default:
      return error.message;
  }
};
