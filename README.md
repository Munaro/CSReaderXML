# CS Reader XML

## Descrição 

<p align="left">Projeto criado para ler e manipular XMLs diretamente da base de dados Controlsoft. Podendo ser alterado para a leitura e manutenção de outras informações caso necessário.</p>
<p align="left"> O projeto utiliza a biblioteca Node-Firebird.</p>


## Configurações

<p align="left"> Para a utilização da ferramenta é necessário adequar as configurações do arquivo .env para as configurações de banco de onde o projeto será executado conforme o exemplo a seguir:</
<br>

```javascript
export const env = {
	database: {
		host: '127.0.0.1',
		port: 0000,
		databasePath: 'C:\\path\\DATABASENAME',
		user: 'USER',
		password: 'PASSWORD'
	}	
}
````


## Dodumentação

* [Node Firebird](https://www.npmjs.com/package/node-firebird)
