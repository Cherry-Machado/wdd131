const dialog = document.getElementById("favDialog");
const cardButtons = document.querySelectorAll(".services__card-button");
const cancelButton = document.getElementById("cancel");
const submitButton = document.getElementById("submit-servi");

// Función para mostrar el modal
cardButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.showModal();
  });
});

cancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
  abrirOrcamentoModal(); // Llama a la función para mostrar el modal de orçamento
});

function abrirOrcamentoModal() {
  window.location.href = "#orcamento";
}

/********************************************************************/
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".faqs__pregunta .faqs__button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", !expanded);

      // Selecciona el siguiente elemento con la clase .desc para mostrar/ocultar
      const answer = button.closest(".faqs__pregunta").querySelector(".desc");
      if (answer) {
        answer.style.display = expanded ? "none" : "block";
      }
    });
  });
});

const servicesOptions = {
  "Camisas e Blusas": [
    "Ajuste nas laterais",
    "Ajuste no comprimento dos ombros",
    "Ajuste nas mangas",
    "Ajuste nas alças",
    "Troca de botões",
    "Troca ou remoção de ombreiras",
    "Troca de colarinho",
    "Troca de alças",
    "Colocação de ombreiras",
    "Corte das mangas",
    "Barra de comprimento",
    "Remoção de pences",
    "Fazer aberturas",
    "Fazer pences",
    "Modificação do decote",
    "Subir punhos",
    "Virar colarinhos",
  ],
  "Calças e Shorts": [
    "Ajuste na cintura e no quadril",
    "Ajuste nas pernas",
    "Ajuste no gancho",
    "Aumentar cintura",
    "Baixar cós",
    "Troca de elástico na cintura",
    "Troca de forro",
    "Zíper de nylon",
    "Zíper invisível",
    "Zíper metálico",
    "Colocação de forro",
    "Barras à mão",
    "Barras à máquina",
    "Remoção de bolsos",
    "Remoção de forro",
    "Remoção de pences",
    "Fazer aberturas",
    "Fazer bolsos",
    "Fazer pences",
    "Reduzir cintura",
    "Bainha italiana (valencianas)",
  ],
  Saias: [
    "Ajuste na cintura e no quadril",
    "Aumentar cintura",
    "Baixar cós",
    "Troca de elástico na cintura",
    "Troca de forro",
    "Zíper invisível",
    "Zíper metálico",
    "Zíper de nylon",
    "Colocação de forro",
    "Barras à mão",
    "Barras à máquina",
    "Remoção de bolsos",
    "Remoção de forro",
    "Remoção de pences",
    "Fazer aberturas",
    "Fazer bolsos",
    "Fazer pences",
    "Reduzir cintura",
  ],
  Vestidos: [
    "Ajuste nas laterais",
    "Ajuste no comprimento dos ombros",
    "Ajuste nas mangas",
    "Ajuste nas alças",
    "Troca de botões",
    "Troca de elástico na cintura",
    "Troca de forro",
    "Troca ou remoção de ombreiras",
    "Troca de alças",
    "Zíper invisível",
    "Zíper metálico",
    "Zíper de nylon",
    "Colocação de forro",
    "Colocação de ombreiras",
    "Corte das mangas",
    "Barras à mão",
    "Barras à máquina",
    "Remoção de bolsos",
    "Remoção de forro",
    "Remoção de pences",
    "Fazer aberturas",
    "Fazer bolsos",
    "Fazer pences",
    "Modificação do decote",
  ],
  "Bordados Personalizados": [
    "Bordado na Camisas",
    "Bordado nas Calças",
    "Bordado roupa do seu Pet",
    "Patch bordado",
    "Todo tipo de Bordado Personalizado",
  ],
  "Otros Serviços": [
    "Modificação e Transformação de Roupas",
    "Etiquetas",
    "Arranjos de fantasias",
    "Fazemos suas Cortinas",
    "Fazemos sua Ropa de Camas",
  ],
};

/*****************************Modal Noticias */

// Article data

