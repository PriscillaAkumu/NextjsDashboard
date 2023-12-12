import React from 'react';
import Link from 'next/link';

interface ListItem {
  icon: string;
  title: string;
  url: string;
  isActive?: boolean;
}

const ListItem: React.FC<ListItem> = ({ icon, title, url, isActive }) => {
  return (
    <Link href={url} className='sidebarButton '>
      <img src={icon} alt={title} />
      <p className='heading text-base font-normal text-white '>{title}</p>
    </Link>
  );
};

export default ListItem;
