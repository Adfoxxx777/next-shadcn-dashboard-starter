'use server'

import { Product } from '@/constants/data';
import { fakeProducts } from '@/constants/mock-api';
import { searchParamsCache } from '@/lib/searchparams';
import { DataTable as ProductTable } from '@/components/ui/table/data-table';
import { columns } from './product-tables/columns';

type ProductListingProps = {
  searchParams: Record<string, string | string[] | undefined>
}

export default async function ProductListing({ searchParams }: ProductListingProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const pageSize = Number(searchParams?.pageSize) || 10;
  const sort = (searchParams?.sort as string) || "desc";
  const categories = searchParams?.categories || "";

  const filters = {
    page: currentPage,
    pageSize: pageSize,
    sort: sort,
    ...(categories && { categories: categories })
  };

  const data = await fakeProducts.getProducts(filters);
  const totalProducts = data.total_products;
  const products: Product[] = data.products;

  return (
    <ProductTable
      columns={columns}
      data={products}
      totalItems={totalProducts}
    />
  );
}
