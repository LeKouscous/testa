// Tableau contenant les surprises pour chaque jour
const surprises = {
    1: "Un chocolat chaud bien mérité ! ☕",
    2: "Un joli poème pour illuminer ta journée. ✨",
    3: "Une citation inspirante : 'Le bonheur est contagieux.' 🌟",
    4: "Un petit défi : fais sourire quelqu'un aujourd'hui ! 😊",
    5: "Regarde ce film classique de Noël ce soir ! 🎬",
    6: "Une anecdote : savais-tu que les rennes sont de super nageurs ? 🦌",
    7: "Un bonbon pour te récompenser (trouve-en un dans ton placard). 🍬",
    8: "Un jeu rapide : combien de flocons peux-tu dessiner en 5 minutes ? ❄️",
    9: "Une chanson de Noël à écouter : 'Jingle Bells'. 🎵",
    10: "Une idée : écris une lettre à un être cher. 📝",
    11: "Une surprise : découvre une recette facile de biscuits ! 🍪",
    12: "Un quiz rapide : combien de lutins travaillent pour le Père Noël ? 🤔",
    13: "Prends une pause et médite pendant 5 minutes. 🧘‍♀️",
    14: "Réalise un origami étoile. 🌠",
    15: "Offre un compliment sincère à quelqu'un aujourd'hui. 💬",
    16: "Prépare une tasse de thé et profite du calme. 🍵",
    17: "Un dessin rapide : dessine un sapin de Noël. 🎄",
    18: "Appelle un ami pour lui souhaiter une belle journée. 📞",
    19: "Regarde un coucher de soleil et respire profondément. 🌅",
    20: "Une histoire courte : 'Le renne magique qui a sauvé Noël.' 🦌",
    21: "Prépare-toi pour le réveillon en planifiant ton menu. 🍽️",
    22: "Prends un moment pour toi et lis un chapitre d’un livre. 📖",
    23: "Fabrique un flocon de neige en papier. ✂️❄️",
    24: "C'est presque Noël ! Prépare tes cadeaux pour demain. 🎁"
  };
  
  // Fonction pour initialiser le calendrier
  function initCalendar() {
    const days = document.querySelectorAll('.day');
  
    days.forEach(day => {
      // Ajout d'un événement de clic à chaque case
      day.addEventListener('click', () => {
        // Vérifie si la case est déjà ouverte
        if (!day.classList.contains('opened')) {
          // Ouvre la case
          day.classList.add('opened');
  
          // Récupère le numéro du jour
          const dayNumber = day.getAttribute('data-day');
  
          // Affiche la surprise du jour
          const surprise = surprises[dayNumber] || "Pas de surprise pour aujourd'hui. 🎅";
  
          // Crée une boîte modale pour afficher la surprise
          showSurpriseModal(dayNumber, surprise);
        }
      });
    });
  }
  
  // Fonction pour afficher une boîte modale avec la surprise
  function showSurpriseModal(dayNumber, surprise) {
    // Crée les éléments de la modale
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
  
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = "&times;";
    closeButton.addEventListener('click', () => {
      modal.remove(); // Ferme la modale
    });
  
    const title = document.createElement('h2');
    title.innerText = `Surprise du jour ${dayNumber}`;
  
    const message = document.createElement('p');
    message.innerText = surprise;
  
    // Assemble les éléments dans la modale
    modalContent.appendChild(closeButton);
    modalContent.appendChild(title);
    modalContent.appendChild(message);
    modal.appendChild(modalContent);
  
    // Ajoute la modale au document
    document.body.appendChild(modal);
  }
  
  // Ajoute des styles pour la boîte modale
  const style = document.createElement('style');
  style.innerHTML = `
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
  
    .modal-content {
      background: white;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      position: relative;
      max-width: 400px;
      width: 90%;
    }
  
    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 1.5rem;
      cursor: pointer;
    }
  
    .close-button:hover {
      color: red;
    }
  `;
  
  // Ajoute les styles de la boîte modale au document
  document.head.appendChild(style);
  
  // Initialisation du calendrier
  document.addEventListener('DOMContentLoaded', initCalendar);