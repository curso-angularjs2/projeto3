"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var usuario_class_1 = require("./usuario.class");
var USUARIOS = [
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
var AppComponent = (function () {
    function AppComponent() {
        this.usuarioObject = new usuario_class_1.Usuario();
        this.usuarios = USUARIOS;
        this.edit = false;
    }
    AppComponent.prototype.deletarUsuario = function (index) {
        this.usuarios.splice(index, 1);
    };
    AppComponent.prototype.salvarUsuario = function (usuario) {
        this.usuarios.push(usuario);
        this.usuarioObject = new usuario_class_1.Usuario();
    };
    AppComponent.prototype.editarUsuario = function (usuario, persistir) {
        if (persistir === void 0) { persistir = false; }
        this.edit = true;
        this.usuarioObject = usuario;
        if (persistir) {
            this.usuarioObject = new usuario_class_1.Usuario();
            this.edit = false;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'projeto3',
        template: "\n          <h2>Exemplo de usu\u00E1rios</h2>\n          <div class=\"form-group col-md-4\">\n            <label>Id</label>\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"usuarioObject.id\"   />\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label>Nome</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"usuarioObject.nome\"   />\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label>Idade</label>\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"usuarioObject.idade\"   />\n          </div>\n          <div *ngIf=\"!edit\" class=\"form-group col-md-3\">\n            <button class=\"btn btn-primary\" (click)=\"salvarUsuario(usuarioObject)\">Salvar</button>\n          </div>\n          <div *ngIf=\"edit\" class=\"form-group col-md-3\">\n            <button class=\"btn btn-primary\" (click)=\"editarUsuario(usuarioObject, true)\">Editar</button>\n          </div>\n          <div class=\"table-responsive\">\n            <table class=\"table table-hover table-striped\">\n               <tr>\n                  <th>\n                      Id\n                  </th>\n                  <th>\n                      Nome\n                  </th>\n                  <th>\n                      Idade\n                  </th>\n                  <th>\n\n                  </th>\n                  <th>\n\n                  </th>\n               </tr>\n               <tr *ngFor=\"let usuario of usuarios; let i = index\">\n                  <td>\n                      {{usuario.id}}\n                  </td>\n                  <td>\n                      {{usuario.nome}}\n                  </td>\n                  <td>\n                      {{usuario.idade}}\n                  </td>\n                  <td>\n                      <button class=\"btn btn-primary\" (click)=editarUsuario(usuario)>Editar</button>\n                  </td>\n                  <td>\n                      <button class=\"btn btn-danger\" (click)=deletarUsuario(i)>Deletar</button>\n                  </td>\n               </tr>\n            </table>\n          </div>  \n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map