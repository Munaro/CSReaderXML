/**
 * This file is used specifically for security reasons.
 * Here you can access Nodejs stuff and inject functionality into
 * the renderer thread (accessible there through the "window" object)
 *
 * WARNING!
 * If you import anything from node_modules, then make sure that the package is specified
 * in package.json > dependencies and NOT in devDependencies
 *
 * Example (injects window.myAPI.doAThing() into renderer thread):
 *
 *   import { contextBridge } from 'electron'
 *
 *   contextBridge.exposeInMainWorld('myAPI', {
 *     doAThing: () => {}
 *   })
 *
 * WARNING!
 * If accessing Node functionality (like importing @electron/remote) then in your
 * electron-main.ts you will need to set the following when you instantiate BrowserWindow:
 *
 * mainWindow = new BrowserWindow({
 *   // ...
 *   webPreferences: {
 *     // ...
 *     sandbox: false // <-- to be able to import @electron/remote in preload script
 *   }
 * }
 */

import { contextBridge } from 'electron'

import { dialog } from '@electron/remote'
import fs from 'fs';

// 'electronApi' will be available on the global window context

contextBridge.exposeInMainWorld('electronApi', {

  openFileDialog: async (title, folder, filters) => {

    // calling showOpenDialog from Electron API: https://www.electronjs.org/docs/latest/api/dialog/

    const response = await dialog.showOpenDialog({

      title,

      filters,

      properties: ['openFile', 'multiSelections'],

    })

    return response.filePaths

  },

});
contextBridge.exposeInMainWorld('saveFile', {
    createFile: async (path: string, data: any) => {
        console.log('sim eu to por aq')
        await fs.writeFileSync('../teste.json', data);

        return 'success'
    }
})
