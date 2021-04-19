import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toDoList';
  
  //new code
  
  //recuperer les valeurs des champs
  recupValeur (elementRecupere: any) {
    console.log(elementRecupere)
  }
  
  tabTache: any = []
  tabTacheEnCours: any = []
  tabTacheTermine: any = []
  valeurChamp = {
    champId: '',
    champTache: ''
  }
  cpte = 0
  resterCache = false
  pageActive1 = ''
  pageActive2 = ''
  
  /* 
  //@ts-ignore
  document.getElementById('idDate')?.value == ''
  
  //@ts-ignore
  champDate: document.getElementById('idDate')?.value,
  
  //@ts-ignore
  document.getElementById('idDate')?.value = ''
  
  
  champDate: '',
  
  */
  
  //creer la tache
  creerTache () {
    if (//@ts-ignore
      document.getElementById('idTache')?.value == '') {
        alert('Veuillez renseigner les champs')
      } else {
        this.tabTache.push(
          {
            champId: this.cpte+=1,
            
            //@ts-ignore
            champTache: document.getElementById('idTache')?.value
          }
          )
          
          //@ts-ignore
          document.getElementById('idTache')?.value = ''
        }
      }
      
      //vider les champs
      supprimerTache (valRecu: any) {
        let i = 0
        let trouve = false
        
        while (i < this.tabTache.length && trouve == false) {
          if (this.tabTache[i].champId === valRecu) {
            trouve = true;
            this.tabTache.splice(i, 1);
          } else {
            i = i + 1;
          }
        }
      }
      
      ouvertureTache (valRecu: any, etat: string) {
        let i = 0
        let trouve = false
        
        if (etat == 'EC') {
          while (i < this.tabTacheEnCours.length && trouve == false) {
            if (this.tabTacheEnCours[i].champId === valRecu) {
              trouve = true;
              this.tabTache.push(
                this.tabTacheEnCours[i]
                )
                this.tabTacheEnCours.splice(i, 1);
              } else {
                i = i + 1;
              }
            }
          } else if (etat == 'T') {
            while (i < this.tabTacheTermine.length && trouve == false) {
              if (this.tabTacheTermine[i].champId === valRecu) {
                trouve = true;
                this.tabTache.push(
                  this.tabTacheTermine[i]
                  )
                  this.tabTacheTermine.splice(i, 1);
                } else {
                  i = i + 1;
                }
              }
            }
          }
          
          tacheEnCours (valRecu: any, etat: string) {
            let i = 0
            let trouve = false
            
            if (etat == 'O') {
              while (i < this.tabTache.length && trouve == false) {
                if (this.tabTache[i].champId === valRecu) {
                  trouve = true;
                  this.tabTacheEnCours.push(
                    this.tabTache[i]
                    )
                    this.tabTache.splice(i, 1);
                  } else {
                    i = i + 1;
                  }
                }
              } else if (etat == 'T') {
                while (i < this.tabTacheTermine.length && trouve == false) {
                  if (this.tabTacheTermine[i].champId === valRecu) {
                    trouve = true;
                    this.tabTacheEnCours.push(
                      this.tabTacheTermine[i]
                      )
                      this.tabTacheTermine.splice(i, 1);
                    } else {
                      i = i + 1;
                    }
                  }
                }
              }
              
              tacheTermine (valRecu: any, etat: string) {
                let i = 0
                let trouve = false
                
                if (etat == 'O') {
                  while (i < this.tabTache.length && trouve == false) {
                    if (this.tabTache[i].champId === valRecu) {
                      trouve = true;
                      this.tabTacheTermine.push(
                        this.tabTache[i]
                        )
                        this.tabTache.splice(i, 1);
                      } else {
                        i = i + 1;
                      }
                    }
                  } else if (etat == 'EC') {
                    while (i < this.tabTacheEnCours.length && trouve == false) {
                      if (this.tabTacheEnCours[i].champId === valRecu) {
                        trouve = true;
                        this.tabTacheTermine.push(
                          this.tabTacheEnCours[i]
                          )
                          this.tabTacheEnCours.splice(i, 1);
                        } else {
                          i = i + 1;
                        }
                      }
                    }
                  }
                  
                }