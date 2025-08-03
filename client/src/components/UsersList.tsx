import { useEffect, type FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchUsers } from '@/store';
import { Skeleton } from '@/components/ui/skeleton';

const UsersList: FC = () => {
  const { isLoading, error, data } = useAppSelector(({ users }) => users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading)
    return (
      <div className='flex flex-col gap-2'>
        <Skeleton className='h-5 w-50 rounded' />
        <Skeleton className='h-5 w-50 rounded' />
        <Skeleton className='h-5 w-50 rounded' />
      </div>
    );

  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {data.map(({ firstName, secondName, userName, email }) => (
        <div className='rounded bg-zinc-800 px-4 py-2'>
          <span className='flex items-center text-xs text-zinc-500'>
            <span className='mr-2 text-xl text-zinc-50'>
              {firstName} {secondName}
            </span>
            | {userName} | {email}
          </span>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
