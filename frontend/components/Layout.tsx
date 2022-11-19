import { NavBar } from './NavBar';
import { Footer } from './Footer';

export const Layout = ({ children }: any) => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <NavBar />

      <div className='pt-24 pb-5 min-h-full'>
        {children}
      </div>

      <Footer />
    </div>
  )
}
