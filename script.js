// ============================================================
// QUIZ HISTOIRE — script.js
// Ce fichier contient la logique du jeu.
// Les données (tableau QUESTIONS) sont dans data.js.
// ============================================================


// ===== 1. L'ÉTAT DU JEU =====
// Ces variables décrivent la "mémoire" du jeu à un instant donné.
// "let" permet de réassigner la variable plus tard (contrairement à const).

let score = 0;
let vies = 3;
let indexQuestion = 0;
let questionsDisponibles = [];


// ===== 2. LES RÉFÉRENCES AUX ÉLÉMENTS HTML =====
// "document.getElementById()" cherche dans la page HTML l'élément qui a l'id donné.
// On stocke le résultat dans une constante pour ne pas avoir à rechercher à chaque fois.
// Ces constantes ne changent pas : les éléments HTML restent les mêmes tout au long du jeu.

const ecranAccueil   = document.getElementById("ecran-accueil");
const ecranArt       = document.getElementById("ecran-art");
const ecranJeu       = document.getElementById("ecran-jeu");
const champAnnee     = document.getElementById("champ-annee");
const texteEvenement = document.getElementById("evenement");
const affichageScore = document.getElementById("score");
const affichageVies  = document.getElementById("vies-affichage");
const zoneFeedback   = document.getElementById("zone-feedback");
const btnSuivant     = document.getElementById("btn-suivant");
const btnValider     = document.getElementById("btn-valider");
const btnSigne       = document.getElementById("btn-signe");
const btnDemarrer    = document.getElementById("btn-demarrer");

// À ce stade, JavaScript a "lu" la page HTML et a une référence directe
// vers chaque élément. On peut maintenant modifier leur contenu ou leur style.


function getEpoqueArt(annee) {
    if (annee <= -2000) return "art-prehistoire";
    if (annee <= 476)   return "art-antiquite";
    if (annee <= 1492)  return "art-moyen-age";
    if (annee <= 1620)  return "art-renaissance";
    if (annee <= 1715)  return "art-classique";
    return "art-lumieres";
}

function getEpoque(annee) {
    // Retourne l'époque d'une question à partir de son année.
    if (annee <= -2000) return "prehistoire";
    if (annee <= 476)  return "antiquite";
    if (annee <= 1492) return "moyen-age";
    if (annee <= 1620) return "renaissance";
    if (annee <= 1715) return "classique";
    if (annee >= 1716 && annee <= 1788) return "lumieres";
    if (annee >= 1789 && annee <= 1799) return "revolution";
    if (annee >= 1800 && annee <= 1815) return "premier-empire";
    if (annee >= 1816 && annee <= 1851) return "restauration";
    if (annee >= 1852 && annee <= 1870) return "second-empire";
    return "autre";
}


// ===== 3. FONCTION : DÉMARRER LA PARTIE =====
// Une "fonction" est un bloc de code réutilisable que l'on peut appeler par son nom.
// Elle est définie avec le mot-clé "function", suivi d'un nom et de parenthèses.
// Ici, la fonction est appelée depuis le onclick="" dans le HTML.
// "epoque" est un paramètre optionnel : si absent, on joue avec toutes les questions.

function ouvrirMenuArt() {
    ecranAccueil.classList.add("cache");
    ecranArt.classList.remove("cache");
    setTimeout(() => document.getElementById("btn-tout-art").focus(), 50);
}

function retourAccueil() {
    ecranArt.classList.add("cache");
    ecranAccueil.classList.remove("cache");
    setTimeout(() => btnDemarrer.focus(), 50);
}

function demarrerPartie(epoque) {

    // --- Réinitialisation de l'état ---
    // On remet toutes les variables au point de départ pour permettre de rejouer.

    score = 0;
    indexQuestion = 0;

    // On copie le tableau QUESTIONS dans questionsDisponibles.
    // Si une époque est passée en paramètre, on filtre d'abord les questions.
    // .filter() parcourt le tableau et ne garde que les éléments pour lesquels la fonction retourne true.
    if (epoque === 'art') {
        questionsDisponibles = QUESTIONS.filter(q => q.art === true);
    } else if (epoque && epoque.startsWith('art-')) {
        questionsDisponibles = QUESTIONS.filter(q => q.art && getEpoqueArt(q.annee) === epoque);
    } else if (epoque) {
        questionsDisponibles = QUESTIONS.filter(q => !q.art && getEpoque(q.annee) === epoque);
    } else {
        questionsDisponibles = QUESTIONS.filter(q => !q.art);
    }

    ecranAccueil.classList.add("cache");
    ecranArt.classList.add("cache");

    // On mélange les questions pour varier l'ordre à chaque partie.
    melangerTableau(questionsDisponibles);

    // --- Mise à jour de l'interface ---
    // On remet le score affiché à 0.
    // .textContent permet de modifier le texte visible d'un élément HTML.
    score = 0;
    vies  = 3;
    affichageScore.textContent = "0";
    afficherVies();

    zoneFeedback.textContent = "";
    zoneFeedback.className = "";

    // --- Changement d'écran ---
    // Pour passer de l'écran d'accueil à l'écran de jeu, on joue sur les classes CSS.
    // La classe "cache" masque un élément (display: none dans le CSS).
    // .classList est un objet qui permet de manipuler les classes CSS d'un élément.

    ecranAccueil.classList.add("cache");   // Cache l'écran d'accueil
    ecranJeu.classList.remove("cache");    // Affiche l'écran de jeu

    sonDemarrer();

    // --- Afficher la première question ---
    afficherQuestion();
}


