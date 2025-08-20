// ------------------------------------------------------------------------------------------

import type { Options } from 'semantic-release';

// ------------------------------------------------------------------------------------------

const semanticReleaseConfig: Options = {
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        [
            '@semantic-release/release-notes-generator',
            {
                preset: 'angular',
                releaseRules: [
                    { type: 'docs', release: 'patch' },
                    { type: 'chore', release: 'patch' },
                    { type: 'style', release: 'patch' },
                    { type: 'refactor', release: 'patch' },
                    { type: 'feat', release: 'minor' },
                    { type: 'fix', release: 'patch' },
                    { type: 'perf', release: 'patch' },
                    { breaking: true, release: 'major' },
                ],
                parserOpts: {
                    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
                },
            },
        ],
        '@semantic-release/changelog',
        [
            '@semantic-release/git',
            {
                assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
                message: 'chore(release): ${nextRelease.version} [skip ci]',
            },
        ],
        '@semantic-release/github',
    ],
};

// ------------------------------------------------------------------------------------------

export default semanticReleaseConfig;

// ------------------------------------------------------------------------------------------
