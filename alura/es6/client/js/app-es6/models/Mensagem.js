export class Mensagem {

	constructor(texto) {

		// se texto for undefined, vai passar ''
        this._texto = texto || '';
    }

	get texto() {
		return this._texto;
	}

	set texto(texto) {
		this._texto = texto;
	}

}