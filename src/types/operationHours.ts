export interface OperationHours {
  closed: string[];
  open: { [timeRange: string]: string[] };
}