// ===== 4. FONCTION : AFFICHER UNE QUESTION =====
// Cette fonction met à jour l'écran avec la question courante.

function afficherQuestion() {

    // On récupère la question à l'index actuel dans le tableau.
    // questionsDisponibles[indexQuestion] accède à l'élément à la position indexQuestion.
    const questionActuelle = questionsDisponibles[indexQuestion];

    // On met à jour le texte de l'élément <h2 id="evenement"> dans le HTML.
    // questionActuelle.evenement accède à la propriété "evenement" de l'objet question.
    texteEvenement.textContent = questionActuelle.evenement;

    // On vide le champ de saisie pour que le joueur reparte de zéro.
    // .value correspond à la valeur saisie dans un <input>.
    champAnnee.value = "";
    champAnnee.disabled = false;
    btnValider.disabled = false;
    btnSigne.disabled   = false;

    // On replace le curseur dans le champ pour que le joueur puisse taper directement.
    champAnnee.focus();

    // On vide aussi le feedback du tour précédent.
    zoneFeedback.textContent = "";
    zoneFeedback.className = "";
}


function basculerSigne() {
    const v = champAnnee.value.trim();
    champAnnee.value = v.startsWith("-") ? v.slice(1) : "-" + v;
    champAnnee.focus();
}

function afficherVies() {
    affichageVies.innerHTML = "♥".repeat(vies) + "♡".repeat(3 - vies);
}

// ===== 5. FONCTION : VÉRIFIER LA RÉPONSE =====
// Appelée quand le joueur soumet le formulaire (bouton ou touche Entrée).

function verifierReponse() {

    // On lit la valeur saisie dans le champ.
    // champAnnee.value est toujours une CHAÎNE DE CARACTÈRES (string), même pour un input number.
    // parseInt() la convertit en nombre entier (integer).
    // La base 10 est précisée en second argument : c'est une bonne pratique.
    const anneeJoueur = parseInt(champAnnee.value, 10);

    // Vérification que le joueur a bien saisi quelque chose.
    // isNaN() = "is Not a Number" : retourne true si la valeur n'est pas un nombre.
    if (isNaN(anneeJoueur)) {
        // On modifie le texte du feedback pour guider le joueur.
        zoneFeedback.textContent = "Veuillez entrer une année valide.";
        // On lui ajoute la classe CSS "feedback-incorrect" pour le style rouge.
        zoneFeedback.className = "feedback-incorrect";
        return; // "return" interrompt la fonction ici : on ne continue pas.
    }

    // On récupère la bonne réponse depuis la question actuelle.
    const bonneReponse = questionsDisponibles[indexQuestion].annee;

    // === CONDITION : bonne ou mauvaise réponse ? ===
    // "===" est la comparaison stricte (type ET valeur doivent correspondre).
    // Préférez toujours "===" à "==" en JavaScript pour éviter les surprises.
    if (anneeJoueur === bonneReponse) {

        // --- Bonne réponse ---
        score = score + 1; // On peut aussi écrire : score++ ou score += 1
        affichageScore.textContent = score; // On met à jour l'affichage du score

        zoneFeedback.innerHTML = `<span class="annee-correcte annee-correcte--ok">${bonneReponse}</span><br><span class="trivia-texte">${questionsDisponibles[indexQuestion].trivia}</span>`;
        zoneFeedback.className = "feedback-correct";
        sonBonneReponse();

    } else {

        // --- Mauvaise réponse ---
        // On utilise les "template literals" (entre backticks `) pour insérer
        // des variables dans une chaîne de caractères avec ${variable}.
        vies--;
        afficherVies();
        zoneFeedback.innerHTML = `<span class="annee-correcte">${bonneReponse}</span><br><span class="trivia-texte">${questionsDisponibles[indexQuestion].trivia}</span>`;
        zoneFeedback.className = "feedback-incorrect";
        sonMauvaiseReponse();

    }

    champAnnee.disabled = true;
    btnValider.disabled = true;
    btnSigne.disabled   = true;

    setTimeout(() => {
        btnSuivant.focus(); // Place le focus sur le bouton "Question suivante" pour que le joueur puisse appuyer sur Entrée.
    }, 50);
}


