# Nosso primeiro CRUD com AngularJS

Por enquanto iremos manter a mesma estrutura dos projetos anteriores.
Vamos criar o projeto3 com um crud básico utilizando o mesmo component.

Em app.component.ts vamos colocar todos o nosso html.

O nosso código ficará assim:

~~~javascript
import { Component } from '@angular/core';
import { Usuario } from './usuario.class';

const USUARIOS: Usuario[] = [
    { id: 11, nome: 'João', idade: 20 },
    { id: 12, nome: 'Maria', idade: 24 },
    { id: 13, nome: 'Joana', idade: 29 },
    { id: 14, nome: 'José', idade: 60 },
    { id: 15, nome: 'Magneta', idade: 89 },
    { id: 16, nome: 'RubberMan', idade: 21 },
    { id: 17, nome: 'Dynama', idade: 29 },
    { id: 18, nome: 'Dr IQ', idade: 26 },
    { id: 19, nome: 'Nataniel', idade: 25 },
    { id: 20, nome: 'Jéssica', idade: 23 }
];

@Component({
    selector: 'projeto3',
    template: `
          <h2>Exemplo de usuários</h2>
          <div class="form-group col-md-4">
            <label>Id</label>
            <input class="form-control" [(ngModel)]="usuarioObject.id"   />
          </div>
          <div class="form-group col-md-4">
            <label>Nome</label>
            <input class="form-control" [(ngModel)]="usuarioObject.nome"   />
          </div>
          <div class="form-group col-md-4">
            <label>Idade</label>
            <input class="form-control" [(ngModel)]="usuarioObject.idade"   />
          </div>
          <div class="form-group col-md-3">
            <button class="btn btn-primary" (click)="salvarUsuario(usuarioObject)">Salvar</button>
          </div>
          <table class="table table-hover table-striped">
             <tr>
                <th>
                    Id
                </th>
                <th>
                    Nome
                </th>
                <th>
                    Idade
                </th>
                <th>
                    Ações
                </th>
             </tr>
             <tr *ngFor="let usuario of usuarios; let i = index">
                <th>
                    {{usuario.id}}
                </th>
                <th>
                    {{usuario.nome}}
                </th>
                <th>
                    {{usuario.idade}}
                </th>
                <th>
                    <button class="btn btn-danger" (click)=deletarUsuario(i)>Deletar</button>
                </th>
             </tr>
          </table>
  `
})
export class AppComponent {
    usuarioObject = new Usuario();
    usuarios = USUARIOS;

    deletarUsuario(index): void {
        this.usuarios.splice(index, 1);
    }

    salvarUsuario(usuario): void {
       this.usuarios.push(usuario);
       this.usuarioObject = new Usuario();
    }

}

~~~

Repare que além da listagem agora nós também temos o usuarioObject para que ele fique em nossos inputs com cada atributo do objeto Usuario.

Também é necessário que em nosso app.module.ts coloquemos o FormsModule, pois estaremos utilizando os inputs para inserir dados.

Nosso app.module.ts ficará assim:


~~~javascript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
~~~
