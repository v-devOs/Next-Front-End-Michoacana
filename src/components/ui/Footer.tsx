'use client';

import { usePathname } from "next/navigation";



export const Footer = () => {

  const path = usePathname();

  if (path.includes('admin'))
    return <></>

  return (
    <div>Footer</div>
  )
}
