const projectData = [
  {
    name: "QVC", 
    img: "QVC.png", 
    tags: ['React', 'GCP', 'Socket.io', 'Typescript'], 
    description: `
    (Q)uarantine (V)ideo (C)lient! I am trapped in my home indefinitely and this is my 
    desperate attempt to recreate the in-person movie watching experience with friends.
    `,
    try: "http://35.202.216.223/",
    source: "https://github.com/waynezhu6/QVC"
  },
  {
    name: "Talk to the Hand", 
    img: "talkToHand.gif", 
    tags: ['TensorFlow', 'React', 'Google Cloud Platform', 'Node.js'], 
    description: `
      Real-time sign language translation over the web on a Facetime-style video call.
      This app is hosted on a Google App Engine VM.It relies on a custom TensorFlowJS
      Neural Network with transfer learning to make predictions. Made in 24 hours for
      DeltaHacks VI.
    `,
    try: "https://testapp-266201.appspot.com/",
    source: "https://github.com/waynezhu6/TalkToTheHand"
  },
  {   
    name: "Network Pong", 
    img: "pong(h).gif", 
    tags: ['Node.js', 'Javascript', 'Socket.io', 'Heroku'],
    description: `
      Pong but over the network. This web app is the first time I've worked with backend
       coding, written in summer of 2019. It's hosted by a Node.js server on a Heroku 
       Virtual Machine instance. Try it for yourself by opening it on two devices!
    `,
    try: "https://frozen-eyrie-86066.herokuapp.com/",
    source: "https://github.com/waynezhu6/Pong-PCC-Edition"
  },
  {
    name: "Galaga", 
    img: "galaga(h).gif", 
    tags: ['C#', '.NET Framework'],
    description: `
      A clone of Namco's classic Galaga for Windows. This is a fully functioning clone 
      with an emphasis on smooth animations, made as a practice for desktop applications.
    `,
    try: "",
    source: "https://github.com/waynezhu6/Galaga"
  },
  {
    name: "Island Generator", 
    img: "islandGenerator(h).gif", 
    tags: ['Unity', 'C#'],
    description: `
      A Unity application that procedurally generates islands complete with terrain using
       Perlin noise.
    `,
    try: "",
    source: "https://github.com/waynezhu6/Island-Generator"
  }, 
  {
    name: "Newton Fractal Generator", 
    img: "fractal(h).png", 
    tags: ['C#', '.NET Framework'],
    description: `
      A C# .NET application that generates Newton fractals based on an inputted equation. 
      The results can be quite beautiful.
    `,
    try: "",
    source: "https://github.com/waynezhu6/Newton-Fractal-Generator"
  },
  {
    name: "Fantasy Basketball Analyzer", 
    img: "fantasyBasketball(h).png", 
    tags: ['Python', 'Web Scraping'],
    description: `
      A Python script that web scrapes for weekly basketball statistics based on your
      Yahoo Fantasy League. Login with OAuth2, and it will generate CSVs of projected
      weekly performance of your team and all teams in your league. My attempt to leverage
      my code skills to beat my friends in a glorified game of sports gambling.
    `,
    try: "",
    source: "https://github.com/waynezhu6/fantasy-basketball-analyzer"
  },
  {
    name: "Takoyaki", 
    img: "takoyaki(h).gif", 
    tags: ['Javascript', 'HTML/CSS', 'Firebase'], 
    description: `
      Try to make all the dots one color! A fun little project I made in high school 
      as a code demo for our Programming Club.
    `,
    try: "https://takoyaki-io.web.app/",
    source: "https://github.com/waynezhu6/Tacoyaki"
  },
  {
    name: "2048", 
    img: "2048.gif", 
    tags: ['Javascript', 'HTML/CSS', 'Firebase'], 
    description: `
      My first website. A pretty shameless clone of the original 2048. I did this project
      way back in 2017, mainly to get a feel for web programming. Hey, everyone's gotta start
      somewhere :)
    `,
    try: "",
    source: "https://github.com/waynezhu6/2048"
  }  
];

export default projectData;