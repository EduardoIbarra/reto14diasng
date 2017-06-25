import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  my_notes: any;

  constructor(public afDB: AngularFireDatabase) {
      this.getNotes()
          .subscribe(
              notas => {
                this.my_notes = notas;
              }
          );
  }
  getNotes(){
    return this.afDB.list('/notas');
  }
  removeNote(){
    this.afDB.database.ref('notas/' + this.note.id).remove();
    this.show_form = false;
    this.note = {id:null, title:null, description:null};
  }
  note = {id:null, title:null, description:null};
  show_form = false;
  editing = false;
  addNote(){
    this.editing = false;
    this.show_form = true;
    this.note = {id:null, title:null, description:null};
  }
  viewNote(note){
    this.editing = true;
    this.note = note;
    this.show_form = true;
  }
  cancel(){
    this.show_form = false;
  }
  /*delete(){
    var me = this;
    this.my_notes.forEach(function(el, i){
      if(el == me.note){
        me.my_notes.splice(i, 1);
      }
    });
    this.show_form = false;
    this.note = {id:null, title:null, description:null};
  }*/
  createNote(){
    if(this.editing){
      this.afDB.database.ref('notas/' + this.note.id).set(this.note);
    }else{
      this.note.id = Date.now();
      this.afDB.database.ref('notas/' + this.note.id).set(this.note);
    }
    this.show_form = false;
    this.note = {id:null, title:null, description:null};
  }
}
