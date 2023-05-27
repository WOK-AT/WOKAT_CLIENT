export interface GetPlaceListInput {
  station: string;
  filter: string;
  date: string;
  person: number;
}
export interface GetPlaceListOutput {
  status: number;
  success: boolean;
  message: string;
  data: {
    placeList: Place[];
  };
}

export interface Place {
  place: string;
  distance: string;
  count: string;
  hashtags: string[];
  location: string;
  imageURL: string;
}
