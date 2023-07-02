import { Information } from '@/types/information';
import { OperationHours } from '@/types/operationHours';

export interface GetPlaceDetailOutput {
  status: number;
  success: boolean;
  message: string;
  data: {
    id: string;
    category: string;
    placeName: string;
    distance: object;
    count: string;
    bookingURL: string;
    hashtags: string[];
    introduce: string[];
    operationHours: OperationHours;
    information: Information;
    location: string;
    imageURLs: string[];
  };
}
export interface GetPlaceAddressInput {
  placeId: string;
  isRoadName: number;
}

export interface GetPlaceDetailInput {
  placeId: string;
  station: string;
}
