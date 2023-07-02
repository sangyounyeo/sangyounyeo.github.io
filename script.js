// Create the global navigation bar
let createNavBar = () => {
  let navbar = document.createElement('nav')
  navbar.id = 'navbar'

  let navSizing = document.createElement('section')
  navSizing.classList.add('navsizing')

  let logoLink = document.createElement('a')
  logoLink.href = '../index.html#logonavbar'

  let logoImg = document.createElement('img')
  logoImg.id = 'logonavbar'
  logoImg.src = '../img/logo.png'
  logoImg.alt = 'logo'

  logoLink.appendChild(logoImg)
  navSizing.appendChild(logoLink)

  let floatRight = document.createElement('section')
  floatRight.classList.add('floatright')

  let homeLink = document.createElement('a')
  homeLink.classList.add('material-symbols-outlined', 'home')
  homeLink.href = '../index.html#logonavbar'
  homeLink.textContent = 'Home'
  floatRight.appendChild(homeLink)

  // Create the "Tech" dropdown
  let techDropdown = document.createElement('div')
  techDropdown.classList.add('dropdown')

  let techLink = document.createElement('a')
  techLink.href = '#tech'
  techLink.classList.add('navlink')
  techLink.textContent = 'TECH'
  techDropdown.appendChild(techLink)

  let techDropdownContent = document.createElement('div')
  techDropdownContent.classList.add('dropdown-content')

  // Add individual links within the "Tech" dropdown
  let cssConceptsLink = document.createElement('a')
  cssConceptsLink.href = '../blog/html-css.html'
  cssConceptsLink.textContent = 'CSS Concepts - Position'
  techDropdownContent.appendChild(cssConceptsLink)

  let javascriptLink = document.createElement('a')
  javascriptLink.href = '../blog/javascript.html'
  javascriptLink.textContent = 'JavaScript Fundamentals'
  techDropdownContent.appendChild(javascriptLink)

  let problemSolvingLink = document.createElement('a')
  problemSolvingLink.href = '../blog/problem-solving.html'
  problemSolvingLink.textContent = 'Problem Solving'
  techDropdownContent.appendChild(problemSolvingLink)

  let teHoutaewaLink = document.createElement('a')
  teHoutaewaLink.href = '../blog/te-houtaewa-template.html'
  teHoutaewaLink.textContent = 'Te Houtaewa'
  techDropdownContent.appendChild(teHoutaewaLink)

  techDropdown.appendChild(techDropdownContent)
  floatRight.appendChild(techDropdown)

  // Create the "Core" dropdown
  let coreDropdown = document.createElement('div')
  coreDropdown.classList.add('dropdown')

  let coreLink = document.createElement('a')
  coreLink.href = '#core'
  coreLink.classList.add('navlink')
  coreLink.textContent = 'CORE'
  coreDropdown.appendChild(coreLink)

  let coreDropdownContent = document.createElement('div')
  coreDropdownContent.classList.add('dropdown-content')

  // Add individual links within the "Core" dropdown
  let identityValuesStrengthsLink = document.createElement('a')
  identityValuesStrengthsLink.href = '../blog/identity-values-strengths.html'
  identityValuesStrengthsLink.textContent = 'Identity, Values, and Strengths'
  coreDropdownContent.appendChild(identityValuesStrengthsLink)

  let learningPlanLink = document.createElement('a')
  learningPlanLink.href = '../blog/learning-plan.html'
  learningPlanLink.textContent = 'Learning Plan'
  coreDropdownContent.appendChild(learningPlanLink)

  let emotionalIntelligenceLink = document.createElement('a')
  emotionalIntelligenceLink.href = '../blog/emotional-intelligence.html'
  emotionalIntelligenceLink.textContent = 'Emotional Intelligence'
  coreDropdownContent.appendChild(emotionalIntelligenceLink)

  let neuroplasticityLink = document.createElement('a')
  neuroplasticityLink.href = '../blog/neuroplasticity.html'
  neuroplasticityLink.textContent = 'Neuroplasticity & Growth Mindset'
  coreDropdownContent.appendChild(neuroplasticityLink)

  let teWhareTapaWhaLink = document.createElement('a')
  teWhareTapaWhaLink.href = '../blog/te-whare-tapa-wha.html'
  teWhareTapaWhaLink.textContent = 'Te Whare Tapa Wha'
  coreDropdownContent.appendChild(teWhareTapaWhaLink)

  let foundationsReflectionLink = document.createElement('a')
  foundationsReflectionLink.href = '../blog/foundations-reflection.html'
  foundationsReflectionLink.textContent = 'Foundations Reflection'
  coreDropdownContent.appendChild(foundationsReflectionLink)

  coreDropdown.appendChild(coreDropdownContent)
  floatRight.appendChild(coreDropdown)

  let aboutMeLink = document.createElement('a')
  aboutMeLink.href = '../index.html#aboutmetitle'
  aboutMeLink.classList.add('navlink')
  aboutMeLink.textContent = 'ABOUT ME'
  floatRight.appendChild(aboutMeLink)

  let contactLink = document.createElement('a')
  contactLink.href = '#contact'
  contactLink.classList.add('navlinkcontact')
  contactLink.textContent = 'CONTACT'
  floatRight.appendChild(contactLink)

  navSizing.appendChild(floatRight)
  navbar.appendChild(navSizing)

  document.body.prepend(navbar)
}

// Create the global footer
let createFooter = () => {
  let footer = document.createElement('footer')

  let logoImg = document.createElement('img')
  logoImg.classList.add('footerlogo')
  logoImg.src = '../img/logo.png'
  logoImg.alt = 'logo'
  footer.appendChild(logoImg)

  let navLinks = document.createElement('p')
  let contactLink = document.createElement('a')
  contactLink.href = '#contact'
  contactLink.classList.add('navlinkcontact')
  contactLink.textContent = 'CONTACT'

  let aboutMeLink = document.createElement('a')
  aboutMeLink.href = '../index.html#aboutmetitle'
  aboutMeLink.classList.add('navlink')
  aboutMeLink.textContent = 'ABOUT ME'

  navLinks.appendChild(contactLink)
  navLinks.innerHTML += '|'
  navLinks.appendChild(aboutMeLink)
  footer.appendChild(navLinks)

  let footerText1 = document.createElement('p')
  footerText1.classList.add('footerfontsize')
  footerText1.textContent = '© 2023 Sang Youn Yeo'
  footer.appendChild(footerText1)

  let footerText2 = document.createElement('p')
  footerText2.classList.add('footerfontsize')
  footerText2.textContent = 'Created by Sang Youn Yeo'
  footer.appendChild(footerText2)

  document.body.appendChild(footer)
}

// Call the functions to create the navigation bar and footer
createNavBar()
createFooter()
