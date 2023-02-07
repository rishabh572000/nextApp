import styles from '../../../styles/Header/category.module.css';
import { SlLocationPin } from 'react-icons/sl';
import { category } from '@/pages/Data/category';
import { HiArrowSmDown } from 'react-icons/hi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useState } from 'react';
import Image from 'next/image'
import men from '../../../assest/men.jpg';
import women from '../../assest/women.jpg';
import chield from '../../assest/chield.jpg';
import { useRouter } from 'next/router'
import product from '../Products/FeatureProduct'

export default function Category() {
  const router = useRouter()
    const [showDrawer, setShowDrawer] = useState(false);
    const [drawerData, setDrawerData] = useState({
      _id:Number,
      name:String,
      child:[]
    })
    const drawerStatus = (value:any) =>{
      value.child.length>0? setShowDrawer(true) :null
        setDrawerData(value)
    }
 


const Drawer = () =>{
  const goToPage = (value:any) =>{
    // value.preventDefault()
    router.push(`../Componant/Products/${value}`)
  }
  return(
    <>
      <div className={styles.drawer} onMouseEnter={()=>setShowDrawer(true)} onMouseLeave={()=>setShowDrawer(false)}>
        {drawerData?.child?.map((val:any, ind:number)=>{
            return(
         <div className={styles.item} key={ind}>
          <div className={styles.imageSection}>
            <Image src={men} alt='image' className={styles.image} />
          </div>
          <div className={styles.header}>
            <h3>{val?.categor}</h3>
          </div>
          <div className={styles.list}>
            {val?.child?.map((value:String, index:number)=>{
                return <p onClick={()=>goToPage(value)} key={index}><span><HiOutlineArrowNarrowRight /></span> {value}</p>
            })}
          </div>
        </div>
                
            )
        })}
        
      </div>
    </>
  )
}
return (
  <>
    <div className={styles.category}>
      <div className={styles.delivery}>
        <SlLocationPin className={styles.location} />
         Deliver to India
      </div>
      <div className={styles.category}>
        <ul>
        {category.map((val:any, ind:number)=>{
            return <li onMouseEnter={()=>drawerStatus(val)} key={ind} onMouseLeave={()=>setShowDrawer(false)}>{val?.name} {val?.child.length>0 ? <HiArrowSmDown  /> : null }</li>
        })}
        </ul>
      </div>
      <div className={styles.rest}>
        
      </div>
    </div>
      {showDrawer ? <Drawer /> :null }
  </>
)
}
