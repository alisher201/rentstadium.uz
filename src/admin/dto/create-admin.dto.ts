export class CreateAdminDto {
    username: string;
    email: string;
    telegram_link:string;
    admin_photo:string;
    hashed_password:string;
    is_active:boolean;
    is_create:boolean;
    hashed_refresh_token:number;
}
