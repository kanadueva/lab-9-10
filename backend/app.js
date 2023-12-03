const http = require("http");

const PORT = 5000;

const server = http.createServer((request, response) => {
  // Заголовки ответа, чтобы отправлять POST-запросы с типом ответа application/json.
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  response.setHeader('Access-Control-Max-Age', 2592000);
  response.setHeader('Access-Control-Allow-Headers', 'content-type');

  // Браузер может прислать "предзапрос" для POST с типом appliction/json. Обработаем его 204 статусом.
  if (request.method === 'OPTIONS') {
    response.writeHead(204)
    response.end()
    return;
  }


  // Данные могут подгрузиться не сразу, поэтому считаем их по кускам и соеденим в строку.
  let body = "";
  request
    .on("data", function (chunk) {
      body += chunk;
    })
    .on("end", function () {
      if (body) {
        console.log(body);
        response.writeHead(200)
        response.end(JSON.stringify({ result: "Форма успешно обработана сервером!" }));
      }
    });
});

server.listen(PORT, () => console.log(`Сервер запущен по адресу http://localhost:${PORT}`));
