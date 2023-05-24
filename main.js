const myButton = document.getElementById('button')
const clearButton = document.getElementById('clear')
const active = document.getElementById('active')
const recovered = document.getElementById('recovered')
const newcases = document.getElementById('newcases')
const totalcases = document.getElementById('totalcases')
const death = document.getElementById('death')
const totaltest = document.getElementById('totaltest')


function Buttonku() {

          myButton.addEventListener('click', (event) => {
                    event.preventDefault()
                    fetchCovidData()
          })
          clearButton.addEventListener('click', (event) => {
                    event.preventDefault()
                    hapusdata()
          })

}

function fetchCovidData() {
          const options = {
                    method: 'GET',
                    headers: {
                              'X-RapidAPI-Key': 'f1c0ef4ebbmshaf32702afe15e93p170100jsna3647bc30b48',
                              'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
                    }
          };

          fetch('https://covid-193.p.rapidapi.com/statistics?country=indonesia', options)
                    .then(response => response.json())
                    .then(response => {
                              nambahdata(response)
                    })
                    .catch(err => console.error(err));
}

function nambahdata(data) {
          const currentActiveCases = data.response[0].cases.active
          const currentNewCases = data.response[0].cases.new
          const currentRecoveredCases = data.response[0].cases.recovered
          const currentTotalCases = data.response[0].cases.total
          const currentDeaths = data.response[0].deaths.total
          const currentTotalTest = data.response[0].tests.total


          const divActiv = document.createElement('p')
          divActiv.innerHTML = `${currentActiveCases}`
          divActiv.classList.add('red-text')
          active.append(divActiv)

          const divCurrentrecovered = document.createElement('p')
          divCurrentrecovered.innerHTML = `${currentRecoveredCases}`
          divCurrentrecovered.classList.add('red-text')
          recovered.append(divCurrentrecovered)

          const divCurrentrnewcases = document.createElement('p')
          divCurrentrnewcases.innerHTML = `${currentNewCases}`
          divCurrentrnewcases.classList.add('red-text')
          newcases.append(divCurrentrnewcases)

          const divCurrenttotalcases = document.createElement('p')
          divCurrenttotalcases.innerHTML = `${currentTotalCases}`
          divCurrenttotalcases.classList.add('red-text')
          totalcases.append(divCurrenttotalcases)

          const divDeaths = document.createElement('p')
          divDeaths.innerHTML = `${currentDeaths}`
          divDeaths.classList.add('red-text')
          death.append(divDeaths)

          const divtotaltest = document.createElement('p')
          divtotaltest.innerHTML = `${currentTotalTest}`
          divtotaltest.classList.add('red-text')
          totaltest.append(divtotaltest)
}
function hapusdata() {
          while (active.children.length > 0) {
                    active.removeChild(active.children[0])
                    recovered.removeChild(recovered.children[0])
                    newcases.removeChild(newcases.children[0])
                    totalcases.removeChild(totalcases.children[0])
                    death.removeChild(death.children[0])
                    totaltest.removeChild(totaltest.children[0])
          }
}
Buttonku()

let leter = 0;
const text = "Semoga hari-harimu menyenangkan, Thank You"
function typetext(){
          if (leter < text.length) {
                    document.getElementById('typing').innerHTML += text.charAt(leter);
                    leter++;
                    let speed = Math.floor(Math.random() * 150) + 150;
                    setTimeout(typetext, speed);
          }
}
typetext()