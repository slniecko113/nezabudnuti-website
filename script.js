// Language translations object
const translations = {
    sk: {
        // Navigation
        nav: {
            about: "O platforme",
            committee: "Výkonný výbor",
            join: "Pridajte sa k nám",
            members: "Členovia",
            projects: "Projekty",
            contact: "Kontakt",
            support: "Podporte nás"
        },
        // Hero section
        hero: {
            title: "Spájame a ochraňujeme tých, ktorí robia rozdiel v teréne",
            subtitle: "Pomáhame tým, ktorí pomáhajú. Vytvárame platformu pre dôstojnú a dostupnú starostlivosť."
        },
        // About section
        about: {
            title: "Kto sme?",
            content: "Sme Platforma pomáhajúcich organizácií - nezabudnutí. Vznikli sme ako strešný priestor pre mimovládne organizácie, ktoré denne pomáhajú ľuďom v zdravotnej a sociálnej oblasti. Pracujeme na tom, aby systém starostlivosti na Slovensku nebol len o improvizácii a dobrej vôli – ale o dôstojnosti, dostupnosti a udržateľnosti."
        },
        // Vision section
        vision: {
            title: "Naša vízia",
            content: "Veríme v spoločnosť, kde pomoc nie je výnimkou, ale právom. Kde každý človek má prístup k starostlivosti – bez ohľadu na to, kde žije či koľko má rokov."
        },
        // Values section
        values: {
            title: "Naše hodnoty",
            list: [
                "Ľudskosť - nie ako slovo, ale ako každodenná prax.",
                "Odbornosť - rozhodnutia majú stáť na skúsenostiach z terénu a faktoch, nie na dojmoch.",
                "Dialóg - skutočné zmeny nevznikajú v tichu, ale v rozhovore.",
                "Partnerstvo - spájame neziskový, verejný aj súkromný sektor.",
                "Odvaha - hovoriť aj o tom, čo iní obchádzajú."
            ]
        },
        // Activity section
        activity: {
            title: "Naša činnosť",
            subtitle: "Spájame hlasy. Navrhujeme riešenia. Meníme systém.",
            content: "Spájame mimovládne organizácie. Vytvárame a navrhujeme riešenia. Presadzujeme systémové zmeny. Platforma pomáhajúcich organizácií – nezabudnutí., vznikla ako odpoveď na mlčanie tam, kde malo zaznieť silné slovo. Ako reakcia na osamelosť tam, kde mal byť dialóg. Ako snaha spojiť organizácie, ktorým záleží na dôstojnosti, prístupe k starostlivosti a spravodlivosti v systéme."
        },
        // What we do section
        whatWeDo: {
            title: "Čo robíme?",
            list: [
                "prepájame organizácie v sociálnej a zdravotnej oblasti",
                "prinášame odborné argumenty, ktoré formujú verejnú diskusiu",
                "formulujeme systémové návrhy a vstupujeme do legislatívnych procesov",
                "chránime priestor pre slobodnú, odbornú a hodnotovú činnosť mimovládnych organizácií"
            ]
        },
        // Achievements section
        achievements: {
            title: "Spolu sme už dokázali",
            items: [
                {
                    title: "Hospicová reforma",
                    subtitle: "Naštartovali a dotiahli sme systémovú zmenu vo financovaní hospicovej starostlivosti.",
                    content: "Dlhodobo sme upozorňovali na to, že výška úhrady za lôžkodňový výkon v hospicoch nepokrývala reálne náklady na starostlivosť - ani personálne, ani prevádzkové. Vďaka spoločnému úsiliu odborníkov, organizácií a ľudí z praxe sa podarilo otvoriť dialóg, ktorý viedol k navýšeniu tejto úhrady zo 100 na 230 eur za lôžkodeň."
                },
                {
                    title: "Spojili sme 40 organizácií voči zákonu o MVO",
                    content: "Pri kampani proti prijatiu návrhu zákona o mimovládnych neziskových organizáciách sme spojili približne 40 pomáhajúcich organizácií, ktoré sa rozhodli spoločne reagovať na tému, ktorá sa ich priamo dotýka."
                },
                {
                    title: "Aktívne sme vystúpili proti zavedeniu tzv. transakčnej dane pre MVO",
                    content: "Aj vďaka spoločnej intervencii a advokácii sa podarilo otvoriť verejnú diskusiu o dopadoch tohto opatrenia na služby, ktoré mnohí ľudia denne potrebujú."
                },
                {
                    title: "Zastali sme sa princípu 2 % z dane pre MVO",
                    content: "V roku 2024 sme sa podieľali na komunikácii a koordinácii úsilia o zachovanie mechanizmu asignácie 2% ako stabilného a spravodlivého zdroja podpory naprieč celým sektorom."
                }
            ]
        },
        // Join us section
        joinUs: {
            title: "Pomáhate? Nemusíte na to byť sami.",
            subtitle: "Ak ste občianske združenie, nezisková organizácia, komunitná iniciatíva, nadácia či odborná skupina, ktorá denne podáva pomocnú ruku, spoločne dokážeme viac.",
            content: "Platforma pomáhajúcich organizácií – nezabudnutí. vytvára priestor pre:",
            list: [
                "spoločné témy v kľúčových verejných a odborných diskusiách",
                "výmenu poznatkov, skúseností a dát",
                "spoločné advokačné kampane a legislatívne iniciatívy",
                "sieť participantov, ktorí pracujú pre zmeny, nie na rezignácii"
            ],
            joinForces: {
                title: "Spojme sily:",
                list: [
                    "aby naša práca mala väčší dosah",
                    "aby sa o potrebách ľudí, ktorým pomáhame, hovorilo nahlas",
                    "aby starostlivosť nebola len súkromná vec, ale spoločná priorita"
                ]
            }
        },
        // Why support us section
        whySupport: {
            title: "Prečo nás podporiť?",
            content: "Vaša podpora znamená, že pomoc na Slovensku nebude len reakciou na krízu, ale premysleným, funkčným systémom. Spolu s vami dokážeme navrhovať a presadzovať systémové mechanizmy, ktoré menia osudy a vytvárajú priestor nielen pre jednotlivcov, ale aj celých rodín a komunít k dostupnejšej zdravotnej a sociálnej starostlivosti a informovanosti.",
            tagline: "Pomáhame tým, ktorí pomáhajú."
        },
        // Footer
        footer: {
            newsletter: "Newsletter",
            newsletterText: "Prihláste sa na odber noviniek z oblasti zdravotnej a sociálnej starostlivosti.",
            emailPlaceholder: "Váš email",
            subscribe: "Prihlásiť sa",
            contact: "Kontakt",
            address: "Bratislava, Slovensko",
            operatorInfo: "Prevádzkovateľ a správca: Urbana, Račianska 1579/88B, 831 02 Bratislava-Nové Mesto",
            gdpr: "GDPR a cookies",
            copyright: "© 2025 nezabudnutí. Všetky práva vyhradené."
        },
        // Events
        events: {
            title: "Najbližšie udalosti",
            viewAll: "Zobraziť všetky udalosti",
            list: [
                {
                    date: "15. jún",
                    title: "Workshop: Komunikácia v paliatívnej starostlivosti"
                },
                {
                    date: "22. jún",
                    title: "Okrúhly stôl: Systémové zmeny v starostlivosti"
                },
                {
                    date: "30. jún",
                    title: "Konferencia: Budúcnosť paliatívnej starostlivosti"
                }
            ]
        },
        // Buttons
        buttons: {
            joinUs: "Pridajte sa k nám",
            learnMore: "Zistite viac",
            addOrganization: "Pridať organizáciu",
            viewAll: "Zobraziť všetky",
            readMore: "Čítať viac"
        },
        // Members section
        members: {
            title: "Naše členské organizácie",
            organizations: Array(6).fill(0).map((_, i) => ({
                name: `Organizácia ${i + 1}`,
                type: "Paliatívna starostlivosť"
            }))
        }
    },
    // English translations
    en: {
        // Navigation
        nav: {
            about: "About Platform",
            committee: "Executive Committee",
            join: "Join Us",
            members: "Members",
            projects: "Projects",
            contact: "Contact",
            support: "Support Us"
        },
        // Hero section
        hero: {
            title: "Connecting and protecting those who make a difference",
            subtitle: "We help those who help others. Creating a platform for dignified and accessible care."
        },
        // About section
        about: {
            title: "Who are we?",
            content: "We are the Platform of Helping Organizations - nezabudnutí (unforgotten). We emerged as an umbrella space for NGOs that help people in healthcare and social areas daily. We work to ensure that the care system in Slovakia is not just about improvisation and goodwill - but about dignity, accessibility, and sustainability."
        },
        // Vision section
        vision: {
            title: "Our vision",
            content: "We believe in a society where help is not an exception, but a right. Where every person has access to care - regardless of where they live or how old they are."
        },
        // Values section
        values: {
            title: "Our values",
            list: [
                "Humanity - not as a word, but as everyday practice.",
                "Expertise - decisions should be based on field experience and facts, not impressions.",
                "Dialogue - real changes don't emerge in silence, but in conversation.",
                "Partnership - we connect non-profit, public, and private sectors.",
                "Courage - to speak about what others avoid."
            ]
        },
        // Activity section
        activity: {
            title: "Our activities",
            subtitle: "Connecting voices. Proposing solutions. Changing the system.",
            content: "We connect NGOs. We create and propose solutions. We advocate for systemic changes. The Platform of Helping Organizations - nezabudnutí, emerged as a response to silence where a strong word should have been heard. As a reaction to loneliness where there should have been dialogue. As an effort to connect organizations that care about dignity, access to care, and justice in the system."
        },
        // What we do section
        whatWeDo: {
            title: "What we do?",
            list: [
                "connect organizations in social and healthcare areas",
                "bring expert arguments that shape public discussion",
                "formulate systemic proposals and enter legislative processes",
                "protect the space for free, professional, and value-based activities of NGOs"
            ]
        },
        // Achievements section
        achievements: {
            title: "Together we have already achieved",
            items: [
                {
                    title: "Hospice reform",
                    subtitle: "We initiated and completed a systemic change in hospice care financing.",
                    content: "We have long pointed out that the reimbursement rate for hospice care did not cover the real costs of care - neither personnel nor operational. Thanks to the joint efforts of experts, organizations, and practitioners, a dialogue was opened that led to an increase in this reimbursement from 100 to 230 euros per bed-day."
                },
                {
                    title: "We united 40 organizations against the NGO law",
                    content: "In the campaign against the adoption of the draft law on non-governmental non-profit organizations, we united approximately 40 helping organizations that decided to respond together to an issue that directly affects them."
                },
                {
                    title: "We actively opposed the introduction of the so-called transaction tax for NGOs",
                    content: "Thanks to joint intervention and advocacy, a public discussion on the impacts of this measure on services that many people need daily was opened."
                },
                {
                    title: "We stood up for the principle of the 2% tax assignation for NGOs",
                    content: "In 2024, we participated in communicating and coordinating efforts to preserve the 2% tax assignation mechanism as a stable and fair source of support across the sector."
                }
            ]
        },
        // Join us section
        joinUs: {
            title: "Are you helping? You don't have to do it alone.",
            subtitle: "If you are a civic association, non-profit organization, community initiative, foundation, or expert group that lends a helping hand daily, together we can do more.",
            content: "The Platform of Helping Organizations - nezabudnutí. creates space for:",
            list: [
                "common topics in key public and expert discussions",
                "exchange of knowledge, experience, and data",
                "joint advocacy campaigns and legislative initiatives",
                "a network of participants who work for change, not resignation"
            ],
            joinForces: {
                title: "Let's join forces:",
                list: [
                    "so that our work has a greater impact",
                    "so that the needs of the people we help are spoken about loudly",
                    "so that care is not just a private matter, but a common priority"
                ]
            }
        },
        // Why support us section
        whySupport: {
            title: "Why support us?",
            content: "Your support means that help in Slovakia will not just be a response to a crisis, but a thoughtful, functional system. Together with you, we can design and promote systemic mechanisms that change destinies and create space not only for individuals but also for entire families and communities for more accessible healthcare, social care, and information.",
            tagline: "We help those who help others."
        },
        // Footer
        footer: {
            newsletter: "Newsletter",
            newsletterText: "Subscribe to news from the healthcare and social care areas.",
            emailPlaceholder: "Your email",
            subscribe: "Subscribe",
            contact: "Contact",
            address: "Bratislava, Slovakia",
            operatorInfo: "Operator and administrator: Urbana, Račianska 1579/88B, 831 02 Bratislava-Nové Mesto",
            gdpr: "GDPR and cookies",
            copyright: "© 2025 nezabudnutí. All rights reserved."
        },
        // Events
        events: {
            title: "Upcoming events",
            viewAll: "View all events",
            list: [
                {
                    date: "June 15",
                    title: "Workshop: Communication in palliative care"
                },
                {
                    date: "June 22",
                    title: "Round table: Systemic changes in care"
                },
                {
                    date: "June 30",
                    title: "Conference: The future of palliative care"
                }
            ]
        },
        // Buttons
        buttons: {
            joinUs: "Join us",
            learnMore: "Learn more",
            addOrganization: "Add organization",
            viewAll: "View all",
            readMore: "Read more"
        },
        // Members section
        members: {
            title: "Our member organizations",
            organizations: Array(6).fill(0).map((_, i) => ({
                name: `Organization ${i + 1}`,
                type: "Palliative Care"
            }))
        }
    }
};

