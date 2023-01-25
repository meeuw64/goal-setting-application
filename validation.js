/*
comment about gender, 'male' is a default option, obviously user can change it
therefore we do not need to check if gender was selected
*/
const form = document.getElementById('form');
const userid = document.getElementById('userid');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
const zip = document.getElementById('zip');
const country = document.getElementById('country');
const about = document.getElementById('about');


form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

/*
we check if the word is in dictionary or is a name
such word should not have numbers, symbols or capital letters (only the first character can be a capital letter)
*/
function checkIfWord(word){
    /*
    check if the word has a number
    */
    if(word.search(/[0-9]/) != -1){
        return false;
    }
    /*
    check if the word has a capital letter that is not the first character of the string
    */
    for (let i = 1; i < word.length; i++){
        if (word.search(/[A-Z]/) != -1){
            return false;
        }
    }
    /*
    check if the word has a symbol
    */
    if(word.search(/[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/) != -1){
        return false;
    }

    return true;
}

const validateInputs = () => {
    
    const useridvalue = userid.value.trim();
    const passwordvalue = password.value.trim();
    const fullnamevalue = fullname.value.trim();
    const countryvalue = country.value.trim();
    const zipvalue = zip.value.trim();
    const emailvalue = email.value.trim();
    const aboutvalue = about.value.trim();

    if(useridvalue === ''){
        setError(userid, 'User ID is required');
    }
    else if(useridvalue.length < 5 || useridvalue.length > 12){
        setError(userid, 'User ID must be of length 5 to 12');
    }
    else if(!/[A-Z]/.test(useridvalue.charAt(0))){
        setError(userid, 'User ID must start with a capital letter');
    }
    else if(!/[0-9]/.test(useridvalue.charAt(useridvalue.length-1)) && !/[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/.test(useridvalue.charAt(useridvalue.length-1))){
        setError(userid, 'User ID must end with a number or a special character');
    }
    else{
        setSuccess(userid, '');
    }

    if(passwordvalue === ''){
        setError(password, 'Password is required');
    }
    else if(passwordvalue.length < 12){
        setError(password, 'Password must be at least 12 characters long');
    }
    else if(passwordvalue.search(/[A-Z]/) == -1){
        setError(password, 'Password must have an uppercase letter');
    }
    else if(passwordvalue.search(/[a-z]/) == -1){
        setError(password, 'Password must have a lowercase letter');
    }
    else if(passwordvalue.search(/[0-9]/) == -1){
        setError(password, 'Password must have a number');
    }
    else if(passwordvalue.search(/[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/) == -1){
        setError(password, 'Password must have a symbol');
    }
    else if(checkIfWord(passwordvalue)){//will never be true because password will always have a number in it at this point, so it's not a word or a name.
        setError(password, 'Password cannot be a word found in dictionary or a name of a person');
    }
    else if(passwordvalue.length < 14){
        setSuccess(password, 'Password of 14 or more characters is better');
    }
    else{
        setSuccess(password, '');
    }

    if(fullnamevalue == ''){
        setError(fullname, 'Name is required');
    }
    else if(!fullnamevalue.match(/^[A-Za-z]+$/)){
        setError(fullname, 'Name must contain the alphabet only');
    }
    else{
        setSuccess(fullname, '');
    }

    if(countryvalue == ''){
        setError(country, 'Country is required');
    }
    else{
        setSuccess(country, '');
    }

    if(zipvalue == ''){
        setError(zip, 'ZIP is required');
    }
    else if(zipvalue.length != 6){
        setError(zip, 'ZIP has a 6-digit structure');
    }
    /*
    checks if first 4 digits are numbers
    */
    else if(!/[0-9]/.test(zipvalue.charAt(0)) || !/[0-9]/.test(zipvalue.charAt(1)) || !/[0-9]/.test(zipvalue.charAt(2)) || !/[0-9]/.test(zipvalue.charAt(3))){
        setError(zip, 'ZIP consists of 4 numbers and 2 capital letters');
    }
    /*
    checks if last two digits are capital letters
    */
    else if(!/[A-Z]/.test(zipvalue.charAt(4)) || !/[A-Z]/.test(zipvalue.charAt(5))){
        setError(zip, 'ZIP consists of 4 numbers and 2 capital letters');
    }

    else{
        setSuccess(zip, '');
    }

    if(emailvalue == ''){
        setError(email, 'Email is required');
    }
    /*
    email is invalid if it does not have '@'
    */
    else if(emailvalue.search(/@/) == -1){
        setError(email, 'Email id must be valid');
    }
    else{
        setSuccess(email, '');
    }

/*
    // :(  why it does not work
    var lang = document.getElementById('lang');
    if(lang.options[lang.selectedIndex].value == 'Choose Here'){
        setError(lang, 'Language must be selected');
        alert("sus");
    }
    else{
        setSuccess(lang, '');
    }
 */   
if(email.parentElement.classList.contains('success') && userid.parentElement.classList.contains('success') &&
password.parentElement.classList.contains('success') && fullname.parentElement.classList.contains('success') &&
country.parentElement.classList.contains('success') && zip.parentElement.classList.contains('success')){
    alert('You have entered this information: \n' + useridvalue + '\n' + passwordvalue + '\n' + fullnamevalue + 
    '\n' + countryvalue + '\n' + zipvalue + '\n' + emailvalue + '\n' + aboutvalue + '\n');
}
    
};