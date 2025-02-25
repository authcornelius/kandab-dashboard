import { PiChatTeardropDotsBold, PiCreditCardBold, PiCubeBold, PiGearSixBold, PiHouseSimpleBold, PiListBulletsBold, PiUsersBold} from 'react-icons/pi'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import Avatar from '/342859196_239392802007511_7687622644463172425_n1.jpg'
import { MdLogout } from 'react-icons/md'
import Logo from './Logo'

export default function SideBar() {

  const menuLists = [
    {
      name: 'Home',
      icon: <PiHouseSimpleBold size={20} className='text-[#94A3B8]' />,
      link: '/'
    },
    {
      name: 'Tasks',
      icon: <PiListBulletsBold size={20} className='text-[#94A3B8]' />,
      link: '/'
    },
    {
      name: 'Users',
      icon: <PiUsersBold size={20} className='text-[#94A3B8]' />,
      link: '/'
    },
    {
      name: 'APIs',
      icon: <PiCubeBold size={20} className='text-[#94A3B8]' />,
      link: '/'
    },
    {
      name: 'Subscription',
      icon: <PiCreditCardBold size={20} className='text-[#94A3B8]' />,
      link: '/'
    },
    {
      name: 'Settings',
      icon: <PiGearSixBold size={20} className='text-[#94A3B8]' />,
      link: '/'
    },
    {
      name: 'Help and Support',
      icon: <PiChatTeardropDotsBold size={24} className='text-[#94A3B8]' />,
      link: '/'
    },
  ]

  return (
    <div className='hidden md:block border-r border-gray-200 w-[312px] h-screen'>
      <div className='h-[520px] m-4 space-y-8'>
        <Logo />

        <div className='space-x-2 border border-[#CBD5E1] flex flex-row rounded-full p-[12px]'>
          <CiSearch className='my-auto' size={17} />
          <input placeholder='Search...' className='medium-custom-font' />
        </div>

        <div>
          <nav className='space-y-2'>
            {menuLists.map((item, index) => (
              <Link
                to={item.link} 
                key={index}
                className='flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-2'
              >
                {item.icon}
                <span className='text-[#1E293B] bold-custom-font  text-[16px]'>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className='fixed bottom-0 m-4 border-t border-gray-200 py-5'>
        <div className='flex flex-row space-x-16 xl:space-x-24'>
          <div className='w-full flex flex-rows space-x-3'>
            <img src={Avatar} alt='' className='w-10 h-10 rounded-full my-auto' />

            <div className=''>
              <h1 className='text-[#1E293B] bold-custom-font  text-[16px]'>Cornelius E. O</h1>
              <h1 className='text-[#475569] medium-custom-font text-[16px]'>Basic member</h1>
            </div>
          </div>

          <div className='my-auto flex justify-end'>
            <MdLogout size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}
