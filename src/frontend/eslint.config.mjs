import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),

    {
        files: ["**/*.js", "**/*.ts", "**/*.tsx"],
        rules: {
            "no-restricted-syntax": [
                "warn",
                {
                    selector: "Literal[value^='http://']",
                    message: "Use HTTPS instead of HTTP for external resources.",
                },
            ],
        },
    },
];

export default eslintConfig;
