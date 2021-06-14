const data = [
    {
        title: "The Shining",
        year: 1980,
        rating: 8.4,
        description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future."
    },
    {
        title: "Barry Lyndon",
        year: 1975,
        rating: 8.1,
        description: "An Irish rogue wins the heart of a rich widow and assumes her dead husband's aristocratic position in 18th-century England."
    },
    {
        title: "2001: A Space Odyssey",
        year: 1968,
        rating: 8.3,
        description: "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000."
    },
    {
        title: "A Clockwork Orange",
        year: 1971,
        rating: 8.3,
        description: "In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned."
    }
];

/* function movieHTML(m, sa, ta) {
    console.log(sa);
    console.log(ta);
    return `
        <section class="movie">
            <h2>${m.title}</h2>
            <time>${m.year}</time>
            <p>${m.description}</p>
        </section>
        `;
}; */

const view = {
    movie: function (m, sa, ta) {
        console.log(sa);
        console.log(ta);
        return `
            <section class="movie">
                <h2>${m.title}</h2>
                <time>${m.year}</time>
                <p>${m.description}</p>
            </section>
            `;
    },

    years : function(y) {
        return `
        <option>${y}</option>
        `
    }
}


function _load() {
    /* console.log(yt); */
    /* console.log(data); */

 /*    var yearTextRequired = true;


    var yearText = {
        en: "This movie was released in:",
        hu: "EBben az évben adták ki ezt a filmet:"
    };



    if (yearTextRequired === true) {
        console.log(yt);
        var yt = yearText.en;
        console.log(yt);
    }; */

    /*   const movieHTML = `
              <section class="movie">
                  <h2>${movie.title}</h2>
                  <time>${yt} ${movie.year}</time>
                  <p>${movie.description}</p>
              </section>
        `; */

    const rootElement = document.getElementById('root');

    rootElement.insertAdjacentHTML("beforebegin", `
        <select>
            <option disabled selected>Select a year</option>
        </select>
    `)
    
    for (const movie of data) {
        let anotherText = "third argument";
       /*  rootElement.insertAdjacentHTML("beforeend", movieHTML(movie, "second argument", anotherText)); */
        rootElement.insertAdjacentHTML("beforeend", view.movie(movie, "second argument", anotherText));

        document.querySelector("select").insertAdjacentHTML("beforeend", view.years(movie.year));    
    };

    /* console.log(yt); */



    /*    rootElement.insertAdjacentHTML("beforeend", movieHTML(movie)); */

}

/* console.log(yearText) */
window.addEventListener("load", _load);