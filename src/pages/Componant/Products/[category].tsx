import Category from "../Header/Category";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import FeatureProduct from "./FeatureProduct";
import { useRouter } from 'next/router'


export default function DynamicProduct() {
  const router = useRouter()
  const title = router.query.category

return (
  <>
    <Header />
    <Category />
    <Slider />
    <FeatureProduct 
    title={title}
    />
  </>
)
}
