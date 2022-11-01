import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";

const numeros =  [4,5,33,7,94,56];

const maximo = () =>{
    const NumMax= Math.max(...numeros);
    return NumMax;
}
const minimo = () => {
  const NumMin= Math.min(...numeros);
  return NumMin;
}
console.log(minimo());

const promedio = () => {
  let total = 0;

  for(let i = 0; i <= numeros.length; i++) {

  }


}
console.log(promedio())

const app = new Application();
const router = new Router();

router.get("/", (ctx: Context) => {
  ctx.response.body = "hola mundo";
});

router.get("/hola", (ctx: Context) => {
  ctx.response.status = 200;
  ctx.response.body = `
  <!DOCTYPE html>
  <html>
    <head><title>Hello oak!</title><head>
    <body>
      <h1 style="color: blue;">Numeros:${numeros}</h1>
      <h1 style="color: blue> Maximo : ${maximo()} </h1>
      <h1> Minimo : ${minimo()} </h1>
      
    </body>
  </html>
  `;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 3000 });
console.log("Server listening http:127.0.0.1:3000");