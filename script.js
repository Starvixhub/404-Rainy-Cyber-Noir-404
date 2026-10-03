const rainContainer =
    document.getElementById("rain");

const homeButton =
    document.getElementById("homeButton");


/* =========================
   CREATE RAIN
========================= */

function createRain() {

    const drop =
        document.createElement("span");

    drop.classList.add("drop");

    drop.style.left =
        Math.random() * 110 + "%";

    drop.style.height =
        Math.random() * 50 + 40 + "px";

    drop.style.opacity =
        Math.random() * 0.6 + 0.2;

    drop.style.animationDuration =
        Math.random() * 0.5 + 0.5 + "s";

    drop.style.animationDelay =
        Math.random() * -2 + "s";

    rainContainer.appendChild(drop);

}


/* Generate 180 rain drops */

for (let i = 0; i < 180; i++) {
    createRain();
}


/* =========================
   HOME BUTTON
========================= */

homeButton.addEventListener(
    "click",
    () => {

        document.body.style.transition =
            "opacity 0.8s ease";

        document.body.style.opacity = "0";

        setTimeout(() => {

            window.location.href = "/";

        }, 800);

    }
);


/* =========================
   RAIN SPLASH CURSOR
========================= */

document.addEventListener(
    "click",
    (event) => {

        for (let i = 0; i < 8; i++) {

            const splash =
                document.createElement("span");

            splash.style.position = "fixed";

            splash.style.left =
                event.clientX + "px";

            splash.style.top =
                event.clientY + "px";

            splash.style.width = "3px";
            splash.style.height = "3px";

            splash.style.borderRadius =
                "50%";

            splash.style.background =
                "#8ddcff";

            splash.style.boxShadow =
                "0 0 8px #8ddcff";

            splash.style.pointerEvents =
                "none";

            splash.style.zIndex = "30";

            splash.style.transition =
                "all .5s ease";

            const angle =
                Math.random() * Math.PI * 2;

            const distance =
                Math.random() * 35 + 15;

            document.body.appendChild(
                splash
            );

            requestAnimationFrame(() => {

                splash.style.transform =
                    `
                    translate(
                        ${Math.cos(angle) * distance}px,
                        ${Math.sin(angle) * distance}px
                    )
                    scale(0)
                    `;

                splash.style.opacity = "0";

            });

            setTimeout(() => {
                splash.remove();
            }, 500);

        }

    }
);