import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";

const languageOptions = {
	globals: {
		...globals.node,
		...globals.browser,
		...globals.jest,
	},
	ecmaVersion: "latest",
	sourceType: "module",
	parser: tsParser,
};

const pluginsOptions = {
	"import/parsers": tsParser,
	prettier: prettierPlugin,
};

export default [
	{ files: ["**/*.{js,mjs,cjs,ts}"] },
	{ ignores: ["**/node_modules", "**/dist", "**/coverage", "webpack.config.mjs"] },
	{
		plugins: {
			...pluginsOptions,
		},
	},
	{
		languageOptions: {
			...languageOptions,
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		rules: {
			"@typescript-eslint/explicit-function-return-type": [
				"error",
				{
					allowExpressions: false,
					allowTypedFunctionExpressions: true,
					allowHigherOrderFunctions: false,
					allowDirectConstAssertionInArrowFunctions: false,
					allowConciseArrowFunctionExpressionsStartingWithVoid: false,
				},
			],
			"no-console": "off",
		},
	},
];
