
/**
 * system-tray.js
 */

'use strict'

const {Tray, Menu} = require('electron').remote

const path = require('path')

let trayIcon = new Tray(path.join('', '../../renderer/assets/logo.jpg'))

const trayMenuTemplate = [
  {
    label: 'Empty Application',
    enabled: false
  },
  {
    label: 'Settings',
    click: function () {
      console.log('Clicked on settings')
    }
  },
  {
    label: 'Help',
    click: function () {
      console.log('Clicked on Help')
    }
  }
]
let trayMenu = Menu.buildFromTemplate(trayMenuTemplate)
trayIcon.setContextMenu(trayMenu)
