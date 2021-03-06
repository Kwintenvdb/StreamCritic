# StreamCritic
Chrome extension that adds IMDb ratings to Netflix.

To be extended later to support more streaming services.

## How to build

**Note:** requires an API key from [OMDb API](http://www.omdbapi.com/). Get a personal API key and place it in a JSON file under the `lib` folder. The file needs a single property named `key`.

Install Typescript and Webpack:

`npm i --g typescript webpack webpack-cli`

Run the build script:

`npm run build`

The build script will produce a single bundjed JS file and `manifest.json` which can be loaded as a Chrome extension.

Load as an unpacked extension in Chrome during development.

## How to use

Once the extension has been added to Chrome, simply hover over any media preview on Netflix. The IMDb rating for movie or television show will be displayed under its title.

![example](example.png?raw=true)

## Credits

Credit to Brian Fritz for creating [OMDb API](http://www.omdbapi.com/).