// ===== 6. FONCTION : QUESTION SUIVANTE =====
// Appelée quand le joueur clique sur le bouton "Question suivante".

function nextQuestion() {

    // === VÉRIFICATION DES CONDITIONS DE FIN DE PARTIE ===
    // On vérifie si l'une des deux conditions de fin est atteinte.

    // Condition 1 : le joueur a atteint 10 points.
    // Condition 2 : c'était la dernière question disponible.
    //               indexQuestion + 1 car les index commencent à 0.
    //               (si on a 3 questions : index 0, 1, 2 → longueur = 3)
    const derniereQuestion = (indexQuestion + 1 >= questionsDisponibles.length);
    const dixPointsAtteints = (score >= 10);
    const plusDeVies        = (vies === 0);

    if (dixPointsAtteints || derniereQuestion || plusDeVies) {
        // "||" est le OU logique : vrai si au moins l'une des conditions est vraie.
        terminerPartie();

    } else {

        // Sinon, on passe à la question suivante.
        indexQuestion = indexQuestion + 1; // Avance au prochain index
        afficherQuestion();
    }
}


// ===== 7. FONCTION : TERMINER LA PARTIE =====
// Affiche l'écran d'accueil avec un message de fin.

function terminerPartie() {

    // On récupère l'élément <p> de l'écran d'accueil pour y afficher le résultat.
    // querySelectorAll("p") retourne TOUS les <p> ; on prend le premier (index 0).
    const paragrapheAccueil = ecranAccueil.querySelectorAll("p")[0];

    // On affiche un message personnalisé avec le score final.
    paragrapheAccueil.textContent = `Partie terminée ! Vous avez marqué ${score} point(s). Bonne chance pour la prochaine !`;

    if (score >= 10) sonVictoire(); else sonFinPartie();

    // Retour à l'écran d'accueil.
    ecranJeu.classList.add("cache");
    ecranAccueil.classList.remove("cache");

    setTimeout(() => {
        btnDemarrer.focus();
    }, 50);
}


// ===== 8. EFFETS SONORES (Web Audio API) =====
// La Web Audio API est intégrée au navigateur — aucune bibliothèque nécessaire.
// Elle permet de générer des sons par code en contrôlant des oscillateurs.

let audioCtx = null;
let muted = false;

function toggleMute() {
    muted = !muted;
    document.getElementById("icone-mute").className = muted
        ? "fa-solid fa-volume-xmark"
        : "fa-solid fa-volume-high";
}

function getAudioCtx() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    // Certains navigateurs suspendent le contexte audio jusqu'à une interaction
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
}

// Joue une note : fréquence (Hz), délai (s), durée (s), forme d'onde, volume
function note(freq, debut, duree, type = 'sine', vol = 0.25) {
    if (muted) return;
    const c = getAudioCtx();
    const osc  = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain);
    gain.connect(c.destination);
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol, c.currentTime + debut);
    gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + debut + duree);
    osc.start(c.currentTime + debut);
    osc.stop(c.currentTime + debut + duree + 0.01);
}

function sonBonneReponse() {
    // Arpège Do-Mi-Sol-Do ascendant
    [[523, 0], [659, 0.1], [784, 0.2], [1047, 0.32]].forEach(([f, t]) => note(f, t, 0.28));
}

function sonMauvaiseReponse() {
    // Descente grave en dents de scie
    [[280, 0], [230, 0.15], [170, 0.3]].forEach(([f, t]) => note(f, t, 0.22, 'sawtooth', 0.2));
}

function sonDemarrer() {
    // Courte fanfare ascendante
    [[392, 0], [494, 0.1], [587, 0.2], [784, 0.32]].forEach(([f, t]) => note(f, t, 0.22, 'sine', 0.2));
}

function sonVictoire() {
    // Fanfare victorieuse
    [[523, 0], [659, 0.12], [784, 0.24], [659, 0.38], [784, 0.5], [1047, 0.64]].forEach(([f, t]) => note(f, t, 0.22));
}

