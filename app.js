

let allCheckbox = document.querySelectorAll('input[type="checkbox"]');
allCheckbox.forEach((data) => {

    
    data.addEventListener('change' , function() {
        let checked = document.querySelectorAll('input[type="checkbox"]:checked');

        
         
        let allData = [];
        checked.forEach((check) => {
            allData.push(check.value);
        })

        let localData = '';
        allData.map((dd) => {
            localData += ` <p class="alert alert-secondary">${dd}</p>`
        })

        document.querySelector('.output').innerHTML = localData;
    })
    

})