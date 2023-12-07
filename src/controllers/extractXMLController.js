import { extractXMLService } from "../services/extractXMLService.js";
import fs from 'fs'

export const extractXMLController = {
	getXML: async () => {
		try {
			let XML = await extractXMLService.getXML();
			for (let x = 0; x < XML.length; x ++) {
				if (!fs.existsSync('./XML')) {
					fs.mkdirSync('./XML')
				};
				if (!fs.existsSync(`./XML/${XML[x].CODIGOEMPRESA}`)) {
					fs.mkdirSync(`./XML/${XML[x].CODIGOEMPRESA}`)
				};
				let entireXML = '';
				for (let y = 1; y < 16; y++) {					
					entireXML += XML[x][`XML${y}`].toString().trim() 
				};				
				fs.writeFileSync(`./XML/${XML[x].CODIGOEMPRESA}/${XML[x].CHAVEACESSO}.xml`, entireXML)				
			}
		} catch (error) {
			console.log(error)
		}
	}
}