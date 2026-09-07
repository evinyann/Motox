/* =========================================
   MOTOX MOTORCYCLE DATABASE
========================================= */


const bikes = [

    /* =========================
       YAMAHA
    ========================= */

    {
        name: "Yamaha R3",
        brand: "YAMAHA",
        category: "SPORT",
        price: "$5,499",
        cc: "321",
        hp: "42",
        speed: "180+"
    },

    {
        name: "Yamaha R7",
        brand: "YAMAHA",
        category: "SUPERSPORT",
        price: "$9,399",
        cc: "689",
        hp: "73",
        speed: "230+"
    },

    {
        name: "Yamaha R1",
        brand: "YAMAHA",
        category: "SUPERSPORT",
        price: "$19,699",
        cc: "998",
        hp: "200",
        speed: "299"
    },

    {
        name: "Yamaha MT-03",
        brand: "YAMAHA",
        category: "NAKED",
        price: "$4,999",
        cc: "321",
        hp: "42",
        speed: "180+"
    },

    {
        name: "Yamaha MT-07",
        brand: "YAMAHA",
        category: "HYPER NAKED",
        price: "$8,599",
        cc: "689",
        hp: "73",
        speed: "210+"
    },

    {
        name: "Yamaha MT-09",
        brand: "YAMAHA",
        category: "HYPER NAKED",
        price: "$10,899",
        cc: "890",
        hp: "117",
        speed: "240+"
    },

    {
        name: "Yamaha MT-09 SP",
        brand: "YAMAHA",
        category: "HYPER NAKED",
        price: "$12,699",
        cc: "890",
        hp: "117",
        speed: "240+"
    },

    {
        name: "Yamaha MT-10",
        brand: "YAMAHA",
        category: "HYPER NAKED",
        price: "$14,999",
        cc: "998",
        hp: "165",
        speed: "250+"
    },

    {
        name: "Yamaha MT-10 SP",
        brand: "YAMAHA",
        category: "HYPER NAKED",
        price: "$17,499",
        cc: "998",
        hp: "165",
        speed: "250+"
    },

    {
        name: "Yamaha Ténéré 700",
        brand: "YAMAHA",
        category: "ADVENTURE",
        price: "$10,999",
        cc: "689",
        hp: "72",
        speed: "190+"
    },

    {
        name: "Yamaha Ténéré 700 World Raid",
        brand: "YAMAHA",
        category: "ADVENTURE",
        price: "$12,999",
        cc: "689",
        hp: "72",
        speed: "190+"
    },

    {
        name: "Yamaha XSR700",
        brand: "YAMAHA",
        category: "SPORT HERITAGE",
        price: "$8,599",
        cc: "689",
        hp: "73",
        speed: "200+"
    },

    {
        name: "Yamaha XSR900",
        brand: "YAMAHA",
        category: "SPORT HERITAGE",
        price: "$10,599",
        cc: "890",
        hp: "117",
        speed: "230+"
    },

    {
        name: "Yamaha TRACER 9",
        brand: "YAMAHA",
        category: "TOURING",
        price: "$12,599",
        cc: "890",
        hp: "117",
        speed: "220+"
    },

    {
        name: "Yamaha FJR1300ES",
        brand: "YAMAHA",
        category: "TOURING",
        price: "$18,299",
        cc: "1298",
        hp: "141",
        speed: "240+"
    },


    /* =========================
       BMW
    ========================= */

    {
        name: "BMW S 1000 RR",
        brand: "BMW",
        category: "SUPERBIKE",
        price: "$20,890",
        cc: "999",
        hp: "205",
        speed: "303"
    },

    {
        name: "BMW M 1000 RR",
        brand: "BMW",
        category: "SUPERBIKE",
        price: "$36,490",
        cc: "999",
        hp: "205",
        speed: "304"
    },

    {
        name: "BMW S 1000 R",
        brand: "BMW",
        category: "ROADSTER",
        price: "From $16,000",
        cc: "999",
        hp: "170",
        speed: "250+"
    },

    {
        name: "BMW M 1000 R",
        brand: "BMW",
        category: "HYPER NAKED",
        price: "From $22,000",
        cc: "999",
        hp: "205",
        speed: "280+"
    },

    {
        name: "BMW S 1000 XR",
        brand: "BMW",
        category: "SPORT TOURING",
        price: "From $18,000",
        cc: "999",
        hp: "170",
        speed: "250+"
    },

    {
        name: "BMW M 1000 XR",
        brand: "BMW",
        category: "SPORT TOURING",
        price: "From $25,000",
        cc: "999",
        hp: "201",
        speed: "278"
    },

    {
        name: "BMW R 1300 GS",
        brand: "BMW",
        category: "ADVENTURE",
        price: "From $19,000",
        cc: "1300",
        hp: "145",
        speed: "220+"
    },

    {
        name: "BMW R 1300 GS Adventure",
        brand: "BMW",
        category: "ADVENTURE",
        price: "From $22,000",
        cc: "1300",
        hp: "145",
        speed: "220+"
    },

    {
        name: "BMW R 1300 R",
        brand: "BMW",
        category: "ROADSTER",
        price: "From $19,000",
        cc: "1300",
        hp: "145",
        speed: "225+"
    },

    {
        name: "BMW R 1300 RS",
        brand: "BMW",
        category: "SPORT TOURING",
        price: "From $20,000",
        cc: "1300",
        hp: "145",
        speed: "230+"
    },

    {
        name: "BMW R 1300 RT",
        brand: "BMW",
        category: "TOURING",
        price: "From $22,000",
        cc: "1300",
        hp: "145",
        speed: "220+"
    },

    {
        name: "BMW R 12 nineT",
        brand: "BMW",
        category: "HERITAGE",
        price: "From $17,000",
        cc: "1170",
        hp: "109",
        speed: "215+"
    },

    {
        name: "BMW R 12 G/S",
        brand: "BMW",
        category: "HERITAGE",
        price: "From $18,000",
        cc: "1170",
        hp: "109",
        speed: "200+"
    },

    {
        name: "BMW F 900 R",
        brand: "BMW",
        category: "ROADSTER",
        price: "From $10,000",
        cc: "895",
        hp: "105",
        speed: "215+"
    },

    {
        name: "BMW F 900 XR",
        brand: "BMW",
        category: "ADVENTURE SPORT",
        price: "From $12,000",
        cc: "895",
        hp: "105",
        speed: "200+"
    },


    /* =========================
       KAWASAKI
    ========================= */

    {
        name: "Kawasaki Ninja 400",
        brand: "KAWASAKI",
        category: "SPORT",
        price: "≈ $5,000",
        cc: "399",
        hp: "45",
        speed: "190+"
    },

    {
        name: "Kawasaki Ninja 500",
        brand: "KAWASAKI",
        category: "SPORT",
        price: "≈ $5,500",
        cc: "451",
        hp: "51",
        speed: "195+"
    },

    {
        name: "Kawasaki Ninja ZX-4RR",
        brand: "KAWASAKI",
        category: "SUPERSPORT",
        price: "≈ $9,900",
        cc: "399",
        hp: "77",
        speed: "250+"
    },

    {
        name: "Kawasaki Ninja ZX-6R",
        brand: "KAWASAKI",
        category: "SUPERSPORT",
        price: "≈ $11,300",
        cc: "636",
        hp: "127",
        speed: "260+"
    },

    {
        name: "Kawasaki Ninja ZX-10R",
        brand: "KAWASAKI",
        category: "SUPERBIKE",
        price: "≈ $18,000",
        cc: "998",
        hp: "203",
        speed: "299"
    },

    {
        name: "Kawasaki Ninja H2",
        brand: "KAWASAKI",
        category: "HYPERSPORT",
        price: "≈ $32,000",
        cc: "998",
        hp: "228",
        speed: "337+"
    },

    {
        name: "Kawasaki Ninja H2R",
        brand: "KAWASAKI",
        category: "TRACK HYPERSPORT",
        price: "≈ $59,000",
        cc: "998",
        hp: "310+",
        speed: "400+"
    },

    {
        name: "Kawasaki Z400",
        brand: "KAWASAKI",
        category: "NAKED",
        price: "≈ $5,000",
        cc: "399",
        hp: "45",
        speed: "190+"
    },

    {
        name: "Kawasaki Z500",
        brand: "KAWASAKI",
        category: "NAKED",
        price: "≈ $5,500",
        cc: "451",
        hp: "51",
        speed: "195+"
    },

    {
        name: "Kawasaki Z900",
        brand: "KAWASAKI",
        category: "SUPERNAKED",
        price: "≈ $9,900",
        cc: "948",
        hp: "125",
        speed: "240+"
    },

    {
        name: "Kawasaki Z H2",
        brand: "KAWASAKI",
        category: "SUPERNAKED",
        price: "≈ $21,000",
        cc: "998",
        hp: "197",
        speed: "240+"
    },

    {
        name: "Kawasaki Versys 650",
        brand: "KAWASAKI",
        category: "ADVENTURE",
        price: "≈ $9,000",
        cc: "649",
        hp: "67",
        speed: "200+"
    },

    {
        name: "Kawasaki Versys 1000",
        brand: "KAWASAKI",
        category: "ADVENTURE",
        price: "≈ $18,000",
        cc: "1043",
        hp: "120",
        speed: "230+"
    },

    {
        name: "Kawasaki Vulcan S",
        brand: "KAWASAKI",
        category: "CRUISER",
        price: "≈ $7,900",
        cc: "649",
        hp: "61",
        speed: "190+"
    },

    {
        name: "Kawasaki Eliminator 500",
        brand: "KAWASAKI",
        category: "CRUISER",
        price: "≈ $7,000",
        cc: "451",
        hp: "45",
        speed: "170+"
    }

];


