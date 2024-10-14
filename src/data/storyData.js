const storyData = {
    1: {
        "text": "Le réveil sonne, il est l'heure de se lever ! Vous regardez le cadran, il est:",
        "options": [
            { "label": "Entre 5h et 7h", "nextId": 2 },
            { "label": "Entre 7h et 8h", "nextId": 3 },
            { "label": "Entre 8h et 10h", "nextId": 4 }
        ],
    },
    2: {
        "text": "Vous êtes bien matinal, normal vous avez ... avant d'aller au travail:",
        "options": [
            { "label": "Un jogging à faire", "nextId": 0 },
            { "label": "Les enfants à amener à l'école", "nextId": 6 }
        ]
    },
    0: {
        "text": "Un jogging? Quelle belle idée!",
        "coinflip": [
            { "label": "Pile: Vous vous rendormez", "nextId": "0_1" },
            { "label": "Face: Vous êtes motivé", "nextId": 5 }
        ]
    },
    "0_1": {
        "text": "Un jogging, vraiment ? Si tôt ? Vous vous laissez piéger par la chaleur de votre lit en vous promettant de remettre ça au lendemain, il serait temps d'utiliser ces chaussures de running neuves !",
        "options": [
            { "label": "Se rendormir", "nextId": 4 }
        ]
    },
    3: {
        "text": "La journée commence bien : vous ouvrez les volets et entendez les oiseaux chanter, une légère brise vous rafraîchit les joues et un rayon de soleil vous éblouit. Direction la cuisine: vous préparez",
        "options": [
            { "label": "Un thé, deux tranches de bacon et un black pudding, à l'anglaise", "nextId": "3_1" },
            { "label": "Café jus de fruits, des céréales et du lait d'amande", "nextId": "3_1" }
        ]
    },
    "3_1": {
        "text": "Votre déjeuner ingurgité, vous zappez sur télématin puis mettez votre épisode de podcast de développement personnel préféré. C’est maintenant l’heure d’aller contribuer à la société ! Vous choisissez :",
        "options": [
            { "label": "Le télétravail", "nextId": 7 },
            { "label": "L’openspace", "nextId": 15 }
        ]
    },
    4: {
        "text": "10h déjà ? Pas de panique, l’avenir appartient à ceux qui se lèvent tout court ! Vous ne vous laisserez pas dicter votre conduite par des lèves-tôt présentéistes, et de toute façon, vous rattrapez vos heures en fin de journée. De bonne humeur et bien reposé, vous choisissez:",
        "options": [
            { "label": "Le télétravail", "nextId": 7 },
            { "label": "L’openspace", "nextId": 15 }
        ]
    },
    5: {
        "text": "Mmmm l'air frais, les paysages qui défilent et les poumons qui se décrassent, vive le jogging ! Votre playlist Spotify « Cardio running 2024 » à balle dans les AirPods, vous atteignez presque votre 8ème kilomètre et vous allez battre votre record personnel ! Pas question de s’arrêter, même pas au passage piéton ! Vous vous engagez en regardant du mauvais côté de la route.",
        "options": [
            { "label": "Vous entendez un klaxon assourdissant", "nextId": "E3" }
        ]
    },
    6: {
        "text": "Ooopsie vous avez raté le réveil ! Les enfants sont levés depuis une heure et sont en pyjama devant les dessins animés, pas question d'aller au travail aujourd'hui. Vous les lancez à l'école en pyjama puis revenez pour commencer votre journée de télétravail.",
        "options": [
            { "label": "Vous rentrez votre mot de passe", "nextId": 7 }
        ]
    },
    7: {
        "text": "Aaaah les joies du télétravail, loin des collègues et des codes imposés par la société patriarcale. Pas besoin de vous habiller, vous préférez plutôt:",
        "options": [
            { "label": "Porter un pilou-pilou ! Le pyjama intégral, tout doux", "nextId": 8 },
            { "label": "Ne rien porter, ça fait moins de lessive et entretient la frugalité", "nextId": 9 }
        ]
    },
    8: {
        "text": "Bien au chaud dans votre pilou-pilou, le pyjama tout doux, vous entamez la lecture de vos emails. Enfoncé dans votre siège de bureau dernier cri, vous êtes tellement à l'aise que la fatigue commence à se faire sentir.",
        "coinflip": [
            { "label": "Pile: Vous vous secouez, allez chercher un café bien serré et repartez au charbon", "nextId": "8_1" },
            { "label": "Face: Vous vous endormez, et êtes bien repartis pour une nouvelle nuit de sommeil", "nextId": "8_2" }
        ]
    },
    "8_1": {
        "text": "Vous vous secouez, allez chercher un café bien serré et repartez au charbon!",
        "options": [
            { "label": "C'est parti!", "nextId": 10 },
        ]
    },
    "8_2": {
        "text": "Vous vous endormez, et êtes bien repartis pour une nouvelle nuit de sommeil...",
        "options": [
            { "label": "Zzz...", "nextId": 11 }
        ]
    },
    9: {
        "text": "Oh, un appel surprise de votre N+2, vous répondez, malheureusement la caméra était ouverte...",
        "coinflip": [
            { "nextId": 38 },
            { "nextId": "E2" }
        ]
    },
    10: {
        "text": "Vous recevez une invitation Outlook pour une réunion à 12h30, que faites-vous ?",
        "options": [
            { "label": "Super, un workshop agile sur le define de la prochaine roadmap FY25. Vous avez hâte d’y être", "nextId": 12 },
            { "label": "Vous soufflez « Déjà que je travaille pas pendant mon temps de travail, c’est pas pour travailler sur le temps de midi », et vous refusez l’invitation", "nextId": 45 }
        ]
    },
    11: {
        "text": "Vous vous êtes complètement endormi devant votre laptop ! Vos collègues vont-ils s’en rendre compte?",
        "coinflip": [
            { "nextId": "11_1" },
            { "nextId": "11_2" }
        ]
    },
    "11_1": {
        "text": "Aucune chance, vous avez la technique du Youtube ouvert qui vous permet d’être affiché Disponible sur la messagerie instantanée.",
        "options": [
            { "label": "Quel boss !", "nextId": 45 },
        ]
    },
    "11_2": {
        "text": "Comme un noob, vous n’avez rien prévu et votre ordinateur s’est mis en veille au bout de 10 minutes. Vous vous réveillez 3 heures plus tard, en panique !",
        "options": [
            { "label": "Dévérouillez votre PC", "nextId": 14 },
        ]
    },
    12: {
        "text": "Chouette c’est l’heure de ce workshop tant attendu qui va révolutionner la politique produit de la boîte !",
        "coinflip": [
            { "nextId": 12_1 },
            { "nextId": 12_2 }
        ]
    },
    12_1: {
        "text": "La visio ne se lance pas : est-ce que c’est le wifi, le micro, ou la caméra ? Vous vous débattez pendant 50 minutes pour enfin entendre les participants se dire au revoir.",
        "options": [
            { "label": "Une bonne chose de faite !", "nextId": 45 }
        ]
    },
    12_2: {
        "text": "Vous revêtez fièrement votre casque, regardez la webcam avec assurance, et entrez dans une visioconférence de 30 personnes. Vous tentez un « Bonjour ! » chaleureux, à qui personne ne répond. Ah mince vous étiez en mute. Pas grave, c’est le langage corporel qui parlera pour vous.",
        "options": [
            { "label": "Une bonne chose de faite !", "nextId": 45 }
        ]
    },
    13: {
        "text": "Ça y est, c’est l’heure de manger, enfin ! Après une matinée bien remplie, vous vous permettez un petit break bien mérité.",
        "options": [
            { "label": "Vous vous joignez au groupe de personnes qui partent vers le restaurant", "nextId": 21 },
            { "label": "Vous mangez votre gamelle devant votre écran, c’est bien plus économique !", "nextId": 25 },
            { "label": "Vous partez faire un jogging, le sport c’est la santé !", "nextId": 5 }
        ]
    },
    14: {
        "text": "C’est la panique ! Votre N+1 et votre N+2 ont essayé de vous appeler 100 fois cette dernière demi-heure ! Vous prenez votre courage à deux mains et décidez :",
        "options": [
            { "label": "D’envoyer un message pour demander quelle urgence est à traiter, en vous excusant de vous être assoupi: votre intégrité ne vous sera pas reprochée !", "nextId": 33 },
            { "label": "De ne rien faire : « La patience est le secret du grand travail. » disait Sénèque.", "nextId": 45 }
        ]
    },
    15: {
        "text": "C’est parti pour le bureau ! Vous prenez votre moyen de transport le moins polluant à disposition et prenez la route. Quelle fierté de faire partie de cette France qui travaille et se lève pour aller relever l’économie ! Vous arrivez au bureau sans encombres.",
        "options": [
            { "label": "Entrez", "nextId": 16 },
        ]
    },
    16: {
        "text": "En entrant dans le bâtiment, vous vous trouvez devant ce dilemme cornélien habituel :",
        "options": [
            { "label": "Prendre l’ascenseur", "nextId": 161 },
            { "label": "Prendre les escaliers et transpirer un peu", "nextId": 162 }
        ]
    },
    161: {
        "text": "Vous prenez l’ascenseur, et alourdissez votre bilan carbone, qui de toute façon est déjà bien lourd depuis vos dernières vacances à l’autre bout du monde.",
        "coinflip": [
            { "label": "Pile ", "nextId": 17 },
            { "label": "Face ", "nextId": 18 }
        ]
    },
    162: {
        "text": "Vive les escaliers ! La planète et votre corps vous remercieront ! Pendant l’ascension, vous vous demandez quand-même si vivre plus longtemps n’est en fait pas plus nocif pour l’environnement. Mais avant de trouver la réponse vous arrivez enfin devant la porte de vos bureaux.",
        "options": [{ "label": "C’est parti !", "nextId": 17 }]
    },
    17: {
        "text": "Vous passez la porte et jetez un premier coup d’œil à l’open space : pas très rempli comme d’habitude, l’ambiance est un peu morose. Vous décidez alors de :",
        "options": [
            { "label": "Mettre un peu l’ambiance, pourquoi tirer la gueule après tout ? ", "nextId": 171 },
            { "label": "Ne pas faire de vagues.", "nextId": 172 }
        ]
    },
    171: {
        "text": "C’est bientôt le weekend ! Vous placez vos mains en porte-voix et adressez un chaleureux:",
        "options": [
            { "label": "« Kakou Kakou ! »", "nextId": "E4" },
        ]
    },
    172: {
        "text": "Vous allez vous asseoir silencieusement sur votre bureau temporaire. Le sérieux et le professionnalisme avant tout !",
        "options": [
            { "label": "Travailler", "nextId": 32 },
        ]
    },
    18: {
        "text": "Les portes de l’ascenseur se referment sur vous et les autres collègues. La cabine se met en mouvement doucement puis un bruit métallique se fait entendre, vous êtes dans le noir. C’est la troisième fois ce mois-ci que ça arrive et il fallait que ça tombe sur vous quelle malchance ! Vos collègues appuient sur le bouton d’urgence et vous décidez ensuite :",
        "options": [
            { "label": "De ne pas paniquer et attendre patiemment les secours.", "nextId": 19 },
            { "label": "De prendre les choses en main et de rassurer les collègues autour de vous!", "nextId": 20 }
        ]
    },
    19: {
        "text": "Quelle chance ! Après une heure passée à attendre, le mécanicien finit par vous faire sortir un par un.",
        "options": [
            { "label": "Plus de peur que de mal !", "nextId": 13 },
        ]
    },
    20: {
        "text": "Votre passé de scout vous rattrape et vous prenez les devants : pas question de se laisser dominer par la peur ! Vous commencez par réquisitionner la nourriture amenée par tout le monde, et établissez un rationnement pour que tout le monde mange à sa faim. Certains collègues ayant besoin de satisfaire des besoins naturels, vous désignez un coin de l’ascenseur pour cela, et l’utilisez en premier pour que personne ne se sente gêné. Le mécanicien finit par arriver au bout de 10 minutes, ouf !",
        "options": [
            { "label": "Plus de peur que de mal!", "nextId": 13 },
        ]
    },
    21: {
        "text": "15 minutes de marche plus tard, vous arrivez au restaurant où vous attendez à nouveau 30 minutes avant de commencer l’entrée. Une heure encore et quelques verres de vin plus tard, vient le moment de payer l’addition :",
        "options": [
            { "label": "Échauffé par le vin et la bonne compagnie, vous vous sentez d’humeur généreuse : c’est pour moi !", "nextId": 22 },
            { "label": "Vous vous souvenez de ce que vous avez commandé et avez déjà divisé le coût des bouteilles, vous proposez de partager", "nextId": 23 },
            { "label": "Votre spécialité c’est de vous faire oublier ! Vous vous rendez discrètement vers la sortie en feignant d’avoir payé, et laissez les autres s’en occuper ! Il n’y a pas de petites économies !", "nextId": 24 }
        ]
    },
    22: {
        "text": "Vous n’aviez pas fait attention, mais deux autres tablées dans le restaurant étaient occupées par vos collègues. L’addition est salée, mais vous vous efforcez de garder le sourire. Vos collègues sont remotivés par cet élan de générosité et vous devenez le favori du bureau ! C’est maintenant vous qui paierez toutes les additions à l’avenir !",
        "options": [
            { "label": "Bravo...", "nextId": "E5" }
        ]
    },
    23: {
        "text": "Un bon partage de note à l’ancienne, simple et efficace ! Vous vous dirigez vers la caisse avec vos collègues et fermez la file, évidemment vous vous retrouvez à payer 3 desserts et 1 café oublié par les autres mais votre karma gagnera des points !",
        "options": [
            { "label": "Bravo !", "nextId": 26 }
        ]
    },
    24: {
        "text": "En sortant discrètement du restaurant, vous vous retrouvez nez-à-nez avec votre N+3 ! Celui-ci a eu la même idée que vous et vous regarde avec un air surpris. Il se met alors à complimenter votre « esprit d’initiative », qui couplée à une manifeste capacité à « saisir les opportunités », vous positionne en choix numéro un pour replacer votre N+2. Vous repartez vers le bureau goguenards, comme des amis de longue date.",
        "options": [
            { "label": "Quelle audace !", "nextId": "E1" }
        ]
    },
    25: {
        "text": "Vos collègues ne semblent pas apprécier l’odeur de votre gamelle de soupe de poisson réchauffée au micro-onde, peu importe ! Vous vous remettez à votre place, et vous apprêtez à tremper vos croûtons dans la rouille, tout en :",
        "options": [
            { "label": "Suivant la rediffusion du all-hands de la Business Unit", "nextId": 29 },
            { "label": "Répondant à vos emails", "nextId": 29 },

        ]
    },
    26: {
        "text": "Retour au bureau ! Vous pouvez enfin reprendre cette après-midi productive, mais avant...",
        "options": [
            { "label": "Vous vous dirigez vers la machine à café.", "nextId": 27 },
            { "label": "Vous passez aux toilettes", "nextId": 28 },

        ]
    },
    27: {
        "text": "Ah rien de mieux qu’une petite pause à la machine ! Le café n’est peut-être pas le meilleur mais il vous garde éveillé et productif ! Après vous être servi(e) vous décidez de :",
        "options": [
            { "label": "Retourner travailler directement avec votre mug, pas de temps à perdre ", "nextId": 31 },
            { "label": "Rester un peu et faire une page de mots fléchés", "nextId": 30 },

        ]
    },
    28: {
        "text": "En arrivant aux toilettes, vous vous retrouvez face à deux portes. Vous choisissez :",
        "options": [
            { "label": "La porte de droite", "nextId": 281 },
            { "label": "La porte de gauche", "nextId": 282 },

        ]
    },
    281: {
        "text": "Vous ouvrez la porte et surprise : vous vous retrouvez face à votre N+2, et vous regarde avec surprise, un dossier à la main. \"Euh... bonjour,\" bafouille-t-il, visiblement embarrassé par la situation inattendue. Vous sentez une bouffée de gêne vous envahir alors que vous essayez de trouver quoi dire. Après un moment de silence tendu, il vous adresse un sourire crispé et vous demande d'un ton peu convaincant : \"Eh bien, puisque nous sommes ici, pourquoi ne pas discuter de ce rapport que vous devez me remettre aujourd'hui?\" Vous réalisez que cette rencontre fortuite pourrait bien déterminer l'avenir de votre carrière…",
        "options": [
            { "label": "Votre avenir professionnel", "nextId": "E1" },
        ]
    },
    282: {
        "text": "RAS, à part une trace suspecte au fond de la porcelaine, tout se passe bien et vous retournez vite vous asseoir à votre bureau, en vous demandant si le règlement intérieur ne devrait pas sanctionner ce ce genre de comportements…",
        "options": [
            { "label": "Un petit coup de brossette et vous avez bien mérité une petite pause", "nextId": 30 },
        ]
    },
    29: {
        "text": "Patatras ! Entre deux emails à votre supérieur, vous tapez votre bol de soupe encore fumante qui se déverse sur votre laptop… Une étincelle sort du ventilateur, un arc électrique traverse l’air, et et avant même de pouvoir réagir, vous sentez une douleur fulgurante vous parcourir le corps. Les muscles se contractent violemment, vous êtes figé, incapable de bouger. Le monde autour de vous semble devenir flou alors que la décharge électrique continue de vous traverser. Votre esprit vacille entre la réalité et un vide étrange.",
        "options": [
            { "label": "Tout devient noir", "nextId": "E3" }
        ]
    },
    30: {
        "text": "Dans la salle de pause déserte, les mots fléchés du jour ne sont qu’à moitié faits et une chocolatine de la veille est encore dans son emballage : quelle chance ! Alors que vous vous délectez de ce larcin, un collègue s’approche à grands pas, l’air souriant. Souhaitez-vous lui parler ?",
        "options": [
            { "label": "Oui", "nextId": 301 },
            { "label": "Non", "nextId": 302 }
        ]
    },
    301: {
        "text": "Vous le saluez, cela fait longtemps que vous ne l’aviez pas vu ! Une poignée de mains ferme et professionnelle s’ensuit",
        "options": [
            { "label": "Tunnel en approche", "nextId": 35 }
        ]
    },
    302: {
        "text": "Vous avez la technique pour ce genre de situation : vous dégainez votre téléphone et marchez d’un pas rapide et assuré, tête baissée.",
        "options": [
            { "label": "Tunnel évité!", "nextId": 36 }
        ]
    },
    31: {
        "text": "Trois formules excel plus tard, vous finissez enfin ce rapport sur l’orga des tickets Jira. Fier de votre travail, vous rédigez un mail au petit oignon pour votre N+1, avec en PJ le rapport terminé. ",
        "options": [
            { "label": "Vous avez tellement hâte d'avoir les retours de votre chef, que vous envoyez l'email instantanément.", "nextId": 37 },
            { "label": "Vous prenez une petite pause bien méritée", "nextId": 51 }
        ]
    },
    32: {
        "text": "Vous êtes plongé dans votre travail, les yeux fixés sur l'écran. Rien ne peut vous déconcentrer, vous imaginez déjà les compliments que votre supérieur va vous faire au prochain 1-to-1 ! Soudain, une voix familière vous ramène à la réalité: \"Hey xxx, pause café ?\" Votre collègue, sourire aux lèvres, se tient derrière votre bureau, une tasse à la main. Vous hésitez un instant car vous étiez à deux doigts de finir votre tâche… Finalement vous :",
        "options": [
            { "label": "Acceptez la proposition", "nextId": 321 },
            { "label": "Refusez poliment", "nextId": 322 }
        ]
    },
    321: {
        "text": "Vous rejoignez pour une pause bien méritée. Après tout, quelques minutes de jeux vidéos/dés/mots fléchés pourraient même vous rendre plus productif par la suite !",
        "options": [
            { "label": "Cucurbitacé en 5 lettres ?", "nextId": 52 }
        ]
    },
    322: {
        "text": "Vous expliquez que vous êtes sur le point de terminer une tâche importante pour l’entreprise et ses actionnaires, et n'avez donc pas le temps pour un moment récréatif.",
        "options": [
            { "label": "Casque sur les oreilles.", "nextId": 31 }
        ]
    },
    33: {
        "text": "Comment avez-vous pu oublier ça ? C’est aujourd’hui la présentation des objectifs Q1 de la fiscal year devant la hiérarchie, tout le monde vous attend au bureau depuis 15mn, vous décidez de :",
        "options": [
            { "label": "Speeder jusqu'au bureau", "nextId": 331 },
            { "label": "Rester à la maison", "nextId": 332 }
        ]
    },
    331: {
        "text": "D’envoyer un petit « Sorry I’m late » à vos supérieurs, et foncer vers le bureau, ce qui devrait affirmer votre image de busy winner auprès de vos collègues",
        "options": [
            { "label": "En sueur mais en présentiel", "nextId": 34 }
        ]
    },
    332: {
        "text": "Vous faites la présentation à distance en prétextant une suspicion de COVID",
        "options": [
            { "label": "Kof kof, snif snif", "nextId": 12 }
        ]
    },
    34: {
        "text": "Après avoir grillé trois feux rouges, et avoir garé la voiture en double file, vous voici enfin arrivé devant les bureaux : votre N+1 vous appelle alors pour vous féliciter de la présentation que vous avez réalisé tout en s’excusant de n’avoir pas pu se libérer pour y assister. Vous écrivez un compte rendu et l’envoyez à votre hiérarchie en célébrant les achievements de la dernière fiscal year",
        "options": [
            { "label": "Une bonne chose de faite", "nextId": 13 }
        ]
    },
    35: {
        "text": "Tu tombes bien xxx, je voulais te parler de quelque chose ! Je t'avais déjà dit que je faisais du boomerang ? Tu vas me dire \"Mais qui s'intéresse au boomerang en 2024 ?\", eh bien moi, mon ami, et tu vas comprendre pourquoi c'est extraordinaire. Déjà, tout le monde croit que c’est juste un bout de bois qui revient quand tu le lances, mais c’est tellement plus que ça ! T’as plusieurs types de boomerangs : les boomerangs de retour classique, ceux de chasse (oui, à l’origine, on les utilisait pour chasser !).",
        "options": [
            { "label": "Dis-m'en plus!", "nextId": 41 },
            { "label": "Ah oui super, euh il faut que j'y aille !", "nextId": 41 }
        ]
    },
    36: {
        "text": " Tunnel évité ! Vous auriez pu passer 30 minutes à écouter votre collègue baratiner des dingueries, mais vous y avez échappé. Vous regardez votre montre, 16h30.",
        "options": [
            { "label": "Oh, c'est l'heure de l'apéro!", "nextId": 361 },
            { "label": "Pas de repos pour les guerriers", "nextId": 362 }
        ]
    },
    361: {
        "text": "Vous motivez quelques collègues et finissez votre journée de travail en partageant quelques pintes avec eux.",
        "options": [
            { "label": "Tchin tchin!", "nextId": "E6" }
        ]
    },
    362: {
        "text": "Vous devez absolument préparer la réunion synchro des OKR FY26 avant demain. Ce n’est pas encore ce soir que vous pourrez lire l’histoire du soir à votre fille...",
        "options": [
            { "label": "Au boulot!!", "nextId": 40 }
        ]
    },
    37: {
        "text": "A peine après avoir cliqué sur le bouton que vous vous rendez compte de votre erreur : La pièce jointe que vous avez sélectionné est un de vos nudes, la tuile. Quelques secondes plus tard, vous recevez un appel de votre N+1.",
        "coinflip": [
            { "label": "Pile: Chanceux!", "nextId": 38 },
            { "label": "Face: Aïe, ça va chauffer", "nextId": 39 }
        ]
    },
    38: {
        "text": "Waouh! xxx ! Quel corps! Quelle machine de guerre ! Tu as le plus beau corps que je n'ai jamais vu. Bravo. Tu transmettras mes félicitations à ta daronne. Je ne vois pas comment je pourrais être le chef d'une telle force de la nature. Prends ma place, je t'en supplie.",
        "options": [
            { "label": "Bien joué beau goss", "nextId": "E1" }
        ]
    },
    39: {
        "text": "Mais qu’est ce que c’est que cette PJ, xxx ? Vous vous foutez de la gueule du monde ? Je vous paye pour que vous vous fassiez bronzer la raie au cap d’agde ? Dégagez, je veux plus vous voir",
        "options": [
            { "label": "Faire vos adieux", "nextId": "E2" }
        ]
    },
    40: {
        "text": "Vous levez enfin la tête de votre ordinateur. Vous jetez un œil à l’horloge. 18H00. Quelle journée harassante. Vous vous étirez, et sentez que vous avez mal partout. La fenêtre ouverte laisse parvenir jusqu’à vous un faible courant d’air. Vous réalisez à quel point vous êtes fatigué de cette routine quotidienne. Et pour quel but ? Votre maigre salaire de 87k€ ? Vous vous levez.",
        "options": [
            { "label": "Vous diriger vers la fenêtre", "nextId": "44" }
        ]
    },
    41: {
        "text": "Et tu sais ce qu’il y a de fascinant ? C’est toute la physique derrière le lancer. T’imagines pas à quel point ça demande une maîtrise du vent, de l’angle, de la force. Un boomerang bien lancé peut revenir pile dans ta main, mais attention, si tu fais ne serait-ce qu’une petite erreur d’inclinaison… pouf, il finit à trois kilomètres dans les buissons ! Et puis y’a les compétitions de boomerang, tu savais qu’il y en avait ? Il y a des disciplines folles comme la vitesse, l’endurance et même la précision où tu dois attraper ton boomerang plusieurs fois en un temps record. Et le lancer artistique, t’as déjà vu ça ? Des figures complexes, des pirouettes… On est presque dans le cirque, mais avec un bout de bois !",
        "options": [
            { "label": "Je...", "nextId": 42 },
        ]
    },
    42: {
        "text": "Je suis même en train de m’entraîner pour maîtriser le \"trick catch\", c’est-à-dire attraper le boomerang en faisant des figures acrobatiques. Le top du top, c’est d’arriver à le rattraper en passant les bras derrière le dos. Je te dis pas le niveau de concentration que ça demande. Je me suis déjà fait mal plusieurs fois, mais quand tu réussis, c’est la gloire. Ah, le moment où il revient doucement dans ta paume, c’est… indescriptible.",
        "options": [
            { "label": "Votre téléphone sonne, vous répondez.", "nextId": 43 }
        ]
    },
    43: {
        "text": "C'était un appel pour utiliser votre compte CPF, mais au moins vous avez pu échapper à l'histoire du boomerang à travers les âges...! Vous regardez votre montre, 16h30.",
        "options": [
            { "label": "Oh, c'est l'heure de l'apéro!", "nextId": 361 },
            { "label": "Pas de repos pour les guerriers", "nextId": 362 }
        ]
    },
    44: {
        "text": "Vous regardez en bas. Avant de vous jeter dans le vide, votre dernière pensée est pour votre N+1 : Vous avez oublié de mettre la PJ dans votre précédent mail, c’est la troisième fois cette semaine.",
        "options": [
            { "label": "C'est trop tard", "nextId": "E3" }
        ]
    },
    // Manger en TT
    45: {
        "text": "Ça y est, c’est l’heure de manger, enfin ! Après une matinée bien remplie, vous vous permettez un petit break bien mérité.",
        "options": [
            { "label": "Vous mangez devant votre série préférée", "nextId": 46 },
            { "label": "Un petit Huel® et c'est parti pour le bureau!", "nextId": 26 },
        ]
    },
    46: {
        "text": "Quel banger cette série ! Les cliffhangers, la violence, le s*xe, les retournements de situation, et l'autoplay de Netflix vous volent encore une fois votre temps de cerveau disponible.",
        "options": [
            { "label": "Allez encore un épisode !", "nextId": 47 },
        ]
    },
    47: {
        "text": "Quoi? C'était en fait sa soeur? Mais noooon !",
        "options": [
            { "label": "Allez encore un épisode !", "nextId": 48 },
        ]
    },
    48: {
        "text": "Mais attends c'est qui lui déjà c'est le père ou le frère je ne sais plus!",
        "options": [
            { "label": "Allez encore un épisode !", "nextId": 49 },
        ]
    },
    49: {
        "text": "Il était pas mort lui ? Ah non c'était dans le futur.",
        "options": [
            { "label": "Allez encore un épisode !", "nextId": 50 },
        ]
    },
    50: {
        "text": "Le dernier épisode était vraiment à chier... Ah déjà 17h ? Super !",
        "options": [
            { "label": "Bravo pour cette journée de travail", "nextId": "E6" },
        ]
    },
    51: {
        "text": "Rien de mieux qu'une petite pause pour se remettre les idées aux claires. Vous papotez autour d'un café (ou est-ce du goudron ?) fumant, à propos des derniers potins du bureau.",
        "options": [
            { "label": "\"Une capote dans les toilettes de gauche ? T'es sûr ?\"", "nextId": 52 },
        ]
    },
    52: {
        "text": "Alors que vous êtes en train de vous dire que ce serait vraiment bien d'avoir un \"Journal du bureau\", un collègue s’approche à grands pas, l’air souriant. Souhaitez-vous lui parler ?",
        "options": [
            { "label": "Oui", "nextId": 53 },
            { "label": "Non", "nextId": 54 },
        ]
    },
    53: {
        "text": "Vous lui adressez un petit sourire qu'il prend comme un signe d'encouragement. Il commence: \"Tu ne vas pas le croire, mais j'ai craqué pour un poulailler connecté récemment, et c’est clairement l’une des meilleures décisions que j’ai prises ! Je pensais que ça allait être juste un petit gadget sympa, mais en fait, ça change complètement la donne.\"",
        "options": [
            { "label": "\"Oh tu sais moi les animaux... Je vais peut être y all...", "nextId": 56 },
            { "label": "J'adore ce que tu me racontes", "nextId": 56 }
        ]
    },
    54: {
        "text": "KOFF KOFF COFFE. Je suis désolé.e, je suis malade, il vaut mieux que je te contamine pas, à plus !",
        "options": [
            { "label": "Vous vous esquivez en toussant de plus belle", "nextId": 55 }
        ]
    },
    55: {
        "text": " Tunnel évité ! Vous auriez pu passer 45 minutes à écouter votre collègue baratiner des inepties, mais vous y avez échappé. Vous regardez votre montre, 12h00.",
        "options": [
            { "label": "Oh, c'est l'heure de manger", "nextId": 13 }
        ]
    },
    56: {
        "text": "Déjà, tout est automatisé ! La porte du poulailler s’ouvre et se ferme toute seule en fonction de la lumière du jour, donc plus besoin de se lever à l'aube pour libérer les poules ou de s'inquiéter de devoir rentrer tôt pour les sécuriser le soir. Ça, c'est un vrai soulagement. Et le top, c'est que je peux tout contrôler depuis mon téléphone. Je reçois des alertes si quelque chose ne va pas, par exemple si la porte ne se ferme pas correctement ou si la température à l’intérieur est trop basse.",
        "options": [
            { "label": "Chercher du regard un autre collègue pour vous sortir de là", "nextId": 57 },
            { "label": "Hocher la tête, passionné", "nextId": 57 },
        ]
    },
    57: {
        "text": "Il y a aussi des capteurs pour surveiller l'humidité, la température et même les mouvements, histoire de s'assurer qu'elles sont toujours dans un environnement optimal. Si jamais une poule s’échappe ou qu’un prédateur rôde, hop, je suis prévenu direct. Et tu sais quoi ? J'ai même des statistiques sur la ponte. Le système détecte quand une poule pond un œuf et me donne un suivi précis. Ça permet de savoir si tout va bien niveau production, et surtout de vérifier qu'aucune des poules ne montre des signes de maladie ou de stress.",
        "options": [
            { "label": "Ah ouais j'adore les statistiques !", "nextId": 58 },
        ]
    },
    58: {
        "text": "Franchement, ça me simplifie la vie. Plus besoin de courir après les tâches quotidiennes, et j'ai une tranquillité d’esprit totale. C'est vraiment le futur du petit élevage, je te le dis. Si tu as des poules ou si tu penses en avoir, le poulailler connecté, c’est juste incontournable !",
        "options": [
            { "label": "C'est top, mais il faut vraiment que j'y aille", "nextId": 59 },
            { "label": "Oulah, j'entends mon DX qui sonne, ça doit être urgent", "nextId": 59 }
        ]
    },
    59: {
        "text": "Vous arrivez enfin de vous éclipser de la salle de pause. Vous regardez votre montre, midi !",
        "options": [
            { "label": "A table!", "nextId": 13 }
        ]
    },
    "E1": {
        "text": "Vous devenez N+2 à la place du N+2 et passez le reste de votre vie à siroter des Spritz rue de la Paix.",
        "options": [],
        "emoji": "💸"
    },
    "E2": {
        "text": "Vous êtes viré, et touchez le chômage pendant les deux prochaines années. Un rêve devenu réalité, bravo !",
        "options": [],
        "emoji": "🍑"
    },
    "E3": {
        "text": "Vous êtes mort, c’est pas grave c’est pas pour de vrai.",
        "options": [],
        "emoji": "☠️"
    },
    "E4": {
        "text": "Zut, la totalité de vos collègues étaient en train de passer des appels importants, et votre intervention a été la goutte d’eau qui a fait déborder le vase : l’entreprise perd instantanément ses plus gros clients et ses meilleurs fournisseurs, et se retrouve sur la paille. Vous voici en procédure de licenciement économique, félicitations !",
        "options": [],
        "emoji": "📉"
    },
    "E5": {
        "text": "Déjà que financièrement ça n’allait pas fort, vos dépenses déraisonnées vous mettent vraiment au fond du trou ! Vous croulez sous les dettes et finissez seul(e) et à la rue. Le bon côté des choses c’est que vous êtes maintenant locataire d’une tente Quechua à deux pas du bureau, le commute est beaucoup plus simple !",
        "options": [],
        "emoji": "⛺"
    },
    "E6": {
        "text": "Bravo !!! Par votre professionnalisme et votre talent naturel, vous avez su briller auprès de vos pairs ! Vous êtes sans aucun doute sur la voie pour une belle et longue carrière ! Dans quelques année, celle-ci sera sûrement récompensée par une prime, et dans 20 ans par une médaille du travail que vous afficherez fièrement sur votre tombe. Bien joué !",
        "options": [],
        "emoji": "🤘"
    }
};


export default storyData;
