import {getRepos, getUser} from "@/api/api";

async function main(): Promise<string> {
  const name = "junron";
  const user = await getUser(name);
  const repos = await getRepos(name);
  const starredRepos = repos.filter(repo => {
    return repo.stargazers_count > 0;
  });
  const repoNames = repos.map(repo => repo.name)
    .join(", ");
  return repoNames;
}

export default {
  main
};
