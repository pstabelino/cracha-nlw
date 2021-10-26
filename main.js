/* Estudo para conhecimento sobre o que é API e JSON
e como consumir uma API na prática com JavaScript */

const linksSocialMedia = {
  github: 'pstabelino',
  youtube: 'jakelinygracielly' /* Não tenho canal no youtube */,
  facebook: 'maykbrito' /* Não tenho perfil no facebook */,
  instagram: 'pstabelino',
  twitter: 'phstabelino'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}` /* Template string */
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}` /* Template string */

  // consumo de API do Github

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name /* textContent altera o valor */
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