function sonFinPartie() {
    // Mélodie neutre descendante
    [[523, 0], [494, 0.18], [440, 0.36], [392, 0.56]].forEach(([f, t]) => note(f, t, 0.28));
}

// Sons de survol — un son distinctif par époque
function sonPrehistoire() {
    // Percussion grave primitive
    note(80,  0,    0.18, 'triangle', 0.35);
    note(55,  0.06, 0.22, 'sine',     0.22);
}

function sonAntiquite() {
    // Lyre — arpège rapide ascendant
    [[660, 0], [880, 0.07], [1100, 0.14]].forEach(([f, t]) => note(f, t, 0.28, 'sine', 0.14));
}

function sonMoyenAge() {
    // Cor médiéval — onde carrée
    note(220, 0,    0.12, 'square', 0.14);
    note(330, 0.10, 0.22, 'square', 0.13);
}

function sonRenaissance() {
    // Luth — triangle doux, arpège
    [[440, 0], [550, 0.08], [660, 0.16]].forEach(([f, t]) => note(f, t, 0.24, 'triangle', 0.14));
}

function sonClassique() {
    // Clavecin — dents de scie très court et sec
    note(880,  0,    0.07, 'sawtooth', 0.12);
    note(1100, 0.07, 0.07, 'sawtooth', 0.10);
    note(1320, 0.14, 0.07, 'sawtooth', 0.08);
}

function sonPremierEmpire() {
    // Clairon militaire — onde carrée ascendante
    [[523, 0], [659, 0.09], [784, 0.18]].forEach(([f, t]) => note(f, t, 0.14, 'square', 0.14));
}

function sonSecondEmpire() {
    if (muted) return;
    // Sifflet à vapeur — glissement fréquence vers le haut
    const c = getAudioCtx();
    const osc  = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain);
    gain.connect(c.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(350, c.currentTime);
    osc.frequency.linearRampToValueAtTime(900, c.currentTime + 0.22);
    gain.gain.setValueAtTime(0.18, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.32);
    osc.start(c.currentTime);
    osc.stop(c.currentTime + 0.35);
}

function sonRevolution() {
    // Roulement de tambour révolutionnaire
    [0, 0.06, 0.12, 0.18, 0.24, 0.3].forEach(t => note(110, t, 0.07, 'triangle', 0.28));
}

function sonArt() {
    // Arpège doux — harpe
    [[523, 0], [659, 0.1], [784, 0.2], [1047, 0.32], [1319, 0.44]].forEach(([f, t]) => note(f, t, 0.5, 'sine', 0.12));
}

function sonToutesEpoques() {
    // Carillon — trois harmoniques
    [[1047, 0], [1319, 0.09], [1568, 0.18]].forEach(([f, t]) => note(f, t, 0.4, 'sine', 0.11));
}

// Attache les sons de survol ET de focus (Tab) à chaque bouton du menu
[
    ['#btn-demarrer',        sonToutesEpoques ],
    ['.btn-prehistoire',     sonPrehistoire   ],
    ['.btn-antiquite',       sonAntiquite     ],
    ['.btn-moyen-age',       sonMoyenAge      ],
    ['.btn-renaissance',     sonRenaissance   ],
    ['.btn-classique',       sonClassique     ],
    ['.btn-revolution',      sonRevolution    ],
    ['.btn-premier-empire',  sonPremierEmpire ],
    ['.btn-second-empire',   sonSecondEmpire  ],
].forEach(([selecteur, son]) => {
    const btn = document.querySelector(selecteur);
    btn.addEventListener('mouseenter', son);
    btn.addEventListener('focus',      son);
});


// ===== 9. FONCTION UTILITAIRE : MÉLANGER UN TABLEAU =====
// Algorithme classique de mélange aléatoire (Fisher-Yates shuffle).
// Cette fonction modifie directement le tableau passé en argument ("en place").

