import { HttpClient } from '@angular/common/http';
import { Oferta } from './shared/oferta.model'
import { Injectable } from '@angular/core'

import { URL_API } from './app.api'

@Injectable()
export class OfertasService {
    private url_ofertas = `${URL_API}/ofertas`;

    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${this.url_ofertas}?destaque=true`) // retorna um Observable
        .toPromise() // converte para promise
        .then((resposta: any) => resposta)
    }

    public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
        return this.http.get(`${this.url_ofertas}?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta)
    }
    
    //resposta.shift() extrai o índice zero
    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${this.url_ofertas}?id=${id}`)
        .toPromise()
        .then((resposta: any) => resposta.shift());
    }
}