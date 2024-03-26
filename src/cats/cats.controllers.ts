import {
  Controller,
  Get,
  HttpCode,
  Post,
  Header,
  Redirect,
  Body,
  Res,
  HttpStatus
} from '@nestjs/common'
import { Response } from 'express'

import { CatDto } from '~/cats/dto/cat-dto'

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() catDto: CatDto, @Res() res: Response) {
    console.log('CATDTO:::===>>', catDto)
    res.status(HttpStatus.OK).json(catDto)
  }

  @Get()
  @Redirect('https://nestjs.com', 301)
  findAll(): string {
    return 'This action returns all cats'
  }
}
