import cls from '../styles/components/Footer.module.css';

export const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div className='
        container
        flex
        justify-between
        items-center
        md:flex-col
        md:text-center
      '>
        <span className='text-2xl font-light'>AppCo</span>

        <span>All rights reserved by ThemeTags</span>

        <span>Copyrights &copy; 2019. </span>
      </div>
    </footer>
  )
}
