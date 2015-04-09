var myApp = angular.module('myApp', ['ngRoute','ui.bootstrap']);

myApp.controller('SharedDataController', function ($scope,$location) {
    $scope.shareddata = {};
    $scope.shareddata.menus = [
        {
            "id"    :   "1",
            "title" :   "Accueil",
            "link"  :   "home"
        },
        {
            "id"    :   "2",
            "title" :   "Definitions",
            "link"  :   "definitions/mydef"
        },
        {
            "id"    :   "3",
            "title" :   "MPoS",
            "link"  :   "MPOS"
        },
        {
            "id"    :   "4",
            "title" :   "Dongles",
            "link"  :   "Dongle/HwTarget"
        },
        {
            "id"    :   "5",
            "title" :   "Developpement",
            "link"  :   "Devel/OsTarget"
        }
         ];
    $scope.shareddata.imgs = [
        {
            "name" :   "MMS",
            "path" :   "./img/service-icon/man337.png"
        },
        {
            "name" :   "MPOS",
            "path" :   "./img/service-icon/hand103.png"
        },
        {
            "name" :   "Terminal",
            "path" :   "./img/service-icon/terminal8.png"
        },
        {
            "name" :   "BO (BackOffice)",
            "path" :   "./img/service-icon/servers1.png"
        },
        {
            "name" :   "Retail",
            "path" :   "./img/service-icon/shopping159.png"
        },
        {
            "name" :   "eCommmerce",
            "path" :   "./img/service-icon/businessman120.png"
        },
        {
            "name" :   "CP",
            "path" :   "./img/service-icon/credit31.png"
        }
    ];
    $scope.shareddata.imgs.icon ="./img/ico/VerifoneMPOS.ico" ;
    $scope.shareddata.imgs.logo = "./img/header_logo.png" ;
    $scope.shareddata.imgs.footer = "./img/homepage-slider/slide_ArchiMPOS.png" ;
    $scope.shareddata.imgs.Slides = [];
    var idxImg=1;
    var oNewSlide={}; oNewSlide.idx = idxImg++;
    oNewSlide.img =  "./img/homepage-slider/slide_ArchiMPOS.png";
    oNewSlide.title = "slide 1";
    oNewSlide.content = "DermaLASER propose differents services de traitement LASER \
		( Epilation définitive,	Taches pigmentaires, Photo rajeunissement...) ainsi que d'injections.";
    oNewSlide.bg_class = "bg1";
    $scope.shareddata.imgs.Slides.push(oNewSlide);
    delete oNewSlide;
    var oNewSlide={}; oNewSlide.idx = idxImg++;
    oNewSlide.img = "./img/homepage-slider/slide_TAPS_SAPS_MPOS.png";
    oNewSlide.title = "Slide2";
    oNewSlide.content = "Tous les soins sont pratiqués à l'aide d'une machine de dernière génération(Classe 4) \
							permettant de traiter tous les types de peau (y compris bronzées, métisses ou noires)\
							offrant	une efficacité maximale en réduisant le nombre\
							totale de séances (5 à 7 aujourd’hui pour 10 à 12 avec des machines plus anciennes).";
    oNewSlide.bg_class = "bg2";
    $scope.shareddata.imgs.Slides.push(oNewSlide); oNewSlide.idx = idxImg++;
    delete oNewSlide;
    var oNewSlide={}; oNewSlide.idx = idxImg++;
    oNewSlide.img = "./img/terminaux/magic_x_series_1_225x225.png";
    oNewSlide.title = "Slide 3";
    oNewSlide.content = "Tous les produits utilisés sont des produits de très haute performance, offrant une sécurité\
							absolue et une parfaite stabilité dans le temps, et ce par un praticien expérimenté.";
    oNewSlide.bg_class = "bg3";
    $scope.shareddata.imgs.Slides.push(oNewSlide);
    delete oNewSlide;
        /*
    $scope.shareddata.slides = [
        {
            "img": "./img/homepage-slider/slide_ArchiMPOS.png",
            "title": "slide 1"
        },
        {
            "img": "./img/homepage-slider/slide_TAPS_SAPS_MPOS.png",
            "title": "slide 2"
        },
        {
            "img": "./img/terminaux/magic_x_series_1_225x225.png",
            "title": "slide 3"
        }
    ]*/

});

