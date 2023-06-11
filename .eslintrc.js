module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@next/next/recommended',
        'next',
        'next/core-web-vitals',
        'plugin:prettier/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['prettier', '@typescript-eslint', 'import'],
    rules: {
        'react/no-array-index-key': 'off',
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            { js: 'never', jsx: 'never', ts: 'never', tsx: 'never', '': 'never' }
        ],
        'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before'
                    },
                    {
                        pattern: 'styles/**',
                        group: 'object',
                        position: 'after'
                    }
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                warnOnUnassignedImports: true,
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                }
            }
        ]
    }
};