function melangerTableau(tableau) {

    // On part de la fin du tableau et on remonte vers le début.
    // tableau.length - 1 : indice du dernier élément.
    for (let i = tableau.length - 1; i > 0; i--) {

        // Math.random() génère un nombre décimal aléatoire entre 0 (inclus) et 1 (exclus).
        // Math.floor() arrondit à l'entier inférieur.
        // Ensemble, ils génèrent un entier entre 0 et i (inclus).
        const j = Math.floor(Math.random() * (i + 1));

        // On échange les éléments aux positions i et j.
        // Cette syntaxe s'appelle "déstructuration" : elle échange deux valeurs en une ligne.
        // Sans déstructuration, il faudrait une variable temporaire.
        [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
    }
    // Pas de "return" : le tableau original est modifié directement.
}

btnDemarrer.focus();

// Affiche le nombre de questions sous chaque bouton du menu histoire.
const qHist = q => !q.art;
document.getElementById("compte-total").textContent            = `${QUESTIONS.filter(qHist).length} questions`;
document.getElementById("compte-prehistoire").textContent      = `${QUESTIONS.filter(q => qHist(q) && getEpoque(q.annee) === "prehistoire").length} questions`;
document.getElementById("compte-antiquite").textContent        = `${QUESTIONS.filter(q => qHist(q) && getEpoque(q.annee) === "antiquite").length} questions`;
document.getElementById("compte-moyen-age").textContent        = `${QUESTIONS.filter(q => qHist(q) && getEpoque(q.annee) === "moyen-age").length} questions`;
document.getElementById("compte-renaissance").textContent      = `${QUESTIONS.filter(q => qHist(q) && getEpoque(q.annee) === "renaissance").length} questions`;
document.getElementById("compte-classique").textContent        = `${QUESTIONS.filter(q => qHist(q) && getEpoque(q.annee) === "classique").length} questions`;
document.getElementById("compte-lumieres").textContent        = `${QUESTIONS.filter(q => qHist(q) && getEpoque(q.annee) === "lumieres").length} questions`;
document.getElementById("compte-revolution").textContent       = `${QUESTIONS.filter(q => qHist(q) && getEpoque(q.annee) === "revolution").length} questions`;
document.getElementById("compte-premier-empire").textContent   = `${QUESTIONS.filter(q => qHist(q) && getEpoque(q.annee) === "premier-empire").length} questions`;
document.getElementById("compte-restauration").textContent    = `${QUESTIONS.filter(q => qHist(q) && getEpoque(q.annee) === "restauration").length} questions`;
document.getElementById("compte-second-empire").textContent    = `${QUESTIONS.filter(q => qHist(q) && getEpoque(q.annee) === "second-empire").length} questions`;

// Affiche le nombre de questions sous chaque bouton du menu art.
const qArt = q => q.art === true;
document.getElementById("compte-art-total").textContent        = `${QUESTIONS.filter(qArt).length} questions`;
document.getElementById("compte-art-antiquite").textContent    = `${QUESTIONS.filter(q => qArt(q) && getEpoqueArt(q.annee) === "art-antiquite").length} questions`;
document.getElementById("compte-art-moyen-age").textContent    = `${QUESTIONS.filter(q => qArt(q) && getEpoqueArt(q.annee) === "art-moyen-age").length} questions`;
document.getElementById("compte-art-renaissance").textContent  = `${QUESTIONS.filter(q => qArt(q) && getEpoqueArt(q.annee) === "art-renaissance").length} questions`;
document.getElementById("compte-art-classique").textContent    = `${QUESTIONS.filter(q => qArt(q) && getEpoqueArt(q.annee) === "art-classique").length} questions`;
document.getElementById("compte-art-lumieres").textContent     = `${QUESTIONS.filter(q => qArt(q) && getEpoqueArt(q.annee) === "art-lumieres").length} questions`;


// ===== ICÔNES 3D (Three.js) =====

function creerScene3D(canvasId, creerObjet, _couleur, celluleId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(110, 80);
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 110 / 80, 0.1, 100);
    camera.position.z = 4;

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const lumiere = new THREE.PointLight(0xffffff, 2);
    lumiere.position.set(3, 4, 5);
    scene.add(lumiere);
    const lumiereArriere = new THREE.PointLight(0xffffff, 0.4);
    lumiereArriere.position.set(-3, -2, -3);
    scene.add(lumiereArriere);

    const objet = creerObjet();
    objet.rotation.z = 0.1;
    const pivot = new THREE.Group();
    pivot.rotation.x = 0.6;
    pivot.add(objet);
    scene.add(pivot);

    let vitesse = 0.012;
    const cellule = document.getElementById(celluleId);
    if (cellule) {
        cellule.addEventListener("mouseenter", () => { vitesse = 0.12; });
        cellule.addEventListener("mouseleave", () => { vitesse = 0.012; });
        const bouton = cellule.querySelector("button");
        if (bouton) {
            bouton.addEventListener("focus", () => { vitesse = 0.12; });
            bouton.addEventListener("blur",  () => { vitesse = 0.012; });
        }
    }

    function animer() {
        requestAnimationFrame(animer);
        objet.rotation.y += vitesse;
        renderer.render(scene, camera);
    }
    animer();
}

