import { type FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchUsers, addUser } from '@/store';
import { faker } from '@faker-js/faker';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from './ui/button';
import { Spinner } from './ui/shadcn-io/spinner';
import useThunk from '@/store/hooks/useThunk';

const UsersList: FC = () => {
  const [isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
  const [isCreatingUser, creatingUserError] = useThunk(addUser);
  const { data } = useAppSelector(({ users }) => users);
  const dispatch = useAppDispatch();

  const handleAddUser = () => {
    const firstName = faker.person.firstName();
    const secondName = faker.person.lastName();
    dispatch(
      addUser({
        firstName,
        secondName,
        userName: faker.internet.username({ firstName, lastName: secondName }),
        email: faker.internet.email({ firstName, lastName: secondName }),
        password: faker.internet.password()
      })
    ).unwrap();
  };

  if (loadingUsersError || creatingUserError) return <div>Error fetching users</div>;

  return (
    <div>
      <div className='flex items-center pb-2'>
        <h1>List of Users</h1>
        <Button variant='secondary' onClick={handleAddUser} className='ml-auto'>
          {isCreatingUser ? <Spinner /> : '+ Add User'}
        </Button>
      </div>
      <div className='flex flex-col gap-2'>
        {isLoadingUsers ? (
          <div className='flex flex-col gap-2'>
            <Skeleton className='h-10 w-full rounded' />
            <Skeleton className='h-10 w-full rounded' />
            <Skeleton className='h-10 w-full rounded' />
          </div>
        ) : (
          data.map(({ id, firstName, secondName, userName, email }) => (
            <div key={id} className='rounded bg-zinc-800 px-4 py-2'>
              <span className='flex items-center text-xs text-zinc-500'>
                <span className='mr-2 text-base text-zinc-50'>
                  {firstName} {secondName}
                </span>
                | {userName} | {email}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UsersList;
