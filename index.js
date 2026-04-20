// uyga vazifa
// 1
//  const fs = require("fs")
// fs.mkdir("html", { recursive: true }, (err) => {
//   if (err) throw err

//   fs.writeFile("html/index.html", "<h1>Hello World</h1>", (err) => {
//     if (err) throw err
//     console.log("html papka va index.html yaratildi!")
//    })
//  })


// 2
//   const fs = require("fs")
// fs.mkdir("static", { recursive: true }, (err) => {
//   if (err) throw err

//  fs.writeFileSync("static/script.js", "console.log('Hello World')")
//   fs.writeFileSync("static/script.ts", "let msg: string = 'Hello TypeScript';")

//   fs.writeFileSync("static/script.js", "console.log('Hello World')")
//   fs.writeFileSync("static/script.ts", "let msg: string = 'Hello TypeScript';")
//   fs.writeFileSync("static/style.css", "body { font-family: Arial; }")

//   fs.writeFileSync("static/go.mod", "module golang-todo-app\n\ngo 1.20")
//   fs.writeFileSync("static/go.sum", "")
//   fs.writeFileSync("static/main.go", "package main\n\nfunc main() {\n\tprintln(\"Hello Go\")\n}")

//   fs.writeFileSync("static/README.md", "# Golang Todo App")

//   fs.writeFileSync(
//     "static/tsconfig.json",
//     JSON.stringify(
//       {
//         compilerOptions: {
//           target: "ES6",
//           module: "commonjs",
//           strict: true,
//           esModuleInterop: true
//         }
//       },
//       null,
//       2
//     )
//   )

//   console.log("Barcha fayllar yaratildi!")
// })



// 1. Local modul ishlatish
// let qoshish = math.add(15, 5);
// let ayirish = math.subtract(15, 5);
// math.show(qoshish);
// math.show(ayirish);

// // 2. fs moduli bilan ishlash
// fs.writeFileSync("matn.txt", "Salom, dunyo!");
// let text = fs.readFileSync("matn.txt", "utf8");
// console.log(text);

