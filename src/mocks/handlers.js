import { rest } from "msw";
import { data } from "./data";

let games = [...data];
let id = games[games.length - 1].id;

export function resetData() {
  games = [...data];
  id = games[games.length - 1].id;
}

export const handlers = [
  rest.get("http://localhost:4000/games", (req, res, ctx) => {
    return res(ctx.json(games));
  }),
  rest.post("http://localhost:4000/games", (req, res, ctx) => {
    id++;
    const item = { id, ...req.body };
    games.push(game);
    return res(ctx.json(item));
  }),
  rest.delete("http://localhost:4000/games/:id", (req, res, ctx) => {
    const { id } = req.params;
    if (isNaN(parseInt(id))) {
      return res(ctx.status(404), ctx.json({ message: "Invalid ID" }));
    }
    games = games.filter((q) => q.id !== parseInt(id));
    return res(ctx.json({}));
  }),
  rest.patch("http://localhost:4000/games/:id", (req, res, ctx) => {
    const { id } = req.params;
    if (isNaN(parseInt(id))) {
      return res(ctx.status(404), ctx.json({ message: "Invalid ID" }));
    }
    const itemIndex = games.findIndex((game) => game.id === parseInt(id));
    games[itemIndex] = { ...games[itemIndex], ...req.body };
    return res(ctx.json(games[itemIndex]));
  }),
];