myApp.controller('DefinitionsCtrl', function ($scope,$sce,$routeParams) {
    $scope.name = "DefinitionsCtrl";
    $scope.params = $routeParams;

    $scope.renderHtml = function(html_code)
    {
        return $sce.trustAsHtml(html_code);
    };

    $scope.tags =
        [
            "--choisir ci dessous--",
            "Architecture",
            "Chiffrement",
            "EMV",
            "TPE",
            "Monétique",
            "MPOS",
            "General",
            "Standard",
            "Sécurité"
        ];

    $scope.oneAtATime = true;

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };

    $scope.myInterval = 2000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: 'http://placekitten.com/' + newWidth + '/300',
            text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
            ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i=0; i<4; i++) {
        $scope.addSlide();
    }

    $scope.users = {};
    $scope.users = [{
        "name": "GDU",
        "avatarFileName": "./img/users/GDU.jpg"
    },
        {
            "name": "RDE",
            "avatarFileName": "./img/users/RDE.jpg"
        },
        {
            "name": "TOTO",
            "avatarFileName": "./img/users/TOTO.jpg"
        }
    ];

    $scope.showCreatedBy = function (def) {
        return def.hasOwnProperty('createdBy')
    };
    $scope.showContent = function (def) {
        return def.hasOwnProperty('content')
    };
    $scope.showLinks = function (def) {
        return def.hasOwnProperty('links')
    };
    $scope.showImgs = function (def) {
        return def.hasOwnProperty('imgs')
    };
    $scope.showMeaning = function (def) {
        return def.hasOwnProperty('meaning')
    };
    $scope.showTags = function (def) {
        return def.hasOwnProperty('tags')
    };

    $scope.title =  "DEFINITIONS & ACRONYMES - Paiement Mobile";

    $scope.data = {};
    $scope.data.definitions = [
        {
            "open": false,
            "tags":["MPOS","EMV"],
            "title": "AID",
            "meaning": "Application IDentifier  (cf EMV)",
            "content":
                "<p>Le champ <i>application identifier</i> (AID) est utilisé pour identifier l'application présente \
                dans la carte. Les 5 premiers octets de ce champ permettent d'identifier l'émetteur (RID&nbsp;: \
                <i>registered application provider identifier</i>) tel que défini par la norme ISO/IEC 7816-5. \
                Il est suivi par le champ PIX (<i>proprietary application identifier extension</i>) qui permet \
                d'identifier l'application propre à l'émetteur (Visa debit, visa electron de chez Visa par exemple).\
                L'AID figure sur l'ensemble des reçus de carte de paiement EMV.</p>"
            ,
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "links": ["http://fr.wikipedia.org/wiki/Europay_Mastercard_Visa#S.C3.A9lection_de_l.27Application_EMV"]
        },
        {
            "tags":["MPOS"],
            "title": "AL",
            "meaning": "Abstract Layer",
            "content":
                "Designe l'interface/couche abstraite pour communiquer avec un Dongle X.<br>\
                C'est le module d’interfaçage avec le dongle qui s'appuie sur la librairie du constructeur (si elle existe).<br>\
                Le but à terme est de disposer d’une solution générique qui permette d’utiliser le téléphone mobile comme un TPE \
                le couple téléphone & dongle fait office de TPE virtuel auprès du serveur).\
                C'est dans cette optique qu’une couche abstraite a été développée, afin de s’interfacer avec un dongle de tout type ; de la même façon,\
                la déclinaison de la librairie sous plusieurs systèmes d’exploitation permet de toucher divers marchés. Le téléphone\
                étant un élément non sécurisé, il ne contiendra aucune donnée sensible."
            ,
            "createdBy":$scope.users[Math.floor((Math.random() * 3)+ 0)],
            "imgs": ["./img/metier/ArchiMPOS.png","./img/metier/ArchiMPOS.png","./img/metier/TAPS-SAPS_MPOS.png"]

        },
        {
            "tags":["MPOS"],
            "title": "BusAPP",
            "meaning": "Business Application",
            "content":
                "Business Application est la couche point d'entréé accessible aux Banques pour elles developper leur applications propres.\
                    Ce sont les applications du marchand ou d’un partenaire...\
                    <br> cf systeme de script?</p>"
            ,
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "imgs": ["./img/metier/ArchiMPOS.png","./img/metier/TAPS-SAPS_MPOS.png"]
        },
        {
            "tags":["MPOS"],
            "title": "Dongle",
            "content":
                "Le dongle désigne le matériel dédié aux fonctions de paiement sécurisé. Il communique en Bluetooth, avec le Smartphone\
                    sur lequel est installé TAPS Mobile, via la couche AL (Abstract Layer)\
                    C'est le Pinpad  (PED) physique connecté au téléphone"
            ,
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "imgs": ["./img/metier/ArchiMPOS.png"]
        },
        {
            "tags":["MPOS"],
            "title": "SAPS",
            "meaning": "Server Application for Payment & Services",
            "content":
                "<div class=''>Désigne le Serveur dédié à l’intelligence monétique.\
                Il a la charge de la construction de beaucoup de messages dédiés à TAPS et fait la passerelle avec le Back-Office bancaire.</div>"
            ,
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "imgs": ["./img/metier/TAPS-SAPS_MPOS.png"]
        },
        {
            "tags":["MPOS"],
            "title": "PIM",
            "meaning": "Paybox Interface Mobile",
            "content":
                "<div class=''>\
                Cela désigne la librairie livrable au client (commerçant) empaquetant les fonctions monétiques et d’interfaçage avec le dongle :\
                <em>payer</em>, <em>télé-paramétrer</em> le dongle et le <em>mettre à jour</em> sont les 3 fonctions accessibles depuis la Business App.\
                Par extension, PIM désigne également le « message dispatcher » : il s’agit d’un aiguilleur de messages qui va avoir pour rôle de \
                transmettre les messages d’une entité vers une autre.\
                Il s agit de la couche logicielle communicant avec les couches AL, TAPS Mobile et GUI (IHM) </div>"
            ,
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "imgs": ["./img/metier/ArchiMPOS.png"]
        },
        {
            "tags" :["TPE","Monétique"],
            "title": "TLP",
            "meaning": "TéLéParamérage",
            "content":
                "<div class=''>\
                Le téléparamétrage d'un TPE désigne l'operation de premiere connexion à l'issue de laquelle le Terminal de \
                paiement recoit sa configuration depuis le serveur BackOffice.\
                Ce téléparamétrage se fait par le bias d un fichier\
                </div>"
            ,
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)]
        },
        {
            "tags" :["Chiffrement","Sécurité"],
            "title": "HSM",
            "meaning": "Hardware Security Module",
            "content":
                "<div class=''>\
                Un module matériel de sécurité est un processeur de chiffrement dédié, spécialement conçu pour protéger le cycle de vie des clés de chiffrement. Les modules matériels de sécurité sont les bases de confiance qui sécurisent l'infrastructure de chiffrement de certaines organisations les plus sécurisées en protégeant la gestion, le traitement et le stockage des clés de chiffrement, dans un dispositif anti-intrusion renforcé. - See more at: http://www.safenet-inc.fr/data-encryption/hardware-security-modules-hsms/#sthash.UYLsUHcv.dpuf<br>\
                Il met en oeuvre des algoritmes de chiffrement type AES,RSA...\
                <tr >\
                      <td>\
                        <p>\
                          <strong>Chiffrement </strong>\
                        </p>                  \
                      </td>\
                      <td>\
                        <ul>\
                          <li>Compatibilité totale avec Suite B</li>\
                          <li>Asymétrique&nbsp;: RSA (1024-8192), DSA (1024-3072), Diffie-Hellman, KCDSA, Elliptic Curve Cryptography (ECDSA, ECDH, ECIES) avec courbes nommées, définies par l'utilisateur et Brainpool</li>\
                          <li>Symétrique&nbsp;: AES, RC2, RC4, RC5, CAST, DES, Triple DES, ARIA, SEED</li>\
                          <li>Hash/Message Digest/HMAC&nbsp;: SHA-1, SHA-2 (224-512), SSL3-MD5-MAC, SSL3-SHA-1-MAC</li>\
                          <li>Génération de nombre aléatoire&nbsp;: DRBG certifié FIPS 140-2 (mode SP 800-90 CTR)</li>\
                        </ul>\
                      </td>\
                    </tr>\
                \
                </div>"
            ,
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "links":["http://fr.wikipedia.org/wiki/Hardware_Security_Module"]
        },
        {
            "tags" :["TPE","Sécurité"],
            "title": "P2PE",
            "meaning": "Point 2 Point Encryption",
            "content":
                "<div class=''>\
                Qu’est ce qu’une solution de chiffrement bout en bout P2PE (Point-to-Point Encryption) ?\
                Une solution de chiffrement bout en bout P2PE est une combinaison de dispositifs de sécurité,\
                 d’applications et de processus permettant de chiffrer les données du point d’interaction (ou d’acceptation\
                 de la transaction) jusqu'au tiers fournissant le service et l’environnement de déchiffrement. \
                </div>"
            ,
            "links":["https://www.pcisecuritystandards.org/documents/P2PE_Hardware_Solution_%20Requirements_Initial_Release.pdf",
                "http://pcifrance.blogspot.fr/2012/09/comprendre-le-chiffrement-bout-en-bout.html"],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "imgs": ["./img/metier/P2PE_V3-02.png",	"./img/metier/P2PE_V4-01.png","./img/metier/P2PE-May-13-2014.jpg"
            ]
        },

        {
            "tags" :["TPE","Monétique"],
            "title": "TLC",
            "meaning": "TéLéCollecte",
            "content":
                "<div class=''>\
                La Télécollecte désigne une procédure de réception des messages des équipements,\
                les stocke puis il contrôle\
                la validité des messages reçus (unicité, format, …). \
                Il aiguille l'ensemble des informations<br>\
                C'est le mécanisme d’envoi des transactions enregistrées dans la mémoire d’un système d’acceptation\
                à un système acquéreur. C’est ainsi qu’un Terminal de Paiement Electronique (TPE) par exemple, envoie à la banque Acquéreur \
                les transactions stockées en mémoire qui ont été réalisées durant la journée.\
                </div>"
            ,
            "links":["https://monetiques.wordpress.com/2014/08/23/la-telecollecte/",
                "http://igm.univ-mlv.fr/~dr/XPOSE2008/cvantet/monetique_transaction_bancaire_telecollecte.html"
            ],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "imgs": ["./img/metier/telecollecte.png"]
        },
        {
            "tags" :["General","Sécurité"],
            "title": "HMAC",
            "meaning": "Keyed-Hash Message Authentication ",
            "content":
                "<div class=''>\
                Code d'authentification de message hashé par clé. <br>Permet l'authentification de l’intégrité des messages échangés\
                </div>"
            ,
            "links":["http://fr.wikipedia.org/wiki/Keyed-Hash_Message_Authentication_Code",

            ],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
        },
        {
            "tags" :["Certification"],
            "title": "PCI",
            "meaning": "Payment Card Industry",
            "content":
                "<div class=''>\
                    PCI-PED (Pin Entry Device)<br>\
                    PCI-DSS (Data Security Standard )<br>\
                    PCI-PTS (PIN Transaction Security )\
                </div>"
            ,
            "links":["http://fr.wikipedia.org/wiki/Keyed-Hash_Message_Authentication_Code",

            ],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
        },
        {
            "tags" :["Monétique","Sécurité"],
            "title": "PAN",
            "meaning": "Primary Account Number",
            "content":
                "<div class=''>\
                <p>La carte bancaire se caractérise par un PAN (Primary Account Number)\
                de 16 ou 19 chiffres dont les 6 premiers appelés IIN (pour Issuer Identification Number autrefois BIN, Bank Identification Number) \
                permettent d'identifier l’établissement émetteur de la carte. Le dernier chiffre appelé la clef de Luhn est utilisé pour le contrôle\
                de la validité du PAN.</p>\
                </div>"
            ,
            "links":["http://en.wikipedia.org/wiki/Bank_card_number",

            ],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "imgs": ["./img/metier/PAN_decryption.JPG"]
        },
        {
            "tags" :["Monétique","Sécurité"],
            "title": "SRED",
            "meaning": "Secure Reading and Exchande of Data",
            "content":
                "<div class=''>\
                Le module SRED assure que les données du compte du titulaire de carte est protégée au point d'acceptation ,\
                ce qui aidera à répondre aux considérations de sécurité requises sur le processus plus large de point à point la sécurité .\
                SRED n'est pas en soi une réponse à comment déployer une enncrypoint point-à- point, mais c'est une première étape\
                importante couvrant le chiffrement au point d'entrée .\
                </div>"
            ,
            "links":["https://www.pcisecuritystandards.org/documents/pci_pts_faqs.pdf",

            ],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
        },
        {
            "tags" :["Monétique","Sécurité"],
            "title": "SSL",
            "meaning": "Secure Sockets Layer",
            "content":
                "<div class=''>\
                renommé TLS : Transport Layer Security \
                <br>Code d'authentification de message hashé par clé. \
                <br>Permet l'authentification et l’intégrité des messages échangés\
                </div>"
            ,
            "links":["http://fr.wikipedia.org/wiki/Transport_Layer_Security",

            ],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "imgs": ["./img/metier/SSL.png","./img/metier/SSL.jpg"]
        },

        {
            "tags" :["MPOS","Architecture"],
            "title": "TAPS",
            "meaning": "Terminal Application for Payment & Services",
            "content":
                "<div class=''>\
                Point dispose d’une architecture client léger – serveur fonctionnelle entre les terminaux de paiement et les serveurs Paybox.\
                Le client léger, qui n’est rien d’autre qu’un interpréteur de commandes sans « intelligence », porte le nom de TAPS tandis que\
                le serveur sur lequel sont déportées les actions intelligentes s’appelle SAPS.\
                En se basant sur son architecture TAPS-SAPS, Point souhaite donc transposer\
                son client léger sur téléphones	mobiles pour répond aux développeurs d’applications\
                bancaires sur mobile de ne pas se préoccuper de l’aspect monétique.\
                </div>"
            ,
            "links":["http://fr.wikipedia.org/wiki/Keyed-Hash_Message_Authentication_Code",

            ],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "imgs": ["./img/metier/TAPS-SAPS_MPOS.png"]
        },
        {
            "tags" :["Monétique","Sécurité","Certification"],
            "title": "EMV",
            "meaning": "Europay Mastercard Visa",
            "content":
                "<div class=''>\
                <p>Cette nouvelle technologie, dont la première version des spécifications est parue en 1996, tire profit de la puce intégrée à la carte.\
                En France, depuis fin 2006, l'ancien système national Cartes Bancaires (CB) utilise désormais les cartes au standard EMV et l'ensemble du parc des \
                terminaux de paiement électroniques (ou TPE) a été aménagé.<br>\
                Principales caractéristiques :\
                <ul>\
                <li>interopérabilité internationale (quel que soit l'émetteur de la carte et quel que soit le terminal de paiement)</li>\
                <li>vérification et chiffrement de la clé personnelle par la puce</li>\
                <li>gestion plus ouverte de plusieurs applications sur la carte : débit/crédit, points de fidélité, porte-monnaie électronique, Authentification forte</li>\
                </ul></p>\
                <p>	Le terme EMV désigne un ensemble ouvert et international de normes et spécifications qui ont été initialement conçus pour \
                fournir une infrastructure de paiement sécurisé et de faciliter l'interopérabilité et la compatibilité des cartes de paiement à puce et des dispositifs\
                accpetateur de cartes à puce. La norme EMV a été construite sur ​​des normes ISO/IEC . La norme EMV prend désormais en charge de multiples facteurs \
                de forme , y compris les cartes de plastique ( contact, sans contact, à double interface) , porte-clés , les cartes mémoire microSD , \
                autocollants adhésifs , et les appareils mobiles . La norme EMV facilite une plate-forme mature, stable pour les transactions de paiement avec et sans contact\
                (les transactions EMV sans contact diffèrent de l'implémentation actuelle aux États-Unis  de transactiona via bande magnétique sans contact ) .\
                Les applications EMV de paiement mobile pour les téléphones mobile seront compatibles avec l'infrastructure d'acceptation EMV sans contact utilisée pour les \
                cartes de paiement .\
                </p>				\
                <p>Le dispositif EMV niveau 1 désigne le matériel qui accepte la carte . \
                Ce dispositif pourrait être un terminal , un dispositif de lecture de carte à un guichet automatique , ou une solution sans surveillance .\
                <br>La certification EMV Level1 mesure la conformité des modules d'interface à l'ensemble des caractéristiques électriques, mécaniques et de protocole de communication définies par EMV\
                <br>La certification EMV Level2 mesure la conformité du logiciel d'application resident dans le terminal qui prend en charge la fonctionnalité spécifié EMV\
                , à la fois obligatoires et facultatives. Des informations sur ces agréments peuvent être consultés sur <a href='http://www.EMVCo.com'>http://www.EMVCo.com</a></p>\
                </div>"
            ,
            "links":["http://fr.wikipedia.org/wiki/Europay_Mastercard_Visa","http://blog.elementps.com/element_payment_solutions/emv/"

            ],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "imgs": ["./img/metier/EMV-Map.jpg","./img/metier/EMV-Diagram.jpg"]
        },
        {
            "tags" :["Monétique","Standard"],
            "title": "GIE",
            "meaning": "Groupement d'Intérêt Economique",
            "content":
                "<div class=''>\
                Le GIE des cartes bancaires est le Groupement d'intérêt économique des cartes bancaires\
                </div>"
            ,
            "links":["http://carte-bancaire.comprendrechoisir.com/comprendre/gie-carte-bancaire",

            ],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
        },
        {
            "tags" :["Monétique","Sécurité"],
            "title": "DUKPT",
            "meaning": "Derived Unique Key Per Transaction",
            "content":
                "<div class=''>\
                En cryptographie, Derived Unique Key Per Transaction (DUKPT) est un système de gestion de clés dans lequel, pour chaque transaction, une clé unique est utilisée qui est dérivée d'une clé fixe. Par conséquent, si une clé dérivée est compromise, les transactions futures et passées des données passées sont encore protégés puisque les touches suivantes ou précédentes ne peuvent être déterminées facilement. DUKPT est spécifié dans la norme ANSI X9.24 partie 1.\
                DUKPT permet que le traitement de cryptage soit déplacé à l'exterieurdes dispositifs qui maintiennent le secret partagé. Le cryptage est effectué avec une clé dérivée, qui ne est pas réutilisée après l'opération. DUKPT est utilisé pour chiffrer les transactions de commerce électronique. Même se il peut être utilisé pour protéger les informations entre les deux sociétés ou des banques, il est généralement utilisé pour crypter les informations PIN acquise par des dispositifs de point de vente (POS).\
                DUKPT n’ est pas elle-même une norme de cryptage; il s’ agit plutôt d'une technique de gestion de clé. Les caractéristiques du systeme DUKPT sont:\
                <ul><li>permettre aux deux parties emettrice et receptricesd’être d'accord sur la clé utilisée pour une transaction donnée</li>\
                <li>chaque transaction aura une clé distincte de toutes les autres opérations, sauf par hasard</li>\
                <li>si une clé dérivée présente est compromise, les cles passées et futures (et donc les données transactionnelles cryptées par elles eux) restent non compromises</li>\
                <li>chaque dispositif génère une séquence de clés différente</li>\
                <li>initiateurs et récepteurs de messages chiffrés n’ont pas à mettre en œuvre un protocole d’accord par clé interactif au préalable</li></ul>\
                </div>"
            ,
            "links":["http://en.wikipedia.org/wiki/Derived_unique_key_per_transaction","http://www.futurex.com/blog/?p=1014"

            ],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "imgs": ["./img/metier/DUPKT-infographic.jpg","./img/metier/DUPKT-Transaction_Flow.jpg"]
        },


        {
            "tags" :["Monétique","Sécurité"],
            "title": "TPE",
            "meaning": "Terminal de Paiement Electronique",
            "content":
                "<div class=''>\
                Un terminal de paiement électronique (aussi appelé TPE en France et TPV ou terminal au point de vente au Québec) est un appareil électronique capable\
                de lire les données d'une carte bancaire, d'enregistrer une transaction, et de communiquer avec un serveur d'authentification à distance.\
                </div>"
            ,
            "links":["http://fr.wikipedia.org/wiki/Keyed-Hash_Message_Authentication_Code",

            ],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "imgs": ["./img/terminaux/default.jpg","./img/terminaux/VX520_1_lg.jpg","./img/terminaux/VX520_2_lg.jpg"]
        },
        {
            "tags" :["Monétique","General"],
            "title": "VAD",
            "meaning": "Vente A Distance",
            "content":
                "<div class=''>\
                La vente à distance (VAD) est une technique de vente qui permet au consommateur, en dehors des lieux habituels de réception de la clientèle,\
                de commander un produit ou de demander la réalisation d'un service.\
                </div>"
            ,
            "links":["http://fr.wikipedia.org/wiki/Vente_%C3%A0_distance",

            ],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
        },
        {
            "tags" :["Monétique","General"],
            "title": "DAB_GAB",
            "meaning": "Distributeur Automatique de Billet / Guichet Automatique Bancaire",
            "content":
                "<div class=''>\
                Un guichet automatique bancaire (GAB en France) ou distributeur automatique de billets (DAB) ou guichet automatique au Québec, \
                ou encore bancomat en Suisse et en Italie ainsi que distribanque1, est un appareil électronique et électromécanique permettant\
                aux clients d'effectuer différentes transactions bancaires en libre-service. Différents modèles de GAB permettent de faire des retraits,\
                acceptent des dépôts en liquide ou par chèque, ordonnent des transferts de fonds, impriment des mises à jour de carnets, augmentent\
                le montant d'une carte d'appel téléphonique et même, vendent des timbres-poste. En Suisse, en Espagne, au Portugal (réseau « Multibanco »)\
                et au Canada, il est aussi possible de régler certaines factures via un GAB. L'homologue en anglais américain est Automated Teller Machine \
                (ATM), en anglais canadien Automated banking machine (ABM).\
                </div>"
            ,
            "links":["http://fr.wikipedia.org/wiki/Keyed-Hash_Message_Authentication_Code",

            ],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "imgs": ["./img/metier/ATM.jpg","./img/metier/DAB.jpg"]
        },
        {
            "tags" :["Monétique","General"],
            "title": "Porteur / Emetteur / Accepteur / Acquéreur",
            "content":
                "Les 4 intervenants lors d'une transaction monétique (Cardholder / Issuer / Attendant / Acquirer )\
                <div class=''>\
                    <ul>\
                    <li><img src='./img/metier/porteur.png' width='35' height='35'>&nbsp;<strong>Le porteur</strong> est une personne physique qui porte la carte de paiement. Dans une transaction bancaire, il s'agit du client.</li>\
                    <li><img src='./img/metier/emetteur.png' width='35' height='35'>&nbsp;<strong>L'émetteur</strong> est un organisme financier ou assimilé qui émet la carte de paiement. Dans une transaction bancaire, l'émetteur est la banque du client.</li>\
                    <li><img src='./img/metier/accepteur.png' width='35' height='35'>&nbsp;<strong>L'accepteur</strong> est une personne physique ou morale qui accepte le moyen de paiement grâce à un système accepteur. Dans une transaction bancaire, l'accepteur est assimilé au commerçant équipé d'un terminal de paiement électronique (TPE).</li>\
                    <li><img src='./img/metier/acquereur.png' width='35' height='35'>&nbsp;<strong>L'acquéreur</strong> est l'organisme financier ou assimilé qui va acquérir les données de la transaction. Dans une transaction bancaire, il s'agit de la banque du commerçant.</li>\
                    </ul>\
                    exemple : \
                    Personne (particulier) / banque du porteur (CA) / commerçant( ex CELIO) / banque du commerçant (ex C.Mutuel)\
                </div>"
            ,
            "links":["http://igm.univ-mlv.fr/~dr/XPOSE2008/cvantet/monetique_transaction_bancaire_acteurs.html",

            ],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)]
        },
        {
            "tags" :["Monétique","General"],
            "title": "Transaction",
            "content":
                "Processus d'une transaction bancaire \
                <div class=''>\
                <p>Une transaction bancaire met en jeux les acteurs suivants :</p>\
                    <ul><li>Un émetteur, ici, la banque du client</li>\
                    <li>Un porteur de carte, le client</li>\
                    <li>Un accepteur du moyen de paiment, le commerçant</li>\
                    <li>Un acquéreur de données de transaction, la banque émettrice</li></ul>\
                    <p>Exemple de transactions de vente de proximité en France.</p>\
                    <h3>Processus</h3>\
                    <p>Une transaction bancaire est définie par les étapes suivantes :</p>\
                        <ol>\
                    <li>Le client créé un compte bancaire chez SaBanque, SaBanque envoie la carte de paiement associée au compte avec le code pin.</li>\
                    <li>Le client va chez le commerçant choisit un article et le paye. C’est la <a href='./monetique_transaction_bancaire_transaction.html'>transaction</a>. Parfois il peut y avoir des demandes d’autorisaton pour vérifier la solvabilité du compte et si la carte est valide.</li>\
                    <li>Après la transaction, le commerçant possède un TPE, le lecteur de carte qui va transmettre les données de plusieurs transactions. C’est la <a href='./monetique_transaction_bancaire_telecollecte.html'>télécollecte.</a></li>\
                    <li>Enfin, une fois la télécollecte effectuée. Les deux banques communiques entre elles pour effectuer la <a href='./monetique_transaction_bancaire_telecompensation.html'>télécompensation</a>. C’est-à-dire qu’un compte va être débité et l’autre crédité.</li>\
                      </ol>\
                </div>"
            ,
            "links":["http://igm.univ-mlv.fr/~dr/XPOSE2008/cvantet/monetique_transaction_bancaire_processus.html",

            ],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "imgs": ["./img/metier/monetique_global.png"]
        },
        {
            "tags" :["Monétique","General"],
            "title": "IPN",
            "meaning": "Instant Payment Notification",
            "content":
                "<div class=''>\
                    Les Notification Instantanée de Paiement ( IPN ) sont une méthode pour les détaillants en ligne pour suivre automatiquement les achats et\
                    autres communications de serveur à serveur en temps réel . Cela permet aux systèmes E-commerce la possibilité de stocker les opérations \
                    de paiement , ventes à l'interne . Les messages IPN peuvent représenter succès ou échecs paiement, les changements d'état sur ordres de transaction,\
                    des informations comptables et bien d'autres choses en fonction de la passerelle de paiement .	\
                </div>"
            ,
            "links":["http://en.wikipedia.org/wiki/Instant_payment_notification","http://www1.paybox.com/espace-integrateur-documentation/la-solution-paybox-system/gestion-de-la-reponse/"

            ],
            "imgs": ["./img/metier/ipnoverview.gif"],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)]
        },
        {
            "tags" :["Monétique","General"],
            "title": "TNA",
            "meaning": "Transaction Non Aboutie",
            "content":
                "<div class=''>\
                Code d'authentification de message hashé par clé. <br>Permet l'authentification de l’intégrité des messages échangés\
                </div>"
            ,
            "links":["http://www.allo-tpe.fr/wp-content/uploads/2012/10/CBEMV-B13_GUIDE-UTILISATION.pdf",
            ],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
        },
        {
            "tags" :["Monétique","Sécurité"],
            "title": "TVR",
            "meaning": "Terminal Verification Result",
            "content":
                " \<div class=''>\
                Résultats de la vérification Terminal (TVR) est un objet de données EMV. La TVR est une série de bits fixés par le terminal de lecture\
                d'une carte EMV, basée sur des tests logiques (par exemple, la carte a expiré). Cet objet de données est utilisé dans la décision du terminal\
                d'accepter, de refuser ou se connecter pour une transaction de paiement. Le format de la TVR est la suivante\
                </div>"
            ,
            "links":["http://en.wikipedia.org/wiki/Terminal_verification_results","#EMV"

            ],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],

        },
        {
            "tags":["MPOS"],
            "title": "POS / MPOS",
            "meaning": "Point Of Sale / Mobile Point Of Sale",
            "content":
                "<div class=''>\
                    MPOS designe la solution de point de vente mobile de Verifone/Paybox\
                </div>"
            ,
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "links": ["http://www.w-ha.com/fr/solutions-mpos/"],
            "imgs": ["./img/metier/TAPS-SAPS_MPOS.png"]
        },
        {
            "tags":["EMV"],
            "title": "TAC",
            "meaning": "Terminal Action Code(s) (Default, Denial, Online)",
            "content":
                "<div class=''>\
                    Terminal action codes (TAC)s are EMV data objects. EMV terminals store three terminal action codes:\
                    Denial\
                    Online\
                    Default\
                    Each TAC contains a series of bits, set by the Acquirer, which correspond to the bits in the Terminal verification results (TVR). This data object is used in the terminal's decision whether to accept, decline or go on-line for a payment transaction. TACs are a means for the card acquirer to decide under what circumstances a card should be rejected. In practice card schemes advise the TAC settings that should be used for a particular terminal type depending on its capabilities.\
                </div>"
            ,
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "links": ["http://en.wikipedia.org/wiki/Terminal_action_codes"],
        },
        {
            "tags":["EMV"],
            "title": "CDOL",
            "meaning": "Card Risk Management Data Object List",
            "content":
                "<div class=''>\
                A CDOL is a list of data that the card requires during Card Action Analysis, and there are 2 different CDOL that may be required during the course of a transaction. CDOL1 is used during the first card action analysis, and if a second card action analysis is required then CDOL2 is used.\
                The terminal uses the DOL processing rules to format the requested data and then sends it to the card in the Generate Application Cryptogram requests.\
                </div>"

            ,
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "links": ["https://www.level2kernel.com/emv-glossary.html#Card Risk Management Data Object List"],
        },
        {
            "tags":["EMV"],
            "title": "TDOL",
            "meaning": "Transaction Certificate Data Object List",
            "content":
                "<div class=''>\
                    The TDOL is a list of data that the terminal must use as the input when it needs to calculate a transaction cryptogram hash, and the terminal may also store a default TDOL that can be used if the TDOL is not present in the data from the card. The terminal uses the DOL processing rules to format the requested data, but this is only required if the transaction cryptogram hash is required by either of the CDOL.\
                </div>"
            ,
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "links": ["https://www.level2kernel.com/emv-glossary.html#Transaction Certificate Data Object List"],
        },
        {
            "tags":["EMV"],
            "title": "AIP",
            "meaning": "Application Interchange Profile",
            "content":
                "<div class=''>\
                    The TDOL is a list of data that the terminal must use as the input when it needs to calculate a transaction cryptogram hash, and the terminal may also store a default TDOL that can be used if the TDOL is not present in the data from the card. The terminal uses the DOL processing rules to format the requested data, but this is only required if the transaction cryptogram hash is required by either of the CDOL.\
                </div>"
            ,
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "links": ["https://www.level2kernel.com/emv-glossary.html#Application Interchange Profile"],
        },
        {
            "tags":["MPOS"],
            "title": "AUC",
            "meaning": "Application Usage Control",
            "content":
                "<div class=''>\
                    The Application Usage Control specifies any restrictions that may apply to the card that prevent the card from being used for certain types of transaction (e.g. cash-back) domestically or internationally, or at certain types of terminals (e.g. ATMs). The terminal will apply these checks during Processing Restrictions.\
                </div>"
            ,
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "links": ["https://www.level2kernel.com/emv-glossary.html#Application Usage Control"],
        },

        {
            "tags" :["Monétique", "Protocole"],
            "title": "CB2A",
            "meaning": "Carte Bancaire Accepteur Aquereur ",
            "content":
                "<div class=''>\
                    CB2A est un protocole issu de la norme ISO 8583 traitant des échanges monétiques pour CB (systeme francais)\
                    <ul><li>Flux de gestion de réseau, Architecture ISO, Transactions, Services,Cinématique,Description des messages</li>\
                    <li>GR (Gestion de réseau)</li>\
                    <li>L’autorisation</li>\
                    <li>TLC (La télécollecte)</li>\
                    <li>TLP (Le téléparamétrage)</li></ul>\
                </div>"
            ,
            "links":["http://en.wikipedia.org/wiki/ISO_8583",
                "http://www.google.com/patents/EP2407920A1?cl=fr"
            ],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "imgs": ["./img/terminaux/default.jpg"]
        }
    ];


    // Fonction pour deployer tous les panels
    $scope.openAllPanels = function() {
        $scope.oneAtATime = false;
        angular.forEach( $scope.data.definitions,function(obj,index){
            obj.open=true;
        })
    };
    // Fonction pour reduire tous les panels
    $scope.closeAllPanels = function() {
        angular.forEach( $scope.data.definitions,function(obj,index){
            obj.open=false;
        })
    }

});

