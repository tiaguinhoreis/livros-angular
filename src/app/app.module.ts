import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
/*
  declarations: [
    LivroListaComponent
  ], */
  imports: [
    BrowserModule,
    AppComponent,
    LivroListaComponent
  ],
  providers: [ControleEditoraService, ControleLivrosService],
 /**bootstrap: [AppComponent]*/
})
export class AppModule { }
