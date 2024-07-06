const text = document.getElementById('text');
const num = document.getElementById('num');
async function getPosts()
{
    try
    {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      text.innerHTML = `"${data.slip.advice}"`;
      num.innerHTML =  `ADVICE #${data.slip.id}`;
    }
    catch (err)
    {
        text.innerHTML = `Error: ${err.message}`;
    }
};
getPosts();