myApp.controller('MPOSController', function($scope, $routeParams) {
    $scope.name = "MPOSController";
    $scope.params = $routeParams;
    $scope.data = {};
    $scope.title =  "Description du Paiement mobile MPOS";
    $scope.data.imgs = [
        {
            "name" :   "MMS",
            "path" :   "./img/service-icon/man337.png"
        },
        {
            "name" :   "MPOS",
            "path" :   "./img/service-icon/hand103.png"
        },
        {
            "name" :   "Terminal",
            "path" :   "./img/service-icon/terminal8.png"
        },
        {
            "name" :   "BO (BackOffice)",
            "path" :   "./img/service-icon/servers1.png"
        },
        {
            "name" :   "Retail",
            "path" :   "./img/service-icon/shopping159.png"
        },
        {
            "name" :   "eCommmerce",
            "path" :   "./img/service-icon/businessman120.png"
        },
        {
            "name" :   "CP",
            "path" :   "./img/service-icon/credit31.png"
        }
    ]

});

myApp.controller('DongleController', function($scope, $routeParams) {
    $scope.name = "DongleController";
    $scope.params = $routeParams;
    $scope.data = {};
    $scope.title =  "Description des Dongles";
    $scope.data.hw = [
        {
            "name" :   "GMX",
            "path" :   "./img/dongle/GMX.png"
        },
        {
            "name" :   "Thyron",
            "path" :   "./img/dongle/Thyron.png"
        },
        {
            "name" :   "toto",
            "path" :   "./img/dongle/toto.png"
        }
    ]

});
//TODO(gdu): this controller needs to be updated
myApp.controller('DevelController', function($scope, $routeParams) {
    $scope.name = "DevelController";
    $scope.params = $routeParams;
    $scope.data = {};
    $scope.title =  "Description des Developpemts sur Mobiles";
    $scope.data.hw = [
        {
            "name" :   "Android",
            "path" :   "./img/devel/android.png"
        },
        {
            "name" :   "iOS",
            "path" :   "./img/devel/iOS.png"
        },
        {
            "name" :   "WindowsPhone",
            "path" :   "./img/devel/WindowsPhone.png"
        }
    ];

    $scope.data.imgs = [
        {
            "name" :   "MMS",
            "path" :   "./img/service-icon/man337.png"
        },
        {
            "name" :   "MPOS",
            "path" :   "./img/service-icon/hand103.png"
        },
        {
            "name" :   "Terminal",
            "path" :   "./img/service-icon/terminal8.png"
        },
        {
            "name" :   "BO (BackOffice)",
            "path" :   "./img/service-icon/servers1.png"
        },
        {
            "name" :   "Retail",
            "path" :   "./img/service-icon/shopping159.png"
        },
        {
            "name" :   "eCommmerce",
            "path" :   "./img/service-icon/businessman120.png"
        },
        {
            "name" :   "CP",
            "path" :   "./img/service-icon/credit31.png"
        }
    ];
    $scope.data.imgs.main = "./img/devel/android.png";

});

