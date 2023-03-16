import { RegionModule } from './region/region.module';
import { Region } from './region/models/region.models';
import { Media } from './media/model/media.model';
import { Comfort } from './comfort/models/comfort.models';
import { ComfortModule } from './comfort/comfort.module';
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize"
import { MediaModule } from './media/media.module';
import { RegionService } from './region/region.service';
import { ComfortStadiumModule } from './comfort_stadium/comfort_stadium.module';
import { DistrictModule } from './district/district.module';



@Module({
    imports: [
        ConfigModule.forRoot({envFilePath: '.env', isGlobal: true}),
      
         SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: String(process.env.POSTGRES_PASSWORD),
            database: process.env.POSTGRES_DB,
            models: [Comfort,Media,Region],
            autoLoadModels: true,
            logging: false
         }),
         ComfortModule,
         MediaModule,
         RegionModule,
         ComfortStadiumModule,
         DistrictModule
    ],
    controllers: [],
    providers: [],
    exports: []
})
export class AppModule{}