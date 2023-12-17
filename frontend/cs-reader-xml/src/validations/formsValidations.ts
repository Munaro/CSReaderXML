export const formValidations = {
    fieldRequired: (v: any) => {
		const type = typeof(v);
		let error = false;
		switch(type) {
			case 'number':
				error = !!v
				break;
			case 'string':
				error = !!v.replace(/\s/g, '').length
				break;
			case 'object':
				if (v === null) {
					error = false;
				} else {
					error = v instanceof Array ? !!v.length : !!Object.keys(v).length;
				}
				break;
			}
		return error || '* Campo obrigatório.'
	},
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
	minLength: (v, lengthField : number, errorMsg? : string) => (
		v.replace(/\s/g, '').length >= lengthField || (!!errorMsg ? errorMsg : `* Mínimo de ${lengthField} dígitos.`)
	),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    maxLength: (v, lengthField : number, errorMsg? : string) => (
		v.replace(/\s/g, '').length <= lengthField || (!!errorMsg ? errorMsg : `* Máximo de ${lengthField} dígitos.`)
	)
}