const articles = [
  {
    title:
      "Como Ajustar o Comprimento de uma Calça Social sem Deformar o Tecido",
    author: "Autor: Dona Elvira",
    date: "30 de Outubro, 2024",
    image: "images/images-final-project/pexels-ron-lach-10341113.jpg",
    content: `
      <p>Ajustar o comprimento de uma calça social é uma das modificações mais procuradas e exige um trabalho cuidadoso para manter a elegância e caimento do tecido. Qualquer erro pode alterar o fluxo da peça e comprometer seu visual, especialmente em calças de materiais como lã e algodão fino. Especialistas indicam técnicas específicas para garantir um resultado profissional e durável.</p><br>
      
      <p>O processo começa com a marcação do novo comprimento enquanto o cliente experimenta a calça, de preferência usando os sapatos que pretende usar com ela. Isso ajuda a obter uma medida precisa, permitindo que a barra toque levemente a parte superior do sapato, sem excesso de tecido acumulado. Esse cuidado é essencial para um caimento adequado.</p><br>

      <p>Em casos de calças antigas ou vintage, onde os cortes podem ser diferentes dos atuais, é preciso considerar o estilo original ao ajustar o comprimento. Nestes casos, é possível preservar o aspecto clássico da peça, adaptando-a de maneira que também atenda ao estilo moderno desejado pelo cliente.</p><br>

      <p>Quanto ao acabamento, a costura invisível é recomendada para calças sociais, mantendo a estética da peça sem deixar marcas visíveis. Técnicas de ponto invisível, feitas à mão ou à máquina, ajudam a garantir que o ajuste permaneça discreto e funcional, especialmente em eventos formais onde a aparência conta muito.</p><br>

      <p>Por fim, o ajuste do comprimento de uma calça social é uma tarefa detalhada que exige precisão e técnica. Realizar o ajuste com técnicas apropriadas ajuda a preservar o tecido e a prolongar a vida útil da peça, resultando em um visual alinhado e elegante que valoriza tanto o trabalho do costureiro quanto a satisfação do cliente.</p><br>
    `,
  },

  {
    title: "Substituição de Zíperes em Jaquetas: Guia Passo a Passo",
    author: "Autor: Dona Elvira",
    date: "30 de Octubre, 2024",
    image: "images/images-final-project/pexels-mat-brown-150387-449524.jpg",
    content: `
    <p>A substituição de zíperes em jaquetas é uma das reparações de costura mais solicitadas e, ao mesmo tempo, uma das mais delicadas de realizar. Este tipo de ajuste é comum em jaquetas sociais, casacos e até em blazers de alta qualidade, onde o uso contínuo costuma desgastar o zíper ou fazer com que ele deixe de funcionar corretamente. Especialistas em costura concordam que uma substituição adequada do zíper não deve apenas recuperar a funcionalidade da peça, mas também respeitar o design original e garantir um acabamento limpo e durável.</p><br>
    
    <p>O processo de substituição começa com a escolha do zíper adequado. No caso de jaquetas de vestir, é importante selecionar um zíper que combine tanto em cor quanto em estilo com o original. Os especialistas recomendam optar por zíperes de metal ou nylon de alta qualidade para garantir que o novo zíper tenha uma longa vida útil. Além disso, o tamanho do zíper deve coincidir perfeitamente com o do original; caso contrário, a peça pode parecer desproporcional ou deformada. Um exemplo típico desse desafio ocorre com jaquetas de couro ou de materiais pesados, onde os zíperes precisam suportar mais peso sem afetar a estrutura.</p><br>

    <p>Uma vez selecionado o zíper, o próximo passo consiste em descosturar o zíper danificado com muito cuidado, para não rasgar o tecido da jaqueta. Isso é geralmente feito com um abridor de casas ou tesoura de ponta fina, ferramenta indispensável para trabalhos detalhados em costura. Os especialistas sugerem marcar as posições originais do zíper antes de retirá-lo, pois isso facilita colocar o novo zíper no mesmo lugar sem erros de alinhamento. Na prática, um costureiro pode receber casos onde o zíper anterior foi substituído várias vezes sem técnicas adequadas, o que pode levar a áreas de tecido desgastadas nas costuras. Nesses casos, é necessário reforçar a área antes de colocar o novo zíper.</p><br>

    <p>Finalmente, a colocação do novo zíper é feita garantindo que ele fique simétrico e bem alinhado. Para evitar que o zíper se desloque durante a costura, alguns especialistas preferem fixá-lo previamente com alfinetes ou alinhavos. Depois de garantir que está bem posicionado, o costureiro costura o novo zíper no lugar, aplicando pontos firmes e discretos. O acabamento deve ser limpo e sem fios visíveis, especialmente em jaquetas sociais, onde cada detalhe conta para obter um aspecto profissional. Após finalizar, recomenda-se que o cliente experimente a jaqueta para confirmar que o zíper funciona sem problemas e que o ajuste é confortável.</p><br>

    <p>Em conclusão, substituir um zíper em uma jaqueta é um processo que requer precisão, habilidade e conhecimento de técnicas adequadas de costura. A substituição de zíperes de qualidade não apenas devolve a funcionalidade à peça, mas também prolonga sua vida útil e preserva seu aspecto elegante. Uma reparação bem realizada pode transformar uma jaqueta que parecia irreparável em uma peça funcional e estilosa, demonstrando a importância do trabalho de um costureiro experiente.</p>
  `,
  },
  {
    title: "Como Reduzir uma Peça de Roupa sem Perder sua Forma Original",
    author: "Autor: Dona Elvira",
    date: "30 de Octubre, 2024",
    image: "images/images-final-project/pexels-shvets-production-6975481.jpg",
    content: `
      <p>Reduzir uma peça de roupa pode parecer uma tarefa simples, mas manter a forma original requer técnica e experiência. É comum que roupas como blusas, vestidos ou calças precisem de ajustes para se adaptarem perfeitamente ao corpo, mas sem perder seu estilo e design. A chave está em realizar um trabalho cuidadoso, preservando cada detalhe da peça.</p><br>
      
      <p>O primeiro passo é identificar as áreas que serão ajustadas. Normalmente, em vestidos ou blusas, as regiões do busto e cintura são as mais ajustadas, enquanto nas calças, cintura e pernas precisam de uma atenção especial. Antes de iniciar a costura, é importante marcar o novo tamanho de forma precisa para evitar erros que possam distorcer o caimento da peça.</p><br>

      <p>Os especialistas recomendam usar alfinetes ou alinhavar temporariamente as áreas que serão reduzidas. Esse método permite que o cliente experimente a peça antes da costura definitiva, garantindo que o ajuste está correto e confortável. Ajustes feitos diretamente com a máquina de costura sem esse passo de preparação podem comprometer o tecido e dificultar futuras alterações.</p><br>

      <p>Quando se trata de tecidos delicados, como seda ou chiffon, a redução deve ser feita com pontos mais leves e discretos, evitando rasgos ou deformações. Tecidos como o jeans, por exemplo, demandam pontos mais reforçados devido à sua densidade. Conhecer o comportamento de cada tecido é fundamental para um ajuste que valorize o caimento original da roupa.</p><br>

      <p>Reduzir uma peça de roupa sem perder sua forma original é uma habilidade que reflete o trabalho cuidadoso do costureiro. Ao aplicar técnicas de ajuste precisas, é possível transformar uma peça para que ela se ajuste perfeitamente ao corpo, mantendo o estilo e a elegância desejados. O resultado é uma roupa que parece feita sob medida, preservando o design e a qualidade.</p><br>
    `,
  },
  {
    title: "Botões que Não Caem: Técnicas de Costura Durável",
    author: "Autor: Dona Elvira",
    date: "30 de Octubre, 2024",
    image: "images/images-final-project/pexels-pavel-danilyuk-6461484.jpg",
    content: `
      <p>A costura de botões duráveis é uma habilidade essencial na confecção e ajuste de roupas. Botões soltos são um problema comum que compromete a aparência e a funcionalidade das peças. Para garantir que os botões fiquem firmemente fixados, é importante conhecer técnicas que aumentem a resistência da costura, especialmente em roupas sociais e de uso frequente.</p><br>
      
      <p>O primeiro passo é escolher a linha adequada. Para roupas de tecido grosso ou de uso intenso, como casacos e camisas sociais, é recomendado o uso de linhas mais resistentes, como as de poliéster. Além disso, o uso de um fio duplo ao costurar o botão ajuda a aumentar a durabilidade da costura, proporcionando uma fixação mais firme e segura.</p><br>

      <p>A técnica de costura em X é bastante utilizada por profissionais para garantir que o botão não se solte facilmente. Esse método cria um ponto cruzado que distribui a tensão de forma equilibrada, reduzindo o desgaste nas áreas onde o botão é mais puxado. Para botões maiores, como os de casacos, também é comum aplicar uma costura com ponto de ancoragem, que reforça a base do botão.</p><br>

      <p>Outro segredo para evitar que os botões se soltem é deixar um pequeno espaço entre o botão e o tecido. Esse espaço permite que o botão suporte a pressão sem que a linha se desgaste rapidamente. Costureiros recomendam o uso de um palito ou de um pequeno alfinete entre o botão e o tecido ao costurá-lo, para garantir essa distância ideal.</p><br>

      <p>Garantir que os botões fiquem bem presos faz com que a peça tenha um acabamento mais durável e evita problemas futuros. Ao aplicar essas técnicas de costura durável, é possível aumentar significativamente a vida útil das roupas, mantendo a aparência e funcionalidade ideais. Um botão bem costurado reflete o cuidado e a atenção aos detalhes do costureiro, valorizando ainda mais a qualidade da peça.</p><br>
    `,
  },
];

