console.log('news')
// ec0741ff1f4d4610980c583b24e57940
let source = 'bbc-news ';

let newsAccordian = document.getElementById('newsAccordion');
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=ec0741ff1f4d4610980c583b24e57940`, true)

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element , index) {
            let news = `<div class="card">
                    <div class="card-header" id="heading${index}">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                aria-expanded="true" aria-controls="collapse${index}">
                                ${element["title"]}
                            </button>
                        </h2>
                    </div>
                    <div id="collapse${index}" class="collapse" aria-labelledby="headingOne"
                        data-parent="#newsAccordion">
                        <div class="card-body">
                            ${element["content"]} .  <a href="${element['url']}" target= "_blank">Read More</a>
            
                        </div>
                    </div>
                </div> `;
                newsHtml += news;
             });
             newsAccordion.innerHTML = newsHtml;
}}
xhr.send()