// Current language - defaults to Slovak
let currentLanguage = 'sk';

// Function to change language
function changeLanguage(language) {
    currentLanguage = language;
    
    // Update language toggle styling
    document.getElementById('lang-sk').classList.toggle('active', language === 'sk');
    document.getElementById('lang-en').classList.toggle('active', language === 'en');
    
    // Update all elements with data-key attribute
    const elementsWithKey = document.querySelectorAll('[data-key]');
    elementsWithKey.forEach(element => {
        const key = element.getAttribute('data-key');
        const keyParts = key.split('.');
        
        // Get the translation by traversing the object with the key parts
        let translation = translations[language];
        for (const part of keyParts) {
            if (translation && translation[part] !== undefined) {
                translation = translation[part];
            } else {
                translation = null;
                break;
            }
        }
        
        // Update element content if translation found
        if (translation !== null) {
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Render dynamic content
    renderMembers();
    renderEvents();
}

// Render member organization cards
function renderMembers() {
    const membersGrid = document.querySelector('.members-grid');
    const organizations = translations[currentLanguage].members.organizations;
    
    // Clear existing content
    membersGrid.innerHTML = '';
    
    // Create and add member cards
    organizations.forEach((org, index) => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        
        memberCard.innerHTML = `
            <div class="member-info">
                <div class="member-icon">${index + 1}</div>
                <div>
                    <div class="member-name">${org.name}</div>
                    <div class="member-type">${org.type}</div>
                </div>
            </div>
        `;
        
        membersGrid.appendChild(memberCard);
    });
}

// Render events
function renderEvents() {
    const eventsList = document.querySelector('.events-list');
    const events = translations[currentLanguage].events.list;
    const readMoreText = translations[currentLanguage].buttons.readMore;
    
    // Clear existing content
    eventsList.innerHTML = '';
    
    // Create and add event items
    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event-item';
        
        eventItem.innerHTML = `
            <div class="event-date">${event.date}</div>
            <div>
                <h5 class="event-title">${event.title}</h5>
                <a href="#" class="event-read-more">${readMoreText} →</a>
            </div>
        `;
        
        eventsList.appendChild(eventItem);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    changeLanguage(currentLanguage);
});
