/* 
Öncelikle YOUR_API_KEY'i kendi api keymiz ile
*/

export const apiKey = '48f9f044';

/*

Görev: DisplayMovieInfo fonksiyonunu aşağıdaki isterlere göre oluşturun.

1- Bir tane argüman alacak: film datasını içeren bir obje.
2- Eğer bu objenin içindeki 'Response' özelliği string olarak "True" ise aşağıdaki movieInfo id'li div element'ini dönecek.

<div id="movieInfo">
  <h2>{Title}</h2>
  <p><span>Year:</span> {Year}</p>
  <p><span>Genre:</span> {Genre}</p>
  <p><span>Plot:</span> {plot}</p>
  <img src="{Poster}" alt="{Title}">
</div>

Eğer 'Response' !== 'True' ise aşağıdaki paragraf'ı dönecek

<p>No movie found with that title.</p>

*/

export function DisplayMovieInfo(movieInfo) {
  if (movieInfo.Response === 'True') {
    const card = document.createElement('div');
    card.setAttribute('id', 'movieInfo');

    const title = document.createElement('h2');
    title.textContent = movieInfo.Title;

    const span1 = document.createElement('span');
    span1.textContent = 'Year:';
    const p1 = document.createElement('p');
    p1.append(span1);
    p1.append(' ' + movieInfo.Year);

    const span2 = document.createElement('span');
    span2.textContent = 'Genre:';
    const p2 = document.createElement('p');
    p2.append(span2);
    p2.append(' ' + movieInfo.Genre);

    const span3 = document.createElement('span');
    span3.textContent = 'Plot:';
    const p3 = document.createElement('p');
    p3.append(span3);
    p3.append(' ' + movieInfo.Plot);

    const image = document.createElement('img');
    image.src = movieInfo.Poster;
    image.alt = movieInfo.Title + ' Poster';

    card.append(title, p1, p2, p3, image);
    return card;
  } else {
    const p1 = document.createElement('p');
    p1.textContent = 'No movie found with that title.';
    return p1;
  }
}
