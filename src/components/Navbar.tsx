'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { styles } from '@/styles'
import { navLinks } from '@/constants'
import { logo, menu, close } from '../../public/assets'
import Image from 'next/image'

const Navbar = () => {
  const [active, setActive] = useState<string>('')
  const [toggle, setToggle] = useState<boolean>(false)

  console.log(active)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center !py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl !mx-auto'>
        <div
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
          className='flex items-center gap-2'
        >
          <Image src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Lasha-Giorgi&nbsp;
            <span className='sm:block hidden'>&nbsp;| Magaldadze</span>
          </p>
        </div>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              onClick={() => setActive(link.title)}
              key={link.id}
              className={`text-[18px] font-medium cursor-pointer`}
            >
              <Link
                href={`#${link.id}`}
                className={`${
                  active === link.title ? '!text-white' : 'text-secondary'
                } hover:text-white`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <Image
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } !p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-[10] rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  onClick={() => {
                    setToggle((prev) => !prev)
                    setActive(link.title)
                  }}
                  key={link.id}
                  className='cursor-pointer'
                >
                  <Link
                    href={`#${link.id}`}
                    className={`${
                      active === link.title ? '!text-white' : 'text-secondary'
                    } hover:text-white font-medium text-[16px]`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
