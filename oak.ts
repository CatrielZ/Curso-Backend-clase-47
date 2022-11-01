import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";
import { bgGreen, bgRed, bgWhite, bgYellow, blue, brightGreen, brightRed, brightYellow, green, white, yellow, red } from "https://deno.land/std@0.152.0/fmt/colors.ts";



const numeros =  [4,5,33,7,94,56];

const maximo = () =>{
    const NumMax= Math.max(...numeros);
    return NumMax;
}
const minimo = () => {
  const NumMin= Math.min(...numeros);
  return NumMin;
}


const promedio = () => {
  let sumatoria = numeros.reduce(function(a, b){
    return a + b;
  }, 0);

  let promedio = sumatoria / numeros.length;
  return promedio;
}
console.log(bgWhite(blue("Numeros " + numeros)))
console.log(bgWhite(brightYellow(yellow("Mínimo: " + minimo()))))
console.log(bgWhite(brightRed(red("Maximo: " + maximo()))))
console.log(bgWhite(brightGreen(green("Promedio: " + promedio()))))

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
      <h1 style="color: red;> Maximo : ${maximo()} </h1>
      <h1 style="color: yellow;> Minimo : ${minimo()} </h1>
      <h1 style="color: green;> Promedio : ${promedio()} </h1>
      
    </body>
  </html>
  `;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 3000 });
console.log("Server listening http:127.0.0.1:3000");