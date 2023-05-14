export interface Information {
  contact: string;
  homepage: string;
  'wi-fi': { ID: string[]; PW: string[] }[];
  socket: boolean;
  parking: boolean;
  'hdmi-screen': boolean;
}
