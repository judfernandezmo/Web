import { Injectable } from '@angular/core';
import { User } from './shared/user';
import { Company } from './shared/company';

@Injectable()
export class GeneralServiceService {
  user_type;
  user_name;
  username;
  users = [new User("Andres Felipe Aguilar","afaguilarr","ElMejor123","Developer"),
    new User("John Jairo Serna","jjsernaco","holaMUNDO456","Project Manager"),
    new User("Carlos Mario Zapata","cmzapata","EnserioEsaEsTuPregunta?","Game Administrator"),
    new User("David","dddavid","david","Project Manager"), 
	new User("Victor Daniel JAramillo Gomez", "vdjaramillog","0000","Developer")];
  user_to_be_updated = this.users[1];
  companies = [new Company("UNAL","jjsernaco",
    "http://unal.edu.co/typo3conf/ext/unal_skin_default/Resources/Public/images/escudoUnal_black.png"),
  new Company("Google",undefined,"http://educainternet.es/pictures/4074.png")];
  company_to_be_updated = this.companies[1];
  constructor() { }
}
