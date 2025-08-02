import { useEffect, type FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchUsers } from '@/store';
import { Spinner } from './ui/shadcn-io/spinner';

const UsersList: FC = () => {
  const { isLoading, error, data } = useAppSelector(({ users }) => users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading)
    return (
      <div>
        <Spinner variant='ring' />
      </div>
    );

  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {data.map(({ firstName, secondName, userName, email }) => (
        <>
          <div>
            Name: {firstName} {secondName}
          </div>
          <div>User name: {userName}</div>
          <div>Email: {email}</div>
        </>
      ))}
    </div>
  );
};

export default UsersList;
