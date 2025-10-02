'use client';

import { User } from '@/types/user';
import { createContext, useContext, useState } from 'react';

interface IUserContext {
  user: User;
  setUser: (user: User) => void;
}

const UserContext = createContext<IUserContext | undefined>(undefined);


export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({ name: undefined });

  return (
    <UserContext value={{ user, setUser }}>
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
