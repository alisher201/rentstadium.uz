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
import { AdminModule } from './admin/admin.module';
import { CategoriesModule } from './categories/categories.module';
import { StadiumsModule } from './stadiums/stadiums.module';
import { CommentsModule } from './comments/comments.module';
import { StadiumTimesModule } from './stadium_times/stadium_times.module';
import { CartModule } from './cart/cart.module';
import { UserCardsModule } from './user_cards/user_cards.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { UserWalletModule } from './user_wallet/user_wallet.module';
import { District1Module } from './district1/district1.module';



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
         AdminModule,
         CategoriesModule,
         StadiumsModule,
         CommentsModule,
         StadiumTimesModule,
         CartModule,
         UserCardsModule,
         OrdersModule,
         UsersModule,
         UserWalletModule,
         District1Module
    ],
    controllers: [],
    providers: [],
    exports: []
})
export class AppModule{}