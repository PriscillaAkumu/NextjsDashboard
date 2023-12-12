import React from 'react';
import ListItem from './ListItem';
import Image from 'next/image';
import Logout from '../../../public/Logout.svg';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className='sidebar flex flex-col xs:hidden bg-gray-800 text-white py-4 px-4 '>
      <h1 className='text-white text-2xl font-bold my-4 '>CAR RENT</h1>

      <ul className='flex flex-col  '>
        {/* Sidebar content here */}
        <div>
          <ListItem icon='/Dashboard.svg' title='Dashboard' url='/' />

          <ListItem icon='/Car.svg' title='Drivers' url='/drivers' />

          <ListItem icon='/Group.svg' title='Bookings' url='/bookings' />

          <ListItem icon='/Bell.svg' title='Notifications' url='/notification' />

          <ListItem icon='/Settings.svg' title='Settings' url='/settings' />
        </div>

        <div className='divider  border-b-2 opacity-100 '></div>

        <div>
          <Link href='/report'>
            {' '}
            <h2 className='text-base font-normal text-white opacity-50'>Report</h2>
          </Link>

          <div>
            <ListItem icon='/Payment.svg' title='Payment Details' url='/report/payment-details' />

            <ListItem icon='/Transaction.svg' title='Transactions' url='/report/transactions' />

            <ListItem icon='/Group 3.svg' title='Car Report' url='/report/car-report' />
          </div>
        </div>
      </ul>

      <button className='btn mt-40 w-48 h-12 flex items-center  justify-center gap-2 rounded-lg  font-medium text-lg'>
        <Image src={Logout} alt='logout' />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
