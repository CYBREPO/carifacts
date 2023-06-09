import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE } from 'ngx-webstorage';
import { StorageService } from 'ngx-webstorage/lib/core/interfaces/storageService';
import { ICacheContent } from '../interface/cacheInterface';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {
  }

  get(key: string): ICacheContent | null {
    return null;
    // return this.storage.retrieve(key);
  }

  set(key: string, value: ICacheContent): void {
    // this.storage.store(key, value)
  }



  delete(key: string): void {
    // this.storage.clear(key);
  }

  deleteAll(): void {
    this.storage.clear();
  }

}
