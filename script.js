const form = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatHistory = document.getElementById('chat-history');

// Description du chatbot
const botDescription = `
  Je suis le meilleur conseiller d'orientation en Côte d'Ivoire ! �  
  N'hésite pas à me poser des questions sur ton avenir scolaire et professionnel !
`;

// Affiche la description du chatbot au démarrage
addMessage("bot", botDescription);

// Gestion de la soumission du formulaire
form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Empêche le rechargement de la page

  const question = userInput.value.trim();

  // Vérifie si la question est vide
  if (!question) {
    alert("Veuillez poser une question avant de soumettre !");
    return;
  }

  // Affiche la question de l'utilisateur
  addMessage("user", question);

  // Affiche un message de chargement
  addMessage("bot", "Je réfléchis...");

  try {
    // Appelle l'API de Gemini avec une requête formatée
    const apiKey = "AIzaSyDMyLbiXNe_9GczVxDvn2z_b1bCk70BRsA";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const prompt = `
      Tu es un conseiller d'orientation scolaire en Côte d'Ivoire, dépendant du Ministère de l'Éducation Nationale et de la Formation Professionnelle. 
Ta mission est de guider les élèves dans leurs choix de filières et de carrières en fonction de leurs performances et aspirations.

Instructions :
1. Formate ta réponse de manière claire et agréable à lire :
   - Utilise des paragraphes courts.
   - Ajoute des listes à puces si nécessaire.
   - Structure avec des titres ou sous-titres.
2. Sois concis : réponds en 100 mots maximum.
3. Évite de répéter les mêmes informations au cours d'un échange.
4. Reste bienveillant, professionnel et encourageant.
5. Evite de saluer et de présenter avant chacun de tes messages.
6. Avant de donner une reponse, tiens compte du contexte de ta converation avec ton interlocuteur.
7. N'hésite pas à discuter avec l'utilisateur pour mieux le cerner afin de reussir son orientation.

Question de l'utilisateur : "${question}"
    `;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }]
      })
    });

    const data = await response.json();
    const geminiResponse = data.candidates[0].content.parts[0].text;

    // Vérifie si la réponse est liée à l'orientation scolaire
    if (!isAboutSchoolOrientation(question)) {
      addMessage(
        "bot",
        `\n\n${geminiResponse}\n\nSi tu veux des conseils sur ton orientation, essaie de reformuler ta question. Par exemple : "Quelle filière me conseilles-tu si j'aime les sciences ?"`
      );
    } else {
      // Affiche la réponse formatée
      addMessage("bot", geminiResponse);
    }
  } catch (error) {
    console.error("Erreur :", error);
    addMessage("bot", "Désolé, une erreur s'est produite. Réessaie plus tard !");
  }

  // Vide le champ de saisie
  userInput.value = "";

  // Sauvegarde l'historique de la conversation
  saveChatHistory();
});

// Fonction pour ajouter un message à l'historique du chat
function addMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);

  // Formate les sauts de ligne et les listes
  messageElement.innerHTML = message.replace(/\n/g, "<br>"); // Convertit les sauts de ligne en <br>
  chatHistory.appendChild(messageElement);
  chatHistory.scrollTop = chatHistory.scrollHeight; // Fait défiler vers le bas
}

// Fonction pour vérifier si la question concerne l'orientation scolaire
function isAboutSchoolOrientation(question) {
  const keywords = [
    "école", "classe", "filière", "orientation", "études", "métier", "profession",
    "maths", "sciences", "littéraire", "université", "bac", "diplôme", "avenir"
  ];
  return keywords.some(keyword => question.toLowerCase().includes(keyword));
}

// Sauvegarde l'historique du chat dans le localStorage
function saveChatHistory() {
  const messages = Array.from(chatHistory.children).map(message => message.textContent);
  localStorage.setItem('chatHistory', JSON.stringify(messages));
}

// Charge l'historique du chat depuis le localStorage
function loadChatHistory() {
  const savedHistory = localStorage.getItem('chatHistory');
  if (savedHistory) {
    const messages = JSON.parse(savedHistory);
    messages.forEach(message => {
      const sender = message.startsWith("Je suis") ? "bot" : "user";
      addMessage(sender, message);
    });
  }
}

// Charge l'historique au démarrage
loadChatHistory();