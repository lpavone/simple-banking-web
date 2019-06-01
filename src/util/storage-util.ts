import { Storage } from '@ionic/storage';
import { NgModule } from '@angular/core';
import { UserDTO } from '../model/user.dto';

enum StorageKey {
   USER = "simple_banking_user"
}

@NgModule()
export class StorageUtil {
   
   constructor(public storage: Storage){
   }

   setUser(value: UserDTO){
      this.storage.set(StorageKey.USER, value);
   }

   getUser(): Promise<UserDTO> {
      return this.storage.get(StorageKey.USER);
   }

}