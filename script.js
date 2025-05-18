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

// Render events with expansion functionality
function renderEvents() {
    const eventsList = document.querySelector('.events-list');
    const events = translations[currentLanguage].events.list;
    const readMoreText = translations[currentLanguage].buttons.readMore;
    
    // Clear existing content
    eventsList.innerHTML = '';
    
    // Create and add event items
    events.forEach((event, index) => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event-item';
        
        const hasExpandedContent = event.expandedContent && event.expandedContent.trim();
        
        eventItem.innerHTML = `
            <div class="event-date">${event.date}</div>
            <div class="event-content">
                <h5 class="event-title">${event.title}</h5>
                <p class="event-description">${event.description}</p>
                ${hasExpandedContent ? `
                    <div class="event-expanded" id="event-expanded-${index}" style="display: none;">
                        <p>${event.expandedContent}</p>
                    </div>
                    <a href="#" class="event-read-more" onclick="toggleEventExpansion(${index}); return false;" id="event-toggle-${index}">
                        ${readMoreText} →
                    </a>
                ` : ''}
            </div>
        `;
        
        eventsList.appendChild(eventItem);
    });
}

// Toggle event expansion
function toggleEventExpansion(index) {
    const expandedDiv = document.getElementById(`event-expanded-${index}`);
    const toggleLink = document.getElementById(`event-toggle-${index}`);
    const readMoreText = translations[currentLanguage].buttons.readMore;
    
    if (expandedDiv.style.display === 'none') {
        expandedDiv.style.display = 'block';
        toggleLink.innerHTML = 'Skryť ▲';
    } else {
        expandedDiv.style.display = 'none';
        toggleLink.innerHTML = `${readMoreText} →`;
    }
}

// FAQ functionality
function toggleFAQ(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const arrow = document.querySelector(`.faq-item:nth-child(${index + 1}) .faq-arrow`);
    
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    } else {
        answer.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    }
}

// Button functionality
function openJoinForm() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfnGQHNQ-7xbyTXAksHqVwxeM3wGecepG8sLgzm5dW17zN3iQ/viewform?pli=1', '_blank');
}

function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

function showIBAN() {
    document.getElementById('iban-modal').style.display = 'block';
}

function closeModal(event) {
    const modal = document.getElementById('iban-modal');
    if (event && event.target !== modal && !modal.contains(event.target)) {
        return;
    }
    modal.style.display = 'none';
}

function copyIBAN() {
    const iban = 'SK5609000000005232852272';
    navigator.clipboard.writeText(iban).then(() => {
        alert('IBAN skopírovaný do schránky!');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = iban;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('IBAN skopírovaný do schránky!');
    });
}

function submitNewsletter(event) {
    event.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    const subject = 'Newsletter Subscription';
    const body = `Nový odberateľ newslettera: ${email}`;
    const mailtoLink = `mailto:info@platformanezabudnuti.sk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    document.getElementById('newsletter-email').value = '';
    alert('Ďakujeme za prihlásenie! Kontaktujeme vás čoskoro.');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    changeLanguage(currentLanguage);
    
    // Initialize FAQ answers as hidden
    const faqAnswers = document.querySelectorAll('.faq-answer');
    faqAnswers.forEach(answer => {
        answer.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('iban-modal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});