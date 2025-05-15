const style = document.createElement('style');
style.textContent = `

/* Paste your raw CSS theme here */
body {
  background-color: #000080 !important;
  color: #e0e0e0 !important;
}

/* Example: make conversation text bright */
.markdown.prose {
  color: #ffffff !important;
}

h3, strong, .justify-start { color: white;}

.justify-start, .items-center { 
    /* display: none; */
}

`;
document.head.appendChild(style);
