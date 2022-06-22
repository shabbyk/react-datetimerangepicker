import { DateTime } from "luxon";

export type SelectedRange = {
    startDate: DateTime;
    endDate?: DateTime;
  };