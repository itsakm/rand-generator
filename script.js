function fetchUser()
{
    fetch('https://randomuser.me/api/')
    .then((res) => res.json())
    .then((data) => {
        displayUser(data.results[0])
    });

}


function displayUser(user)
{
    const userDisplay = document.querySelector('#user');
    console.log(user.gender)
    if(user.gender === 'female')
    {
        document.body.style.backgroundColor = 'rebeccapurple';
    }
    else 
    {
        document.body.style.backgroundColor = 'steelblue';
    }
}


fetchUser();