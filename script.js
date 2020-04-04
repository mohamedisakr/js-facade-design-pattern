// https://www.youtube.com/watch?v=fHPa5xzbpaA

function getUsers() {
  return getFetch("https://jsonplaceholder.typicode.com/users");
  //   return fetch("https://jsonplaceholder.typicode.com/users", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" }
  //   }).then(res => res.json());
}
function getUserPosts(userId) {
  return getFetch("https://jsonplaceholder.typicode.com/posts", { userId });
  //   return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" }
  //   }).then(res => res.json());
}

getUsers().then(users => {
  users.forEach(user => {
    getUserPosts(user.id).then(posts => {
      console.log(`Username : ${user.name}, No. of posts ${posts.length}`);
    });
  });
});

function getFetch(url, params = {}) {
  const queryString = Object.entries(params)
    .map(param => `${param[0]}=${param[1]}`)
    .join("&");
  return fetch(`${url}?${queryString}`).then(res => res.json());
}
