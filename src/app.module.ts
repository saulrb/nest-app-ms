import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CatsModule } from './cats/cats.module'
import { TypeormModule } from './typeorm/typeorm.module'

@Module({
  imports: [CatsModule, TypeormModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
