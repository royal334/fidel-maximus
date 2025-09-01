import { useMemo, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';

import type { SortingState } from '@tanstack/react-table';

// Define your data type
type LaundryService = {
  service: string;
  price: number | null;
};

const LaundryPriceTable = () => {
  // Data from your price list
  const data = useMemo<LaundryService[]>(() => [
    { service: "Flowing skirts", price: 300 },
    { service: "Washing skirts", price: 300 },
    { service: "Washing and Ironing", price: null },
    { service: "Coloured polo and T-shirts", price: 400 },
    { service: "Coloured trouser and jeans", price: 400 },
    { service: "Senator wear up and down", price: 800 },
    { service: "2 pcs Suits", price: 1200 },
    { service: "3 pcs suit", price: 1500 },
    { service: "Senator singlet", price: 300 },
    { service: "Small gown", price: 600 },
    { service: "Big gown", price: 700 },
    { service: "Curtain", price: 500 },
    { service: "Big Towel (White)", price: null },
    { service: "Small white towel", price: 1000 },
    { service: "Big Coloured Towel", price: 500 },
    { service: "Small white towel", price: 700 },
    { service: "Big Coloured towel (bed sheet)", price: 400 },
    { service: "White bed sheet", price: 700 },
    { service: "Coloured duvet", price: 1000 },
    { service: "White duvet", price: 1500 },
    { service: "Coloured shoes", price: 2000 },
    { service: "White shoes", price: 1500 },
    { service: "Application of starch", price: 1000 },
  ], []);

  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);

  const columnHelper = createColumnHelper<LaundryService>();

  const columns = useMemo(() => [
    columnHelper.accessor('service', {
      header: 'Service',
      cell: (info) => (
        <div className="font-semibold text-gray-900">
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor('price', {
      header: 'Price (₦)',
      cell: (info) => {
        const value = info.getValue();
        return (
          <div className="text-right font-semibold text-green-600">
            {value ? `₦${value.toLocaleString()}` : 'Quote on Request'}
          </div>
        );
      },
    }),
  ], [columnHelper]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
  });

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          FIDEL MOBILE LAUNDRY
        </h1>
        <p className="text-gray-600">Services & Pricing</p>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          value={globalFilter ?? ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search services..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg border border-gray-200">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center space-x-1">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    <span className="text-gray-400">
                      {header.column.getIsSorted() === 'asc'
                        ? ' ↑'
                        : header.column.getIsSorted() === 'desc'
                        ? ' ↓'
                        : ' ↕'}
                    </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> Expenses is between of 24 hours and above
        </p>
        <p className="text-sm text-blue-600 mt-1">
          Total services: {table.getFilteredRowModel().rows.length}
        </p>
      </div>

      {/* Contact Info */}
      <div className="mt-4 text-center text-gray-600">
        <p className="text-sm">
          For quotes and bookings, contact Fidel Mobile Laundry
        </p>
      </div>
    </div>
  );
};

export default LaundryPriceTable;