/* =========================================
   CREATE CARDS
========================================= */


const grid = document.getElementById("bikeGrid");


function createBikeCard(bike) {

    const card = document.createElement("article");

    card.className = "bike-card";

    card.dataset.name = bike.name;

    card.dataset.brand = bike.brand;


    card.innerHTML = `

        <div class="bike-image">

            <span class="brand">
                ${bike.brand}
            </span>

            <div class="bike-placeholder">
                ${bike.name}
            </div>

        </div>


        <div class="bike-info">

            <p class="category">
                ${bike.category}
            </p>

            <h3>
                ${bike.name}
            </h3>


            <div class="price">

                <span class="price-label">
                    PRICE
                </span>

                ${bike.price}

            </div>


            <div class="specs">

                <div>
                    <strong>
                        ${bike.cc}
                    </strong>

                    <small>
                        CC
                    </small>
                </div>


                <div>
                    <strong>
                        ${bike.hp}
                    </strong>

                    <small>
                        HP
                    </small>
                </div>


                <div>
                    <strong>
                        ${bike.speed}
                    </strong>

                    <small>
                        KM/H
                    </small>
                </div>

            </div>


            <button
                onclick="showBike(
                    '${bike.name}',
                    '${bike.cc}cc • ${bike.hp} HP • ${bike.speed} km/h • ${bike.price}'
                )">

                Տեսնել →

            </button>

        </div>

    `;


    grid.appendChild(card);
}


