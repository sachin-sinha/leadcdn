
  // Array of form IDs to target
  const formIdsToTarget = ['form1', 'form2', 'form3'];
  
  // Function to collect form data and create objects
  function collectFormData(event) {
    event.preventDefault(); // Prevent form submission
    
    const formData = new FormData(event.target);
    const formObject = {};
    
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    fetch('undefined', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-bang-api-key': 'undefined'
      },
      body: JSON.stringify(formObject)
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
    console.log('Form data collected:', formObject);
  }
  
  // Attach onSubmit listeners to forms with specified IDs
  document.addEventListener('DOMContentLoaded', () => {
    formIdsToTarget.forEach(formId => {
      const form = document.getElementById(formId);
      if (form) {
        form.addEventListener('submit', collectFormData);
      }
    });
  });
  