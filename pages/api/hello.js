// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const user = {
  name: "Souvik Das",
  password: "hello123"
}

export default function handler(request, response) {
  console.log(request)
  let responseObj;
  let requestName = request.body.name;
  let requestPassword = request.body.password;
  if (requestName == user.name) {
    if (requestPassword == user.password) {
      responseObj = { message : "User credentials valid"}
    } else {
      responseObj = { message : "Invalid password"}
    }
  } else {
    responseObj = { message: "invalid username"}
  }
  response.status(200).json(responseObj)
}
