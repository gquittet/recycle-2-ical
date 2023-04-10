import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

type Auth = {
  expiresAt: string;
  accessToken: string;
};

type Paginated<T> = {
  first: string;
  items: T[];
  last: string;
  page: number;
  pages: number;
  self: string;
  size: number;
  total: number;
};

type City = {
  available: boolean;
  city: { names: { nl: string; fr: string; de: string; en: string } };
  code: string;
  createdAt: string;
  id: string;
};

type Street = {
  createdAt: string;
  deleted: boolean;
  id: string;
  name: string;
  names: { nl: string; fr: string; de: string };
  updatedAt: string;
};

const RECYCLE_API = 'https://api.fostplus.be/recycle-public/app/v1';

// noinspection SpellCheckingInspection
const SECRET =
  '8eTFgy3AQH0mzAcj3xMwaKnNyNnijEFIEegjgNpBHifqtQ4IEyWqmJGFz3ggKQ7B4vwUYS8xz8KwACZihCmboGb6brtVB3rpne2Ww5uUM2n3i4SKNUg6Vp7lhAS8INDUNH8Ll7WPhWRsQOXBCjVz5H8fr0q6fqZCosXdndbNeiNy73FqJBn794qKuUAPTFj8CuAbwI6Wom98g72Px1MPRYHwyrlHUbCijmDmA2zoWikn34LNTUZPd7kS0uuFkibkLxCc1PeOVYVHeh1xVxxwGBsMINWJEUiIBqZt9VybcHpUJTYzureqfund1aeJvmsUjwyOMhLSxj9MLQ07iTbvzQa6vbJdC0hTsqTlndccBRm9lkxzNpzJBPw8VpYSyS3AhaR2U1n4COZaJyFfUQ3LUBzdj5gV8QGVGCHMlvGJM0ThnRKENSWZLVZoHHeCBOkfgzp0xl0qnDtR8eJF0vLkFiKwjX7DImGoA8IjqOYygV3W9i9rIOfK';

@Injectable({ providedIn: 'root' })
export class RecycleService {
  private token = '';

  constructor(private readonly httpClient: HttpClient) {
    const url = new URL(`${RECYCLE_API}/access-token`);
    const headers = new HttpHeaders({
      'X-Secret': SECRET,
      'X-Consumer': 'recycleapp.be',
    });
    httpClient
      .get<Auth>(url.toString(), { headers })
      .pipe(map((result) => result.accessToken))
      .subscribe((token) => {
        this.token = token;
        console.log('Logged', token);
      });
  }

  getPostalCodeId(code: number): Observable<City[]> {
    const url = new URL(`${RECYCLE_API}/zipcodes`);
    url.searchParams.append('q', code.toString());
    return this.httpClient
      .get<Paginated<City>>(url.toString())
      .pipe(map((result) => result.items.slice(5)));
  }

  getStreetId(street: string, postalCodeId: string): Observable<Street[]> {
    const urlEncodedStreet = encodeURIComponent(street.toLowerCase());
    const url = new URL(`${RECYCLE_API}/streets`);
    url.searchParams.append('q', urlEncodedStreet);
    url.searchParams.append('zipcodes', postalCodeId);
    return this.httpClient
      .get<Paginated<Street>>(url.toString())
      .pipe(map((result) => result.items.slice(5)));
  }
}
