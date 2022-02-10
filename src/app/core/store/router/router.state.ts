import { Params, Data } from '@angular/router';

export interface RouterState {
  url: string;
  params: Params;
  queryParams: Params;
  data: Data;
}
