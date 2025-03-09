 Conseiller d'Orientation Scolaire et Universitaire

Bienvenue dans le projet Conseiller d'Orientation ! Ce chatbot est conçu pour aider les élèves à choisir la meilleure filière ou classe en fonction de leurs performances et de leurs aspirations. Il est spécialisé dans l'orientation scolaire et universitaire en Côte d'Ivoire.

---

 Comment ça marche ?

 1. Interface Utilisateur
- Zone de Chat : Tu peux poser des questions dans la zone de texte et cliquer sur "Envoyer" pour obtenir des conseils.
- Historique des Messages : Les questions et les réponses s'affichent dans la zone de chat, avec des couleurs différentes pour toi et le chatbot.

 2. Fonctionnalités
- Conseils Personnalisés : Le chatbot te guide en fonction de tes performances et de tes préférences.
- Conversation Continue : Tu peux poser plusieurs questions à la suite, et le chatbot garde en mémoire l'historique de la conversation.
- Réponses Structurées : Les réponses sont claires, avec des paragraphes, des listes à puces et des titres pour une meilleure lecture.

 3. Technologie Utilisée
- API Gemini : Le chatbot utilise une intelligence artificielle pour générer des réponses pertinentes.
- HTML, CSS, JavaScript : L'interface est construite avec ces technologies web standards.

---

 Fonctions Principales

 1. Ajouter un Message
- Fonction `addMessage` :  
  Cette fonction ajoute un message dans la zone de chat. Elle prend deux paramètres :
  - `sender` : Qui envoie le message (`"user"` pour toi, `"bot"` pour le chatbot).
  - `message` : Le texte du message.

  Exemple :  
  ```javascript
  addMessage("bot", "Bonjour ! Comment puis-je t'aider ?");
  ```

 2. Vérifier si la Question est Liée à l'Orientation
- Fonction `isAboutSchoolOrientation` :  
  Cette fonction vérifie si ta question concerne l'orientation scolaire. Elle utilise une liste de mots-clés comme "école", "filière", "métier", etc.

  Exemple :  
  ```javascript
  if (isAboutSchoolOrientation("Je suis bon en maths")) {
    console.log("Cette question concerne l'orientation.");
  }
  ```

 3. Sauvegarder et Charger l'Historique
- Fonction `saveChatHistory` :  
  Sauvegarde l'historique de la conversation dans le navigateur (localStorage). Cela permet de ne pas perdre les messages même si tu quittes la page.
  
- Fonction `loadChatHistory` :  
  Charge l'historique sauvegardé au démarrage de la page.

  Exemple :  
  ```javascript
  saveChatHistory(); // Sauvegarde les messages
  loadChatHistory(); // Charge les messages au démarrage
  ```

 4. Envoyer une Requête à l'API Gemini
- Fonction `fetch` :  
  Envoie ta question à l'API Gemini pour obtenir une réponse. Le chatbot utilise un prompt (une instruction) pour guider la réponse de l'IA.

  Exemple de prompt :  
  ```plaintext
  Tu es un conseiller d'orientation scolaire en Côte d'Ivoire. Formate ta réponse de manière claire et agréable à lire.
  ```

---

 Comment Utiliser le Chatbot ?

1. Pose une Question :  
   - Écris ta question dans la zone de texte (ex : "Je suis bon en maths, quelle filière me conseilles-tu ?").
   - Clique sur "Envoyer".

2. Lis la Réponse :  
   - Le chatbot te répondra avec des conseils personnalisés.
   - Si ta question n'est pas liée à l'orientation, il te guidera pour reformuler.

3. Continue la Conversation :  
   - Tu peux poser plusieurs questions à la suite. Le chatbot garde en mémoire l'historique de la conversation.

---

 Exemples de Questions

- "Je suis bon en maths, quelle filière me conseilles-tu ?"
- "Quels métiers sont adaptés à un élève littéraire ?"
- "Je veux travailler dans la santé, quelle orientation dois-je prendre ?"
---

 Comment Contribuer ?

Si tu souhaites contribuer à ce projet :
1. Clone le dépôt sur ton ordinateur.
2. Ouvre les fichiers `index.html`, `style.css` et `script.js` dans ton éditeur de code.
3. Fais tes modifications et envoie une pull request.

---

 Auteur : Franck N’Guessan – Groupe F
