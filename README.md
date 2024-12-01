
  # Project Overview 📝  
  - This project is a responsive and interactive web form for fabric selection and order management, built as per the provided guidelines. The form dynamically collects user inputs, manages dependencies between fields, and stores the data in a JSON Server database.
 -  The project focuses on creating a user-friendly form with validations and dynamic dropdowns for managing fabrics and related order details. It adheres to the dependency rules outlined in the requirements and ensures all data is compiled into JSON format for submission.

# Features ✨ 
**1. Form Functionality:**

Dynamic and interactive form fields with dependency management.
Searchable dropdowns for fabric selection.
Validation rules for all fields, including Total Order Quantity, Fabric Name, and Per Piece Requirement.

**2. Dropdown Management:**

Selected dropdown options are grayed out or hidden to prevent re-selection.
Options can be removed or edited using a remove button.

**3. Fabric Management:**

Allows multiple fabric inputs with details like name, per-piece requirement, unit, processes, color, and stages to be skipped.
China fabrics can be selected only if indicated.

**4. Major Fabric Selection:**

Restricts selection to one major fabric from the list of previously selected fabrics or "None".

**5. Form Data Submission:**

 On submission, data is saved to a db.json file using JSON Server.

**6. Responsive Design:**

The form is optimized for various **screen sizes**.

**7. Deployment:**

Deployed on GitHub Pages for easy access.


  # Technologies Used  🚀 


- **Frontend:** HTML, CSS, JavaScript
- **Frameworks:** React.js
- **Backend:** JSON Server (for simulating a REST API)
- **Deployment:** Netlify, GitHub Pages.
- **Tools:** Visual Studio Code, Chrome DevTools, JSON Server, React DevTools.
<p>
<img align="left" src="https://user-images.githubusercontent.com/18380165/224741719-3887a83f-9041-49b5-b1d3-a4b636147582.png" width="120" height="100">
<img align="left" src="https://user-images.githubusercontent.com/18380165/224742317-8448ec1f-c35e-4fa3-99bf-5075da765c1a.png" width="100" height="100">
<img align="left" src="https://user-images.githubusercontent.com/18380165/224742804-66cd82b1-fedd-40a1-ad43-6cd2a7b91e46.png" width="100" height="100">
<br>
<img  src="https://user-images.githubusercontent.com/18380165/224329339-a5174b23-1a5c-4ae4-95c8-ead20a29d77e.png" width="100" height="100">
</p>


  # Setup and Installation 🔥  

  **1. Clone the repository:**

```
git clone https://github.com/naveenmaurya7705/Assignment  
```

**2.Install dependencies:**

```
npm install  
```

**3.Run the JSON Server:**


```json
npm start 
```

**4.Start the development server:**

```json
npm run dev  
  ```    
  ##   Usage ✨ 


**1.Form Features:**

- Input order details including Start Date, End Date, Production Per Day Per Machine, and Total Order Quantity.
- Add multiple fabrics with detailed specifications.
- Indicate whether China fabrics are present and select them if applicable.
- Select a major fabric from the list of previously chosen fabrics.

**2. Submission:**

- Submit the form to save data in the db.json file.
- Check the saved data by accessing the JSON Server endpoint (e.g., http://localhost:5000/formData).
 
 ## Data Structure ✨
Here’s an example of how the submitted form data is stored:

```json
{
  "id": "9751",
  "productionPerDay": "2",
  "totalOrderQuantity": "42",
  "fabrics": [
    {
      "fabricName": "SHIFILLI",
      "perPieceRequirement": "343",
      "unit": "M",
      "processes": ["DYING"],
      "colorAndQuantity": [
        {"color": "red", "quantity": "233"},
        {"color": "green", "quantity": "20"}
      ],
      "stagesToSkip": ["TOP"]
    }
  ],
  "majorFabric": "WISTERIA VOLIE",
  "chinaFabricPresent": true,
  "chinaFabrics": ["LACES"],
  "trims": [
    {"trim": "LABEL COPPER"},
    {"trim": "STICKER"}
  ],
  "accessories": ["WASHCARE LABEL"]
}
```
# Deployment  🔥
**1. Github Deployment:**

- The project is deployed on Github and accessible at:

https://naveenmaurya7705.github.io/Assignment/

**2 GitHub Repository:**
- The source code is available on GitHub:

https://github.com/naveenmaurya7705/Assignment

# License 📝  

- This project is licensed under the MIT License.

# Contact Me
  📫 How to reach me
 *   __Email__ **naveenmaurya7705@gmail.com**
  *  __Phone__   **9326171041**

   <p align="left">
<a href="https://twitter.com/naveenm51561512" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="naveenm51561512" height="30" width="40" /></a>
<a href="https://linkedin.com/in/naveenmaurya7705" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="naveenmaurya7705" height="30" width="40" /></a>
<a href="https://fb.com/naveen.maurya.90475" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="naveen.maurya.90475" height="30" width="40" /></a>
<a href="https://instagram.com/naveenmaurya7705" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="naveenmaurya7705" height="30" width="40" /></a>
</p>

  