import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/new-logo.svg'
          alt='logo'
          width={130}
          height={23}
          className='object-contain'
        />
      </Link>

      <CustomButton
        title='Contact Us'
        btnType='button'
        containerStyles='text-red-500 rounded-full bg-blue min-w-[130px]'
      />
    </nav>
  </header>
);

export default NavBar;
