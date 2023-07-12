import { Information } from '@/types/information';
import { OperationHours } from '@/types/operationHours';

export interface PlaceDetail {
  id: string;
  category: string;
  placeName: string;
  distance: string;
  count: string;
  bookingURL: string;
  hashtags: string[];
  introduce: string;
  operationHours: OperationHours;
  information: Information;
  location: string;
  imageURLs: string[];
}

export interface GetPlaceDetailOutput {
  status: number;
  success: boolean;
  message: string;
  data: PlaceDetail;
}
export interface GetPlaceAddressInput {
  placeId: string;
  isRoadName: number;
}

export interface GetPlaceDetailInput {
  placeId: string;
  station: string;
}
