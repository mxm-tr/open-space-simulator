const storyData = {
    1: {
        "text": "Le réveil sonne, il est l'heure de se lever ! Vous regardez le cadran, il est:",
        "options": [
            { "label": "Entre 5h et 7h", "nextId": 2 },
            { "label": "Entre 7h et 8h", "nextId": 3 },
            { "label": "Entre 8h et 10h", "nextId": 4 }
        ]
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
        "text": "La journée commence bien: vous ouvrez les volets et entendez les oiseaux chanter, une légère brise vous rafraîchit les joues et un rayon de soleil vous éblouit. Direction la cuisine: vous préparez",
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
        "nextId": "E3"
    },
    6: {
        "text": "Ooopsie vous avez raté le réveil ! Les enfants sont levés depuis une heure et sont en pyjama devant les dessins animés, pas question d'aller au travail aujourd'hui. Vous les lancez à l'école en pyjama puis revenez pour commencer votre journée de télétravail.",
        "nextId": 7
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
            { "label": "Pile: Vous vous secouez, allez chercher un café bien serré et repartez au charbon", "nextId": 10 },
            { "label": "Face: Vous vous endormez, et êtes bien repartis pour une nouvelle nuit de sommeil", "nextId": 11 }
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
        "text": "Tu reçois une invitation Outlook pour une réunion à 12h30, que fais-tu ?",
        "options": [
            { "label": "Super, un workshop agile sur le define de la prochaine roadmap FY25. Tu as hâte d’y être", "nextId": 12 },
            { "label": "Tu souffles « Déjà que je travaille pas pendant mon temps de travail, c’est pas pour travailler sur le temps de midi », et tu refuses l’invitation", "nextId": 13 }
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
            { "label": "Quel boss !", "nextId": 13 },
        ]
    },
    "11_2": {
        "text": "Comme un noob, vous n’avez rien prévu et votre ordinateur s’est mis en veille au bout de 10 minutes. Vous vous réveillez 3 heures plus tard, en panique, déverrouillez l’appareil et avez 5 appels manqués de votre supérieur.",
        "options": [
            { "label": "Oops !", "nextId": 13 },
        ]
    },
    12: {
        "text": "Chouette c’est l’heure de ce workshop tant attendu qui va révolutionner la politique produit de la boîte ! Lancez une pièce:",
        "coinflip": [
            { "label": "Pile: la visio ne se lance pas : est-ce que c’est le wifi, le micro, ou la caméra ? Vous vous débattez pendant 50 minutes pour enfin entendre les participants se dire au revoir.", "nextId": 13 },
            { "label": "Face: vous revêtez fièrement votre casque, regardez la webcam avec assurance, et entrez dans une visioconférence de 30 personnes. Vous tentez un « Bonjour ! » chaleureux, à qui personne ne répond. Ah mince vous étiez en mute. Pas grave, c’est le langage corporel qui parlera pour vous.", "nextId": 19 }
        ]
    },
    13: {
        "text": "Ça y est, c’est l’heure de manger, enfin ! Après une matinée bien remplie, vous vous permettez un petit break bien mérité.",
        "options": [
            { "label": "Si vous êtes en télétravail : vous mangez chez vous devant votre série préférée, puis vous accordez une petite sieste…", "nextId": 11 },
            { "label": "Si vous êtes au bureau : Vous vous joignez au groupe de personnes qui partent vers le restaurant", "nextId": 21 },
            { "label": "Si vous êtes au bureau : Vous mangez votre gamelle devant votre écran, c’est bien plus économique !", "nextId": 25 },
            { "label": "Si vous êtes au bureau : Vous partez faire un jogging, le sport c’est la santé !", "nextId": 5 }
        ]
    },
    14: {
        "text": "C’est la panique ! Votre N+1 et votre N+2 ont essayé de vous appeler 100 fois cette dernière demi-heure ! Vous prenez votre courage à deux mains et décidez :",
        "options": [
            { "label": "D’envoyer un message pour demander quelle urgence est à traiter, en vous excusant de vous être assoupi: votre intégrité ne vous sera pas reprochée !", "nextId": 33 },
            { "label": "De ne rien faire : « La patience est le secret du grand travail. » disait Sénèque.", "nextId": 13 }
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
        "text": "Vous prenez l'ascenceur, et alourdissez votre bilan carbone, qui de toute façon est déjà bien lourd depuis vos dernières vacances à l’autre bout du monde.",
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
            { "label": " Échauffé par le vin et la bonne compagnie, vous vous sentez d’humeur généreuse : c’est pour moi !", "nextId": 22 },
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
            { "label": "Quelle audace !", "nextId": "E4" }
        ]
    },
    25: {
        "text": "Vos collègues ne semblent pas apprécier l’odeur de votre gamelle de soupe de poisson réchauffée au micro-onde, peu importe ! Vous vous remettez à votre place, et vous apprêtez à tremper vos croûtons dans la rouille, tout en :",
        "options": [
            { "label": "Suivant la rediffusion du all-hands de la Business Unit", "nextId": 29 },
            { "label": "Répondant à vos emails", "nextId": 29 },

        ]
    }
};


export default storyData;
