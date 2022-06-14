/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const cracoAntDesignPlugin = require('craco-antd');

const cracoAlias = require('craco-alias');
const { parse } = require('sass-variable-parser');
const cracoGraphqlLoader = require('craco-graphql-loader');

// sass variables를 antd customizeTheme에 주입
const variables = parse(fs.readFileSync(path.resolve(__dirname, 'src/styles/variables.scss')).toString(), { camelCase: false });

module.exports = {
	plugins: [
		{
			plugin: cracoAntDesignPlugin,
			options: {
				customizeTheme: variables,
			},
		},
		{
			plugin: cracoAlias,
			options: {
				source: 'tsconfig',
				tsConfigPath: './tsconfig.extend.json',
			},
		},
		{
			plugin: cracoGraphqlLoader,
		},
	],
};