function mat(couleur, brillance = 90) {
    return new THREE.MeshPhongMaterial({
        color: couleur,
        shininess: brillance,
        specular: new THREE.Color(0x555555)
    });
}

// Os : couché horizontalement — tige sur X + deux paires de sphères aux extrémités
function creerOs() {
    const g = new THREE.Group();
    const m = mat(0xf0e0b0, 60);
    const tige = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 1.6, 8), m);
    tige.rotation.z = Math.PI / 2; // couché horizontalement
    [[-0.9, -0.18], [-0.9, 0.18], [0.9, -0.18], [0.9, 0.18]].forEach(([x, y]) => {
        const s = new THREE.Mesh(new THREE.SphereGeometry(0.32, 8, 8), m);
        s.position.set(x, y, 0);
        g.add(s);
    });
    g.add(tige);
    g.scale.setScalar(1.09);
    return g;
}

// Temple grec : marbre blanc, base dorée, fronton ocre
function creerTemple() {
    const g = new THREE.Group();
    const mBase = mat(0xe8c060);
    const mCol  = mat(0xfffaf0, 120);
    const mToit = mat(0xd4a030);
    const base = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.22, 0.8), mBase);
    base.position.y = -0.85;
    g.add(base);
    [-0.72, -0.24, 0.24, 0.72].forEach(x => {
        const col = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 1.5, 8), mCol);
        col.position.set(x, -0.05, 0);
        g.add(col);
    });
    const toit = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.48, 0.8), mToit);
    toit.position.y = 0.95;
    g.add(toit);
    g.scale.setScalar(1.05);
    return g;
}

// Épée : lame argentée vive, garde et pommeau or vif, poignée bordeaux
function creerEpee() {
    const g = new THREE.Group();
    const lame    = new THREE.Mesh(new THREE.BoxGeometry(0.14, 2.0, 0.08), mat(0xe8e8ff, 180));
    lame.position.y = 0.3;
    const garde   = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.15, 0.15), mat(0xffcc00, 150));
    garde.position.y = -0.7;
    const poignee = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.6, 8), mat(0x8b1a1a));
    poignee.position.y = -1.1;
    const pommeau = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), mat(0xffcc00, 150));
    pommeau.position.y = -1.48;
    const pointe = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.28, 4), mat(0xe8e8ff, 180));
    pointe.position.y = 1.44;
    g.add(lame, garde, poignee, pommeau, pointe);
    g.scale.setScalar(1.0);
    return g;
}

// Sphère armillaire : anneaux bronze vif, globe bleu électrique
function creerArmillaire() {
    const g = new THREE.Group();
    const mAnneau = mat(0xe8960e, 150);
    const mGlobe  = mat(0x2980b9, 80);
    [[0, 0], [Math.PI / 2, 0], [Math.PI / 3, Math.PI / 4]].forEach(([rx, rz]) => {
        const tore = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.09, 8, 32), mAnneau);
        tore.rotation.x = rx;
        tore.rotation.z = rz;
        g.add(tore);
    });
    g.add(new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 10), mGlobe));
    g.scale.setScalar(1.15);
    return g;
}

// Couronne : anneau fin + 6 piliers + pointes dorées + gemmes — espace vide entre les piliers
function creerCouronne() {
    const g = new THREE.Group();
    const mArgent = mat(0xd0d8e8, 160);
    const mOr     = mat(0xffd700, 220);
    const couleurs = [0xff2200, 0x00ddff, 0x00ee44];

    // Anneau de base (fin, horizontal)
    const anneau = new THREE.Mesh(new THREE.TorusGeometry(0.65, 0.18, 8, 24), mOr);
    anneau.rotation.x = Math.PI / 2;
    anneau.position.y = -0.5;
    g.add(anneau);

    // 6 piliers + pointes + gemmes
    for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const x = Math.cos(angle) * 0.65;
        const z = Math.sin(angle) * 0.65;

        // Pilier + pointe : même rayon, même couleur — continuité parfaite
        const pilier = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.52, 8), mOr);
        pilier.position.set(x, -0.24, z);
        g.add(pilier);

        const pointe = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.82, 6), mOr);
        pointe.position.set(x, 0.37, z);
        g.add(pointe);

        // Gemme au bout de la pointe
        const gemme = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), mat(couleurs[i % 3], 240));
        gemme.position.set(x, 0.79, z);
        g.add(gemme);
    }

    g.scale.setScalar(1.15);
    return g;
}

