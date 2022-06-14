/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const { createInterfacesFromObject } = require('typescript-interface-generator');
const { parse } = require('sass-variable-parser');
const variables = parse(fs.readFileSync(path.resolve(__dirname, 'src/styles/variables.scss')).toString());

const theme = createInterfacesFromObject('DefaultTheme', { ...variables, mobileMedia: '', headerMedia: '' });

fs.writeFile(
	'./src/types/styled.d.ts',
	`
  import 'styled-components';
  
  declare module 'styled-components' {
    export ${theme}
  }
`,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	function (err) {}
);
