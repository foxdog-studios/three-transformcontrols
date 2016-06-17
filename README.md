# three-transformcontrols

A module for using THREE.TransformControls with nodejs

See the [original](http://threejs.org/examples/#misc_controls_transform) for
a demo.

Updated for THREE __R78__.

## Installation

`npm install three-transformcontrols`

## Usage

```javascript
var TransformControls = require('three-transformcontrols');
var controls = new TransformControls(camera, domElement);
```

## Development

Ensure you have the same node environment using nvm.

`npm install -g nvm`
`nvm use`

Then install as usual

`npm install`

## Testing

Make sure you have loaded the nvm environment

`nvm use`

Then test as usual

`npm test`