myApp.controller('HeaderController', function ($scope,$location,$routeParams) {
    $scope.name = "HeaderController";
    $scope.params = $routeParams;
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});

myApp.controller('SlidesController', function ($scope,$location,$routeParams) {
    $scope.name = "SlidesController";
    $scope.params = $routeParams;
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});

myApp.controller('FooterController', function ($scope,$location,$routeParams) {
    $scope.name = "FooterController";
    $scope.params = $routeParams;
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});


myApp.controller('MainController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
})

    .controller('BookController', function($scope, $routeParams) {
        $scope.name = "BookController";
        $scope.params = $routeParams;
    })

    .controller('ChapterController', function($scope, $routeParams) {
        $scope.name = "ChapterController";
        $scope.params = $routeParams;
    })
    .controller('TotoController', function($scope, $routeParams) {
        $scope.name = "TotoController";
        $scope.params = $routeParams;
    })

    .controller('PresentationController', function($scope, $routeParams) {
        $scope.name = "PresentationController";
        $scope.params = $routeParams;
    })

    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/Book/:bookId', {
                templateUrl: 'html/views/book.html',
                controller: 'BookController'/*,
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        return delay.promise;
                    }
                }*/
            })
            .when('/Book/:bookId/ch/:chapterId', {
                templateUrl: 'html/views/chapter.html',
                controller: 'ChapterController'
            })
            .when('/home', {
                templateUrl: 'html/views/home.html',
                controller: 'PresentationController'
            })
            .when('/MPOS', {
                templateUrl: 'html/views/MPOS.html',
                controller: 'MPOSController'
            })
            .when('/Dongle/:myDongle', {
                templateUrl: 'html/views/Dongle.html',
                controller: 'DongleController'
            })
            .when('/Devel/:myDevel', {
                templateUrl: 'html/views/Devel.html',
                controller: 'DevelController'
            })
            .when('/definitions/:myDef', {
                templateUrl: 'html/views/definitions.html',
                controller: 'DefinitionsCtrl'
            });
        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    });