// Livre (Code Civil) : couverture bleue, pages crème séparées, dos sombre, titre doré
function creerLivre() {
    const g = new THREE.Group();
    // Corps principal (couverture)
    const corps = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.7, 0.32), mat(0x0a2a8a));
    g.add(corps);
    // Pages : plus petites et décalées vers l'avant — pas de z-fighting
    const pages = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.55, 0.18), mat(0xfff8e7));
    pages.position.z = 0.08;
    g.add(pages);
    // Dos (tranche gauche) — légèrement plus large que le corps
    const dos = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.7, 0.34), mat(0x061870));
    dos.position.x = -0.68;
    g.add(dos);
    // Étiquette "Code Civil" en canvas texture
    const cv = document.createElement('canvas');
    cv.width = 512; cv.height = 256;
    const ctx = cv.getContext('2d');
    ctx.fillStyle = '#0a2a8a';
    ctx.fillRect(0, 0, 512, 256);
    ctx.fillStyle = '#ffd700';
    ctx.strokeStyle = '#0a2a8a';
    ctx.lineWidth = 4;
    ctx.font = 'bold 88px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.strokeText('CODE', 256, 76);
    ctx.fillText('CODE', 256, 76);
    ctx.strokeText('CIVIL', 256, 180);
    ctx.fillText('CIVIL', 256, 180);
    const etiquette = new THREE.Mesh(
        new THREE.PlaneGeometry(0.82, 0.41),
        new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(cv) })
    );
    etiquette.position.set(0.03, 0.2, 0.185);
    g.add(etiquette);
    g.scale.setScalar(1.3);
    return g;
}

// Rails : voie ferrée en perspective — rails le long de Z, traverses perpendiculaires
function creerRails() {
    const g = new THREE.Group();
    const mRail     = mat(0xb8c0cc, 160);
    const mTraverse = mat(0x8b5a2b, 40);
    // Rails le long de l'axe Z (profondeur)
    const rail1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.12, 2.8), mRail);
    rail1.position.x = -0.52;
    const rail2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.12, 2.8), mRail);
    rail2.position.x = 0.52;
    g.add(rail1, rail2);
    // Traverses
    [-1.05, -0.52, 0, 0.52, 1.05].forEach(z => {
        const t = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.1, 0.28), mTraverse);
        t.position.set(0, -0.08, z);
        g.add(t);
    });
    g.scale.setScalar(1.09);
    return g;
}

function creerGuillotine() {
    const g = new THREE.Group();
    const mBois  = mat(0x7b4f2e);
    const mAcier = mat(0xd8d8d8, 150);

    const base = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.1, 0.3), mBois);
    base.position.y = -0.85;
    g.add(base);

    const montantG = new THREE.Mesh(new THREE.BoxGeometry(0.11, 1.72, 0.11), mBois);
    montantG.position.set(-0.44, -0.04, 0);
    g.add(montantG);

    const montantD = new THREE.Mesh(new THREE.BoxGeometry(0.11, 1.72, 0.11), mBois);
    montantD.position.set(0.44, -0.04, 0);
    g.add(montantD);

    const traverseH = new THREE.Mesh(new THREE.BoxGeometry(0.99, 0.12, 0.12), mBois);
    traverseH.position.y = 0.79;
    g.add(traverseH);

    // Lame : trapèze custom — haut plat, bas diagonal (tranchant)
    // Bord supérieur : y=0.76 (sous la traverse)
    // Bord inférieur diagonal : gauche y=0.44, droite y=0.06 (angle ~30°)
    const xL = -0.37, xR = 0.37, d = 0.04;  // légèrement en retrait des montants et de la traverse
    const lameGeo = new THREE.BufferGeometry();
    lameGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
        xL, 0.72,  d,  xR, 0.72,  d,  xR, 0.06,  d,  xL, 0.42,  d,  // face avant  0-3
        xL, 0.72, -d,  xR, 0.72, -d,  xR, 0.06, -d,  xL, 0.42, -d,  // face arrière 4-7
    ]), 3));
    lameGeo.setIndex([
        0,1,2, 0,2,3,   // avant
        4,6,5, 4,7,6,   // arrière
        0,4,5, 0,5,1,   // haut
        1,5,6, 1,6,2,   // droite
        2,6,7, 2,7,3,   // bas diagonal (tranchant)
        3,7,4, 3,4,0,   // gauche
    ]);
    lameGeo.computeVertexNormals();
    g.add(new THREE.Mesh(lameGeo, mat(0xe8e8ff, 220)));

    const lunette = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.035, 8, 16), mBois);
    lunette.position.y = -0.68;
    g.add(lunette);

    g.scale.setScalar(1.41);
    return g;
}

