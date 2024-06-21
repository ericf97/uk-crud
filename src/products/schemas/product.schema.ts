import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Product {
  @Prop()
  name: string

  @Prop()
  price: number

  @Prop()
  stock: number

  @Prop()
  category: string
}

export const ProductSchema = SchemaFactory.createForClass(Product);
