'use server';

import { BASE_URL, PATHS } from '@/constants/api';
import { LoginState } from '@/types/login';
import { parseSetCookie } from '@/utils/parseSetCookie';
import { cookies } from 'next/headers';

export const loginAction = async (state: LoginState, formData: FormData): Promise<LoginState> => {
  const login = formData.get('login');
  const password = formData.get('password');

  const response = await fetch(`${BASE_URL}${PATHS.LOGIN}`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      login,
      password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (response.status !== 200) {
    return { error: "Invalid data" }
  }

  const cookiesStore = await cookies();
  const setCookieHeader = response.headers.getSetCookie();

  if (setCookieHeader) {
    const parsed = parseSetCookie(setCookieHeader);
    for (const cookie of parsed) {
      cookiesStore.set(cookie.name, cookie.value, cookie.options)
    }
  }

  const result: LoginState = {
    ...state,
    error: '',
    redirectTo: '/'
  }

  return result
}
