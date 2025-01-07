"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
    const pathname = usePathname();
    const navData = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Collections',
            link: '/collections'
        }
    ];
    return (
        <header className="z-full bg-white dark:bg-black/[.9] shadow-md dark:shadow-none p-4 flex items-center justify-between">
            <div className='relative h-8 max-w-[180px]'>
                <Link className='relative h-8 max-w-[180px]' href="/">
                    <Image src={"/Logo.svg"}
                        width={180}
                        height={38}
                        className="dark:invert" priority alt='logo' />
                    {/* <Image
                              className="dark:invert"
                              src="/next.svg"
                              alt="Next.js logo"
                              width={180}
                              height={38}
                              priority
                            /> */}
                </Link>
            </div>
            <nav className="">
                <ul className='flex gap-4'>
                    {navData.map((item, index) => (
                        <li className={`${pathname === item.link ? 'bg-gray-200 dark:bg-gray-700' : ''} py-1 px-3 rounded-sm`} key={index}>
                            <Link href={item.link}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;