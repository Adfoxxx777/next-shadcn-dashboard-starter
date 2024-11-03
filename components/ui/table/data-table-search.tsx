'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Options } from 'nuqs';
import { useTransition } from 'react';

type SearchProps<TData> = {
  column: Column<TData>;
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export function DataTableSearch<TData>({
  column,
  searchValue,
  setSearchValue
}: SearchProps<TData>) {
  const [_startTransition] = useTransition();

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  return (
    <Input
      placeholder={`Search ${column.accessorKey}...`}
      value={searchValue}
      onChange={(e) => handleSearch(e.target.value)}
      className={cn('w-full md:max-w-sm', _startTransition && 'animate-pulse')}
    />
  );
}
