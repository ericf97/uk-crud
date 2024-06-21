import { IsDecimal, IsNotEmpty, IsNumber, Length, Max, Min} from "class-validator"

export class CreateProductDto {

  @IsNotEmpty({message: 'product should be have a name'})
  @Length(3, 255, { message: 'minimun caracter should be 3 and max 255'})
  name: string

  @IsNotEmpty({message: 'product should be have a price'})
  @IsNumber()
  @Min(0.01)
  @Max(999999999999999999.99)
  price: number

  @IsNotEmpty({message: 'product should be have a stock'})
  @IsNumber()
  @Min(0)
  @Max(999999999999999999)
  stock: number

  category: string
}
