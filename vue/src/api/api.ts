import {User} from "@/types/user";
import {Repo} from "@/types/repo";

export async function getUser(username: string): Promise<User> {
  return await (await fetch(
    "https://api.github.com/users/" + username)).json();
}

export async function getRepos(username: string): Promise<Repo[]> {
  return await (await fetch(
    `https://api.github.com/users/${username}/repos`)).json();
}
