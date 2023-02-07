# Turborepo starter

## Quick Start

To get it running, follow the steps below:

### Setup dependencies

```diff
# Install dependencies
yarn

# login to vercel platform & retrieve dev .env file
npx vercel login && npx vercel env pull

# if you do not have access to the project in vercel,
# copy the .env.sample into .env and provide the values

# run portal from root
yarn dev

# run storybook
yarn ui
```

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

```
.github
  ├─ pull_request_template
  ├─ CODEOWNERS
  └─ workflows
        └─ CI for DB deployments & changes
.husky
  └─ precommit hooks
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  ├─ storybook
  |   └─ component development from ui with tailwind css support
  └─ portal
      ├─ Next.js 13
      ├─ React 18
      ├─ TailwindCSS
      └─ E2E Typesafe API Server & Client
packages
 ├─ api
 |   └─ tRPC v10 router definition
 ├─ auth
 |   └─ authentication using next-auth.
 ├─ db
 |  └─ typesafe db-calls using Prisma
 ├─ config
 |  └─ Config files for eslint, tsconfig and tailwind
 └─ ui
     ├─ class variance authority
     └─ tailwind ui
prisma
 ├─ migrations
 |   └─ generated migrations based on schema changes
 └─ schema.prisma
    └─ Prisma schema file for database models
```

## Merge strategy

1. Branch off of staging
2. Open PR into staging branch
3. Create & include changeset for changed packages
4. Merge into staging
5. Any deploy from staging into main will be a release & will be a production deploy
