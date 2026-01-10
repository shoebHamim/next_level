project setup
1. npm init -y
2. tsc --init
3. npm install express --save
4. tsconfig.json -> sourceDir= './src': outDir='./dist'
5. npm i --save-dev @types/node 
6. npm i --save-dev @types/express
7. ts-node ./src/server.ts [need to have it installed]
8. tsc ->  SHIP🚀

⭐ Better way to run when during development 
1. use tsx-> npm i -D tsx => npx tsx src/server.ts
2. use the dev script => package.json ->   "dev": "npx tsx watch src/server.ts"
3. npm run dev ▶️