import cls from '../styles/components/NavBar.module.css';

export const NavBar = () => {
  return (
    <div className={cls.navBar}>
      <div className='container'>
        <span className='text-text-revert text-4xl font-light'>AppCo</span>
      </div>
    </div>
  )
}
