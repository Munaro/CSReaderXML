import { databaseConn } from "../database/database.js"
import { extractXMLSql } from "../sql/extractXMLSql.js";
export const extractXMLService = {
	getXML: async () => {
		const db = new databaseConn();
		
		await db.connect();

		const data = await db.query(extractXMLSql.getXML());

		return data;		
	}
}