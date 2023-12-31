import { rest } from "msw";

const handlers = [
  rest.post("/api/auth", (req, res, ctx) => {
    // 요청 정보를 콘솔에 출력합니다.
    console.log("회원가입 요청:", req.body);
    return res(
      ctx.status(200),
      ctx.json({ message: "회원가입이 성공적으로 완료되었습니다." })
    );
  }),

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

  rest.delete("/api/todo", (req, res, ctx) => {
    // 요청 정보를 콘솔에 출력합니다.
    console.log("TodoItem 삭제:", req.body);
    return res(ctx.status(200), ctx.json({ message: "삭제성공" }));
  }),

  rest.put("/api/todo", (req, res, ctx) => {
    // 요청 정보를 콘솔에 출력합니다.
    console.log("Todo ON/OFF", req.body);
    return res(ctx.status(200), ctx.json(req.body));
  }),
];

export default handlers;
