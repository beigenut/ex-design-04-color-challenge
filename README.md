<p align="center">
  <h3 align="center">ex-design-04-color-challenge</h3>
  <p align="center">
  Choose a right color with corresponding RGB code<br> 
  To check out the website?<a href="https://beigenut.github.io/ex-design-04-color-challenge/" target="_blank"> Click here</a> <br>
  You do not need to sign in or log in at this time :)
</p>
</p>

_ _ _


## Table of Contents

* [About the Project](#about-the-project)
* [Usage](#usage)
* [Contributing](#contributing)
* [Contact](#contact)



## About The Project

<img src="https://drive.google.com/uc?export=view&id=1kpE0FXRTsn58homWlbfEzyWy1YECsHOm" width="700px">

A simple guessing game created using `Math.random()` method.

- Three randomly generated color options are shown.
- One of the colors is chosen as the correct answer. 
- Show the answer's RGB code to player, the player guesses and chooses the corresponding color.
- The count increases when player make right choice.


<!-- USAGE EXAMPLES -->
## Usage

- Generate 3 color using Math.random() method.

```js
// index.js
function randColor() {
  return Math.floor(Math.random()*256);
}

function randColorCode() {
  return `rgb(${randColor()}, ${randColor()}, ${randColor()})`
}
```

- Have the right answer randomly selected.
```js
function newStage() {
  const colorCodes = [randColorCode(), randColorCode(), randColorCode()]
  options.forEach((el, index) => {
    el.style.backgroundColor = colorCodes[index]
  })
  // To pick the index number randomly as answer
  answer = Math.floor(Math.random() * 3);
  // Show the selected color's RBG code to player's screen
  question.textContent = colorCodes[answer];
}
```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/beigenut/ex-design-04-color-challenge](https://github.com/beigenut/ex-design-04-color-challenge)


