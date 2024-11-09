// Function to toggle between static resume view and dynamic form view

let isSubmitted = false;


function toggleForm() {
    const resumeContent = document.getElementById('resume-content');
    const updateForm = document.getElementById('update-form');
    const formToggleButton = document.getElementById('form-toggle-button');

    
    
    // Toggle visibility
    if (resumeContent.style.display === 'none') {
        // Show resume, hide form
        resumeContent.style.display = 'block';
        updateForm.style.display = 'none';

        formToggleButton.innerText = isSubmitted ? 'Update Info' : 'Resume Builder';

    } else {
        
        // Hide resume, show form
        resumeContent.style.display = 'none';
        updateForm.style.display = 'block';

        if(!isSubmitted){
            document.getElementById('name').value = '';
            document.getElementById('address').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('email').value = '';
            document.getElementById('about').value = '';
            document.getElementById('degree').value = '';

        }
           formToggleButton.innerText = 'View Resume';
    }
}

//Download the Resume

function downloadResume() {
    const resumeContent = document.getElementById('resume-content');
    const buttons = document.querySelectorAll('button');  
    
    buttons.forEach(button => {
        button.style.display = 'none';
    });

    const name = document.getElementById('name-display').innerText || 'Resume';

    html2pdf()
        .set({
            margin: 1,
            filename: `${name.replace(/\s+/g, '_')}_Resume.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        })
        .from(resumeContent)
        .save()
        .finally(() => {
            buttons.forEach(button => {
                button.style.display = '';  
            });
        });
}






// Function to update personal information with form data
function submitPersonalInfo() {
    // Get values from input fields
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const about = document.getElementById('about').value;

        // Get values from education fields
    const degree = document.getElementById('degree').value;
    const university = document.getElementById('university').value;
    const degreeStart = document.getElementById('degree-start').value;
    const degreeEnd = document.getElementById('degree-end').value;
    const certification = document.getElementById('certification').value;
    const certSchool = document.getElementById('cert-school').value;
    const certStart = document.getElementById('cert-start').value;
    const certEnd = document.getElementById('cert-end').value;

         // Check if skills input exists and log result
         const skillsInput = document.getElementById('skillsInput');
         console.log("Skills input:", skillsInput); 
         const skills = skillsInput ? skillsInput.value.split(',') : []; 
 

        // Get values from work Experience fields
    const jobTitle = document.getElementById('job-title').value;
    const companyName = document.getElementById('company-name').value;
    const workStartDate = document.getElementById('work-start-date').value;
    const workEndDate = document.getElementById('work-end-date').value;





    // Update the display fields in the static resume
    document.getElementById('name-display').innerText = name;
    document.getElementById('address-display').innerText = address;
    document.getElementById('phone-display').innerText = phone;
    document.getElementById('email-display').innerText = email;
    document.getElementById('about-display').innerText = about;


 // Update education display fields
 document.getElementById('degree-display').innerText = degree;
 document.getElementById('university-display').innerText = university;
 document.getElementById('degree-start-display').innerText = degreeStart;
 document.getElementById('degree-end-display').innerText = degreeEnd;
 document.getElementById('certification-display').innerText = certification;
 document.getElementById('cert-school-display').innerText = certSchool;
 document.getElementById('cert-start-display').innerText = certStart;
 document.getElementById('cert-end-display').innerText = certEnd;


  // Update skills display
  const skillsDisplay = document.getElementById('skills-display');
  skillsDisplay.innerHTML = ''; // Clear existing skills
  skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill.trim(); // Trim any extra whitespace
      skillsDisplay.appendChild(li);
  });

  //Udate Work Experience fields

      // Update the display in the work experience section
      document.getElementById("jobTitle-display").innerText = jobTitle;   //jobTitle-display
      document.getElementById("company-display").innerText = companyName; //company-display
      document.getElementById("workStartDate-display").innerText = workStartDate; //workStartDate-display
      document.getElementById("workEndDate-display").innerText = workEndDate; //workEndDate-display
  









    // Handle profile image update
    const profileImageInput = document.getElementById('profile-image');
    const profileImageDisplay = document.querySelector(".personal-info img");

    
    if (profileImageInput.files && profileImageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImageDisplay.src = e.target.result;
        };
        reader.readAsDataURL(profileImageInput.files[0]);
    }

    isSubmitted = true;

    


    // Show the download button
    document.getElementById('download-button').style.display = 'block';


    toggleForm();
}
