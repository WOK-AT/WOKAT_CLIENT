export interface GetPlaceListInput {
  navType: 0 | 1 | 2; // 0(무료공간) / 1(무료회의룸) / 2(카페)
  station: string;
  filter: string;
  // date: string;
  // person: number;
  page: number;
}
export interface GetPlaceListOutput {
  status: number;
  success: boolean;
  message: string;
  placeList: {
    data: Place[];
  };
}

export interface Place {
  id: string;
  place: string;
  distance: string;
  count: string;
  hashtags: string[];
  location: string;
  imageURL: string;
}
