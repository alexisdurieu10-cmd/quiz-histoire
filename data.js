// ============================================================
// QUIZ HISTOIRE — data.js
// Ce fichier contient uniquement les données du jeu.
// Pour ajouter des questions, il suffit d'ajouter un objet ici.
// Chaque objet doit avoir : evenement, annee, trivia.
// ============================================================

// Bornes des époques :
//   prehistoire : année ≤ -2000
//   antiquite   : -1999 ≤ année ≤ 476
//   moyen-age   : 477 ≤ année ≤ 1492
//   renaissance : 1493 ≤ année ≤ 1620
//   classique   : 1621 ≤ année ≤ 1715

const QUESTIONS = [

    // --- Préhistoire (≤ -3000) ---
    {
        evenement: "Maîtrise du feu par Homo erectus",
        annee: -400000,
        trivia : "Il y a environ 400 000 ans, Homo erectus commence à maîtriser le feu en Europe. Cette conquête révolutionne l'humanité : elle permet de cuisiner les aliments, d'éclairer la nuit, de se chauffer et de repousser les prédateurs."
    },
    {
        evenement: "Apparition d'Homo sapiens",
        annee: -200000,
        trivia : "Homo sapiens apparaît en Afrique il y a environ 200 000 ans. Doté d'un cerveau plus développé que ses cousins, il va progressivement coloniser toute la planète et supplanter les autres espèces humaines comme les Néandertaliens."
    },
    {
        evenement: "Premières sépultures néandertaliennes",
        annee: -100000,
        trivia : "Il y a 100 000 ans, les Néandertaliens commencent à enterrer leurs morts avec soin, parfois accompagnés d'outils ou de fleurs. C'est l'une des premières preuves d'une conscience de la mort et peut-être d'une forme de spiritualité."
    },
    {
        evenement: "Arrivée d'Homo sapiens en Europe",
        annee: -45000,
        trivia : "Homo sapiens arrive en Europe il y a environ 45 000 ans, venant du Moyen-Orient. Il y rencontre les Néandertaliens, avec qui il coexiste pendant plusieurs millénaires avant que ces derniers ne disparaissent. Nous portons encore environ 2% d'ADN néandertalien."
    },
    {
        evenement: "Grotte Chauvet — premières peintures rupestres connues",
        annee: -36000,
        trivia : "La grotte Chauvet, découverte en 1994 dans l'Ardèche, contient les peintures rupestres les plus anciennes connues, datant de -36 000 ans. Rhinocéros laineux, mammouths et lions y sont représentés avec un réalisme saisissant."
    },
    {
        evenement: "Extinction des Néandertaliens",
        annee: -30000,
        trivia : "Les Néandertaliens disparaissent il y a environ 30 000 ans, après avoir coexisté avec Homo sapiens pendant des millénaires. Les causes restent débattues : concurrence alimentaire, maladies, absorption par métissage, ou changements climatiques."
    },
    {
        evenement: "Vénus de Willendorf",
        annee: -25000,
        trivia : "La Vénus de Willendorf, petite statuette féminine aux formes généreuses taillée dans du calcaire, date d'environ -25 000 ans. Découverte en Autriche, elle est l'une des plus célèbres sculptures préhistoriques et témoigne d'un culte de la fertilité."
    },
    {
        evenement: "Peintures de Lascaux",
        annee: -17000,
        trivia : "La grotte de Lascaux, découverte en 1940 en Dordogne par quatre adolescents, abrite des peintures vieilles de 17 000 ans. Les aurochs, chevaux et cerfs y sont représentés avec une maîtrise artistique stupéfiante. La grotte est fermée au public depuis 1963 pour la préserver."
    },
    {
        evenement: "Fin de la dernière glaciation",
        annee: -10000,
        trivia : "Il y a environ 10 000 ans, la dernière grande période glaciaire prend fin. Les glaciers reculent, le niveau des mers monte de 120 mètres, les forêts remplacent les steppes. Ce bouleversement climatique pousse les humains à inventer l'agriculture."
    },
    {
        evenement: "Naissance de l'agriculture au Croissant Fertile",
        annee: -9000,
        trivia : "Il y a environ 9 000 ans, les habitants du Croissant Fertile (actuel Moyen-Orient) commencent à cultiver le blé et l'orge et à élever des chèvres. Cette révolution néolithique est l'une des transformations les plus profondes de l'histoire humaine."
    },
    {
        evenement: "Fondation de Jéricho",
        annee: -8000,
        trivia : "Jéricho, en Cisjordanie, est l'une des plus anciennes villes du monde, habitée depuis environ -8000 ans. Elle est entourée de murs en pierre, ce qui témoigne déjà d'une organisation sociale complexe et d'un besoin de défense."
    },
    {
        evenement: "Invention de la poterie",
        annee: -7000,
        trivia : "La poterie apparaît en Europe et au Moyen-Orient vers -7000. Cet outil révolutionnaire permet de stocker des aliments et des liquides, de cuire et de conserver. La poterie est aussi l'un des premiers arts décoratifs de l'humanité."
    },
    {
        evenement: "Mégalithes de Carnac",
        annee: -4500,
        trivia : "Les alignements de Carnac, en Bretagne, sont érigés vers -4500. Plus de 3 000 menhirs disposés en rangées sur plusieurs kilomètres constituent l'un des plus grands ensembles mégalithiques du monde. Leur fonction exacte reste mystérieuse."
    },
    {
        evenement: "Domestication du cheval",
        annee: -3500,
        trivia : "Le cheval est domestiqué par les peuples des steppes d'Asie centrale vers -3500. Cette révolution transforme les sociétés humaines : les distances se raccourcissent, le commerce s'accélère, et la guerre prend une nouvelle dimension avec la cavalerie."
    },
    {
        evenement: "Invention de la roue",
        annee: -3500,
        trivia : "La roue apparaît en Mésopotamie vers -3500, d'abord comme outil de potier, puis adaptée aux chariots. Cette invention, apparemment simple, révolutionne le transport, le commerce et la guerre, et reste l'une des plus importantes de l'histoire humaine."
    },
    {
        evenement: "Invention de l'écriture cunéiforme",
        annee: -3200,
        trivia : "L'écriture cunéiforme, inventée en Sumer (actuel Irak) vers -3200, est la plus ancienne écriture connue. Elle naît d'un besoin comptable : noter les stocks de grain et de bétail. L'écriture marque conventionnellement la fin de la préhistoire."
    },
    {
        evenement: "Unification de l'Égypte",
        annee: -3100,
        trivia : "Vers -3100, le pharaon Narmer unifie la Haute et la Basse Égypte sous une seule couronne. C'est le début de la civilisation égyptienne telle qu'on la connaît : pharaons, pyramides, hiéroglyphes. L'Égypte restera une grande puissance pendant trois millénaires."
    },
    {
        evenement: "Début de la construction de Stonehenge",
        annee: -3000,
        trivia : "La construction de Stonehenge, en Angleterre, commence vers -3000 et s'étale sur 1 500 ans. Ces immenses blocs de pierre pesant jusqu'à 40 tonnes ont été transportés sur des centaines de kilomètres. Son alignement avec le solstice d'été révèle une connaissance astronomique avancée."
    },
    {
        evenement: "Pyramide de Djéser",
        annee: -2650,
        trivia : "La pyramide à degrés de Djéser, construite vers -2650 à Saqqara par l'architecte Imhotep, est la plus ancienne grande construction en pierre du monde. Elle marque le début de l'architecture monumentale égyptienne qui aboutira aux pyramides de Gizeh."
    },
    {
        evenement: "Pyramide de Khéops",
        annee: -2560,
        trivia : "La Grande Pyramide de Gizeh, construite vers -2560 pour le pharaon Khéops, est la seule des Sept Merveilles du monde antique encore debout. Haute de 146 mètres à l'origine, elle est composée de 2,3 millions de blocs de pierre. Les égyptologues débattent encore de son mode de construction."
    },

    // --- Antiquité (-2999 à 476) ---
    {
        evenement: "Fondation de Rome",
        annee: -753,
        trivia : "Selon la tradition, Rome est fondée en 753 av. J.-C. par Romulus, qui en devient le premier roi. Cette date est en grande partie mythologique : Rome s'est développée progressivement à partir de villages latins sur les collines du Tibre."
    },
    {
        evenement: "Bataille de Marathon",
        annee: -490,
        trivia : "En 490 av. J.-C., les Athéniens repoussent l'armée perse de Darios à Marathon. Selon la légende, un soldat courut 42 km jusqu'à Athènes pour annoncer la victoire avant de mourir — c'est l'origine du marathon moderne."
    },
    {
        evenement: "Bataille des Thermopyles",
        annee: -480,
        trivia : "En 480 av. J.-C., le roi Léonidas et 300 Spartiates retardent l'armée perse de Xerxès au défilé des Thermopyles. Leur sacrifice héroïque, bien que militairement vain, est devenu le symbole du courage face à l'adversité."
    },
    {
        evenement: "Mort de Périclès",
        annee: -429,
        trivia : "Périclès, stratège d'Athènes et figure centrale de son âge d'or, meurt de la peste en 429 av. J.-C. Sous son influence, Athènes a bâti le Parthénon et développé la démocratie directe."
    },
    {
        evenement: "Mort de Socrate",
        annee: -399,
        trivia : "Socrate est condamné à mort par le tribunal d'Athènes en 399 av. J.-C. pour impiété et corruption de la jeunesse. Il boit la ciguë sans chercher à fuir, fidèle jusqu'au bout à ses principes philosophiques."
    },
    {
        evenement: "Mort d'Alexandre le Grand",
        annee: -323,
        trivia : "Alexandre le Grand meurt à Babylone en 323 av. J.-C. à seulement 32 ans, après avoir conquis un empire s'étendant de la Grèce à l'Inde. Sa mort sans héritier désigné provoque l'éclatement immédiat de son empire entre ses généraux."
    },
    {
        evenement: "Bataille de Zama",
        annee: -202,
        trivia : "La bataille de Zama en 202 av. J.-C. voit Scipion l'Africain écraser Hannibal en Afrique du Nord. Cette défaite met fin à la Deuxième Guerre Punique et consacre Rome comme puissance dominante de la Méditerranée."
    },
    {
        evenement: "Destruction de Carthage",
        annee: -146,
        trivia : "En 146 av. J.-C., Rome rase entièrement Carthage après la Troisième Guerre Punique. Selon la légende, les Romains auraient semé du sel sur les ruines pour rendre la terre stérile, effaçant définitivement leur plus grand rival."
    },
    {
        evenement: "Hannibal traverse les Alpes",
        annee: -218,
        trivia : "Hannibal Barca, célèbre général carthaginois, a traversé les Alpes avec son armée, y compris des éléphants de guerre, pour attaquer Rome pendant la deuxième guerre punique."
    },
    {
        evenement: "Siège d'Alésia",
        annee: -52,
        trivia : "En 52 av. J.-C., Jules César assiège Vercingétorix et ses troupes gauloises à Alésia. La capitulation du chef gaulois marque la fin de la résistance gauloise et l'annexion de la Gaule par Rome."
    },
    {
        evenement: "Assassinat de Jules César",
        annee: -44,
        trivia : "Jules César, célèbre général et homme politique romain, a été assassiné le 15 mars 44 av. J.-C. par un groupe de sénateurs romains, dont Brutus et Cassius, qui craignaient son pouvoir croissant."
    },
    {
        evenement: "Bataille d'Actium",
        annee: -31,
        trivia : "La bataille d'Actium en 31 av. J.-C. oppose Octave à Marc Antoine et Cléopâtre. La victoire d'Octave met fin aux guerres civiles romaines et lui ouvre la voie vers le titre d'Auguste, premier empereur de Rome."
    },
    {
        evenement: "Mort de Cléopâtre",
        annee: -30,
        trivia : "Cléopâtre VII, dernière reine d'Égypte, se suicide en 30 av. J.-C. après la défaite d'Actium. Sa mort marque la fin du royaume ptolémaïque et l'annexion de l'Égypte par Rome."
    },
    {
        evenement: "Mort d'Auguste",
        annee: 14,
        trivia : "Auguste, premier empereur romain, meurt en l'an 14. Son règne de 44 ans a transformé la République romaine en Empire et inauguré le Principat, une période de paix et de prospérité connue sous le nom de Pax Romana."
    },
    {
        evenement: "Éruption du Vésuve — destruction de Pompéi",
        annee: 79,
        trivia : "Le 24 août 79, l'éruption du Vésuve ensevelit Pompéi sous des cendres et des pierres ponces en quelques heures. La ville est redécouverte au XVIIIe siècle, parfaitement conservée, offrant une fenêtre unique sur la vie romaine."
    },
    {
        evenement: "Mort de Marc Aurèle",
        annee: 180,
        trivia : "Marc Aurèle, philosophe stoïcien et dernier des 'Cinq Bons Empereurs', meurt en 180. Son règne marque traditionnellement la fin de la Pax Romana et le début du déclin progressif de l'Empire romain."
    },
    {
        evenement: "Édit de Milan",
        annee: 313,
        trivia : "L'Édit de Milan, promulgué par Constantin en 313, accorde la liberté de culte à tous les habitants de l'Empire romain, mettant fin aux persécutions des chrétiens. C'est un tournant majeur dans l'histoire du christianisme."
    },
    {
        evenement: "Sac de Rome par les Wisigoths",
        annee: 410,
        trivia : "En 410, le roi wisigoth Alaric prend et pille Rome pour la première fois depuis 800 ans. L'événement traumatise le monde romain et annonce la chute prochaine de l'Empire d'Occident."
    },
    {
        evenement: "Bataille des Champs Catalauniques",
        annee: 451,
        trivia : "En 451, une coalition romano-wisigothique arrête l'avancée d'Attila et des Huns aux Champs Catalauniques, en Gaule. C'est l'une des dernières grandes victoires militaires de l'Empire romain d'Occident."
    },
    {
        evenement: "Chute de l'Empire romain d'Occident",
        annee: 476,
        trivia : "En 476, le chef barbare Odoacre dépose Romulus Augustule, dernier empereur romain d'Occident. Cette date marque traditionnellement la fin de l'Antiquité et le début du Moyen-Âge, bien que l'Empire romain d'Orient survive jusqu'en 1453."
    },

    // --- Moyen-Âge (477–1492) ---
    {
        evenement: "Couronnement de Clovis Ier",
        annee: 481,
        trivia : "Clovis Ier, premier roi de France, a été couronné en 481. Il est connu pour avoir converti son royaume au christianisme."
    },
    {
        evenement: "Baptême de Clovis",
        annee: 496,
        trivia : "Le baptême de Clovis Ier, roi des Francs, par l'évêque Rémi de Reims en 496 est un événement fondateur : il fait du royaume franc le premier royaume chrétien d'Europe occidentale."
    },
    {
        evenement: "Mort de Clovis Ier",
        annee: 511,
        trivia : "Clovis Ier meurt en 511 à Paris. Son royaume est aussitôt partagé entre ses quatre fils selon la tradition franque, amorçant des décennies de guerres fratricides entre les Mérovingiens."
    },
    {
        evenement: "Mort de Mahomet",
        annee: 632,
        trivia : "Mahomet, fondateur de l'islam, meurt à Médine en 632. Sa mort déclenche immédiatement une crise de succession qui aboutit au Grand Schisme entre sunnites et chiites, division qui perdure jusqu'à aujourd'hui."
    },
    {
        evenement: "Bataille du Pavé des Martyrs",
        annee: 732,
        trivia : "La bataille de Poitiers, également connue sous le nom de bataille de Tours, a eu lieu en 732 entre les forces franques dirigées par Charles Martel et les envahisseurs musulmans. Cette victoire franque a été cruciale pour arrêter l'expansion musulmane en Europe occidentale."
    },
    {
        evenement: "Raid viking sur Lindisfarne",
        annee: 793,
        trivia : "Le raid sur le monastère de Lindisfarne en 793 marque le début de l'ère viking en Europe. Ces attaques éclair venues de Scandinavie vont terroriser les côtes européennes pendant près de trois siècles."
    },
    {
        evenement: "Couronnement de Charlemagne",
        annee: 800,
        trivia : "Charlemagne, roi des Francs, a été couronné empereur d'Occident par le pape Léon III le 25 décembre 800. Son règne a marqué le renouveau de l'Empire romain d'Occident et a eu une influence durable sur l'Europe médiévale."
    },
    {
        evenement: "Mort de Charlemagne",
        annee: 814,
        trivia : "Charlemagne meurt le 28 janvier 814 à Aix-la-Chapelle. Son empire, qui couvrait une grande partie de l'Europe occidentale, sera rapidement divisé entre ses héritiers."
    },
    {
        evenement: "Traité de Verdun",
        annee: 843,
        trivia : "Le traité de Verdun, signé en 843, divise l'Empire carolingien entre les trois fils de Louis le Pieux : Lothaire reçoit le titre impérial et la Francie médiane, Charles le Chauve obtient la Francie occidentale (future France), et Louis le Germanique la Francie orientale (future Allemagne)."
    },
    {
        evenement: "Couronnement de Hugues Capet",
        annee: 987,
        trivia : "Hugues Capet, premier roi de France de la dynastie capétienne, a été couronné en 987. Son règne a marqué le début de la monarchie française."
    },
    {
        evenement: "Schisme d'Orient",
        annee: 1054,
        trivia : "En 1054, l'Église chrétienne se divise définitivement en Église catholique romaine et Église orthodoxe. Cette rupture, provoquée par des désaccords théologiques et politiques, n'a jamais été réparée."
    },
    {
        evenement: "Bataille d'Hastings",
        annee: 1066,
        trivia : "La bataille d'Hastings a eu lieu en 1066 entre les forces normandes de Guillaume le Conquérant et les troupes anglo-saxonnes du roi Harold II. La victoire de Guillaume a conduit à la conquête normande de l'Angleterre."
    },
    {
        evenement: "Bataille de Manzikert",
        annee: 1071,
        trivia : "La bataille de Manzikert en 1071 voit l'armée byzantine écrasée par les Turcs Seldjoukides. Cette défaite ouvre l'Anatolie à la colonisation turque et pousse Byzance à appeler l'Occident à l'aide, déclenchant indirectement les Croisades."
    },
    {
        evenement: "Domesday Book",
        annee: 1086,
        trivia : "Le Domesday Book est un grand recensement de l'Angleterre ordonné par Guillaume le Conquérant en 1086. Il recense terres, propriétaires et ressources du royaume avec une précision remarquable pour l'époque."
    },
    {
        evenement: "Concile de Clermont — appel à la Croisade",
        annee: 1095,
        trivia : "En 1095, le pape Urbain II lance lors du concile de Clermont un appel à libérer Jérusalem des musulmans. C'est le point de départ de la Première Croisade et de deux siècles d'expéditions militaires en Terre sainte."
    },
    {
        evenement: "Prise de Jérusalem par les Croisés",
        annee: 1099,
        trivia : "Le 15 juillet 1099, les chevaliers de la Première Croisade s'emparent de Jérusalem après un siège de cinq semaines. La ville restera sous contrôle chrétien jusqu'en 1187."
    },
    {
        evenement: "Fondation de l'ordre des Templiers",
        annee: 1119,
        trivia : "L'ordre des Templiers est fondé en 1119 à Jérusalem pour protéger les pèlerins chrétiens. Devenus extrêmement puissants et riches, ils seront arrêtés en masse sur ordre de Philippe IV le Bel en 1307."
    },
    {
        evenement: "Deuxième Croisade",
        annee: 1147,
        trivia : "Lancée en 1147 après la chute d'Édesse, la Deuxième Croisade est un échec cuisant. Les croisés échouent à prendre Damas et rentrent sans avoir rien accompli, affaiblissant durablement la crédibilité des expéditions en Terre sainte."
    },
    {
        evenement: "Assassinat de Thomas Becket",
        annee: 1170,
        trivia : "Thomas Becket, archevêque de Cantorbéry, est assassiné dans sa cathédrale en 1170 par des chevaliers du roi Henri II d'Angleterre. Canonisé dès 1173, il devient l'un des saints les plus vénérés du Moyen-Âge."
    },
    {
        evenement: "Saladin reprend Jérusalem",
        annee: 1187,
        trivia : "En 1187, le sultan Saladin reprend Jérusalem aux croisés après la bataille de Hattin. Contrairement aux croisés lors de la prise de 1099, il épargne la population civile, ce qui lui vaut une réputation de chevalerie même en Occident."
    },
    {
        evenement: "Troisième Croisade",
        annee: 1189,
        trivia : "Lancée en 1189 après la reconquête de Jérusalem par Saladin, la Troisième Croisade voit s'affronter Richard Cœur de Lion et Saladin. Elle se conclut par un traité laissant Jérusalem aux musulmans mais garantissant l'accès des pèlerins chrétiens."
    },
    {
        evenement: "Mort de Richard Cœur de Lion",
        annee: 1199,
        trivia : "Richard Ier d'Angleterre meurt en 1199 d'une blessure reçue lors du siège d'un château en Limousin. Héros de la Troisième Croisade, il avait passé moins de six mois de son règne en Angleterre."
    },
    {
        evenement: "Sac de Constantinople par les Croisés",
        annee: 1204,
        trivia : "La Quatrième Croisade dévie de son objectif et aboutit en 1204 au pillage de Constantinople par les croisés eux-mêmes. Cet acte scandaleux creuse un fossé irréparable entre chrétiens d'Orient et d'Occident."
    },
    {
        evenement: "Bataille de las Navas de Tolosa",
        annee: 1212,
        trivia : "La bataille de las Navas de Tolosa en 1212 est une victoire décisive des royaumes chrétiens d'Espagne sur les Almohades. Elle marque un tournant majeur dans la Reconquista et ouvre la voie à la reconquête de l'Andalousie."
    },
    {
        evenement: "Bataille de Bouvines",
        annee: 1214,
        trivia : "La bataille de Bouvines, remportée par Philippe II Auguste contre une coalition anglo-germanique, consolide la puissance du royaume de France et est souvent considérée comme l'une des batailles fondatrices de l'identité française."
    },
    {
        evenement: "Signature de la Magna Carta",
        annee: 1215,
        trivia : "La Magna Carta est un texte signé par le roi Jean d'Angleterre sous la pression des barons. Elle limite pour la première fois le pouvoir royal et pose les bases des libertés individuelles et du droit constitutionnel moderne."
    },
    {
        evenement: "Mort de Gengis Khan",
        annee: 1227,
        trivia : "Gengis Khan, fondateur de l'Empire mongol, meurt en 1227. Son empire était le plus vaste jamais conquis par un seul homme, s'étendant de la Chine à la mer Caspienne. La cause exacte de sa mort reste débattue."
    },
    {
        evenement: "Mort de Saint Louis",
        annee: 1270,
        trivia : "Louis IX, dit Saint Louis, meurt de la dysenterie en 1270 devant Tunis lors de la huitième Croisade. Il sera canonisé en 1297 et reste l'un des rois les plus populaires de l'histoire de France."
    },
    {
        evenement: "Arrestation des Templiers",
        annee: 1307,
        trivia : "Le 13 octobre 1307, Philippe IV le Bel fait arrêter simultanément tous les Templiers de France. Accusés d'hérésie, ils sont torturés et leurs aveux servent à justifier la dissolution de l'ordre. Le grand maître Jacques de Molay est brûlé en 1314."
    },
    {
        evenement: "Mort de Philippe IV le Bel",
        annee: 1314,
        trivia : "Philippe IV le Bel meurt en 1314, la même année que Jacques de Molay. Selon la légende, le grand maître des Templiers l'aurait maudit depuis son bûcher. Ses trois fils mourront sans héritier, éteignant la lignée capétienne directe."
    },
    {
        evenement: "Début de la Guerre de Cent Ans",
        annee: 1337,
        trivia : "La Guerre de Cent Ans oppose la France et l'Angleterre de 1337 à 1453. Elle est déclenchée par la revendication du trône de France par le roi anglais Édouard III. Elle sera marquée notamment par le rôle de Jeanne d'Arc."
    },
    {
        evenement: "Bataille de Crécy",
        annee: 1346,
        trivia : "La bataille de Crécy en 1346 est une victoire anglaise décisive sur l'armée française. Elle marque l'émergence des archers gallois armés de l'arc long, qui déciment la chevalerie française."
    },
    {
        evenement: "Peste noire en Europe",
        annee: 1347,
        trivia : "La Peste noire débarque en Europe en 1347 par les ports méditerranéens. En cinq ans, elle emporte entre un tiers et la moitié de la population européenne, bouleversant durablement l'économie, la société et la religion."
    },
    {
        evenement: "Bataille de Poitiers",
        annee: 1356,
        trivia : "En 1356, le Prince Noir (Édouard de Woodstock) écrase l'armée française à Poitiers. Le roi Jean II est capturé et emmené en Angleterre contre une rançon colossale, plongeant la France dans une grave crise politique."
    },
    {
        evenement: "Jacquerie",
        annee: 1358,
        trivia : "La Jacquerie est une violente révolte paysanne qui éclate en 1358 en France, dans le contexte de la Guerre de Cent Ans. Épuisés par les pillages, les impôts et la peste, les paysans se soulèvent contre la noblesse avant d'être férocement réprimés."
    },
    {
        evenement: "Trêve de Brétigny",
        annee: 1360,
        trivia : "La trêve de Brétigny en 1360 met temporairement fin à la première phase de la Guerre de Cent Ans. La France cède à l'Angleterre un tiers de son territoire contre la libération du roi Jean II, fait prisonnier à Poitiers."
    },
    {
        evenement: "Grand Schisme d'Occident",
        annee: 1378,
        trivia : "En 1378, l'Église catholique se retrouve avec deux papes simultanés — l'un à Rome, l'autre à Avignon. Ce scandale, qui durera quarante ans, ébranle profondément l'autorité de l'Église en Europe."
    },
    {
        evenement: "Mort de Bertrand du Guesclin",
        annee: 1380,
        trivia : "Bertrand du Guesclin, connétable de France et grand héros de la Guerre de Cent Ans, meurt en 1380 lors du siège de Châteauneuf-de-Randon. Par honneur, les défenseurs de la ville lui remettent les clés de la cité après sa mort."
    },
    {
        evenement: "Concile de Constance",
        annee: 1414,
        trivia : "Le concile de Constance, réuni de 1414 à 1418, met fin au Grand Schisme d'Occident en élisant un pape unique. Il condamne également Jan Hus, précurseur de la Réforme, qui est brûlé vif malgré une promesse de sauf-conduit."
    },
    {
        evenement: "Bataille d'Azincourt",
        annee: 1415,
        trivia : "À Azincourt, en 1415, Henri V d'Angleterre écrase une armée française pourtant bien plus nombreuse. Cette défaite humiliante affaiblit profondément la France et prépare le terrain pour l'intervention de Jeanne d'Arc."
    },
    {
        evenement: "Traité de Troyes",
        annee: 1420,
        trivia : "Le traité de Troyes en 1420 est un désastre diplomatique pour la France : le roi Charles VI, sous influence bourguignonne, déshérite son propre fils et reconnaît le roi d'Angleterre Henri V comme héritier du trône de France."
    },
    {
        evenement: "Bataille de Baugé",
        annee: 1421,
        trivia : "La bataille de Baugé en 1421 est une victoire franco-écossaise sur les Anglais. Le duc de Clarence, frère du roi d'Angleterre Henri V, y est tué. C'est l'une des rares victoires françaises de cette période de la Guerre de Cent Ans."
    },
    {
        evenement: "Siège d'Orléans levé par Jeanne d'Arc",
        annee: 1429,
        trivia : "En mai 1429, Jeanne d'Arc mène les troupes françaises à la victoire et lève le siège d'Orléans, que les Anglais tenaient depuis plusieurs mois. C'est le tournant militaire décisif de la Guerre de Cent Ans."
    },
    {
        evenement: "Sacre de Charles VII à Reims",
        annee: 1429,
        trivia : "Le 17 juillet 1429, Charles VII est sacré roi de France à Reims grâce à Jeanne d'Arc, qui a libéré Orléans quelques semaines plus tôt. Ce sacre légitime son pouvoir face aux prétentions anglaises."
    },
    {
        evenement: "Bataille de Patay",
        annee: 1429,
        trivia : "La bataille de Patay en 1429 est une victoire décisive des Français menés par Jeanne d'Arc et Dunois. Elle détruit l'élite des archers anglais et ouvre la route vers Reims, où Charles VII sera sacré quelques semaines plus tard."
    },
    {
        evenement: "Jeanne d'Arc brûlée à Rouen",
        annee: 1431,
        trivia : "Capturée par les Bourguignons puis vendue aux Anglais, Jeanne d'Arc est condamnée pour hérésie et brûlée vive à Rouen le 30 mai 1431. Elle sera réhabilitée en 1456 et canonisée en 1920."
    },
    {
        evenement: "Bataille de Formigny",
        annee: 1450,
        trivia : "Le 15 avril 1450, les Français écrasent les Anglais à Formigny en Normandie. Cette victoire décisive met fin à la présence anglaise en Normandie et est souvent surnommée 'la revanche d'Azincourt'."
    },
    {
        evenement: "Chute de Constantinople",
        annee: 1453,
        trivia : "La chute de Constantinople marque la fin de l'Empire byzantin et le début de l'expansion ottomane en Europe. C'est un tournant majeur dans l'histoire médiévale."
    },
    {
        evenement: "Bataille de Castillon",
        annee: 1453,
        trivia : "La bataille de Castillon, le 17 juillet 1453, est la dernière bataille de la Guerre de Cent Ans. La victoire française met fin à plus d'un siècle de conflit et chasse définitivement les Anglais du territoire français, à l'exception de Calais."
    },
    {
        evenement: "Prise de Grenade — fin de la Reconquista",
        annee: 1492,
        trivia : "Le 2 janvier 1492, le roi maure Boabdil remet les clés de Grenade aux rois catholiques Ferdinand et Isabelle. C'est la fin de la Reconquista, après huit siècles de présence musulmane en Espagne."
    },

    // --- Renaissance (1493–1620) ---
    {
        evenement: "Voyage de Vasco de Gama vers les Indes",
        annee: 1498,
        trivia : "En 1498, Vasco de Gama atteint l'Inde par voie maritime en contournant l'Afrique. Cette route révolutionne le commerce mondial en contournant les intermédiaires arabes et ottomans, et inaugure l'hégémonie portugaise sur les mers."
    },
    {
        evenement: "Découverte du Brésil par Cabral",
        annee: 1500,
        trivia : "En avril 1500, Pedro Álvares Cabral prend possession du Brésil au nom du Portugal. Que ce soit par hasard ou par navigation intentionnelle reste débattu, mais l'événement amorce la colonisation portugaise d'Amérique du Sud."
    },
    {
        evenement: "Bataille de Marignan",
        annee: 1515,
        trivia : "La victoire de François Ier à Marignan en 1515 contre les Suisses lui ouvre le duché de Milan. Cette bataille est restée célèbre, souvent associée à tort à la formule 'Tout est perdu fors l'honneur', prononcée en réalité lors d'une autre défaite."
    },
    {
        evenement: "95 thèses de Martin Luther",
        annee: 1517,
        trivia : "En 1517, Martin Luther affiche ses 95 thèses dénonçant la vente des indulgences par l'Église catholique. Cet acte déclenche la Réforme protestante et brise l'unité religieuse de l'Europe occidentale pour des siècles."
    },
    {
        evenement: "Mort de Léonard de Vinci",
        annee: 1519,
        trivia : "Léonard de Vinci meurt en 1519 au château du Clos Lucé, en France, où l'avait invité François Ier. Peintre, sculpteur, ingénieur et scientifique, il incarne mieux que quiconque l'idéal de l'homme de la Renaissance."
    },
    {
        evenement: "Tour du monde de Magellan-Elcano",
        annee: 1522,
        trivia : "En 1522, le navire Victoria rentre en Espagne après avoir accompli le premier tour du monde. Magellan est mort aux Philippines en route ; c'est Juan Sebastián Elcano qui complète l'expédition avec 18 survivants sur 270 partants."
    },
    {
        evenement: "Sac de Rome",
        annee: 1527,
        trivia : "En 1527, les troupes de Charles Quint, en partie composées de lansquenets protestants, pillent Rome pendant plusieurs semaines. Le traumatisme est immense et marque la fin de la Rome triomphante de la Haute Renaissance."
    },
    {
        evenement: "Mort de Thomas More",
        annee: 1535,
        trivia : "Thomas More, ancien chancelier d'Angleterre et auteur de l'Utopie, est décapité en 1535 pour avoir refusé de reconnaître Henri VIII comme chef de l'Église anglicane. Il sera canonisé en 1935."
    },
    {
        evenement: "Publication du système héliocentrique de Copernic",
        annee: 1543,
        trivia : "En 1543, Copernic publie sa théorie selon laquelle la Terre tourne autour du Soleil et non l'inverse. Cette révolution copernicienne bouleverse la vision du monde héritée de l'Antiquité et ouvre la voie à la science moderne."
    },
    {
        evenement: "Concile de Trente",
        annee: 1545,
        trivia : "Le concile de Trente, réuni de 1545 à 1563, est la réponse de l'Église catholique à la Réforme protestante. Il définit les dogmes catholiques, réforme les abus du clergé et inaugure la Contre-Réforme."
    },
    {
        evenement: "Mort de Michel-Ange",
        annee: 1564,
        trivia : "Michel-Ange meurt en 1564 à presque 89 ans, après avoir peint la chapelle Sixtine, sculpté le David et conçu la coupole de Saint-Pierre de Rome. Il reste l'un des artistes les plus influents de toute l'histoire de l'art."
    },
    {
        evenement: "Naissance de Shakespeare",
        annee: 1564,
        trivia : "William Shakespeare naît en 1564 à Stratford-upon-Avon. Dramaturge et poète, il est l'auteur de Hamlet, Roméo et Juliette, Macbeth et de nombreuses autres œuvres qui ont profondément marqué la littérature mondiale."
    },
    {
        evenement: "Bataille de Lépante",
        annee: 1571,
        trivia : "La bataille de Lépante en 1571 voit la flotte chrétienne de la Sainte Ligue écraser la flotte ottomane. C'est la première grande victoire navale chrétienne sur les Ottomans, qui stoppent leur expansion en Méditerranée occidentale."
    },
    {
        evenement: "Massacre de la Saint-Barthélemy",
        annee: 1572,
        trivia : "Dans la nuit du 23 au 24 août 1572, des milliers de protestants (huguenots) sont massacrés à Paris sur ordre de Catherine de Médicis. Ce massacre, qui s'étend à toute la France, fait entre 5 000 et 30 000 victimes."
    },
    {
        evenement: "Mort de Montaigne",
        annee: 1592,
        trivia : "Michel de Montaigne, auteur des Essais et inventeur du genre autobiographique, meurt en 1592. Son œuvre, nourrie de scepticisme et d'humanisme, a profondément influencé la pensée européenne moderne."
    },
    {
        evenement: "Édit de Nantes",
        annee: 1598,
        trivia : "Henri IV signe l'Édit de Nantes en 1598, accordant aux protestants la liberté de culte et des places de sûreté. C'est l'un des premiers actes de tolérance religieuse en Europe, mettant fin à quarante ans de guerres de Religion."
    },
    {
        evenement: "Mort de Giordano Bruno",
        annee: 1600,
        trivia : "Giordano Bruno, philosophe et cosmologiste qui défendait un univers infini avec une multitude de mondes, est brûlé vif à Rome en 1600 par l'Inquisition. Il est devenu un symbole de la liberté de pensée face au dogme religieux."
    },
    {
        evenement: "Publication de Don Quichotte",
        annee: 1605,
        trivia : "Miguel de Cervantes publie la première partie de Don Quichotte en 1605. Considéré comme le premier roman moderne, il raconte les aventures d'un hidalgo qui se prend pour un chevalier errant et mêle avec génie tragique et comédie."
    },
    {
        evenement: "Assassinat d'Henri IV",
        annee: 1610,
        trivia : "Henri IV, roi de France et artisan de la paix religieuse, est assassiné le 14 mai 1610 par François Ravaillac, un catholique fanatique. Sa mort plonge la France dans l'incertitude et met fin à une période de reconstruction après les guerres de Religion."
    },
    {
        evenement: "Procès de Galilée",
        annee: 1616,
        trivia : "En 1616, l'Inquisition avertit officiellement Galilée de ne plus défendre le système copernicien. Ce premier procès préfigure sa condamnation de 1633, illustrant la tension croissante entre science et autorité religieuse."
    },

    // --- Époque classique (1621–1715) ---
    {
        evenement: "Richelieu devient principal ministre",
        annee: 1624,
        trivia : "Armand Jean du Plessis, cardinal de Richelieu, devient principal ministre de Louis XIII en 1624. Il centralise le pouvoir royal, écrase la noblesse rebelle et les protestants, et fait de la France la première puissance européenne."
    },
    {
        evenement: "Siège de La Rochelle",
        annee: 1628,
        trivia : "Richelieu assiège La Rochelle, principal bastion protestant de France, pendant 14 mois. La ville capitule en 1628 après une famine terrible. La chute de La Rochelle met fin à l'indépendance politique des huguenots."
    },
    {
        evenement: "Fondation de l'Académie française",
        annee: 1635,
        trivia : "Richelieu fonde l'Académie française en 1635 pour réglementer et protéger la langue française. Composée de 40 membres surnommés les 'Immortels', elle est chargée de rédiger le dictionnaire officiel de la langue."
    },
    {
        evenement: "Mort de Richelieu",
        annee: 1642,
        trivia : "Le cardinal de Richelieu meurt en décembre 1642, épuisé par la maladie et les intrigues de cour. Louis XIII lui survit à peine cinq mois. Mazarin, son protégé italien, lui succède comme principal ministre."
    },
    {
        evenement: "Bataille de Rocroi",
        annee: 1643,
        trivia : "Le 19 mai 1643, le duc d'Enghien, futur Grand Condé, écrase l'infanterie espagnole réputée invincible à Rocroi. La France s'impose comme première puissance militaire d'Europe, cinq jours seulement après la mort de Louis XIII."
    },
    {
        evenement: "Traité de Westphalie",
        annee: 1648,
        trivia : "Le traité de Westphalie met fin à la guerre de Trente Ans qui a dévasté l'Europe centrale. Il pose les bases du droit international moderne et consacre le principe de souveraineté des États sur leur territoire."
    },
    {
        evenement: "La Fronde",
        annee: 1648,
        trivia : "La Fronde est une série de révoltes contre le pouvoir royal qui secouent la France de 1648 à 1653. Le jeune Louis XIV, contraint de fuir Paris, en gardera un traumatisme profond qui explique sa décision de s'installer à Versailles."
    },
    {
        evenement: "Mort de Mazarin",
        annee: 1661,
        trivia : "À la mort de Mazarin en 1661, Louis XIV, âgé de 22 ans, annonce qu'il gouvernera seul sans Premier ministre. C'est le début de la monarchie absolue dans toute sa plénitude : 'L'État, c'est moi'."
    },
    {
        evenement: "Publication des Fables de La Fontaine",
        annee: 1668,
        trivia : "Jean de La Fontaine publie les six premiers livres de ses Fables en 1668. Inspirées d'Ésope et de Phèdre, ces courts récits en vers mettent en scène des animaux pour critiquer avec finesse les travers de la société humaine."
    },
    {
        evenement: "Mort de Molière",
        annee: 1673,
        trivia : "Molière meurt le 17 février 1673 lors de la quatrième représentation du Malade imaginaire, dont il tenait le rôle principal. Ironie du sort : il jouait un hypocondriaque et tomba réellement malade sur scène."
    },
    {
        evenement: "Versailles devient résidence royale",
        annee: 1682,
        trivia : "En 1682, Louis XIV transfère officiellement la cour et le gouvernement à Versailles. Ce choix politique isole la noblesse loin de Paris, la soumet au rituel de la cour et renforce le contrôle absolu du roi sur l'aristocratie."
    },
    {
        evenement: "Révocation de l'Édit de Nantes",
        annee: 1685,
        trivia : "Louis XIV révoque l'Édit de Nantes en 1685, supprimant toute liberté de culte aux protestants. Des centaines de milliers de huguenots fuient la France, emportant avec eux leur savoir-faire artisanal, au grand profit des pays voisins."
    },
    {
        evenement: "Glorieuse Révolution en Angleterre",
        annee: 1688,
        trivia : "En 1688, le roi catholique Jacques II est renversé sans effusion de sang par son gendre Guillaume d'Orange. Cette 'Glorieuse Révolution' établit la monarchie constitutionnelle en Angleterre et le principe de la suprématie du Parlement."
    },
    {
        evenement: "Condamnation de Galilée",
        annee: 1633,
        trivia : "En 1633, le tribunal de l'Inquisition condamne Galilée pour avoir défendu le système de Copernic. Contraint d'abjurer, il aurait murmuré 'Et pourtant, elle tourne'. Il sera assigné à résidence jusqu'à sa mort en 1642."
    },
    {
        evenement: "Guerre de Succession d'Espagne",
        annee: 1701,
        trivia : "À la mort de Charles II d'Espagne sans héritier, Louis XIV place son petit-fils sur le trône espagnol. L'Europe coalisée contre cette hégémonie française déclenche la guerre de Succession d'Espagne, qui durera jusqu'en 1714."
    },
    {
        evenement: "Traité d'Utrecht",
        annee: 1713,
        trivia : "Le traité d'Utrecht met fin à la guerre de Succession d'Espagne. La France sort épuisée du conflit mais conserve ses frontières. L'Angleterre en sort grande gagnante, obtenant Gibraltar et des avantages commerciaux considérables."
    },
    {
        evenement: "Mort de Louis XIV",
        annee: 1715,
        trivia : "Louis XIV meurt le 1er septembre 1715 après 72 ans de règne, le plus long de l'histoire de France. Sur son lit de mort, il aurait dit à son successeur : 'J'ai trop aimé la guerre'. Il laisse derrière lui un pays épuisé mais une culture rayonnante."
    },
    {
        evenement: "Publication du Discours de la méthode",
        annee: 1637,
        trivia : "René Descartes publie son Discours de la méthode en 1637, posant les bases de la philosophie moderne et de la méthode scientifique. Son célèbre 'Je pense, donc je suis' (cogito ergo sum) est l'une des phrases les plus connues de l'histoire de la philosophie."
    },
    {
        evenement: "Mort de Pascal",
        annee: 1662,
        trivia : "Blaise Pascal meurt en 1662 à seulement 39 ans. Mathématicien, physicien et philosophe, il a inventé la première machine à calculer, formulé les lois de la pression et laissé les Pensées, chef-d'œuvre de la littérature apologétique."
    },
    {
        evenement: "Construction du Canal du Midi",
        annee: 1681,
        trivia : "Le Canal du Midi, reliant la Méditerranée à l'Atlantique sur 240 km, est achevé en 1681. Commandé par Colbert et conçu par Pierre-Paul Riquet, c'est l'un des plus grands chefs-d'œuvre d'ingénierie du XVIIe siècle, inscrit au patrimoine mondial de l'UNESCO."
    },

    // --- Lumières & XVIIIe siècle (1716–1788) ---
    {
        evenement: "Banqueroute du système de Law",
        annee: 1720,
        trivia: "John Law, financier écossais, convainc le Régent Philippe d'Orléans de créer une banque nationale et une compagnie commerciale exploitant la Louisiane. La spéculation fait monter les actions de 500 %, puis l'effondrement de la bulle en 1720 ruine des milliers de familles françaises et traumatise le pays pendant un siècle."
    },
    {
        evenement: "Le cardinal de Fleury devient principal ministre de Louis XV",
        annee: 1726,
        trivia: "André-Hercule de Fleury, précepteur de Louis XV, prend les rênes du gouvernement à l'âge de 73 ans. Son règne de dix-sept ans apporte stabilité et prospérité à la France : il redresse les finances, pacifie l'Europe et meurt en 1743 à 90 ans, toujours en exercice."
    },
    {
        evenement: "Début de la guerre de Succession d'Autriche",
        annee: 1740,
        trivia: "La mort de l'empereur Charles VI sans héritier mâle déclenche une guerre européenne : plusieurs puissances contestent l'héritage de sa fille Marie-Thérèse. La France soutient les prétendants contre l'Autriche, mais sortira du conflit sans gains territoriaux malgré de brillantes victoires militaires."
    },
    {
        evenement: "Bataille de Fontenoy",
        annee: 1745,
        trivia: "Le 11 mai 1745, le maréchal de Saxe remporte une victoire éclatante sur les Anglais et leurs alliés aux Pays-Bas autrichiens. La légende veut que les officiers français aient crié aux Anglais : 'Messieurs les Anglais, tirez les premiers !' — une politesse dont l'authenticité reste débattue par les historiens."
    },
    {
        evenement: "Traité d'Aix-la-Chapelle",
        annee: 1748,
        trivia: "Le traité d'Aix-la-Chapelle met fin à la guerre de Succession d'Autriche après huit ans de conflits. La France, victorieuse sur le terrain, rend toutes ses conquêtes — ce qui donne naissance à l'expression 'bête comme la paix' : gagner la guerre pour ne rien obtenir."
    },
    {
        evenement: "Publication du premier tome de l'Encyclopédie",
        annee: 1751,
        trivia: "Dirigée par Diderot et d'Alembert, l'Encyclopédie ou Dictionnaire raisonné des sciences, des arts et des métiers paraît en 28 volumes entre 1751 et 1772. Ce monument des Lumières rassemble 150 auteurs dont Voltaire et Rousseau, et sera condamné par les autorités religieuses."
    },
    {
        evenement: "Tremblement de terre de Lisbonne",
        annee: 1755,
        trivia: "Le 1er novembre 1755, un séisme dévastateur suivi d'un tsunami et d'incendies rase Lisbonne, faisant entre 30 000 et 40 000 morts. La catastrophe provoque une crise philosophique en Europe : Voltaire la cite dans Candide pour réfuter l'optimisme de Leibniz selon lequel 'tout est pour le mieux'."
    },
    {
        evenement: "Renversement des alliances",
        annee: 1756,
        trivia: "En 1756, l'Europe est stupéfaite par une révolution diplomatique : la France et l'Autriche, ennemies héréditaires depuis deux siècles, s'allient contre la Prusse et l'Angleterre. Ce renversement est en partie l'œuvre de Marie-Thérèse d'Autriche, mère de la future Marie-Antoinette."
    },
    {
        evenement: "Publication de Candide de Voltaire",
        annee: 1759,
        trivia: "Publié anonymement sous le pseudonyme 'le docteur Ralph', Candide ou l'Optimisme est le conte philosophique le plus célèbre de Voltaire. Il y ridiculise la philosophie de Leibniz à travers les aventures burlesques d'un héros naïf confronté aux guerres, tremblements de terre et inquisitions."
    },
    {
        evenement: "Publication du Contrat social de Rousseau",
        annee: 1762,
        trivia: "Dans Du contrat social, Jean-Jacques Rousseau affirme que le pouvoir politique découle d'un pacte librement consenti par les citoyens : 'L'homme est né libre, et partout il est dans les fers.' Cet ouvrage influencera directement la Révolution française et les démocraties modernes."
    },
    {
        evenement: "Traité de Paris — fin de la guerre de Sept Ans",
        annee: 1763,
        trivia: "Le traité de Paris de 1763 est une catastrophe pour la France : elle cède le Canada, une partie de la Louisiane et ses comptoirs en Inde à l'Angleterre. La France perd son premier empire colonial au profit de la Grande-Bretagne, qui devient la première puissance mondiale."
    },
    {
        evenement: "Avènement de Louis XVI",
        annee: 1774,
        trivia: "À la mort de Louis XV emporté par la variole, Louis XVI monte sur le trône à seulement 19 ans avec son épouse Marie-Antoinette, 18 ans. Conscient du fardeau, il aurait murmuré en apprenant la nouvelle : 'Que Dieu nous guide et nous protège, nous régnons trop jeunes.'"
    },
    {
        evenement: "Déclaration d'indépendance américaine",
        annee: 1776,
        trivia: "Rédigée principalement par Thomas Jefferson, la Déclaration d'indépendance du 4 juillet 1776 proclame la séparation des treize colonies américaines d'avec la Grande-Bretagne. Elle s'inspire directement des philosophes des Lumières français, notamment Montesquieu et Locke."
    },
    {
        evenement: "Mort de Voltaire",
        annee: 1778,
        trivia: "François-Marie Arouet, dit Voltaire, meurt à Paris le 30 mai 1778 à l'âge de 83 ans, après un retour triomphal après 28 ans d'exil. Jean-Jacques Rousseau, son grand rival philosophique, mourut lui aussi en 1778, à quelques semaines d'intervalle."
    },
    {
        evenement: "Reddition de Yorktown",
        annee: 1781,
        trivia: "Le 19 octobre 1781, le général britannique Cornwallis capitule devant les troupes américaines et françaises à Yorktown. La France a joué un rôle décisif : La Fayette commandait une partie des forces terrestres et l'amiral de Grasse avait bloqué les secours britanniques par mer."
    },
    {
        evenement: "Premier vol en montgolfière habité",
        annee: 1783,
        trivia: "Le 21 novembre 1783, le marquis d'Arlandes et Pilâtre de Rozier s'élèvent au-dessus de Paris à bord d'un ballon conçu par les frères Montgolfier. Ce premier vol humain en aérostat dure 25 minutes et couvre 9 kilomètres, ouvrant l'ère de la conquête de l'air."
    },
    {
        evenement: "Première du Mariage de Figaro",
        annee: 1784,
        trivia: "La comédie de Beaumarchais, interdite pendant trois ans par Louis XVI qui y voyait une menace subversive, triomphe enfin à la Comédie-Française le 27 avril 1784. Napoléon dira plus tard que cette pièce était 'déjà la Révolution en action'."
    },
    {
        evenement: "Affaire du collier de la reine",
        annee: 1785,
        trivia: "Une escroquerie impliquant un collier de diamants à 1,6 million de livres éclabousse la réputation de Marie-Antoinette, bien qu'elle soit innocente. Montée par la comtesse de La Motte, l'affaire convainc l'opinion publique que la reine est corrompue, contribuant à la crise de confiance pré-révolutionnaire."
    },
    {
        evenement: "Assemblée des notables",
        annee: 1787,
        trivia: "Face à la banqueroute de l'État, Louis XVI convoque une assemblée de 144 notables pour faire passer des réformes fiscales. Les nobles refusent d'être taxés et renvoient le problème aux États généraux, déclenchant involontairement le processus qui mènera à la Révolution de 1789."
    },
    {
        evenement: "Convocation des États généraux",
        annee: 1788,
        trivia: "Le 8 août 1788, Louis XVI annonce la convocation des États généraux pour le 1er mai 1789 — la première réunion depuis 1614. La question de la représentation du tiers état, qui représente 97 % de la population mais n'a qu'un tiers des voix, va diviser la France et précipiter la Révolution."
    },

    // --- Premier Empire (1800–1815) ---
    {
        evenement: "Bataille de Marengo",
        annee: 1800,
        trivia: "Le 14 juin 1800, Napoléon Bonaparte remporte une victoire décisive contre l'Autriche en Italie du Nord. La bataille semblait perdue en début d'après-midi avant que le général Desaix, arrivant en renfort, ne renverse la situation — au prix de sa propre vie."
    },
    {
        evenement: "Concordat entre Napoléon et le pape Pie VII",
        annee: 1801,
        trivia: "Le Concordat de 1801 réconcilie la France révolutionnaire avec l'Église catholique après dix ans de rupture. Napoléon y reconnaît le catholicisme comme religion de la majorité des Français, mais conserve le contrôle de la nomination des évêques."
    },
    {
        evenement: "Création de la Légion d'honneur",
        annee: 1802,
        trivia: "Fondée par Napoléon Bonaparte le 19 mai 1802, la Légion d'honneur récompense les mérites civils et militaires rendus à la France. Plus de deux siècles plus tard, elle reste la plus haute distinction française, avec environ 75 000 membres vivants."
    },
    {
        evenement: "Vente de la Louisiane aux États-Unis",
        annee: 1803,
        trivia: "Pour financer ses guerres européennes, Napoléon vend en 1803 la Louisiane française aux États-Unis pour 15 millions de dollars. Ce territoire de 2,1 millions de km² représente aujourd'hui 15 États américains — l'une des plus grandes transactions territoriales de l'Histoire."
    },
    {
        evenement: "Sacre de Napoléon Ier",
        annee: 1804,
        trivia : "Le 2 décembre 1804, Napoléon Bonaparte se couronne lui-même empereur des Français en présence du pape Pie VII à Notre-Dame de Paris. Ce geste symbolique affirme que son pouvoir ne tient pas de l'Église mais de lui-même."
    },
    {
        evenement: "Promulgation du Code civil",
        annee: 1804,
        trivia : "Le Code civil napoléonien, promulgué en 1804, unifie le droit français en remplaçant les coutumes féodales disparates. Toujours en vigueur dans ses grandes lignes, il a influencé les systèmes juridiques de dizaines de pays à travers le monde."
    },
    {
        evenement: "Bataille de Trafalgar",
        annee: 1805,
        trivia : "Le 21 octobre 1805, l'amiral britannique Nelson écrase la flotte franco-espagnole au cap Trafalgar. Nelson est tué pendant la bataille. Cette défaite met fin aux ambitions maritimes de Napoléon et assure la domination navale britannique pour un siècle."
    },
    {
        evenement: "Bataille d'Austerlitz",
        annee: 1805,
        trivia : "Le 2 décembre 1805, Napoléon remporte sa victoire la plus brillante à Austerlitz contre les empereurs d'Autriche et de Russie. En une seule journée, il détruit une armée deux fois plus nombreuse grâce à une feinte stratégique parfaitement exécutée."
    },
    {
        evenement: "Bataille d'Iéna",
        annee: 1806,
        trivia : "À Iéna en 1806, Napoléon écrase la vieille armée prussienne en une seule journée. Deux semaines plus tard, il entre dans Berlin. Cette victoire fulgurante met fin à la Prusse comme grande puissance pour plusieurs années."
    },
    {
        evenement: "Blocus continental",
        annee: 1806,
        trivia : "Ne pouvant envahir l'Angleterre après Trafalgar, Napoléon décrète en 1806 le blocus continental : il interdit à toute l'Europe de commercer avec la Grande-Bretagne. Cette arme économique se retournera contre lui en ruinant l'économie européenne."
    },
    {
        evenement: "Traité de Tilsit",
        annee: 1807,
        trivia : "Le traité de Tilsit est signé en juillet 1807 sur un radeau au milieu du Niémen entre Napoléon et le tsar Alexandre Ier. C'est l'apogée de la puissance napoléonienne : Napoléon y redessine la carte de l'Europe à sa convenance."
    },
    {
        evenement: "Invasion de l'Espagne",
        annee: 1808,
        trivia : "En 1808, Napoléon place son frère Joseph sur le trône d'Espagne. Ce choix déclenche une résistance populaire acharnée — la guerre d'Espagne — qui engloutira 300 000 soldats français pendant six ans. Wellington appela cette campagne 'l'ulcère espagnol'."
    },
    {
        evenement: "Bataille de Wagram",
        annee: 1809,
        trivia : "La bataille de Wagram en 1809 est l'une des plus grandes batailles de l'ère napoléonienne, avec 300 000 hommes engagés. La victoire française force l'Autriche à signer le traité de Schönbrunn, la plus humiliante de ses défaites face à Napoléon."
    },
    {
        evenement: "Mariage de Napoléon et Marie-Louise d'Autriche",
        annee: 1810,
        trivia : "Après avoir divorcé de Joséphine de Beauharnais, Napoléon épouse en 1810 Marie-Louise, fille de l'empereur d'Autriche. Ce mariage dynastique vise à légitimer son empire mais trahit aussi son désir de s'inscrire dans la tradition monarchique européenne."
    },
    {
        evenement: "Naissance du Roi de Rome",
        annee: 1811,
        trivia : "La naissance du fils de Napoléon et Marie-Louise en 1811 est accueillie avec des salves de 101 coups de canon. Intitulé 'Roi de Rome' dès sa naissance, il ne régnera jamais et mourra à 21 ans en Autriche sous le nom de duc de Reichstadt."
    },
    {
        evenement: "Retraite de Russie",
        annee: 1812,
        trivia : "La campagne de Russie de 1812 est la plus grande catastrophe militaire de Napoléon. Sur 600 000 hommes entrés en Russie, moins de 100 000 en reviennent. Le froid, la faim et le harcèlement des Cosaques déciment la Grande Armée."
    },
    {
        evenement: "Bataille de la Bérézina",
        annee: 1812,
        trivia : "En novembre 1812, lors de la retraite de Russie, les débris de la Grande Armée traversent la rivière Bérézina sous les attaques russes. Des milliers de soldats et de civils se noient ou meurent de froid. 'Bérézina' est depuis synonyme de désastre en français."
    },
    {
        evenement: "Bataille de Leipzig — bataille des Nations",
        annee: 1813,
        trivia : "Avec 500 000 soldats engagés, Leipzig est la plus grande bataille de l'ère napoléonienne. Napoléon est écrasé par une coalition de Prussiens, Autrichiens, Russes et Suédois. Cette défaite scelle le destin de l'Empire et ouvre la route de la France aux alliés."
    },
    {
        evenement: "Abdication de Napoléon à Fontainebleau",
        annee: 1814,
        trivia : "Le 6 avril 1814, après l'entrée des alliés dans Paris, Napoléon abdique au château de Fontainebleau. Ses propres maréchaux lui refusent de continuer la guerre. Il fait ses adieux à la Vieille Garde dans la cour du château, restée célèbre sous le nom de 'cour des Adieux'."
    },
    {
        evenement: "Exil à l'île d'Elbe",
        annee: 1814,
        trivia : "Après sa première abdication, Napoléon est exilé sur l'île d'Elbe, en Méditerranée, dont il devient souverain. Il y gouverne ses 12 000 habitants avec la même énergie qu'il mettait à diriger un empire, avant de s'en échapper discrètement en février 1815."
    },
    {
        evenement: "Les Cent-Jours",
        annee: 1815,
        trivia : "En mars 1815, Napoléon débarque seul en France et remonte vers Paris. Les troupes envoyées pour l'arrêter se rallient à lui. Louis XVIII fuit. En cent jours, Napoléon reconquiert la France sans tirer un coup de feu — avant d'être définitivement écrasé à Waterloo."
    },
    {
        evenement: "Bataille de Waterloo",
        annee: 1815,
        trivia : "Le 18 juin 1815, Napoléon est battu à Waterloo par Wellington et Blücher. La défaite est due en partie à l'arrivée tardive de l'armée prussienne sur le flanc français. Waterloo est entré dans le langage courant comme synonyme d'échec définitif."
    },
    {
        evenement: "Exil à Sainte-Hélène",
        annee: 1815,
        trivia : "Après Waterloo, les alliés exilent Napoléon à Sainte-Hélène, île isolée de l'Atlantique Sud à 2000 km de toute côte. Il y dicte ses mémoires, construisant la légende napoléonienne, et y meurt en 1821, probablement d'un cancer de l'estomac."
    },
    {
        evenement: "Bataille de Friedland",
        annee: 1807,
        trivia : "La victoire de Friedland en juin 1807 contraint le tsar Alexandre Ier à demander la paix. C'est cette défaite qui conduit directement à la rencontre de Tilsit. Napoléon est alors au sommet de sa puissance : il contrôle presque toute l'Europe continentale."
    },
    {
        evenement: "Napoléon sacré roi d'Italie",
        annee: 1805,
        trivia : "En mai 1805, avant même Austerlitz, Napoléon se couronne roi d'Italie à Milan avec la couronne de fer des Lombards. Il prononce la formule légendaire : 'Dieu me la donne, gare à qui la touche.' L'Italie du Nord devient ainsi une dépendance directe de l'Empire français."
    },
    {
        evenement: "Traité de Presbourg",
        annee: 1805,
        trivia : "Signé après Austerlitz, le traité de Presbourg contraint l'Autriche à céder la Vénétie, le Tyrol et d'autres territoires. C'est l'une des paix les plus humiliantes jamais imposées aux Habsbourg et consacre la domination napoléonienne sur l'Europe centrale."
    },
    {
        evenement: "Dissolution du Saint-Empire romain germanique",
        annee: 1806,
        trivia : "En août 1806, l'empereur François II abdique et dissout le Saint-Empire romain germanique, vieille institution millénaire fondée par Charlemagne. Napoléon, qui vient de créer la Confédération du Rhin, est en grande partie responsable de cette fin d'époque."
    },
    {
        evenement: "Création de la Confédération du Rhin",
        annee: 1806,
        trivia : "Napoléon regroupe en 1806 seize États allemands dans la Confédération du Rhin, placée sous sa protection. Cette nouvelle organisation politique élimine de facto le Saint-Empire et fait de la France la puissance dominante de l'Allemagne, provoquant l'indignation de la Prusse."
    },
    {
        evenement: "Création du royaume de Westphalie",
        annee: 1807,
        trivia : "Après Tilsit, Napoléon crée le royaume de Westphalie et place son jeune frère Jérôme sur le trône. Ce royaume, taillé dans les territoires prussiens, sert de vitrine au modèle napoléonien : Code civil, égalité juridique, abolition du servage."
    },
    {
        evenement: "Révolte de Madrid — Dos de Mayo",
        annee: 1808,
        trivia : "Le 2 mai 1808, le peuple de Madrid se soulève contre l'occupation française. La répression brutale par les troupes de Murat inspire à Goya ses tableaux les plus célèbres. Cet événement marque le début de la guerre d'Espagne, que Napoléon appellera 'l'ulcère espagnol'."
    },
    {
        evenement: "Création de l'Université impériale",
        annee: 1808,
        trivia : "Napoléon crée en 1808 l'Université impériale, organisme d'État qui prend le contrôle de tout l'enseignement en France. C'est la naissance du système éducatif centralisé français : lycées, baccalauréat, grandes écoles. Ce modèle perdure encore aujourd'hui dans ses grandes lignes."
    },
    {
        evenement: "Entrevue d'Erfurt",
        annee: 1808,
        trivia : "En octobre 1808, Napoléon et le tsar Alexandre Ier se retrouvent à Erfurt pour renouveler leur alliance de Tilsit. Mais Talleyrand, ministre de Napoléon, trahit secrètement son maître et conseille à Alexandre de résister. C'est le début de la fissure entre les deux empereurs."
    },
    {
        evenement: "Bataille d'Aspern-Essling",
        annee: 1809,
        trivia : "En mai 1809, Napoléon subit sa première défaite terrestre face aux Autrichiens à Aspern-Essling. Incapable de faire passer son armée à travers le Danube en crue, il doit se replier. Cette victoire autrichienne montre pour la première fois que Napoléon n'est pas invincible."
    },
    {
        evenement: "Mort du maréchal Lannes",
        annee: 1809,
        trivia : "Jean Lannes, duc de Montebello et l'un des maréchaux les plus brillants de Napoléon, est mortellement blessé à Aspern-Essling en 1809. Sa mort bouleverse Napoléon, qui pleure son 'seul ami'. Lannes était l'un des rares à tutoyer l'Empereur."
    },
    {
        evenement: "Traité de Schönbrunn",
        annee: 1809,
        trivia : "Après la victoire de Wagram, le traité de Schönbrunn impose à l'Autriche de nouvelles pertes territoriales considérables. L'Autriche perd l'accès à la mer et doit payer une lourde indemnité. C'est le sommet de la puissance territoriale napoléonienne."
    },
    {
        evenement: "Divorce de Napoléon et Joséphine",
        annee: 1809,
        trivia : "En décembre 1809, Napoléon répudie Joséphine de Beauharnais après treize ans de mariage, car elle n'a pu lui donner d'héritier. Il aurait dit en lui annonçant la nouvelle : 'Je t'aime toujours, mais la politique n'a pas de cœur, elle n'a que de la tête.' Joséphine en mourra de chagrin en 1814."
    },
    {
        evenement: "Excommunication de Napoléon par le pape Pie VII",
        annee: 1809,
        trivia : "En réponse à l'annexion des États pontificaux, le pape Pie VII excommunie Napoléon en juin 1809 — une arme rarissime que l'Église n'avait pas utilisée contre un chef d'État depuis des siècles. Napoléon, peu impressionné, fait arrêter le pape et le déporte en France."
    },
    {
        evenement: "Annexion des États pontificaux",
        annee: 1809,
        trivia : "En 1809, Napoléon annexe les États pontificaux et décrète la fin du pouvoir temporel du pape. Pie VII réplique en excommuniant Napoléon. C'est l'aboutissement d'un conflit croissant entre l'Église et l'Empire sur le contrôle de l'Italie."
    },
    {
        evenement: "Promulgation du Code pénal napoléonien",
        annee: 1810,
        trivia : "Le Code pénal de 1810 complète le Code civil de 1804 et fixe pour la première fois une liste précise des infractions et de leurs peines. Il abolit les châtiments corporels et établit le principe de légalité des peines. Il reste la base du droit pénal français jusqu'à sa réforme en 1994."
    },
    {
        evenement: "Annexion de la Hollande",
        annee: 1810,
        trivia : "En 1810, Napoléon annexe le royaume de Hollande, dirigé par son frère Louis, qui avait refusé d'appliquer le blocus continental. Louis avait choisi de défendre les intérêts de ses sujets hollandais plutôt que ceux de son frère. Napoléon ne lui pardonnera jamais."
    },
    {
        evenement: "Campagne du Portugal de Masséna",
        annee: 1811,
        trivia : "En 1811, le maréchal Masséna, envoyé conquérir le Portugal, se heurte aux lignes de Torres Vedras construites par Wellington. Incapable de percer ces fortifications, affamé et harassé, il doit battre en retraite. C'est un échec cuisant qui annonce les limites de la puissance française en péninsule Ibérique."
    },
    {
        evenement: "Passage du Niémen — début de la campagne de Russie",
        annee: 1812,
        trivia : "Le 24 juin 1812, la Grande Armée de Napoléon — plus de 600 000 hommes venus de toute l'Europe — franchit le Niémen pour entrer en Russie. C'est la plus grande armée jamais assemblée jusqu'alors. Cinq mois plus tard, moins de 100 000 en reviendront."
    },
    {
        evenement: "Bataille de Smolensk",
        annee: 1812,
        trivia : "En août 1812, Napoléon prend Smolensk après de violents combats, espérant que les Russes accepteraient la paix. Mais Alexandre Ier refuse tout armistice et continue la retraite vers Moscou, brûlant les villes derrière lui pour priver les Français de ressources."
    },
    {
        evenement: "Bataille de la Moskova",
        annee: 1812,
        trivia : "La bataille de la Moskova (ou Borodino) le 7 septembre 1812 est la plus meurtrière de l'ère napoléonienne : 70 000 tués ou blessés en une seule journée. Les Russes reculent mais ne sont pas détruits. Napoléon, malade, n'engage pas sa Garde Impériale — une décision qu'il regrettera."
    },
    {
        evenement: "Incendie de Moscou",
        annee: 1812,
        trivia : "Lorsque Napoléon entre dans Moscou en septembre 1812, les Russes incendient la ville plutôt que de la laisser servir de quartier d'hiver à l'armée française. Les trois quarts de la ville brûlent en quelques jours. Privé de ressources et sans réponse de paix, Napoléon est contraint de battre en retraite."
    },
    {
        evenement: "Bataille de Lützen",
        annee: 1813,
        trivia : "En mai 1813, Napoléon remporte la bataille de Lützen contre les Prussiens et les Russes, démontrant qu'il peut encore vaincre malgré la catastrophe russe. Mais la victoire est incomplète faute de cavalerie — une conséquence directe des pertes de la campagne de Russie."
    },
    {
        evenement: "Bataille de Dresde",
        annee: 1813,
        trivia : "La bataille de Dresde en août 1813 est la dernière grande victoire de Napoléon contre les forces coalisées. Mais ses maréchaux, envoyés séparément, sont battus de toutes parts. Cette victoire isolée ne peut compenser l'encerclement progressif de la Grande Armée."
    },
    {
        evenement: "Bataille de Vittoria",
        annee: 1813,
        trivia : "En juin 1813, Wellington écrase l'armée française à Vittoria en Espagne. Joseph Bonaparte, roi d'Espagne, s'enfuit en abandonnant ses bagages, son trésor et même ses tableaux. Cette défaite sonne le glas de la présence française dans la péninsule Ibérique."
    },
    {
        evenement: "Mort de Joséphine",
        annee: 1814,
        trivia : "Joséphine de Beauharnais meurt en mai 1814 à la Malmaison, quelques semaines après l'abdication de Napoléon. Apprenant sa mort depuis l'île d'Elbe, Napoléon se serait enfermé dans sa chambre trois jours. Il aurait dit : 'Elle a été la seule femme que j'aie véritablement aimée.'"
    },
    {
        evenement: "Premier traité de Paris",
        annee: 1814,
        trivia : "Signé en mai 1814 après l'abdication de Napoléon, le premier traité de Paris est remarquablement clément envers la France vaincue : elle conserve ses frontières de 1792, sans indemnité de guerre. Les alliés préfèrent une France stable sous Louis XVIII plutôt que de l'humilier."
    },
    {
        evenement: "Restauration de Louis XVIII",
        annee: 1814,
        trivia : "En avril 1814, Louis XVIII, frère de Louis XVI, remonte sur le trône de France après 22 ans d'exil. Il accepte une Charte constitutionnelle qui garantit les acquis de la Révolution. Son règne tente de réconcilier la France d'Ancien Régime avec la France napoléonienne."
    },
    {
        evenement: "Retour de Napoléon de l'île d'Elbe",
        annee: 1815,
        trivia : "Le 1er mars 1815, Napoléon débarque seul à Golfe-Juan avec 1 000 hommes et remonte vers Paris. Les troupes envoyées pour l'arrêter se rallient à lui un à un. Louis XVIII fuit dans la nuit du 19 au 20 mars. Sans tirer un coup de feu, Napoléon reconquiert la France en vingt jours."
    },
    {
        evenement: "Bataille de Ligny",
        annee: 1815,
        trivia : "Le 16 juin 1815, deux jours avant Waterloo, Napoléon bat les Prussiens de Blücher à Ligny. Mais il n'envoie pas Grouchy les poursuivre assez vigoureusement. Les Prussiens se regroupent et arrivent en renfort à Waterloo le 18 juin, retournant le sort de la bataille."
    },
    {
        evenement: "Deuxième abdication de Napoléon",
        annee: 1815,
        trivia : "Le 22 juin 1815, quatre jours après Waterloo, Napoléon abdique pour la deuxième et dernière fois en faveur de son fils. Les Chambres refusent de le soutenir. Il espère s'embarquer pour l'Amérique mais se retrouve prisonnier des Anglais, qui l'envoient à Sainte-Hélène."
    },

    // --- Restauration & Monarchie de Juillet (1816–1851) ---
    {
        evenement: "Naufrage de la Méduse",
        annee: 1816,
        trivia: "Le 2 juillet 1816, la frégate Méduse s'échoue au large des côtes mauritaniennes. Faute de canots, 147 survivants sont abandonnés sur un radeau de fortune. Quinze jours plus tard, seuls 15 sont recueillis, les autres ayant succombé à la faim, à la soif et à la folie. Le tableau de Géricault immortalise le scandale."
    },
    {
        evenement: "Assassinat du duc de Berry",
        annee: 1820,
        trivia: "Le 13 février 1820, le duc de Berry, neveu de Louis XVIII et dernier espoir dynastique des Bourbons, est poignardé à l'Opéra par un sellier bonapartiste nommé Louvel. Par une ironie du sort, sa veuve accouche sept mois plus tard du 'miracle' : le futur comte de Chambord."
    },
    {
        evenement: "Mort de Napoléon à Sainte-Hélène",
        annee: 1821,
        trivia: "Napoléon Bonaparte meurt le 5 mai 1821 sur l'île de Sainte-Hélène après six ans d'exil. Les causes exactes de sa mort font encore débat : cancer de l'estomac selon la version officielle, empoisonnement à l'arsenic selon certains historiens. Il avait 51 ans."
    },
    {
        evenement: "Champollion déchiffre les hiéroglyphes",
        annee: 1822,
        trivia: "Le 14 septembre 1822, Jean-François Champollion présente à l'Académie des inscriptions sa 'Lettre à M. Dacier', déchiffrant enfin l'écriture égyptienne antique grâce à la pierre de Rosette. Il entre en courant dans le bureau de son frère en criant 'Je tiens l'affaire !' avant de s'évanouir d'épuisement."
    },
    {
        evenement: "Avènement de Charles X",
        annee: 1824,
        trivia: "À la mort de Louis XVIII, son frère Charles X monte sur le trône. Contrairement à Louis XVIII qui acceptait les compromis post-révolutionnaires, Charles X est un ultra-royaliste convaincu qui rêve de restaurer l'Ancien Régime. Son intransigeance mènera directement à la révolution de 1830."
    },
    {
        evenement: "Sacre de Charles X à Reims",
        annee: 1825,
        trivia: "Charles X est le dernier roi de France à être sacré selon le rituel médiéval à Reims, avec onction du saint chrême et toucher des écrouelles. Cette cérémonie anachronique dans une France post-révolutionnaire choque l'opinion libérale et renforce l'image d'un roi vivant dans le passé."
    },
    {
        evenement: "Première photographie par Nicéphore Niépce",
        annee: 1826,
        trivia: "Vers 1826, le Bourguignon Nicéphore Niépce réussit à fixer une image sur une plaque d'étain enduite de bitume de Judée : c'est la plus ancienne photographie conservée, une vue depuis sa fenêtre nécessitant plusieurs heures d'exposition. Il s'associera ensuite avec Louis Daguerre."
    },
    {
        evenement: "Prise d'Alger par la France",
        annee: 1830,
        trivia: "Le 5 juillet 1830, les troupes françaises prennent Alger après trois semaines de campagne, mettant fin à trois siècles de domination ottomane. Charles X espérait que cette victoire coloniale restaurerait sa popularité — mais la révolution éclate trois semaines plus tard et le renverse quand même."
    },
    {
        evenement: "Révolution de Juillet — les Trois Glorieuses",
        annee: 1830,
        trivia: "Les 27, 28 et 29 juillet 1830, Paris se soulève contre les ordonnances de Charles X qui supprimaient la liberté de la presse. En trois jours de barricades, les insurgés l'emportent. Charles X abdique et Louis-Philippe d'Orléans, le 'roi citoyen', monte sur le trône."
    },
    {
        evenement: "Révolte des Canuts à Lyon",
        annee: 1831,
        trivia: "En novembre 1831, les tisserands de soie lyonnais se soulèvent pour obtenir un tarif minimum garanti. Sous leur drapeau noir figure l'inscription : 'Vivre en travaillant ou mourir en combattant.' C'est la première grande révolte ouvrière de l'histoire française, réprimée par l'armée."
    },
    {
        evenement: "Insurrection républicaine de Paris",
        annee: 1832,
        trivia: "En juin 1832, des républicains tentent de profiter des funérailles du général Lamarque pour déclencher une insurrection. Victor Hugo s'en inspire directement pour les barricades des Misérables : le jeune Gavroche qui meurt en chantant est directement inspiré de ces journées."
    },
    {
        evenement: "Loi Guizot sur l'instruction primaire",
        annee: 1833,
        trivia: "La loi Guizot du 28 juin 1833 oblige chaque commune à entretenir une école primaire de garçons. C'est la première grande loi française sur l'instruction publique, posant les bases du système éducatif qui sera complété cinquante ans plus tard par Jules Ferry avec la gratuité et la laïcité."
    },
    {
        evenement: "Attentat de Fieschi contre Louis-Philippe",
        annee: 1835,
        trivia: "Le 28 juillet 1835, Giuseppe Fieschi tire sur le cortège de Louis-Philippe avec une 'machine infernale' de 25 fusils simultanés. Le roi est légèrement blessé mais 18 personnes meurent. L'attentat entraîne des lois restrictives sur la liberté de la presse, surnommées 'lois de septembre'."
    },
    {
        evenement: "Inauguration de la ligne Paris–Saint-Germain",
        annee: 1837,
        trivia: "Le 26 août 1837, la reine Marie-Amélie inaugure la première ligne de chemin de fer à vapeur de la région parisienne. Les 19 kilomètres entre Paris et Saint-Germain-en-Laye sont parcourus en 27 minutes. Cette inauguration marque le début de la révolution ferroviaire française."
    },
    {
        evenement: "Retour des cendres de Napoléon",
        annee: 1840,
        trivia: "Le 15 décembre 1840, le cercueil de Napoléon rapatrié de Sainte-Hélène est transporté solennellement sous l'Arc de Triomphe jusqu'aux Invalides devant une foule immense. Chateaubriand écrit : 'Le géant passait.' La cérémonie relance durablement le mythe napoléonien."
    },
    {
        evenement: "Première loi française sur le travail des enfants",
        annee: 1841,
        trivia: "La loi du 22 mars 1841 interdit le travail en manufacture des enfants de moins de 8 ans et limite les horaires des plus jeunes. C'est la première loi sociale française, mais elle sera longtemps mal appliquée, faute d'inspecteurs du travail chargés de la faire respecter."
    },
    {
        evenement: "Campagne des banquets",
        annee: 1847,
        trivia: "Face à l'interdiction des réunions politiques, l'opposition organise des 'banquets républicains' dans toute la France pour réclamer une réforme électorale. Quand Guizot interdit le banquet de Paris prévu le 22 février 1848, les parisiens descendent dans la rue : la révolution éclate le lendemain."
    },
    {
        evenement: "Révolution de février — chute de Louis-Philippe",
        annee: 1848,
        trivia: "Le 22 février 1848, des barricades surgissent à Paris après l'interdiction du banquet réformiste. En deux jours, la Garde nationale fraternise avec les insurgés. Louis-Philippe abdique et s'enfuit en Angleterre déguisé en bourgeois sous le nom de 'M. Smith'. La IIe République est proclamée."
    },
    {
        evenement: "Abolition définitive de l'esclavage dans les colonies françaises",
        annee: 1848,
        trivia: "Le 27 avril 1848, le décret Schoelcher abolit définitivement l'esclavage dans toutes les colonies françaises, libérant environ 250 000 personnes. Victor Schoelcher avait passé des années à documenter les horreurs de l'esclavage pour convaincre le gouvernement provisoire d'agir."
    },
    {
        evenement: "Coup d'État du 2 décembre de Louis-Napoléon Bonaparte",
        annee: 1851,
        trivia: "Dans la nuit du 1er au 2 décembre 1851 — anniversaire d'Austerlitz — Louis-Napoléon Bonaparte dissout l'Assemblée nationale par un coup d'État. Victor Hugo tente de résister et doit fuir en exil. Un an plus tard, Louis-Napoléon se proclame Napoléon III."
    },

    // --- Second Empire (1852–1870) ---
    {
        evenement: "Proclamation du Second Empire",
        annee: 1852,
        trivia : "Le 2 décembre 1852, Louis-Napoléon Bonaparte, neveu de Napoléon Ier, se proclame empereur sous le nom de Napoléon III. La date est choisie délibérément : c'est l'anniversaire d'Austerlitz et du sacre de son oncle. Victor Hugo le surnommera 'Napoléon le Petit'."
    },
    {
        evenement: "Début des travaux haussmanniens à Paris",
        annee: 1853,
        trivia : "À partir de 1853, le baron Haussmann, préfet de la Seine, transforme radicalement Paris sur ordre de Napoléon III. Les vieux quartiers médiévaux sont rasés au profit de larges boulevards, de parcs et d'égouts modernes. Paris devient la vitrine de l'Empire."
    },
    {
        evenement: "Guerre de Crimée",
        annee: 1853,
        trivia : "La France et l'Angleterre s'allient en 1853 pour défendre l'Empire ottoman contre la Russie en Crimée. C'est la première guerre moderne, couverte par des journalistes et des photographes. Florence Nightingale y révolutionne les soins infirmiers."
    },
    {
        evenement: "Traité de Paris — fin de la guerre de Crimée",
        annee: 1856,
        trivia : "Le traité de Paris de 1856 met fin à la guerre de Crimée. La France en sort grande gagnante diplomatiquement : Napoléon III est au sommet de son prestige international. Paris accueille les négociations, confirmant son rôle de capitale de l'Europe."
    },
    {
        evenement: "Bataille de Magenta",
        annee: 1859,
        trivia : "La victoire franco-sarde à Magenta en 1859 contre l'Autriche est si sanglante qu'elle donne son nom à une nouvelle couleur de teinture rouge-violet découverte la même année. Elle ouvre la voie à l'unification italienne soutenue par Napoléon III."
    },
    {
        evenement: "Bataille de Solférino",
        annee: 1859,
        trivia : "La bataille de Solférino en 1859 est l'une des plus meurtrières du XIXe siècle. Le témoin Henry Dunant, horrifié par l'absence de soins pour les blessés, en tire le livre 'Un souvenir de Solférino' qui inspirera la création de la Croix-Rouge."
    },
    {
        evenement: "Annexion de Nice et de la Savoie",
        annee: 1860,
        trivia : "En échange de son soutien à l'unification italienne, Napoléon III obtient par référendum l'annexion de Nice et de la Savoie en 1860. C'est la dernière grande extension du territoire français. Garibaldi, natif de Nice, ne pardonnera jamais à la France cette annexion."
    },
    {
        evenement: "Expédition du Mexique",
        annee: 1862,
        trivia : "En 1862, Napoléon III envoie des troupes au Mexique pour y installer l'archiduc autrichien Maximilien comme empereur. L'aventure tourne au désastre : les Mexicains résistent, les États-Unis exigent le retrait français, et Maximilien sera fusillé en 1867."
    },
    {
        evenement: "Publication des Misérables",
        annee: 1862,
        trivia : "Victor Hugo publie Les Misérables en 1862, depuis son exil à Guernesey où il s'est réfugié pour fuir le régime de Napoléon III. Le roman, vendu en quelques heures à Paris, dénonce la misère sociale et devient immédiatement un symbole de la littérature humaniste."
    },
    {
        evenement: "Fondation de la Croix-Rouge",
        annee: 1863,
        trivia : "Henry Dunant fonde la Croix-Rouge à Genève en 1863, inspiré par l'horreur de Solférino. L'organisation vise à porter secours aux blessés de guerre sans distinction de camp. La Convention de Genève, signée l'année suivante, codifie pour la première fois le droit humanitaire."
    },
    {
        evenement: "Exécution de Maximilien du Mexique",
        annee: 1867,
        trivia : "Abandonné par les troupes françaises rappelées sous pression américaine, l'empereur Maximilien du Mexique est capturé et fusillé en 1867. Manet en fait un tableau célèbre. Cet échec ternit durablement le prestige de Napoléon III."
    },
    {
        evenement: "Exposition universelle de Paris",
        annee: 1867,
        trivia : "L'Exposition universelle de 1867 à Paris est l'apogée symbolique du Second Empire. Des millions de visiteurs découvrent les dernières innovations industrielles. Mais des nuages s'accumulent : la Prusse de Bismarck y expose aussi ses canons Krupp, qui écraseront la France trois ans plus tard."
    },
    {
        evenement: "Ouverture du canal de Suez",
        annee: 1869,
        trivia : "Le canal de Suez, percé sous la direction de Ferdinand de Lesseps avec des capitaux franco-égyptiens, est inauguré en grande pompe en 1869. Il relie la Méditerranée à la mer Rouge, réduisant de moitié la route maritime entre l'Europe et l'Asie."
    },
    {
        evenement: "Déclaration de guerre à la Prusse",
        annee: 1870,
        trivia : "En juillet 1870, Napoléon III déclare la guerre à la Prusse de Bismarck, tombant dans le piège que ce dernier lui a tendu avec la candidature d'un Hohenzollern au trône d'Espagne. La France entre en guerre mal préparée contre l'armée la plus moderne d'Europe."
    },
    {
        evenement: "Bataille de Sedan",
        annee: 1870,
        trivia : "Le 1er septembre 1870, l'armée française est encerclée et écrasée à Sedan par les Prussiens. Napoléon III, malade et épuisé, capitule personnellement avec 100 000 soldats. C'est la plus grande reddition de l'histoire militaire française."
    },
    {
        evenement: "Proclamation de la IIIe République",
        annee: 1870,
        trivia : "Le 4 septembre 1870, deux jours après Sedan, la foule envahit l'Assemblée nationale à Paris. Gambetta proclame la République depuis l'Hôtel de Ville. Le Second Empire s'effondre sans résistance. La IIIe République durera jusqu'en 1940."
    },
    {
        evenement: "Siège de Paris",
        annee: 1870,
        trivia : "De septembre 1870 à janvier 1871, Paris est assiégée par les armées prussiennes. Les Parisiens mangent les animaux du zoo, les rats et les chats. Des ballons sont utilisés pour transporter du courrier hors de la ville assiégée, dont un certain Gambetta."
    },
    {
        evenement: "Publication de Madame Bovary",
        annee: 1857,
        trivia : "Gustave Flaubert publie Madame Bovary en 1857. Le roman, portrait d'une bourgeoise provinciale rêvant d'une vie romanesque, est immédiatement poursuivi en justice pour 'outrage à la morale publique'. Flaubert est acquitté, et le scandale transforme le livre en triomphe."
    },
    {
        evenement: "Naissance du mouvement impressionniste",
        annee: 1863,
        trivia : "En 1863, le Salon des Refusés expose les tableaux rejetés par le Salon officiel, dont le scandaleux 'Déjeuner sur l'herbe' de Manet. C'est l'acte de naissance de la peinture moderne qui aboutira à l'impressionnisme de Monet, Renoir et Degas."
    },
    {
        evenement: "Début de la construction de l'Opéra Garnier",
        annee: 1861,
        trivia : "La construction de l'Opéra Garnier, commandée par Napoléon III et conçue par Charles Garnier, débute en 1861. Achevé en 1875, ce chef-d'œuvre du style Napoléon III incarne l'opulence et le faste du Second Empire. Son architecture a inspiré le Fantôme de l'Opéra de Gaston Leroux."
    },

    // --- IIIe République (1871–1913) ---
    {
        evenement: "Commune de Paris",
        annee: 1871,
        trivia: "Du 18 mars au 28 mai 1871, Paris est gouvernée par la Commune, un gouvernement révolutionnaire né après la défaite contre la Prusse. La 'Semaine sanglante' voit l'armée française reprendre la ville au prix de 10 000 à 30 000 communards tués — le bilan le plus sanglant de l'histoire de France au XIXe siècle."
    },
    {
        evenement: "Traité de Francfort — perte de l'Alsace-Lorraine",
        annee: 1871,
        trivia: "Le traité de Francfort du 10 mai 1871 impose à la France vaincue la cession de l'Alsace et d'une partie de la Lorraine à l'Empire allemand, ainsi que 5 milliards de francs-or de réparations. La 'revanche' devient l'obsession nationale française pendant 43 ans, jusqu'en 1914."
    },
    {
        evenement: "Première exposition impressionniste",
        annee: 1874,
        trivia: "Le 15 avril 1874, Monet, Renoir, Degas et Pissarro organisent leur première exposition collective dans l'atelier du photographe Nadar à Paris. Le critique Louis Leroy les raille en les appelant 'impressionnistes' d'après le tableau de Monet 'Impression, soleil levant' — le nom leur restera pour toujours."
    },
    {
        evenement: "Lois constitutionnelles de la IIIe République",
        annee: 1875,
        trivia: "En janvier 1875, trois lois fondent la IIIe République : Sénat, Chambre des députés, Présidence. La République est adoptée à une voix de majorité. Cette constitution, pensée comme provisoire, durera 65 ans — jusqu'à la débâcle de 1940."
    },
    {
        evenement: "Le 14 juillet devient fête nationale",
        annee: 1880,
        trivia: "La loi du 6 juillet 1880 choisit le 14 juillet comme fête nationale, commémorant à la fois la prise de la Bastille (1789) et la Fête de la Fédération (1790). Le premier défilé militaire sur les Champs-Élysées a lieu le 14 juillet 1880."
    },
    {
        evenement: "École publique gratuite, obligatoire et laïque",
        annee: 1882,
        trivia: "Les lois Jules Ferry rendent l'enseignement primaire public gratuit (1881) puis obligatoire pour les 6-13 ans et laïque (1882) : crucifix retirés des classes, instituteurs civils remplaçant les religieux. Naît le mythe de 'l'instituteur hussard de la République', pilier du projet républicain."
    },
    {
        evenement: "Légalisation des syndicats",
        annee: 1884,
        trivia: "La loi Waldeck-Rousseau du 21 mars 1884 autorise la création de syndicats professionnels en France, mettant fin à l'interdiction de la loi Le Chapelier de 1791. La CGT sera fondée onze ans plus tard. C'est le point de départ du mouvement ouvrier organisé en France."
    },
    {
        evenement: "Vaccin contre la rage par Pasteur",
        annee: 1885,
        trivia: "Le 6 juillet 1885, Louis Pasteur vaccine avec succès Joseph Meister, un enfant mordu par un chien enragé. C'est la première vaccination humaine contre la rage. Pasteur, qui n'était pas médecin, risquait des poursuites — il attendit dix jours avant d'annoncer le succès du traitement."
    },
    {
        evenement: "Inauguration de la Tour Eiffel",
        annee: 1889,
        trivia: "Construite en 26 mois pour l'Exposition universelle par 300 ouvriers, la Tour Eiffel devait être démolie en 1909. Elle fut sauvée grâce à son utilité comme antenne de télégraphie sans fil. Gustave Eiffel y avait aménagé un appartement personnel au sommet et la surnommait sa 'dame de fer'."
    },
    {
        evenement: "Arrestation du capitaine Dreyfus",
        annee: 1894,
        trivia: "Le 15 octobre 1894, le capitaine Alfred Dreyfus, officier juif alsacien, est arrêté pour haute trahison — accusé à tort d'avoir livré des documents à l'Allemagne. Son procès inique déclenche l'une des plus grandes crises politiques de la France, divisant le pays entre dreyfusards et antidreyfusards."
    },
    {
        evenement: "Invention du cinématographe",
        annee: 1895,
        trivia: "Le 28 décembre 1895, les frères Lumière organisent la première projection publique payante au Grand Café du boulevard des Capucines à Paris. Parmi les films : 'L'Arrivée d'un train en gare de La Ciotat', qui aurait fait fuir les spectateurs terrorisés à l'idée d'être écrasés."
    },
    {
        evenement: "Premiers Jeux Olympiques modernes",
        annee: 1896,
        trivia: "Le 6 avril 1896, le baron Pierre de Coubertin inaugure les premiers Jeux Olympiques modernes à Athènes, avec 241 athlètes de 14 nations. Coubertin s'était inspiré des jeux antiques et du sport anglais pour forger l'idéal olympique : 'l'important, c'est de participer'."
    },
    {
        evenement: "\"J'accuse\" d'Émile Zola",
        annee: 1898,
        trivia: "Le 13 janvier 1898, Zola publie en une de L'Aurore une lettre ouverte au président intitulée 'J'accuse…!', dénonçant l'injustice du procès Dreyfus. Diffusé à 300 000 exemplaires, le texte vaut à Zola une condamnation pour diffamation — il s'exile en Angleterre pour éviter la prison."
    },
    {
        evenement: "Exposition universelle de Paris",
        annee: 1900,
        trivia: "L'Exposition universelle de 1900 attire 50 millions de visiteurs à Paris en sept mois — un record mondial. Elle inaugure la gare d'Orsay, le Grand et le Petit Palais, le pont Alexandre-III et le métro parisien. C'est l'apogée de la Belle Époque, insouciante et flamboyante."
    },
    {
        evenement: "Éruption de la Montagne Pelée",
        annee: 1902,
        trivia: "Le 8 mai 1902, le volcan Montagne Pelée explose en Martinique et détruit la ville de Saint-Pierre en deux minutes. Les 28 000 habitants meurent asphyxiés par une nuée ardente à 700 °C. Un seul survivant connu dans la ville : un prisonnier protégé par les murs épais de son cachot."
    },
    {
        evenement: "Premier Tour de France cycliste",
        annee: 1903,
        trivia: "Le 1er juillet 1903, le premier Tour de France est lancé par le journal L'Auto pour concurrencer Le Vélo. Six étapes, 2 428 km, 60 partants, 21 finisseurs. Maurice Garin remporte l'épreuve en 94 heures et 33 minutes à une moyenne de 25,7 km/h — sans assistance ni voiture-balai."
    },
    {
        evenement: "Séparation des Églises et de l'État",
        annee: 1905,
        trivia: "La loi du 9 décembre 1905 met fin au Concordat de 1801 et sépare officiellement les Églises de l'État. L'État ne reconnaît, ne salarie ni ne subventionne plus aucun culte. Cette loi, âprement combattue par l'Église catholique, fonde le principe de laïcité — pierre angulaire de la République française."
    },
    {
        evenement: "Réhabilitation du capitaine Dreyfus",
        annee: 1906,
        trivia: "Le 12 juillet 1906, la Cour de cassation réhabilite Dreyfus, innocenté après douze ans de combat judiciaire. Le vrai traître, le commandant Esterhazy, avait avoué dès 1899 mais la hiérarchie militaire avait couvert l'affaire. Dreyfus est réintégré dans l'armée avec le grade de chef de bataillon."
    },
    {
        evenement: "Blériot traverse la Manche en avion",
        annee: 1909,
        trivia: "Le 25 juillet 1909, Louis Blériot traverse la Manche de Calais à Douvres en 36 minutes à bord de son monoplan Blériot XI, remportant le prix de 1 000 livres du Daily Mail. Winston Churchill dira plus tard que cette traversée prouve que 'la mer n'est plus une défense suffisante' pour l'Angleterre."
    },
    {
        evenement: "Création du Sacre du printemps de Stravinsky",
        annee: 1913,
        trivia: "Le 29 mai 1913, la première du Sacre du printemps de Stravinsky, chorégraphié par Nijinski pour les Ballets russes, provoque une émeute au Théâtre des Champs-Élysées : sifflets, huées et bagarres dans la salle. Les rythmes sauvages révolutionnent la musique — aujourd'hui c'est l'une des œuvres les plus jouées au monde."
    },

    // --- Guerres mondiales (1914–1945) ---
    {
        evenement: "Assassinat de l'archiduc François-Ferdinand à Sarajevo",
        annee: 1914,
        trivia: "Le 28 juin 1914, l'héritier de l'empire austro-hongrois est assassiné à Sarajevo par Gavrilo Princip, un nationaliste serbe de 19 ans. Cet attentat déclenche un effet domino diplomatique : en six semaines, toute l'Europe est en guerre par le jeu des alliances."
    },
    {
        evenement: "Bataille de Verdun",
        annee: 1916,
        trivia: "De février à décembre 1916, Français et Allemands s'affrontent dans la plus longue bataille de la Première Guerre mondiale. En dix mois de combats, 300 000 soldats meurent et 400 000 sont blessés pour un gain territorial quasiment nul. Verdun devient le symbole du sacrifice inutile et de l'horreur de la guerre des tranchées."
    },
    {
        evenement: "Entrée en guerre des États-Unis",
        annee: 1917,
        trivia: "Le 6 avril 1917, les États-Unis déclarent la guerre à l'Allemagne après la reprise de la guerre sous-marine à outrance et la révélation du télégramme Zimmermann, dans lequel l'Allemagne proposait au Mexique de reconquérir le Texas. L'arrivée des 'doughboys' américains sera décisive pour l'issue du conflit."
    },
    {
        evenement: "Révolution d'Octobre en Russie",
        annee: 1917,
        trivia: "Dans la nuit du 25 au 26 octobre 1917, les bolcheviks de Lénine s'emparent du pouvoir à Petrograd dans un coup d'État quasi sans violence. La Russie signe l'armistice avec l'Allemagne en mars 1918 et se retire de la guerre. C'est la fin de l'empire des tsars et la naissance de l'URSS."
    },
    {
        evenement: "Armistice du 11 novembre",
        annee: 1918,
        trivia: "Le 11 novembre 1918 à 11h, l'armistice met fin aux combats de la Première Guerre mondiale. Signé dans un wagon de chemin de fer dans la forêt de Compiègne, il sera délibérément choisi par Hitler pour la signature de l'armistice français en juin 1940 — dans le même wagon, sorti du musée pour l'occasion."
    },
    {
        evenement: "Traité de Versailles",
        annee: 1919,
        trivia: "Signé le 28 juin 1919, le traité de Versailles impose à l'Allemagne la perte de 13 % de son territoire, 132 milliards de marks-or de réparations et une armée limitée à 100 000 hommes. John Maynard Keynes prédit que ces conditions humiliantes entraîneront une catastrophe économique — et une nouvelle guerre."
    },
    {
        evenement: "Occupation française de la Ruhr",
        annee: 1923,
        trivia: "En janvier 1923, la France et la Belgique occupent militairement le bassin industriel de la Ruhr pour forcer l'Allemagne à payer ses réparations. L'Allemagne répond par une grève générale financée par la planche à billets, provoquant une hyperinflation vertigineuse : un dollar vaut 4 200 milliards de marks en novembre."
    },
    {
        evenement: "Krach boursier de Wall Street",
        annee: 1929,
        trivia: "Le 24 octobre 1929, 'jeudi noir', la Bourse de New York s'effondre. Le 29 octobre, 'mardi noir', 16 millions d'actions sont vendues en une journée. La crise se propage au monde entier : en trois ans, la production industrielle américaine chute de 50 % et 13 millions d'Américains se retrouvent au chômage."
    },
    {
        evenement: "Hitler nommé chancelier d'Allemagne",
        annee: 1933,
        trivia: "Le 30 janvier 1933, le président Hindenburg nomme Adolf Hitler chancelier du Reich. Le parti nazi, qui n'avait obtenu que 33 % des voix, s'empare rapidement du pouvoir total. L'incendie du Reichstag (27 février) sert de prétexte pour suspendre les libertés civiles et instaurer la dictature."
    },
    {
        evenement: "Le Front Populaire arrive au pouvoir",
        annee: 1936,
        trivia: "Le 3 mai 1936, le Front Populaire — alliance SFIO, radicaux et PCF — remporte les élections. Léon Blum forme le premier gouvernement socialiste de France. Les accords Matignon qui suivent accordent les congés payés, la semaine de 40 heures et la liberté syndicale — conquêtes sociales encore en vigueur aujourd'hui."
    },
    {
        evenement: "Bombardement de Guernica",
        annee: 1937,
        trivia: "Le 26 avril 1937, l'aviation nazie bombarde la ville basque de Guernica pendant la guerre civile espagnole, tuant des centaines de civils. Picasso, horrifié, peint en quelques semaines sa toile monumentale 'Guernica', devenu le symbole universel de la barbarie de la guerre aérienne contre les populations civiles."
    },
    {
        evenement: "Accords de Munich",
        annee: 1938,
        trivia: "Le 30 septembre 1938, la France et l'Angleterre cèdent les Sudètes tchécoslovaques à Hitler, espérant acheter la paix. Chamberlain rentre à Londres en proclamant 'la paix pour notre temps'. Churchill qualifie l'accord de 'défaite totale et sans guerre'. Six mois plus tard, Hitler envahit le reste de la Tchécoslovaquie."
    },
    {
        evenement: "Invasion de la Pologne — début de la Seconde Guerre mondiale",
        annee: 1939,
        trivia: "Le 1er septembre 1939, l'Allemagne envahit la Pologne avec 1,5 million de soldats. La France et le Royaume-Uni déclarent la guerre le 3 septembre. S'ensuit la 'drôle de guerre' : huit mois sans combats significatifs à l'Ouest, jusqu'à l'offensive éclair allemande de mai 1940."
    },
    {
        evenement: "Appel du 18 juin du général de Gaulle",
        annee: 1940,
        trivia: "Le 18 juin 1940, depuis les studios de la BBC à Londres, de Gaulle lance son appel à la résistance : 'La France a perdu une bataille ! Mais la France n'a pas perdu la guerre !' Seules quelques centaines de personnes l'entendent en direct. Retransmis et recopié, ce message devient le fondement de la France libre."
    },
    {
        evenement: "Attaque japonaise sur Pearl Harbor",
        annee: 1941,
        trivia: "Le 7 décembre 1941, la marine japonaise attaque par surprise la base navale américaine de Pearl Harbor à Hawaï. L'attaque dure 110 minutes et coule ou endommage 18 navires. Roosevelt qualifie le 7 décembre de 'date qui vivra dans l'infamie' et les États-Unis entrent dans la guerre le lendemain."
    },
    {
        evenement: "Rafle du Vél d'Hiv",
        annee: 1942,
        trivia: "Les 16 et 17 juillet 1942, la police française arrête 13 152 Juifs à Paris et en banlieue, dont 4 115 enfants. Entassés au Vélodrome d'Hiver, ils sont ensuite déportés vers Auschwitz. En 1995, Jacques Chirac est le premier président français à reconnaître officiellement la responsabilité de l'État dans cette rafle."
    },
    {
        evenement: "Débarquement en Normandie",
        annee: 1944,
        trivia: "Le 6 juin 1944, l'opération Overlord débarque 156 000 soldats alliés sur les plages normandes en une seule journée — la plus grande opération amphibie de l'Histoire. Les combats du Débarquement et de la bataille de Normandie font 425 000 morts : Alliés, Allemands et civils normands."
    },
    {
        evenement: "Libération de Paris",
        annee: 1944,
        trivia: "Le 25 août 1944, la 2e division blindée du général Leclerc entre dans Paris, libérant la capitale après quatre ans d'occupation. Le lendemain, de Gaulle descend les Champs-Élysées sous les acclamations d'une foule immense, affirmant que Paris s'est 'libéré lui-même' — effaçant symboliquement la honte de 1940."
    },
    {
        evenement: "Capitulation de l'Allemagne nazie",
        annee: 1945,
        trivia: "Le 8 mai 1945, l'Allemagne nazie capitule sans conditions à Reims, puis à Berlin. Hitler s'était suicidé le 30 avril dans son bunker. En Europe, la guerre s'achève après cinq ans et huit mois de combats — au prix d'environ 70 millions de morts dans le monde, dont 6 millions de Juifs exterminés."
    },
    {
        evenement: "Bombes atomiques sur Hiroshima et Nagasaki",
        annee: 1945,
        trivia: "Le 6 août 1945, les États-Unis larguent la première bombe atomique sur Hiroshima (80 000 morts instantanés), suivie d'une deuxième sur Nagasaki le 9 août. Le Japon capitule le 15 août, mettant fin à la Seconde Guerre mondiale. L'humanité entre dans l'ère atomique, avec la menace permanente de sa propre destruction."
    },

    // ===== RÉVOLUTION FRANÇAISE (1789-1799) =====
    {
        evenement: "Réunion des États généraux à Versailles",
        annee: 1789,
        trivia: "Louis XVI convoque les États généraux pour la première fois depuis 1614 afin de résoudre la crise financière. La réunion des trois ordres — clergé, noblesse, tiers-état — déclenche une crise politique qui aboutira à la Révolution."
    },
    {
        evenement: "Création de l'Assemblée nationale par le Tiers-État",
        annee: 1789,
        trivia: "Le 17 juin, le Tiers-État, refusant de voter par ordre, se proclame seul représentant de la nation. C'est un acte révolutionnaire : pour la première fois, le peuple affirme sa souveraineté face au roi."
    },
    {
        evenement: "Serment du Jeu de paume",
        annee: 1789,
        trivia: "Chassés de leur salle de réunion, les députés du Tiers-État se retrouvent dans la salle du Jeu de paume à Versailles. Ils jurent solennellement de ne pas se séparer avant d'avoir donné une Constitution à la France."
    },
    {
        evenement: "Prise de la Bastille",
        annee: 1789,
        trivia: "Le 14 juillet, le peuple parisien prend d'assaut la forteresse royale. La Bastille ne contenait que 7 prisonniers ce jour-là, mais elle symbolisait le despotisme royal. Cette date est devenue la fête nationale française."
    },
    {
        evenement: "Nuit du 4 août : abolition des privilèges féodaux",
        annee: 1789,
        trivia: "En quelques heures d'enthousiasme collectif, l'Assemblée nationale abolit le système féodal, les dîmes et les privilèges de la noblesse et du clergé. Certains historiens y voient la nuit la plus importante de l'histoire de France."
    },
    {
        evenement: "Déclaration des droits de l'homme et du citoyen",
        annee: 1789,
        trivia: "Ce texte fondateur proclame la liberté, l'égalité, la souveraineté nationale et la séparation des pouvoirs. Inspirée des Lumières et de la Déclaration d'indépendance américaine, elle reste un pilier du droit constitutionnel français."
    },
    {
        evenement: "Marche des femmes sur Versailles",
        annee: 1789,
        trivia: "Des milliers de femmes marchent de Paris à Versailles pour réclamer du pain. Elles contraignent Louis XVI à les rejoindre à Paris. C'est la fin de Versailles comme centre du pouvoir royal."
    },
    {
        evenement: "Fête de la Fédération au Champ-de-Mars",
        annee: 1790,
        trivia: "Le 14 juillet 1790, un an après la prise de la Bastille, 300 000 personnes célèbrent l'unité nationale au Champ-de-Mars. Louis XVI prête serment à la Constitution. C'est l'un des rares moments d'unanimité de la Révolution, avant que les divisions ne s'aggravent."
    },
    {
        evenement: "Fuite à Varennes de la famille royale",
        annee: 1791,
        trivia: "Louis XVI tente de fuir la France déguisé en valet pour rejoindre les armées contre-révolutionnaires. Reconnu à Varennes par un maître de poste, il est ramené à Paris sous escorte. Cet épisode brise définitivement sa popularité."
    },
    {
        evenement: "Première Constitution française",
        annee: 1791,
        trivia: "La France devient une monarchie constitutionnelle. Le roi conserve le pouvoir exécutif mais l'Assemblée législative contrôle les lois et les impôts. C'est la première constitution écrite de l'histoire française."
    },
    {
        evenement: "Déclaration de guerre à l'Autriche",
        annee: 1792,
        trivia: "Les Girondins poussent à la guerre contre l'Autriche, espérant que le conflit forcerait Louis XVI à montrer ses vraies couleurs : soit se rallier à la Révolution, soit trahir et être démasqué. La guerre durera jusqu'en 1815."
    },
    {
        evenement: "Prise du palais des Tuileries",
        annee: 1792,
        trivia: "Le 10 août, le palais des Tuileries est envahi par les insurgés parisiens. Les gardes suisses sont massacrés malgré leur résistance. Louis XVI est suspendu de ses fonctions et emprisonné au Temple avec sa famille."
    },
    {
        evenement: "Bataille de Valmy",
        annee: 1792,
        trivia: "La victoire des armées françaises stoppe l'invasion prussienne. Le poète Goethe, présent sur le champ de bataille, aurait déclaré : 'De ce lieu et de ce jour date une nouvelle époque de l'histoire du monde.'"
    },
    {
        evenement: "Proclamation de la Première République française",
        annee: 1792,
        trivia: "La Convention nationale abolit la royauté et proclame la République le 21 septembre. L'An I du nouveau calendrier républicain commence. La France ne sera plus jamais une monarchie absolue."
    },
    {
        evenement: "Exécution de Louis XVI",
        annee: 1793,
        trivia: "Louis XVI est guillotiné place de la Révolution (actuelle place de la Concorde) le 21 janvier. Ses dernières paroles furent : 'Je meurs innocent de tous les crimes qu'on m'impute.' Sa mort choque les monarchies européennes."
    },
    {
        evenement: "Assassinat de Marat dans sa baignoire",
        annee: 1793,
        trivia: "Charlotte Corday, une girondine normande, poignarde le révolutionnaire Jean-Paul Marat dans son bain médicinal où il traitait une maladie de peau. Elle fut guillotinée quatre jours plus tard. David immortalisa la scène dans un célèbre tableau."
    },
    {
        evenement: "Exécution de Marie-Antoinette",
        annee: 1793,
        trivia: "La reine est guillotinée le 16 octobre, neuf mois après son mari Louis XVI. Surnommée 'Madame Déficit' pour ses dépenses, elle avait 37 ans. Sa dernière parole, après avoir marché sur le pied du bourreau, fut : 'Pardonnez-moi, monsieur.'"
    },
    {
        evenement: "Levée en masse",
        annee: 1793,
        trivia: "Face aux armées coalisées de toute l'Europe, la Convention décrète la mobilisation générale de toute la nation : hommes, femmes, enfants et vieillards ont chacun un rôle. C'est la première conscription de masse de l'histoire moderne, mobilisant près de 800 000 hommes."
    },
    {
        evenement: "Création du Comité de salut public",
        annee: 1793,
        trivia: "Ce comité gouvernemental de douze membres, rapidement dominé par Robespierre, dirige la France pendant la Terreur avec des pouvoirs quasi dictatoriaux. Il organise la levée en masse et la défense nationale contre les coalitions étrangères."
    },
    {
        evenement: "Exécution de Danton sur ordre de Robespierre",
        annee: 1794,
        trivia: "Georges Danton, ancien allié de Robespierre et figure populaire de la Révolution, est guillotiné le 5 avril. En montant à l'échafaud, il aurait dit : 'Tu montreras ma tête au peuple, elle en vaut la peine.' Robespierre sera guillotiné à son tour quatre mois plus tard."
    },
    {
        evenement: "Abolition de l'esclavage dans les colonies françaises",
        annee: 1794,
        trivia: "La Convention abolit l'esclavage le 4 février — la première nation au monde à le faire. Napoléon le rétablira en 1802 sous la pression des colons. L'abolition définitive n'interviendra qu'en 1848 sous la IIe République."
    },
    {
        evenement: "Coup d'État du 9 Thermidor : chute de Robespierre",
        annee: 1794,
        trivia: "Robespierre est arrêté à la Convention, puis guillotiné le lendemain avec ses alliés. Cet événement met fin à la Terreur après 17 000 exécutions officielles. Le mot 'thermidorien' désigne depuis une réaction conservatrice après une période d'excès."
    },
    {
        evenement: "Bonaparte réprime l'insurrection royaliste du 13 Vendémiaire",
        annee: 1795,
        trivia: "Un soulèvement royaliste menace la Convention. Barras confie à Bonaparte le soin de le réprimer. Il disperse la foule au canon — 'une volée de mitraille' selon ses propres mots. Cet épisode le propulse au rang de général en chef et le fait connaître à Paris."
    },
    {
        evenement: "Début du Directoire",
        annee: 1795,
        trivia: "Un gouvernement de cinq directeurs prend le pouvoir après la chute de Robespierre. C'est une période d'instabilité chronique, de corruption et de guerres extérieures, qui prépare le terrain au coup d'État de Bonaparte."
    },
    {
        evenement: "Début de la campagne d'Italie de Bonaparte",
        annee: 1796,
        trivia: "Le jeune général de 26 ans remporte une série de victoires éclatantes contre les Autrichiens. En quelques mois, il conquiert la majeure partie de l'Italie du Nord, s'enrichit personnellement et envoie des œuvres d'art au Louvre."
    },
    {
        evenement: "Traité de Campo-Formio",
        annee: 1797,
        trivia: "Bonaparte impose la paix à l'Autriche sans consulter le Directoire. La France obtient officiellement la Belgique et les Îles Ioniennes. L'Autriche reçoit Venise en compensation, mettant fin à mille ans d'indépendance de la Sérénissime."
    },
    {
        evenement: "Expédition de Bonaparte en Égypte",
        annee: 1798,
        trivia: "Bonaparte part conquérir l'Égypte pour couper la route des Indes à l'Angleterre. La pierre de Rosette, clé du déchiffrement des hiéroglyphes, y est découverte. L'expédition est un échec militaire mais un triomphe scientifique."
    },
    {
        evenement: "Coup d'État du 18 Brumaire de Bonaparte",
        annee: 1799,
        trivia: "Le 9 novembre, Bonaparte renverse le Directoire avec l'aide de son frère Lucien, président du Conseil des Cinq-Cents, et de l'abbé Sieyès, théoricien politique. Il devient Premier consul avec des pouvoirs quasi dictatoriaux. C'est la fin de la Révolution française et le début du Consulat."
    },
    {
        evenement: "Loi des suspects",
        annee: 1793,
        trivia: "Cette loi permet d'arrêter toute personne suspecte de ne pas être assez révolutionnaire : nobles, prêtres réfractaires, parents d'émigrés. Elle alimente la Grande Terreur et aboutit à l'emprisonnement de 300 000 personnes."
    },
    // ===== ART & CULTURE =====
    {
        evenement: "Construction du Parthénon à Athènes",
        annee: -447,
        art: true,
        trivia: "Le Parthénon est construit entre -447 et -432 sur l'Acropole d'Athènes sous la direction de Phidias, sur ordre de Périclès. Ce temple dédié à Athéna est considéré comme le sommet de l'architecture grecque classique et l'un des monuments les plus influents de l'histoire de l'art."
    },
    {
        evenement: "Virgile publie L'Énéide",
        annee: -19,
        art: true,
        trivia: "L'Énéide, épopée de Virgile publiée en -19, raconte les aventures d'Énée, héros troyen ancêtre des Romains. Chef-d'œuvre de la littérature latine, elle a servi de modèle à la poésie épique occidentale pendant deux millénaires, de Dante à Milton."
    },
    {
        evenement: "Construction du Colossée de Rome",
        annee: 72,
        art: true,
        trivia: "Le Colossée, dont la construction débute en 72 sous Vespasien, peut accueillir 50 000 spectateurs. Ce chef-d'œuvre d'ingénierie romaine accueillit gladiateurs, chasses aux fauves et reconstitutions navales. Il reste le plus grand amphithéâtre jamais construit."
    },
    {
        evenement: "Construction de la cathédrale Sainte-Sophie de Constantinople",
        annee: 537,
        art: true,
        trivia: "Sainte-Sophie, achevée en 537 sous Justinien, reste pendant un millénaire la plus grande église du monde chrétien. Sa coupole de 31 mètres de diamètre, semblant flotter dans les airs grâce à des fenêtres à la base, influence toute l'architecture byzantine et ottomane."
    },
    {
        evenement: "Début de la construction de Notre-Dame de Paris",
        annee: 1163,
        art: true,
        trivia: "La cathédrale Notre-Dame de Paris, dont la construction débute en 1163 sous l'évêque Maurice de Sully, est un chef-d'œuvre de l'architecture gothique. Ses arcs-boutants, invention majeure de l'époque, permettent d'élever les murs et d'y percer d'immenses vitraux."
    },
    {
        evenement: "Giotto peint la chapelle des Scrovegni",
        annee: 1305,
        art: true,
        trivia: "Les fresques de Giotto à Padoue (1305) représentent une révolution artistique : pour la première fois, les personnages ont un volume, des émotions, une présence humaine. Giotto rompt avec l'art byzantin figé et ouvre la voie à la Renaissance."
    },
    {
        evenement: "Dante commence La Divine Comédie",
        annee: 1308,
        art: true,
        trivia: "La Divine Comédie, composée par Dante entre 1308 et 1320, décrit un voyage à travers l'Enfer, le Purgatoire et le Paradis. Écrite en toscan populaire plutôt qu'en latin, elle pose les bases de la langue italienne et reste l'un des plus grands poèmes jamais écrits."
    },
    {
        evenement: "Van Eyck peint Les Époux Arnolfini",
        annee: 1434,
        art: true,
        trivia: "Les Époux Arnolfini (1434) est l'un des premiers grands portraits de l'histoire de la peinture. Van Eyck y maîtrise la perspective et la représentation de la lumière à un niveau stupéfiant pour l'époque. Le miroir convexe au fond du tableau reflète deux autres personnages, dont peut-être l'artiste lui-même."
    },
    {
        evenement: "Brunelleschi achève la coupole du Dôme de Florence",
        annee: 1436,
        art: true,
        trivia: "La coupole de Brunelleschi, achevée en 1436, est un exploit technique sans précédent : 42 mètres de diamètre, sans échafaudage traditionnel, construite grâce à un système de spirales en herringbone que Brunelleschi garda secret. Elle reste la plus grande coupole en maçonnerie jamais construite."
    },
    {
        evenement: "Botticelli peint La Naissance de Vénus",
        annee: 1485,
        art: true,
        trivia: "La Naissance de Vénus de Botticelli (vers 1485) est l'une des premières grandes représentations de la nudité féminine depuis l'Antiquité. Commandée par les Médicis, elle illustre l'idéal néoplatonicien de beauté divine. Le visage de Vénus est inspiré de Simonetta Vespucci, amour platonique de Botticelli."
    },
    {
        evenement: "Michel-Ange sculpte La Pietà",
        annee: 1499,
        art: true,
        trivia: "Michel-Ange avait 24 ans quand il acheva La Pietà (1499), aujourd'hui conservée au Vatican. Scandalisés qu'un si jeune homme puisse créer une telle œuvre, certains l'attribuèrent à d'autres. Furieux, Michel-Ange cisela son nom sur le baudrier de la Vierge — la seule œuvre qu'il signa jamais."
    },
    {
        evenement: "Léonard de Vinci commence à peindre La Joconde",
        annee: 1503,
        art: true,
        trivia: "Léonard commence La Joconde vers 1503 et ne la considérera jamais terminée, l'emportant jusqu'à sa mort en France. Le mystère de son sourire tient au sfumato, technique de Léonard où les contours sont volontairement flous. La Joconde est aujourd'hui le tableau le plus visité au monde."
    },
    {
        evenement: "Michel-Ange termine le David",
        annee: 1504,
        art: true,
        trivia: "Le David de Michel-Ange, achevé en 1504 après trois ans de travail, représente le héros biblique avant son combat contre Goliath. Taillé dans un bloc de marbre que d'autres sculpteurs avaient abandonné, il mesure 5,17 mètres. Florence en fit immédiatement le symbole de sa résistance aux tyrans."
    },
    {
        evenement: "Michel-Ange commence le plafond de la chapelle Sixtine",
        annee: 1508,
        art: true,
        trivia: "Michel-Ange peint seul le plafond de la Sixtine entre 1508 et 1512, allongé sur un échafaudage, les yeux brûlés par la peinture qui coule. Les 300 figures de 520 m² constituent l'une des œuvres les plus complexes de l'histoire de l'art. Il aurait dit : 'Je ne suis pas peintre.'"
    },
    {
        evenement: "Raphaël peint L'École d'Athènes",
        annee: 1511,
        art: true,
        trivia: "L'École d'Athènes (1509-1511) réunit sous un même portique tous les grands philosophes de l'Antiquité. Platon et Aristote trônent au centre. Raphaël se représente lui-même au bord droit. Il aurait glissé le visage de Michel-Ange dans le personnage d'Héraclite, en hommage à son génie."
    },
    {
        evenement: "Pierre Lescot commence la reconstruction du Louvre",
        annee: 1546,
        art: true,
        trivia: "François Ier confie en 1546 à l'architecte Pierre Lescot la reconstruction du vieux château médiéval du Louvre. Cette aile classique, ornée de sculptures de Jean Goujon, inaugure l'architecture de la Renaissance française. Le palais sera agrandi pendant trois siècles avant de devenir le plus grand musée du monde."
    },
    {
        evenement: "Rembrandt peint La Ronde de Nuit",
        annee: 1642,
        art: true,
        trivia: "La Ronde de Nuit (1642) est la plus grande et la plus célèbre peinture de Rembrandt. En réalité, la scène se déroule probablement en plein jour — le vernis assombri par les siècles lui a donné son surnom. Sa composition dynamique et dramatique révolutionne le portrait de groupe."
    },
    {
        evenement: "Fondation de la Comédie-Française",
        annee: 1680,
        art: true,
        trivia: "Louis XIV fonde la Comédie-Française en 1680 en fusionnant deux troupes parisiennes, dont celle de l'ancien compagnon de Molière. C'est la plus ancienne troupe de théâtre au monde encore en activité, surnommée 'la Maison de Molière'. Elle reçoit encore des subventions de l'État français."
    },
    {
        evenement: "Bach compose la Passion selon saint Matthieu",
        annee: 1727,
        art: true,
        trivia: "La Passion selon saint Matthieu de Bach (1727) est considérée comme l'un des plus grands chefs-d'œuvre de la musique occidentale. Oubliée après la mort de Bach, elle fut redécouverte et jouée par Felix Mendelssohn en 1829 — un siècle après sa création — déclenchant le renouveau de la musique baroque."
    },
    {
        evenement: "Naissance de Mozart à Salzbourg",
        annee: 1756,
        art: true,
        trivia: "Wolfgang Amadeus Mozart naît à Salzbourg en 1756. Prodige dès l'enfance, il compose ses premières œuvres à 5 ans et se produit devant les cours d'Europe à 6. En 35 ans de vie, il laisse 626 œuvres cataloguées dont Don Giovanni, La Flûte enchantée et le Requiem inachevé."
    },
    {
        evenement: "Voltaire publie Candide",
        annee: 1759,
        art: true,
        trivia: "Candide, publié en 1759 sous un pseudonyme, est un conte philosophique qui raille l'optimisme naïf de Leibniz ('tout est pour le mieux dans le meilleur des mondes possibles'). Voltaire l'écrivit en trois jours selon la légende. L'ouvrage est immédiatement censuré et brûlé — ce qui assure son succès."
    },
    {
        evenement: "Beethoven crée la 9e Symphonie",
        annee: 1824,
        art: true,
        trivia: "La 9e Symphonie de Beethoven est créée en 1824 alors que son auteur est totalement sourd. Lors de la première, Beethoven dirige un orchestre fantôme dos au public — le vrai chef est derrière lui. À la fin, il ne s'aperçoit pas des applaudissements : une choriste dut le retourner pour qu'il voie l'ovation."
    },
    {
        evenement: "Delacroix peint La Liberté guidant le peuple",
        annee: 1830,
        art: true,
        trivia: "Inspiré par les Trois Glorieuses de juillet 1830, Delacroix peint La Liberté guidant le peuple en quelques semaines. La femme au bonnet phrygien brandissant le drapeau tricolore est devenue l'allégorie de la République française. Son visage est depuis celui de Marianne."
    },
    {
        evenement: "Balzac publie le premier tome de La Comédie Humaine",
        annee: 1829,
        art: true,
        trivia: "La Comédie Humaine de Balzac est un cycle de 91 romans et nouvelles dépeignant la société française de 1815 à 1848 avec une précision sociologique saisissante. Balzac y invente le procédé des personnages récurrents. Son œuvre pharaonique, écrite en travaillant 16 heures par jour au café, resta inachevée à sa mort."
    },
    {
        evenement: "Courbet expose Un enterrement à Ornans au Salon de Paris",
        annee: 1850,
        art: true,
        trivia: "Un enterrement à Ornans (1849-1850) représente des paysans ordinaires à l'échelle monumentale réservée aux héros antiques. Le scandale est immense : le bourgeois parisien refuse de se voir ainsi montré. Courbet, ravi, pose les bases du réalisme et défie l'Académie qui impose sujets nobles et idéalisation."
    },

    {
        evenement: "Soulèvement de la Vendée",
        annee: 1793,
        trivia: "Les paysans vendéens, catholiques et royalistes, se soulèvent contre la conscription et la persécution des prêtres. La guerre de Vendée fait entre 100 000 et 250 000 morts et reste l'un des conflits les plus meurtriers de la Révolution."
    }
];
