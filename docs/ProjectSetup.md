


## Getting Started

If you want to develop FullStack locally you must follow the following instructions:

1. Clone fullstack-pro locally
```
git clone https://github.com/cdmbase/fullstack-pro
cd fullstack-pro
```

2. Install dependencies and build packages.
```
npm install && npm run build
```

3. Setup environment file
```
cp ./config/development/dev.env.sample ./config/development/dev.env
```

You may need to set personalized values in the `dev.env` file.

4. Start server MongoDB and Redis (look for Installation Section)

> redis-server

> mongod

5. Start both client and server together
```
npm start
```

The graphql server endpoints are
>http://localhost:8080/graphql

The browser server endopoint is
>http://localhost:3000


## How to run with HotReload for live changes both in the server and browser?

To run build with watch, for auto reloading changes into the server to be productive during development.

```
npm run watch
```

The above command will run build with `watch` argument so any change in the files are automaically rebuild.
If the project have lot of `packages`, it takes a lot of OS resources for the `watch` to run. You can just run watch
for the targeted packages you are currently working by following command.

```
lerna exec --scope=<package name> npm run watch
```

- here `<package name>` will be the package you working on currently. If you have multiple packages, then you need to run it multiple times for each package.

## How to take changes from the branch?

Most of the changes at code level can be taken using `git` command.

But in some cases when `packages` versions are updated, to avoid getting installed duplicate pacakges due to monrepo architecture you need to first clean existing `node_modules` and reinstall again. This can be done with following command.

```
npm run clean:force && git pull <branch_name> && npm install && npm run build
```
- here <branch_name> should be replaced with the branch you getting updates.

## Installation of Prerequisties servers

Install redis and setup an instance with default settings on default port,

* Install Redis on a Linux, OS X, or a similar Posix operating system
