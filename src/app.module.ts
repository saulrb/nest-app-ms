import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeormModule } from './typeorm/typeorm.module'
import { AgentsModule } from './agents/agents.module';
import { BusinessModule } from './business/business.module';
import { CancellationsModule } from './cancellations/cancellations.module';
import { ComissionsModule } from './comissions/comissions.module';
import { EmployeesModule } from './employees/employees.module';
import { GuestsModule } from './guests/guests.module';
import { HousekeepingsModule } from './housekeepings/housekeepings.module';
import { InvoicesModule } from './invoices/invoices.module';
import { PropertiesModule } from './properties/properties.module';
import { ReservationsModule } from './reservations/reservations.module';
import { SettingsModule } from './settings/settings.module';
import { TiersModule } from './tiers/tiers.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeormModule, AgentsModule, BusinessModule, CancellationsModule, ComissionsModule, EmployeesModule, GuestsModule, HousekeepingsModule, InvoicesModule, PropertiesModule, ReservationsModule, SettingsModule, TiersModule, UsersModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