creerScene3D("canvas-prehistoire",    creerOs,         null, "cellule-prehistoire");
creerScene3D("canvas-antiquite",      creerTemple,     null, "cellule-antiquite");
creerScene3D("canvas-moyen-age",      creerEpee,       null, "cellule-moyen-age");
creerScene3D("canvas-renaissance",    creerArmillaire, null, "cellule-renaissance");
creerScene3D("canvas-classique",      creerCouronne,   null, "cellule-classique");
function creerPinceau() {
    const g = new THREE.Group();
    const mBois  = mat(0xa0522d);
    const mMetal = mat(0xc8c8c8, 150);
    const mPoil  = mat(0x2d1205);

    const manche = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.11, 1.4, 8), mBois);
    manche.position.y = 0.1;
    g.add(manche);

    const virole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.16, 8), mMetal);
    virole.position.y = -0.63;
    g.add(virole);

    const soies = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.48, 8), mPoil);
    soies.rotation.z = Math.PI;
    soies.position.y = -0.99;
    g.add(soies);

    g.scale.setScalar(1.15);
    return g;
}

// Bougie : corps crème, mèche sombre, flamme orange avec lueur jaune
function creerBougie() {
    const g = new THREE.Group();
    const corps = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.6, 12), mat(0xfff8dc, 60));
    corps.position.y = -0.1;
    g.add(corps);
    const meche = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.2, 6), mat(0x1a0a00));
    meche.position.y = 0.8;
    g.add(meche);
    const flamme = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.45, 8), mat(0xff8c00, 80));
    flamme.position.y = 1.15;
    g.add(flamme);
    const lueur = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.28, 8), mat(0xffff80, 200));
    lueur.position.y = 1.1;
    g.add(lueur);
    g.scale.setScalar(1.05);
    return g;
}

// Trône : 4 pieds, siège avec coussin rouge, dossier haut, accoudoirs, couronnement doré
function creerTrone() {
    const g = new THREE.Group();
    const mBois    = mat(0x6b3510, 60);
    const mOr      = mat(0xffd700, 200);
    const mVelours = mat(0x8b0000, 30);

    // 4 pieds
    [[-0.42, 0.38], [0.42, 0.38], [-0.42, -0.36], [0.42, -0.36]].forEach(([x, z]) => {
        const pied = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.07, 0.5, 6), mBois);
        pied.position.set(x, -0.85, z);
        g.add(pied);
    });

    // Siège
    const siege = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.1, 0.95), mBois);
    siege.position.set(0, -0.55, 0.08);
    g.add(siege);

    // Coussin velours
    const coussin = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.09, 0.78), mVelours);
    coussin.position.set(0, -0.45, 0.08);
    g.add(coussin);

    // Dossier
    const dossier = new THREE.Mesh(new THREE.BoxGeometry(1.05, 1.5, 0.1), mBois);
    dossier.position.set(0, 0.2, -0.24);
    g.add(dossier);

    // Bandeau doré sur le dossier (en avant du dossier pour éviter le z-fighting)
    const cadre = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.06, 0.06), mOr);
    cadre.position.set(0, 0.93, -0.15);
    g.add(cadre);

    // Accoudoirs (horizontal + montant vertical)
    [-0.48, 0.48].forEach(x => {
        const h = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 0.82), mBois);
        h.position.set(x, -0.28, 0.08);
        g.add(h);
        const v = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.28, 0.08), mBois);
        v.position.set(x, -0.42, -0.3);
        g.add(v);
    });

    // Couronnement : arcade dorée (demi-tore) — en avant du dossier
    const arc = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.045, 6, 16, Math.PI), mOr);
    arc.position.set(0, 1.0, -0.15);
    g.add(arc);

    // Finials dorés (cônes + sphères) — au-dessus du dossier, en avant
    [-0.48, 0.48].forEach(x => {
        const cone = new THREE.Mesh(new THREE.ConeGeometry(0.065, 0.22, 6), mOr);
        cone.position.set(x, 1.12, -0.15);
        g.add(cone);
        const boule = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 6), mOr);
        boule.position.set(x, 1.0, -0.15);
        g.add(boule);
    });

    g.scale.setScalar(1.1);
    return g;
}

creerScene3D("canvas-lumieres",       creerBougie,      null, "cellule-lumieres");
creerScene3D("canvas-revolution",     creerGuillotine, null, "cellule-revolution");
creerScene3D("canvas-premier-empire", creerLivre,      null, "cellule-premier-empire");
creerScene3D("canvas-restauration",   creerTrone,      null, "cellule-restauration");
creerScene3D("canvas-second-empire",  creerRails,      null, "cellule-second-empire");