import { Router } from "express";

const githubRouter = Router();

githubRouter.get('/', (request, response) => {
  return response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

githubRouter.get('/signin/callback', (request, response) => {
  const { code } = request.query;

  return response.json({ code });
})

export { githubRouter };