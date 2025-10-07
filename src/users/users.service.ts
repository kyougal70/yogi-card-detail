import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CardDetail, CardDetailDocument } from './schema/users.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(CardDetail.name)
    private readonly cardDetailModel: Model<CardDetailDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    const result = await this.cardDetailModel.create(createUserDto);
    return !!result;
  }

  async findAll() {
    console.log('findAll');
    return await this.cardDetailModel.find().exec();
  }
}
