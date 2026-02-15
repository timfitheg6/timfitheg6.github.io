
const data = ['Ghost of Yotei', 'Last of Us part 2', 'Pong Game', 'god of war', 'Escape From Duckov'];
document.addEventListener('DOMContentLoaded', () => {
  // 1. Define the data source (e.g., an array of strings)


  // 2. Get references to the input and list elements
  const searchInput = document.getElementById('searchInput');
  const popupList = document.getElementById('popupList');

  // 3. Add an event listener for user input
  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    popupList.innerHTML = ''; // Clear previous results

    if (query.length === 0) {
      popupList.classList.remove('show');
      return;
    }

    // 4. Filter the data based on the input query
    const filteredData = data.filter(item => item.toLowerCase().includes(query));

    // 5. Display the filtered results
    if (filteredData.length > 0) {
      filteredData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        // Optional: Add click handler for selection
        li.addEventListener('click', () => {
          searchInput.value = item;
          popupList.classList.remove('show');
        });
        popupList.appendChild(li);
      });
      popupList.classList.add('show');
    } else {
      popupList.classList.remove('show');
    }
  });

  // 6. Optional: Hide the list when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.search-container')) {
      popupList.classList.remove('show');
    }
  });
});

document.getElementById('searchInput').addEventListener('keypress', function(event) {
  // Check if the key pressed is the "Enter" key (key code 13, or 'Enter' as event.key)
  if (event.key === 'Enter' || event.keyCode === 13) {
    // Prevent the default form submission behavior (if it was inside a <form>)
    event.preventDefault();

    // Call the search function
    const searchTerm = searchInput.value;

    // Check if the search term is empty and alert the user if it is
    if (searchTerm.trim() === '') {
      alert('Please enter a search term.');
      return;
    }
    if (!data.includes(searchTerm)) {
      alert('sorry Please use a search keyword.');
      return;
    }
    // Define the destination page URL
    // We append the search term as a query parameter called 'q'
    var searchTerm2 = searchTerm.replace(/\s/g, '');
    const destinationURL = encodeURIComponent(searchTerm2) + '.html' ;

    // Redirect the user to the new page
    window.location.href = destinationURL;
  }
});

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
// Add an event listener for the form's submit event
searchForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior (which would refresh the page)
  event.preventDefault();

  // Get the value entered by the user
  const searchTerm = searchInput.value;

  // Check if the search term is empty and alert the user if it is
  if (searchTerm.trim() === '') {
    alert('Please enter a search term.');
    return;
  }
  if (!data.includes(searchTerm)) {
    alert('sorry Please use a search keyword.');
    return;
  }
  // Define the destination page URL
  // We append the search term as a query parameter called 'q'
  var searchTerm2 = searchTerm.replace(/\s/g, '');
  const destinationURL = encodeURIComponent(searchTerm2) + '.html' ;

  // Redirect the user to the new page
  window.location.href = destinationURL;
});

function toggleText() {
  var dots = document.getElementById("dots");
  //var moreText = document.getElementById("more");
  var btnText = document.getElementById("btn-prime");

  if (dots.style.display === "none") {
    dots.style.display = "flex";
    btnText.innerHTML = "Show less";
    //moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show more";
    //moreText.style.display = "inline";
  }
}
function reviewcomment() {
  window.alert("comment submitted")

}
