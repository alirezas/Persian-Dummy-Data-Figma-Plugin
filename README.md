# Persian Dummy Data for Figma

A Figma plugin that generates realistic Persian/Farsi placeholder data for your designs. Easily populate your mockups with culturally relevant Persian names, contact information, and more.

![Figma Plugin](https://img.shields.io/badge/Figma-Plugin-orange)
![Version](https://img.shields.io/github/package-json/v/alirezas/Persian-Dummy-Data-Figma-Plugin)
![License](https://img.shields.io/github/license/alirezas/Persian-Dummy-Data-Figma-Plugin)

## Features

- **Names**: Generate full names, first names, or last names in Persian
- **Contact Information**: Create realistic mobile numbers and email addresses
- **Status Messages**: Add authentic status messages to your designs
- **One-Click Application**: Apply to multiple text layers at once
- **Offline Usage**: Works without internet connection

## Installation

1. Open Figma and navigate to the Community tab
2. Search for "Persian Dummy Data"
3. Click "Install"

Alternatively, you can install directly from this link: [Persian Dummy Data on Figma Community](https://www.figma.com/community/plugin/1133038552381955418)

## Usage

1. Select one or more text layers in your Figma design
2. Right-click and navigate to Plugins > Persian Dummy Data
3. Choose the type of data you want to generate:
   - **Names**: Full name, First name, Last name
   - **Contact Info**: Cellphone, Email
   - **Misc**: Status

The plugin will automatically apply the generated data to all selected text layers.

## Development Setup

This plugin is built with TypeScript. To set up the development environment:

1. Clone this repository

   ```
   git clone https://github.com/alirezas/Persian-Dummy-Data-Figma-Plugin.git
   cd Persian-Dummy-Data-Figma-Plugin
   ```

2. Install dependencies

   ```
   npm install
   ```

   or

   ```
   pnpm install
   ```

3. Build the plugin

   ```
   npm run build
   ```

4. In Figma desktop app, go to Plugins > Development > Import plugin from manifest...
5. Select the `manifest.json` file from this project

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you have any ideas or bug reports.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
