// Prompt the user to enter their full name.Generate a username for them based on the input.
// Start username with @, followed by their fullname and ending with the fullname length.
// eg:- username = "DipakSirsath", username should be "@dipaksirsath312"

let fullName = prompt("Enter The Fullname:-");
user = "@" + fullName + fullName.length;
console.log(user);