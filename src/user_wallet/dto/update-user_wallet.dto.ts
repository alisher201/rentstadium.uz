import { PartialType } from '@nestjs/swagger';
import { CreateUserWalletDto } from './create-user_wallet.dto';

export class UpdateUserWalletDto extends PartialType(CreateUserWalletDto) {
    id?:number;
    user_id?:number;
    wallet?:number;
}
