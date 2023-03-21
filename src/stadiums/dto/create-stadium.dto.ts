export class CreateStadiumDto {
    id: number;
  category_id: number;
  owner_id: number;
  contact_with: string;
  name: string;
  volume: string;
  address: string;
  region_id: number;
  district_id: number;
  location: string;
  buildAt: Date;
  start_time: number;
  end_time: number
}
