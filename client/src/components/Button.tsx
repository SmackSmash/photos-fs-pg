import type { FC, ReactNode } from 'react';

const Button: FC<{ children: ReactNode; [x: string]: unknown }> = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className='focus-visible:outline-blue box-border flex h-10 cursor-pointer items-center justify-center rounded-md border border-zinc-500 bg-zinc-800 px-3.5 py-0 font-medium text-zinc-50 outline-0 select-none hover:bg-zinc-700 focus-visible:outline-2 focus-visible:-outline-offset-1 active:bg-zinc-600'
    >
      {children}
    </button>
  );
};

export default Button;
