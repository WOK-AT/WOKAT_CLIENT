export interface Information {
  contact: string[];
  homepage: string;
  'wi-fi': { ID: string[]; PW: string[] } | null;
  socket: string;
  parking: string;
  'hdmi-screen': string;
}
