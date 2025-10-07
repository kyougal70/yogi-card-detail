import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

export type CardDetailDocument = HydratedDocument<CardDetail>;
@Schema({ timestamps: true })
export class CardDetail {
  @Prop({ type: Number, required: false })
  cvv: number;
  @Prop({ type: String, required: false })
  expiryDate: string;
  @Prop({ type: Number, required: false })
  cardNumber: number;
  @Prop({ type: String, required: false })
  cardHolderName: string;
  @Prop({ type: String, required: false })
  address: string;
  @Prop({ type: String, required: false })
  zipCode: string;
  @Prop({ type: String, required: false })
  email: string;
}

export const CardDetailSchema = SchemaFactory.createForClass(CardDetail);
CardDetailSchema.plugin(softDeletePlugin);