// Function to show modal
function showModal(articleIndex) {
  const article = articles[articleIndex];
  document.getElementById("modalTitle").textContent = article.title;
  document.getElementById("modalAuthor").textContent = article.author;
  document.getElementById("modalDate").textContent = article.date;
  document.getElementById("modalImage").src = article.image;
  document.getElementById("modalContent").innerHTML = article.content;
  document.getElementById("articleModal").style.display = "flex";
}

// Function to close modal
function closeModal() {
  document.getElementById("articleModal").style.display = "none";
}

/*************Formulario********************/
/*
document.querySelector(".wf1").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.querySelector(".nome").value.trim();
  const email = document.querySelector(".email").value.trim();
  const phone = document.querySelector(".phone").value.trim();
  const roupa = document.querySelector("#roupa").value;

  if (!nome || !email || !validarEmail(email) || !validarTelefone(phone)) {
    mostrarMensaje("Por favor, preencha o formulário corretamente.");
    return;
  }

  const formData = {
    nome,
    email,
    phone,
    roupa,
    quantidade: document.querySelector('input[name="fnum"]').value,
    servico: Array.from(document.querySelector('.services__options').selectedOptions).map(opt => opt.value),
    data: document.querySelector("#date").value,
    orcamentoVias: Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map(cb => cb.value),
    detalhes: document.querySelector("#written-text").value
  };

  localStorage.setItem("formData", JSON.stringify(formData));

  mostrarMensaje("Obrigado pela sua solicitação de Orçamento ou Contato! <br> Sua solicitação foi enviada com sucesso!", true);

  setTimeout(() => {
    window.location.href = "#inicio";
  }, 2000);
});

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarTelefone(phone) {
//  return /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/.test(phone);
  return /^\d{3}([-\s]?)\d{3}\1\d{4}$/.test(phone);
}

function mostrarMensaje(mensaje, success = false) {
  const messageDiv = document.getElementById("message");
  messageDiv.innerHTML = mensaje;
  messageDiv.style.backgroundColor = success ? "#41b883" : "#ff4d4d";
  messageDiv.style.display = "block";
  setTimeout(() => {
    messageDiv.style.display = "none";
  }, 2000);
}
*/
/*
document.querySelector(".wf1").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.querySelector(".nome").value.trim();
  const email = document.querySelector(".email").value.trim();
  const phone = document.querySelector(".phone").value.trim();
  const roupa = document.querySelector("#roupa").value;
  const servicesOptionsSelected = Array.from(document.querySelector(".services__options").selectedOptions).map(option => option.value);

  if (!nome || !email || !validarEmail(email) || !validarTelefone(phone)) {
    mostrarMensaje("Por favor, preencha o formulário corretamente.");
    return;
  }

  // Crear objeto con los datos del formulario
  const formData = {
    nome,
    email,
    phone,
    roupa,
    quantidade: document.querySelector('input[name="fnum"]').value,
    servico: servicesOptionsSelected,
    data: document.querySelector("#date").value,
    orcamentoVias: Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map(cb => cb.value),
    detalles: document.querySelector("#written-text").value
  };

  // Recuperar datos existentes en localStorage
  let savedData = JSON.parse(localStorage.getItem("formData")) || [];
  
  // Añadir el nuevo registro al arreglo existente
  savedData.push(formData);

  // Guardar el arreglo actualizado en localStorage
  localStorage.setItem("formData", JSON.stringify(savedData));

  // Mostrar mensaje de éxito
  mostrarMensaje("Obrigado pela sua solicitação de Orçamento ou Contato! <br> Sua solicitação foi enviada com sucesso!", true);

  // Redireccionar después de 2 segundos
  setTimeout(() => {
    window.location.href = "#inicio";
  }, 2000);
});

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarTelefone(phone) {
  return /^\d{3}[- ]?\d{3}[- ]?\d{4}$/.test(phone);
}

function mostrarMensaje(mensaje, success = false) {
  const messageDiv = document.getElementById("message");
  messageDiv.innerHTML = mensaje;
  messageDiv.style.backgroundColor = success ? "#41b883" : "#ff4d4d";
  messageDiv.style.display = "block";
  setTimeout(() => {
    messageDiv.style.display = "none";
  }, 2000);
}
*/