/* CREATE ALL CARDS */

bikes.forEach(createBikeCard);


/* =========================================
   SEARCH
========================================= */


function searchBikes() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();


    const cards =
        document.querySelectorAll(".bike-card");


    cards.forEach(card => {

        const name =
            card.dataset.name.toLowerCase();


        if (name.includes(input)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* =========================================
   BRAND FILTER
========================================= */


function filterBikes(brand, button) {

    const cards =
        document.querySelectorAll(".bike-card");


    /* Remove active */

    document
        .querySelectorAll(".filter")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    /* Activate selected */

    button.classList.add("active");


    /* Filter */

    cards.forEach(card => {

        const cardBrand =
            card.dataset.brand;


        if (
            brand === "ALL" ||
            cardBrand === brand
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });


    /* Clear search */

    document
        .getElementById("searchInput")
        .value = "";

}


/* =========================================
   MOBILE MENU
========================================= */


function toggleMenu() {

    document
        .querySelector(".nav")
        .classList.toggle("active");

}


/* =========================================
   MODAL
========================================= */


function showBike(name, specs) {

    document
        .getElementById("modalTitle")
        .textContent = name;


    document
        .getElementById("modalText")
        .textContent =
        "Բնութագրեր՝ " + specs;


    document
        .getElementById("modal")
        .style.display = "flex";

}


/* CLOSE MODAL */

function closeModal() {

    document
        .getElementById("modal")
        .style.display = "none";

}


/* CLICK OUTSIDE MODAL */

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("modal");


    if (event.target === modal) {

        closeModal();

    }

});


/* =========================================
   CONTACT FORM
========================================= */


function sendMessage(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    alert(
        "Շնորհակալություն, " +
        name +
        "։ Ձեր հաղորդագրությունը ուղարկված է։"
    );


    event.target.reset();

}