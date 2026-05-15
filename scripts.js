/* GOOGLE FORMS CONFIG */

const GOOGLE_FORM_ACTION =
"https://docs.google.com/forms/u/0/d/e/1FAIpQLSeSBO8Z2Z73xObEO4YjRkMrFKuzYp_MCqI0DdJXUbJOuONewQ/formResponse";

const fields = {

    name: "entry.1153782677",
    contact: "entry.1373560345",
    role: "entry.2088078867"

};

/*  SUBMIT */

const form = document.getElementById("customForm");

form.addEventListener("submit", async (e)=>{

    e.preventDefault();

    const formData = new FormData();

    const selectedRole =
        document.querySelector('input[name="role"]:checked');

    formData.append(
        fields.name,
        document.getElementById("name").value
    );

    formData.append(
        fields.contact,
        document.getElementById("contact").value
    );

    formData.append(
        fields.role,
        selectedRole ? selectedRole.value : ""
    );

    try{

        await fetch(GOOGLE_FORM_ACTION,{
            method:"POST",
            mode:"no-cors",
            body:formData
        });

        /* SUCCESS SCREEN */

        document.getElementById("registerScreen").style.display = "none";

        document.getElementById("successScreen").style.display = "block";

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }catch(error){

        alert("Error al enviar");

    }

});