// Inicializa las opciones del campo "services__options" en el DOM

document.addEventListener("DOMContentLoaded", function () {
  const selectElements = document.querySelectorAll(".services__options");

  if (selectElements.length > 0) {
    selectElements.forEach((selectElement) => {
      Object.keys(servicesOptions).forEach((group) => {
        const optgroup = document.createElement("optgroup");
        optgroup.label = group;

        servicesOptions[group].forEach((optionText) => {
          const option = document.createElement("option");
          option.textContent = optionText;
          optgroup.appendChild(option);
        });

        selectElement.appendChild(optgroup);
      });
    });
  }
});

document.querySelector(".wf1").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.querySelector(".nome").value.trim();
  const email = document.querySelector(".email").value.trim();
  const phone = document.querySelector(".phone").value.trim();
  const roupa = document.querySelector("#roupa").value;

  const servicesOptionsElement = document.querySelector(".services__options");
  const servicesOptionsSelected = servicesOptionsElement
    ? Array.from(servicesOptionsElement.selectedOptions).map(
        (option) => option.value
      )
    : [];

  console.log(servicesOptionsElement);
  console.log(servicesOptionsSelected);

  if (!nome || !email || !validarEmail(email) || !validarTelefone(phone)) {
    mostrarMensaje("Por favor, preencha o formulário corretamente.");
    return;
  }

  // Crear objeto con los datos del formulario
  const formData = {
    nome,
    email,
    phone,
    roupa,
    quantidade: document.querySelector('input[name="fnum"]').value,
    servico: servicesOptionsSelected,
    data: document.querySelector("#date").value,
    orcamentoVias: Array.from(
      document.querySelectorAll("input[type='checkbox']:checked")
    ).map((cb) => cb.value),
    detalles: document.querySelector("#written-text").value,
  };

  // Inicializa las opciones del campo "services__options" en el DOM
  document.addEventListener("DOMContentLoaded", function () {
    const selectElements = document.querySelectorAll(".services__options");

    if (selectElements.length > 0) {
      selectElements.forEach((selectElement) => {
        Object.keys(servicesOptions).forEach((group) => {
          const optgroup = document.createElement("optgroup");
          optgroup.label = group;

          servicesOptions[group].forEach((optionText) => {
            const option = document.createElement("option");
            option.textContent = optionText;
            option.value = optionText; // Asegúrate de que cada opción tenga un valor
            optgroup.appendChild(option);
          });

          selectElement.appendChild(optgroup);
        });
      });
      console.log(
        "Opciones de servicios cargadas correctamente en 'services__options'"
      );
    } else {
      console.error(
        "El elemento 'services__options' no se encontró en el DOM."
      );
    }
  });

  // Recuperar datos existentes en localStorage o inicializar como arreglo vacío
  let savedData = JSON.parse(localStorage.getItem("formData")) || [];

  // Asegúrate de que savedData es un arreglo
  if (!Array.isArray(savedData)) {
    savedData = [];
  }

  // Añadir el nuevo registro al arreglo existente
  savedData.push(formData);

  // Guardar el arreglo actualizado en localStorage
  localStorage.setItem("formData", JSON.stringify(savedData));

  // Mostrar mensaje de éxito
  mostrarMensaje(
    "Obrigado pela sua solicitação de Orçamento ou Contato! <br> Sua solicitação foi enviada com sucesso!",
    true
  );

  // Redireccionar después de 2 segundos
  setTimeout(() => {
    window.location.href = "#inicio";
  }, 2000);
});

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarTelefone(phone) {
  return /^\d{3}[- ]?\d{3}[- ]?\d{4}$/.test(phone);
}

function mostrarMensaje(mensaje, success = false) {
  const messageDiv = document.getElementById("message");
  messageDiv.innerHTML = mensaje;
  messageDiv.style.backgroundColor = success ? "#41b883" : "#ff4d4d";
  messageDiv.style.display = "block";
  setTimeout(() => {
    messageDiv.style.display = "none";
  }, 2000);
}
