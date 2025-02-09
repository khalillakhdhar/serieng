import { Component } from '@angular/core';
import { Utilisateur } from '../shared/interfaces/utilisateur';
import { UtilisateurService } from '../shared/services/utilisateur.service';

@Component({
  selector: 'app-exercice3',
  standalone: false,
  templateUrl: './exercice3.component.html',
  styleUrl: './exercice3.component.css'
})
export class Exercice3Component {
utilisateur={} as Utilisateur;
users:Utilisateur[]=[];
constructor(private utilisateurService:UtilisateurService) {
  this.users=utilisateurService.getUtilisateurs();
}

addUser()
{
  this.utilisateurService.addUtilisateur(this.utilisateur);
  this.users=this.utilisateurService.getUtilisateurs();
  this.utilisateur={} as Utilisateur;

}
deleteUser(index:number)
{
  if(confirm("voulez vous vraiment supprimer cet utilisateur?"))
  {
  this.utilisateurService.deleteUtilisateur(index);
  this.users=this.utilisateurService.getUtilisateurs();
  }
}
}
