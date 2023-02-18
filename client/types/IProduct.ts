import IDescription from './IDescription'
import IBrand from './IBrand'
import IType from './IType'

export default interface IProduct {
    id: number,
    name: string,
    price: number,
    img: string,
    typeId: number,
    brandId: number,
    description: IDescription[],
    brand: IBrand,
    type: IType
  }