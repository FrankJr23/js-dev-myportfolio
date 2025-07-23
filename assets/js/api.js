

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/FrankJr23/js-dev-myportfolio/refs/heads/main/Data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}