import { VscThreeBars } from 'react-icons/vsc'
import Logo from './Logo'

export default function Header() {
  return (
    <div className="md:hidden h-[64px] border-b border-[#E2E8F0]">
      <div className='flex flex-row justify-between pt-3 pr-4'>
        <Logo />

        <VscThreeBars size={20} className='my-auto' />
      </div>
    </div>
  )
}
