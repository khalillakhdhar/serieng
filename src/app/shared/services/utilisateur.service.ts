import { Injectable } from '@angular/core';
import { Utilisateur } from '../interfaces/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  utilisateurs:Utilisateur[]=[];

  constructor() { }
  getUtilisateurs()
  {
    return this.utilisateurs;
  }
  addUtilisateur(utilisateur:Utilisateur)
  {
    this.utilisateurs.push(utilisateur);
  }
  deleteUtilisateur(index:number)
  {
    this.utilisateurs.splice(index,1);
  }




}
