'use client';

import { User } from '@/types/user';
import { createContext, PropsWithChildren, useContext } from 'react';

interface IUserContext {
  user: User | undefined;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

interface UserProviderProps extends PropsWithChildren {
  user: User | undefined;
}

export async function UserProvider({ user, children }: UserProviderProps) {

  return (
    <UserContext value={{ user }}>
      {children}
    </UserContext>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
}
