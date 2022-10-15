module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'next'
    ],
    plugins: ['prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'prettier/prettier': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never'
            }
        ],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: 'next/**',
                        group: 'builtin',
                        position: 'before'
                    },
                    {
                        pattern: 'react',
                        group: 'builtin',
                        position: 'before'
                    },
                    {
                        pattern: 'slices/**',
                        group: 'internal',
                        position: 'before'
                    },
                    {
                        pattern: 'hooks',
                        group: 'internal',
                        position: 'before'
                    },
                    {
                        pattern: 'assets/**',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: 'configs/**',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: 'constants/**',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: 'styles/**',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: 'utils/**',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: '@heroicons/**',
                        group: 'object',
                        position: 'after'
                    },
                    {
                        pattern: '@fortawesome/**',
                        group: 'object',
                        position: 'after'
                    },
                    {
                        pattern: '*.+(css|scss)',
                        patternOptions: {
                            dot: true,
                            nocomment: true,
                            matchBase: true
                        },
                        group: 'object',
                        position: 'after'
                    }
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                },
                warnOnUnassignedImports: true
            }
        ],
        'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'no-nested-ternary': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'import/no-extraneous-dependencies': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'react/no-array-index-key': 'off'
    }
};
