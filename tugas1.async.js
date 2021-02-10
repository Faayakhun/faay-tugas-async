

const getDataApi = () => {
    const api = "https://api.github.com/users/faayakhun";
    fetch(api)
    .then((response) => response.json())
    .then ((data) => display(data))
    .catch((error) => console.log(error))
}

let display = (result) => {
    let github = document.querySelector("#dataGithub")
    github.innerHTML = `
    <div class="git"><img style="width: 200px; height: 200px;" src="${result.avatar_url}" alt="">
        <p>Nama : ${result.login}</p>
        <p>Bio : ${result.bio}</p>
        <p>Followers : ${result.followers}</p>
        <p>Following : ${result.following}</p>
      </div>`;
}

getDataApi();