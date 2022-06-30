const lang = document.querySelector(".btn");
const welcome = document.querySelector("#title");
const par1 = document.querySelector("#par1");
const par2 = document.querySelector("#par2");
const par3 = document.querySelector("#par3");
const par4 = document.querySelector("#par4");

lang.addEventListener("click", () => {
  welcome.innerHTML =
    welcome.innerHTML == "Seja bem vindo ao meu portfolio!"
      ? welcome.innerHTML.replace(
          "Seja bem vindo ao meu portfolio!",
          "Welcome to my portfolio!"
        )
      : welcome.innerHTML.replace(
          "Welcome to my portfolio!",
          "Seja bem vindo ao meu portfolio!"
        );

  par1.innerHTML =
    par1.innerHTML ==
    "Sou formada e pós-graduada em Enfermagem pela Universidade Federal do Estado do Rio de Janeiro (Unirio), que é uma área que eu adoro, porém eu gostaria de tentar algo diferente."
      ? par1.innerHTML.replace(
          "Sou formada e pós-graduada em Enfermagem pela Universidade Federal do Estado do Rio de Janeiro (Unirio), que é uma área que eu adoro, porém eu gostaria de tentar algo diferente.",
          "I have a Bachelor's degree and a post-graduate degree in Nursing from the Federal University of the State of Rio de Janeiro (Unirio), which is a field that I love but I want to try different things."
        )
      : par1.innerHTML.replace(
          "I have a Bachelor's degree and a post-graduate degree in Nursing from the Federal University of the State of Rio de Janeiro (Unirio), which is a field that I love but I want to try different things.",
          "Sou formada e pós-graduada em Enfermagem pela Universidade Federal do Estado do Rio de Janeiro (Unirio), que é uma área que eu adoro, porém eu gostaria de tentar algo diferente."
        );

  par2.innerHTML =
    par2.innerHTML ==
    "<p>Fiz cursos de inglês na Cultura Inglesa e no Ibeu, meu nível de inglês é avançado.</p>Estou agora estudando Análise e Desenvolvimento de Sistemas na Universidade Cândido Mendes e também fazendo diversos cursos online."
      ? par2.innerHTML.replace(
          "<p>Fiz cursos de inglês na Cultura Inglesa e no Ibeu, meu nível de inglês é avançado.</p>Estou agora estudando Análise e Desenvolvimento de Sistemas na Universidade Cândido Mendes e também fazendo diversos cursos online.",
          "I'm now studying Software Analysis and Development at Cândido Mendes University and also studying through online courses."
        )
      : par2.innerHTML.replace(
          "I'm now studying Software Analysis and Development at Cândido Mendes University and also studying through online courses.",
          "<p>Fiz cursos de inglês na Cultura Inglesa e no Ibeu, meu nível de inglês é avançado.</p>Estou agora estudando Análise e Desenvolvimento de Sistemas na Universidade Cândido Mendes e também fazendo diversos cursos online."
        );

  par3.innerHTML ==
  "Sempre gostei muito da área de tecnologia e adoro aprender coisas novas. Tenho bastante afinidade com a área de desenvolvimento Front-end e gosto de fazer sites desde quando era mais nova."
    ? par3.innerHTML.replace(
        "Sempre gostei muito da área de tecnologia e adoro aprender coisas novas. Tenho bastante afinidade com a área de desenvolvimento Front-end e gosto de fazer sites desde quando era mais nova.",
        "I love the IT field and to learn new things. My favorite area is Front-end development and I've always liked creating websites since I was younger."
      )
    : par3.innerHTML.replace(
        "I love the IT field and to learn new things. My favorite area is Front-end development and I've always liked creating websites since I was younger.",
        "Sempre gostei muito da área de tecnologia e adoro aprender coisas novas. Tenho bastante afinidade com a área de desenvolvimento Front-end e gosto de fazer sites desde quando era mais nova."
      );

  par4.innerHTML =
    par4.innerHTML ==
    "No momento estou focada em estudar JavaScript, porém tenho interesse em aprender frameworks como jQuery, React.js e Node.js em breve."
      ? par4.innerHTML.replace(
          "No momento estou focada em estudar JavaScript, porém tenho interesse em aprender frameworks como jQuery, React.js e Node.js em breve.",
          "Currently I'm focused on studying JavaScript, but I'm also interested in learning frameworks like jQuery, React.js and Node.js soon."
        )
      : par4.innerHTML.replace(
          "Currently I'm focused on studying JavaScript, but I'm also interested in learning frameworks like jQuery, React.js and Node.js soon.",
          "No momento estou focada em estudar JavaScript, porém tenho interesse em aprender frameworks como jQuery, React.js e Node.js em breve."
        );
});
