# MagicMirror² Markdown module
This is a module for `MagicMirror²`; This module is intended to display markdown files.


## Installation
In your terminal, navigate to your MagicMirror's `modules` directory:
```bash
cd ~/MagicMirror/modules/
```
Clone this repository:
```bash
git clone https://github.com/wmawhinney1990/MMM-Markdown
```
Navigate to the MMM-Markdown folder:
```bash
cd MMM-Markdown
````
Install the dependencies:
```bash
npm install
```

## Configuration

Here is an example usage in the modules array in the `config/config.js` file:

```js
{
    module: 'MMM-Markdown',
    position: 'bottom_third',
    config: {
        updateInterval: 15 * (60 * 1000),   // 15 x (60 seconds)
        markdownFilename "filename.md"
    }
}
```
**Note:** `filename.md` shoud be located in `MMM-Markdown/modules/` directory.

## Configuration options

| Option                 | Description
|------------------------|-----------
| `updateInterval` | This is the update interval where 1000 = 1 second.<br>**Default value:** 15 minutes |
| `markdownFilename` | This is the markdow filename to display located `MMM-Markdown/markdown/filename.md`.<br>**Default value:** This README.md file :P |


## Updating
For updates to this module, navigate to your MMM-Markdown directory
```bash
cd ~/MagicMirror/modules/MMM-Markdown
```
Pull the latest changes
```bash
git pull
```

## Credits
MagicMirror²:   [MagicMirror²](https://github.com/MichMich/MagicMirror)