import React, { Component } from 'react';
import './Documentation.scss';
import { CodeHighlight } from './CodeHighlight';

export class Documentation extends Component {

    render() {
        return (
            <div className="grid documentation">
                <div className="col-12">
                    <h1>Getting Started</h1>
                    <h5>Current Version</h5>
                    <p>React 18 and PrimeReact 8</p>

                    <h5>Overview</h5>
                    <p>PrimeReact Designer is a sass based theme api for developing PrimeReact themes. The tool can be used in two ways;
                        first approach is the visual ui theme editor and other one is editing the sass variables directly from the code. Designer is provided as a create-react-app application containing the visual editor, 
                        sass api, all pre-built themes and a sample page with various components to test while designing your theme.</p>

                    <h5>Visual Editor</h5>
                    <p>Visual editor offers an easy way for rapid prototyping so that a theme can be designed on the fly using UI elements such as color pickers.
                        Once the theme is ready, the download option generates a theme.css file that can be included in your project. Note that visual editor
                        uses a small subset of the actual sass api, for more advanced cases such as implementing a style guide code editor should be preferred.</p>

                    <p>To begin with extract the contents of the distribution and install the dependencies.</p>

<CodeHighlight>
{`npm install
npm start
`}
</CodeHighlight>

                    <p>Then navigate to <b>http://localhost:3000</b> to access the application in your local environment, now it is time to create your own theme visually.</p>

                    <h5>Code Editor</h5>
                    <p>Code editor mode is enabled by changing the <i>REACT_APP_EDITOR</i> variable in .env configuration file located in the root folder. The 
                        default value is <i>visual</i> and <i>code</i> should be set instead to design a theme with the sass api directly.</p>

<CodeHighlight>
{`REACT_APP_EDITOR=code
`}
</CodeHighlight>

                    <p>A built-in base theme named <i>mytheme</i> is available to get started with your own theme. To begin with
                        navigate to the <i>src/assets/themes/mytheme/</i> folder which includes the following artifacts;</p>

                    <ul>
                        <li><b>_variables.scss</b>: List of variables to create your own theme.</li>
                        <li><b>/fonts</b> Folder of the font files</li>
                        <li><b>_fonts.scss</b>: Definition of the @font-face of the theme</li>
                        <li><b>_extensions.scss</b>: Customizations to the theme in case a behavior is not supported by the variables</li>
                        <li><b>theme.scss</b>: Main theme file that imports the scss files required for the theme</li>
                    </ul>

                    <p>You may now start designing your own theme by changing the variables now, for example change the <i>$primaryColor</i> variable and save the <i>_variables.scss</i> file. Your new theme will be generated
                        and browser will update the page automatically.</p>

                    <h5>Full List of SASS Variables</h5>
                    <p>A wide range of variables are available to customize different aspects of the components such as colors, margins and paddings. Refer to the <a href="https://www.primefaces.org/designer/api/primereact/7.1.0">API documentation</a> for details on each variable.</p>

                    <h5>Customization</h5>
                    <p>SASS API is located inside the <i>src/assets/designer</i> folder and themes import the main <i>_components.scss</i> from this location.
                        In case you need to make extend the API, add these changes to the <i>_extensions.scss</i> file in the theme folder instead of editing the .scss files inside the designer folder to
                        avoid any maintenance issues. Designer is updated periodically for improvements and updating is done by replacing the designer folder only so for seamless updates, never edit
                        the designer folder as <i>src/assets/mytheme/_extensions.scss</i> file is created for this purpose.
                    </p>

                    <h5>Optimize Bundle Size</h5>
                    <p>Every component is styled within its own file and then imported to the <b>_components.scss</b>, you may comment or remove the components that you are not using to keep
                    the size of your theme as small as possible.</p>

                    <h5>Prebuilt Themes</h5>
                    <p>PrimeReact ships with the css of <b>Bootstrap</b>, <b>Material</b>, <b>Fluent UI</b>, <b>Tailwind</b>, <b>Saga</b>, <b>Vela</b>, <b>Arya</b> and the legacy themes. SCSS structure and variables of these themes are also available inside the <i>src/assets/themes</i> folder
                        as well in case you'd like to customize them for your own requirements or see how these themes are built.
                    </p>

                    <h5>Exclusive Themes</h5>
                    <p>Designer also provides exclusive premium themes that requires a license. These are <b>Soho-Light</b>, <b>Soho-Dark</b>, <b>Viva-Light</b>, <b>Viva-Dark</b>, <b>Mira</b> and <b>Nano</b> themes with full SASS code included in <i>src/assets/themes/</i> folder.</p>

                    <h5>Font Family</h5>
                    <p>Font of the theme is configured with the following steps.</p>
                    <ul>
                        <li>Place the font artifacts such as eot, woff files inside the fonts folder.</li>
                        <li>Define the font-face at _fonts.scss.</li>
                        <li>Change the $fontFamily at _variables.scss.</li>
                    </ul>

                    <p>Example theme with Roboto font as used in Material Design.</p>

                    <h6>_fonts.scss</h6>
<CodeHighlight>
{`@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url('./fonts/roboto-v18-latin-300.eot'); /* IE9 Compat Modes */
    src: local('Roboto Light'), local('Roboto-Light'),
        url('./fonts/roboto-v18-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('./fonts/roboto-v18-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
        url('./fonts/roboto-v18-latin-300.woff') format('woff'), /* Modern Browsers */
        url('./fonts/roboto-v18-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
        url('./fonts/roboto-v18-latin-300.svg#Roboto') format('svg'); /* Legacy iOS */
}

@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('./fonts/roboto-v18-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Roboto'), local('Roboto-Regular'),
        url('./fonts/roboto-v18-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('./fonts/roboto-v18-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('./fonts/roboto-v18-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('./fonts/roboto-v18-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('./fonts/roboto-v18-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
}

@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: url('./fonts/roboto-v18-latin-700.eot'); /* IE9 Compat Modes */
    src: local('Roboto Bold'), local('Roboto-Bold'),
        url('./fonts/roboto-v18-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('./fonts/roboto-v18-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('./fonts/roboto-v18-latin-700.woff') format('woff'), /* Modern Browsers */
        url('./fonts/roboto-v18-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('./fonts/roboto-v18-latin-700.svg#Roboto') format('svg'); /* Legacy iOS */
}
`}
</CodeHighlight>

                    <h6>_variables.scss</h6>
<CodeHighlight>
{`$fontFamily:"Roboto","Helvetica Neue",sans-serif;`}
</CodeHighlight>

                    <h5>Scaling</h5>
                    <p>Component sizes including the font size, margins and paddings are defined with relative units (rem) that allows scalability based on the font-size of the document. This also
                        helps PrimeReact components to blend-in perfectly within the rest of your application.</p>

                    <h5>Build</h5>
                    <p>Once the theme is designed and ready for use, it needs to be included in your application. If you have used the visual editor, you may just download it as a css file by clicking the download button. 
                        Second alternative is including the sass api inside your application so that create-react-app can build and include it in your bundle which is
                        exactly the approach used in code editor mode by importing mytheme.scss in index.js. Another alternative would be compiling the sass yourself with the command below
                        and use in your application via a link tag or an import statement e.g. in your index.js entry file to have it bundled. Choice is depending on your requirements.</p>

<CodeHighlight>
{`sass --update src/assets/mytheme:src/assets/mytheme`}
</CodeHighlight>
                </div>
            </div>
        )
    }
}