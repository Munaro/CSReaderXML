import Firebird from "node-firebird";
import { env } from "../env/env.js";



export class databaseConn {
	constructor() {
	}
	async connect() {
		const options = {
			host: env.database.host,
			port: env.database.port,
			database: env.database.databasePath,
			user: env.database.user,
			password: env.database.password,
			lowercase_keys: false,
			role: null,
			blobAsText: false
		};
	
		options.blobAsText = true;

		this.db = await new Promise((resolve, reject) => {
			Firebird.attach(options, (err, db) => {
				if (err) {
					console.error(err);
					reject(err);
					return;
				}
				resolve(db);
			});
		});

		this.cursor = this.db.defaultTransaction;		
	}
	query(SQL) {
		return new Promise((resolve, reject) => {
			this.db.query(SQL, (err, result) => {
				if (err) {
					reject(err);
					return;
				}

				resolve(result);
			});
		});
	}

	cmd(cmd) {
		return new Promise((resolve, reject) => {
			this.db.execute(cmd, (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(true);
			});
		});
	}

	queryStream() {
		return new Promise((resolve, reject) => {
			this.db.query(SQL, (err, result) => {
				if (err) {
					reject(err);
					return;
				}

				resolve(result);
			});
		});
	}

	closeCon() {
		return new Promise((resolve, reject) => {
			this.db.detach((err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve();
			});
		});
	}
}