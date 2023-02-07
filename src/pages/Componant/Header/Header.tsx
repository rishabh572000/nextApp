import styles from '../../../styles/Header/header.module.css';
import logo2 from '../../../assest/logo2.png';
import Image from 'next/image'
import { MdOutlineSearch } from 'react-icons/md';

export default function Header() {
return (
  <>
    <div className={styles.header}>
      <div className={styles.logoSection}>
        <Image src={logo2} alt='image' className={styles.logo} />
      </div>
      <div className={styles.searchSection}>
        <div className={styles.group}>
        <MdOutlineSearch className={styles.icon} />
        <input placeholder="Search" type="search" className={styles.input} />
        </div>
      </div>
      <div className={styles.userSection}>
        
      </div>
    </div>
  </>
)
}
