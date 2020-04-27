// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  serverUrl: '18.203.208.214:3000',
  wsSchema: 'ws',
  movement: {
    runningSpeed: 1.0,
    walkingSpeed: 0.25,
    crawlingSpeed: 0.1,
  },
  createPathMode: false,
  loadTerrain: false,
  load3dTiles: true,
  tiles: {
    url: 'https://beta.cesium.com/api/assets/1461?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkYWJmM2MzNS02OWM5LTQ3OWItYjEyYS0xZmNlODM5ZDNkMTYiLCJpZCI6NDQsImFzc2V0cyI6WzE0NjFdLCJpYXQiOjE0OTkyNjQ3NDN9.vuR75SqPDKcggvUrG_vpx0Av02jdiAxnnB1fNf-9f7s',
  },
  terrain: {
    url: 'https://assets.agi.com/stk-terrain/v1/tilesets/world/tiles',
    // url : 'https://assets.agi.com/stk-terrain/v1/tilesets/PAMAP/tiles',
    requestWaterMask: true,
    requestVertexNormals: true
  },
  controls: {
    mouseSensitivity: 16, // bigger is less sensitive
    disableBackward: true,
    disableLeft: true,
    disableRight: true,
  }
};
