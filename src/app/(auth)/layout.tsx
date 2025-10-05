import { UserProvider } from '@/providers/UserProvider';
import { Layout } from '@/components/Layout/Layout';
import { getUserData } from '@/services/getUserData';
import { User } from '@/types/user';

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const getUser = async () => {
    try {
      const { isError, data } = await getUserData();
      if (isError) {
        return undefined
      } else {
        return data
      }
    } catch (error) {
      console.error("***** [ ~ layout.tsx ~ getUser ~ error ]", error);
    }
  }

  const user: User | undefined = await getUser();
  return (
    <UserProvider user={user}>
      <Layout>
        {children}
      </Layout>
    </UserProvider>
  );
}
