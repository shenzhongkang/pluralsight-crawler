# pluralsight-crawler
Pull posts of https://www.pluralsight.com

## From Scratch
1. run `npm init -y`, create a default package.json file in your project's root folder.

2. install typescript use `npm i -D typescript`.

3. initialize typescript config file. `tsc --init` or if you never install typescript at global, you can run this command through `./node_modules/typescript/bin/tsc --init`, then you'll see the `tsconfig.json` file created in root path.

4. make a folder named `src`, all our source code will stay at this folder.

5. we need tools to fetch html page, run `npm i superagent`, and for analyzing raw html, run `npm i cheerio` to install cheerio.

6. fix types error, run `npm i @types/superagent @types/cheerio -D`.

7. open package.json, add some necessary scripts. `"build": "tsc", "dev": "ts-node ./src/main.ts"`, `npm i ts-node -D` for local developing.

8. complete the crawler code, then run `npm run dev`, all posts will be collected and generate a json file named `data.json` in root path.