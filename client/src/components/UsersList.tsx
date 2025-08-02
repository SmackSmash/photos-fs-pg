import type { FC } from 'react';
import { useAppDispatch } from '@/store/hooks';
import fetchUsers from '@/store/thunks/fetchUsers';

const UsersList: FC = () => {
  const dispatch = useAppDispatch();

  dispatch(fetchUsers());
  return <div>UsersList</div>;
};

export default UsersList;
