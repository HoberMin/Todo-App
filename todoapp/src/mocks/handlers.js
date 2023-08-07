import { rest } from "msw";

const handlers = [
  rest.post("/api/login", (req, res, ctx) => {
    // 요청 정보를 콘솔에 출력합니다.
    console.log("로그인 요청:", req.body);
    return res(ctx.status(200), ctx.json(req.body));
  }),

  rest.post("/api/todo", (req, res, ctx) => {
    // 요청 정보를 콘솔에 출력합니다.
    console.log("Todolist 생성", req.body);
    return res(ctx.status(200), ctx.json(req.body));
  }),


export default handlers;
