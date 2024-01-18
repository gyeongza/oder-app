import { BASE_URL } from '../constants';

const fetchJson = async <T>(url: string, options?: RequestInit): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, options);

    if (!response.ok) {
      throw new Error(`네트워크 오류: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`네트워크 응답 오류: ${error.message}`);
    }

    throw new Error('fetching 오류');
  }
};

const fetchApi = async <T>(url: string, method: string) => {
  return await fetchJson<T>(url, {
    method,
  });
};

export const request = {
  get: <T>(url: string) => fetchApi<T>(url, 'GET'),
};
