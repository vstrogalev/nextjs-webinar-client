import { BRAND_FILTER_ALL } from '@/constants/brandFilterAll';
import { Brand } from '@/types/brand';
import { Racket } from '@/types/racket';

export const getBrandList = (rackets: Racket[]): Brand[] => {
  const brandRawList: Brand[] = rackets.map(racket => racket.brand)
  const brandList: Brand[] = [];

  brandRawList.forEach(rawBrand => {
    const foundBrand = brandList.find(brand => brand.id === rawBrand.id)
    if (!foundBrand) {
      brandList.push(rawBrand)
    }
  })

  const allBrands: Brand = {
    id: BRAND_FILTER_ALL,
    name: 'All',
  }

  return [allBrands, ...brandList]
}
