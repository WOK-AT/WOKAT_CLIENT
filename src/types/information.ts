export interface Information {
  contact: string[];
  homepageURL: string;
  'wi-fi': { ID: string[]; PW: string[] } | null;
  socket: string;
  parking: string;
  'hdmi-screen': string;
}
