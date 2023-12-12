import React from 'react';
import { Card, Search, Table } from '@/components';

export default function Dashboard() {
  return (
    <div className='flex flex-col lg:flex-row '>
      <Card />
      <div className='basis-full lg:basis-3/4 bg-white p-4 '>
        <Search />
        <Table />
      </div>
    </div>
  );
}
